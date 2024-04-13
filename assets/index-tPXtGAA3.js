(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vs="163",Sc=0,ks=1,Mc=2,wl=1,yc=2,hn=3,dn=0,yt=1,Kt=2,wn=0,Ei=1,Gs=2,zs=3,Vs=4,Ec=5,Wn=100,Tc=101,bc=102,Ac=103,wc=104,Rc=200,Cc=201,Uc=202,Pc=203,as=204,ss=205,Lc=206,Dc=207,Ic=208,Fc=209,Nc=210,Oc=211,Bc=212,kc=213,Gc=214,zc=0,Vc=1,Hc=2,Yr=3,Wc=4,Xc=5,Yc=6,qc=7,Rl=0,jc=1,Kc=2,Rn=0,Zc=1,Jc=2,Qc=3,$c=4,eu=5,tu=6,nu=7,Cl=300,Ai=301,wi=302,os=303,ls=304,ta=306,cs=1e3,Yn=1001,us=1002,Ct=1003,iu=1004,mr=1005,It=1006,xa=1007,qn=1008,Cn=1009,ru=1010,au=1011,Ul=1012,Pl=1013,Ri=1014,An=1015,qr=1016,Ll=1017,Dl=1018,ir=1020,su=35902,ou=1021,lu=1022,tn=1023,cu=1024,uu=1025,Ti=1026,er=1027,hu=1028,Il=1029,fu=1030,Fl=1031,Nl=1033,Sa=33776,Ma=33777,ya=33778,Ea=33779,Hs=35840,Ws=35841,Xs=35842,Ys=35843,Ol=36196,qs=37492,js=37496,Ks=37808,Zs=37809,Js=37810,Qs=37811,$s=37812,eo=37813,to=37814,no=37815,io=37816,ro=37817,ao=37818,so=37819,oo=37820,lo=37821,Ta=36492,co=36494,uo=36495,du=36283,ho=36284,fo=36285,po=36286,pu=3200,Bl=3201,mu=0,gu=1,bn="",jt="srgb",Ln="srgb-linear",xs="display-p3",na="display-p3-linear",jr="linear",tt="srgb",Kr="rec709",Zr="p3",ni=7680,mo=519,_u=512,vu=513,xu=514,kl=515,Su=516,Mu=517,yu=518,Eu=519,go=35044,_o="300 es",fn=2e3,Jr=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,hs=180/Math.PI;function rr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_t[a&255]+_t[a>>8&255]+_t[a>>16&255]+_t[a>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[r&255]+_t[r>>8&255]+_t[r>>16&255]+_t[r>>24&255]).toLowerCase()}function Rt(a,e,t){return Math.max(e,Math.min(t,a))}function Tu(a,e){return(a%e+e)%e}function Aa(a,e,t){return(1-t)*a+t*e}function Wi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function wt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,r,n,i,s,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c)}set(e,t,r,n,i,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],h=r[7],f=r[2],d=r[5],g=r[8],_=n[0],p=n[3],m=n[6],y=n[1],S=n[4],E=n[7],U=n[2],R=n[5],T=n[8];return i[0]=s*_+o*y+l*U,i[3]=s*p+o*S+l*R,i[6]=s*m+o*E+l*T,i[1]=c*_+u*y+h*U,i[4]=c*p+u*S+h*R,i[7]=c*m+u*E+h*T,i[2]=f*_+d*y+g*U,i[5]=f*p+d*S+g*R,i[8]=f*m+d*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*i*u+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*i,d=c*i-s*l,g=t*h+r*f+n*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(n*c-u*r)*_,e[2]=(o*r-n*s)*_,e[3]=f*_,e[4]=(u*t-n*l)*_,e[5]=(n*i-o*t)*_,e[6]=d*_,e[7]=(r*l-c*t)*_,e[8]=(s*t-r*i)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ye;function Gl(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function tr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function bu(){const a=tr("canvas");return a.style.display="block",a}const vo={};function Au(a){a in vo||(vo[a]=!0,console.warn(a))}const xo=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),So=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[Ln]:{transfer:jr,primaries:Kr,toReference:a=>a,fromReference:a=>a},[jt]:{transfer:tt,primaries:Kr,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[na]:{transfer:jr,primaries:Zr,toReference:a=>a.applyMatrix3(So),fromReference:a=>a.applyMatrix3(xo)},[xs]:{transfer:tt,primaries:Zr,toReference:a=>a.convertSRGBToLinear().applyMatrix3(So),fromReference:a=>a.applyMatrix3(xo).convertLinearToSRGB()}},wu=new Set([Ln,na]),$e={enabled:!0,_workingColorSpace:Ln,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!wu.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const r=gr[e].toReference,n=gr[t].fromReference;return n(r(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return gr[a].primaries},getTransfer:function(a){return a===bn?jr:gr[a].transfer}};function bi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ra(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ii;class Ru{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=tr("canvas")),ii.width=e.width,ii.height=e.height;const r=ii.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let s=0;s<i.length;s++)i[s]=bi(i[s]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(bi(t[r]/255)*255):t[r]=bi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cu=0;class zl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(Ca(n[s].image)):i.push(Ca(n[s]))}else i=Ca(n);r.url=i}return t||(e.images[this.uuid]=r),r}}function Ca(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ru.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;class xt extends Ui{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,r=Yn,n=Yn,i=It,s=qn,o=tn,l=Cn,c=xt.DEFAULT_ANISOTROPY,u=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=rr(),this.name="",this.source=new zl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=Cl;xt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,r=0,n=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,E=(d+1)/2,U=(m+1)/2,R=(u+f)/4,T=(h+_)/4,P=(g+p)/4;return S>E&&S>U?S<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(S),n=R/r,i=T/r):E>U?E<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(E),r=R/n,i=P/n):U<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(U),r=T/i,n=P/i),this.set(r,n,i,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pu extends Ui{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const i=new xt(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let o=0;o<s;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Pu{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Vl extends xt{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lu extends xt{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],h=r[n+3];const f=i[s+0],d=i[s+1],g=i[s+2],_=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let p=1-o;const m=l*f+c*d+u*g+h*_,y=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const U=Math.sqrt(S),R=Math.atan2(U,m*y);p=Math.sin(p*R)/U,o=Math.sin(o*R)/U}const E=o*y;if(l=l*p+f*E,c=c*p+d*E,u=u*p+g*E,h=h*p+_*E,p===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],h=i[s],f=i[s+1],d=i[s+2],g=i[s+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),h=o(i/2),f=l(r/2),d=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=r+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(i-c)*d,this._z=(s-n)*d}else if(r>o&&r>h){const d=2*Math.sqrt(1+r-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(i+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-r-h);this._w=(i-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-r-o);this._w=(s-n)/d,this._x=(i+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-i*l,this._y=n*u+s*l+i*o-r*c,this._z=i*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=r*h+this._x*f,this._y=n*h+this._y*f,this._z=i*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*r),u=2*(o*t-i*n),h=2*(i*r-s*t);return this.x=t+l*c+s*h-o*u,this.y=r+l*u+o*c-i*h,this.z=n+l*h+i*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ua.copy(this).projectOnVector(e),this.sub(Ua)}reflect(e){return this.sub(Ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new te,Mo=new ar;class Pi{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=i.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Xt):Xt.fromBufferAttribute(i,s),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_r.copy(r.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),vr.subVectors(this.max,Xi),ri.subVectors(e.a,Xi),ai.subVectors(e.b,Xi),si.subVectors(e.c,Xi),xn.subVectors(ai,ri),Sn.subVectors(si,ai),Fn.subVectors(ri,si);let t=[0,-xn.z,xn.y,0,-Sn.z,Sn.y,0,-Fn.z,Fn.y,xn.z,0,-xn.x,Sn.z,0,-Sn.x,Fn.z,0,-Fn.x,-xn.y,xn.x,0,-Sn.y,Sn.x,0,-Fn.y,Fn.x,0];return!Pa(t,ri,ai,si,vr)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,ri,ai,si,vr))?!1:(xr.crossVectors(xn,Sn),t=[xr.x,xr.y,xr.z],Pa(t,ri,ai,si,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new te,new te,new te,new te,new te,new te,new te,new te],Xt=new te,_r=new Pi,ri=new te,ai=new te,si=new te,xn=new te,Sn=new te,Fn=new te,Xi=new te,vr=new te,xr=new te,Nn=new te;function Pa(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Nn.fromArray(a,i);const o=n.x*Math.abs(Nn.x)+n.y*Math.abs(Nn.y)+n.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=r.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Du=new Pi,Yi=new te,La=new te;class ia{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Du.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yi.subVectors(e,this.center);const t=Yi.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(Yi,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yi.copy(e.center).add(La)),this.expandByPoint(Yi.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new te,Da=new te,Sr=new te,Mn=new te,Ia=new te,Mr=new te,Fa=new te;class Iu{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Da.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Da);const i=e.distanceTo(t)*.5,s=-this.direction.dot(Sr),o=Mn.dot(this.direction),l=-Mn.dot(Sr),c=Mn.lengthSq(),u=Math.abs(1-s*s);let h,f,d,g;if(u>0)if(h=s*l-o,f=s*o-l,g=i*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=i,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-i,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*i+o)),f=h>0?-i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-i,-l),i),d=f*(f+2*l)+c):(h=Math.max(0,-(s*i+o)),f=h>0?i:Math.min(Math.max(-i,-l),i),d=-h*h+f*(f+2*l)+c);else f=s>0?-i:i,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(Da).addScaledVector(Sr,f),d}intersectSphere(e,t){on.subVectors(e.center,this.origin);const r=on.dot(this.direction),n=on.dot(on)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(i=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(i=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||i>n||((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,r,n,i){Ia.subVectors(t,e),Mr.subVectors(r,e),Fa.crossVectors(Ia,Mr);let s=this.direction.dot(Fa),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Mn.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(Mn,Mr));if(l<0)return null;const c=o*this.direction.dot(Ia.cross(Mn));if(c<0||l+c>s)return null;const u=-o*Mn.dot(Fa);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,r,n,i,s,o,l,c,u,h,f,d,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,s,o,l,c,u,h,f,d,g,_,p)}set(e,t,r,n,i,s,o,l,c,u,h,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/oi.setFromMatrixColumn(e,0).length(),i=1/oi.setFromMatrixColumn(e,1).length(),s=1/oi.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i);if(e.order==="XYZ"){const f=s*u,d=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-s*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=s*u,t[9]=_-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=s*l,d=s*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=s*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fu,e,Nu)}lookAt(e,t,r){const n=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),yn.crossVectors(r,Lt),yn.lengthSq()===0&&(Math.abs(r.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),yn.crossVectors(r,Lt)),yn.normalize(),yr.crossVectors(Lt,yn),n[0]=yn.x,n[4]=yr.x,n[8]=Lt.x,n[1]=yn.y,n[5]=yr.y,n[9]=Lt.y,n[2]=yn.z,n[6]=yr.z,n[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],h=r[5],f=r[9],d=r[13],g=r[2],_=r[6],p=r[10],m=r[14],y=r[3],S=r[7],E=r[11],U=r[15],R=n[0],T=n[4],P=n[8],M=n[12],v=n[1],k=n[5],C=n[9],A=n[13],F=n[2],z=n[6],q=n[10],ee=n[14],H=n[3],X=n[7],G=n[11],D=n[15];return i[0]=s*R+o*v+l*F+c*H,i[4]=s*T+o*k+l*z+c*X,i[8]=s*P+o*C+l*q+c*G,i[12]=s*M+o*A+l*ee+c*D,i[1]=u*R+h*v+f*F+d*H,i[5]=u*T+h*k+f*z+d*X,i[9]=u*P+h*C+f*q+d*G,i[13]=u*M+h*A+f*ee+d*D,i[2]=g*R+_*v+p*F+m*H,i[6]=g*T+_*k+p*z+m*X,i[10]=g*P+_*C+p*q+m*G,i[14]=g*M+_*A+p*ee+m*D,i[3]=y*R+S*v+E*F+U*H,i[7]=y*T+S*k+E*z+U*X,i[11]=y*P+S*C+E*q+U*G,i[15]=y*M+S*A+E*ee+U*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+i*l*h-n*c*h-i*o*f+r*c*f+n*o*d-r*l*d)+_*(+t*l*d-t*c*f+i*s*f-n*s*d+n*c*u-i*l*u)+p*(+t*c*h-t*o*d-i*s*h+r*s*d+i*o*u-r*c*u)+m*(-n*o*u-t*l*h+t*o*f+n*s*h-r*s*f+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=h*p*c-_*f*c+_*l*d-o*p*d-h*l*m+o*f*m,S=g*f*c-u*p*c-g*l*d+s*p*d+u*l*m-s*f*m,E=u*_*c-g*h*c+g*o*d-s*_*d-u*o*m+s*h*m,U=g*h*l-u*_*l-g*o*f+s*_*f+u*o*p-s*h*p,R=t*y+r*S+n*E+i*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=y*T,e[1]=(_*f*i-h*p*i-_*n*d+r*p*d+h*n*m-r*f*m)*T,e[2]=(o*p*i-_*l*i+_*n*c-r*p*c-o*n*m+r*l*m)*T,e[3]=(h*l*i-o*f*i-h*n*c+r*f*c+o*n*d-r*l*d)*T,e[4]=S*T,e[5]=(u*p*i-g*f*i+g*n*d-t*p*d-u*n*m+t*f*m)*T,e[6]=(g*l*i-s*p*i-g*n*c+t*p*c+s*n*m-t*l*m)*T,e[7]=(s*f*i-u*l*i+u*n*c-t*f*c-s*n*d+t*l*d)*T,e[8]=E*T,e[9]=(g*h*i-u*_*i-g*r*d+t*_*d+u*r*m-t*h*m)*T,e[10]=(s*_*i-g*o*i+g*r*c-t*_*c-s*r*m+t*o*m)*T,e[11]=(u*o*i-s*h*i-u*r*c+t*h*c+s*r*d-t*o*d)*T,e[12]=U*T,e[13]=(u*_*n-g*h*n+g*r*f-t*_*f-u*r*p+t*h*p)*T,e[14]=(g*o*n-s*_*n-g*r*l+t*_*l+s*r*p-t*o*p)*T,e[15]=(s*h*n-u*o*n+u*r*l-t*h*l-s*r*f+t*o*f)*T,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,u=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,u=s+s,h=o+o,f=i*c,d=i*u,g=i*h,_=s*u,p=s*h,m=o*h,y=l*c,S=l*u,E=l*h,U=r.x,R=r.y,T=r.z;return n[0]=(1-(_+m))*U,n[1]=(d+E)*U,n[2]=(g-S)*U,n[3]=0,n[4]=(d-E)*R,n[5]=(1-(f+m))*R,n[6]=(p+y)*R,n[7]=0,n[8]=(g+S)*T,n[9]=(p-y)*T,n[10]=(1-(f+_))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=oi.set(n[0],n[1],n[2]).length();const s=oi.set(n[4],n[5],n[6]).length(),o=oi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],Yt.copy(this);const c=1/i,u=1/s,h=1/o;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s,o=fn){const l=this.elements,c=2*i/(t-e),u=2*i/(r-n),h=(t+e)/(t-e),f=(r+n)/(r-n);let d,g;if(o===fn)d=-(s+i)/(s-i),g=-2*s*i/(s-i);else if(o===Jr)d=-s/(s-i),g=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,n,i,s,o=fn){const l=this.elements,c=1/(t-e),u=1/(r-n),h=1/(s-i),f=(t+e)*c,d=(r+n)*u;let g,_;if(o===fn)g=(s+i)*h,_=-2*h;else if(o===Jr)g=i*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const oi=new te,Yt=new ot,Fu=new te(0,0,0),Nu=new te(1,1,1),yn=new te,yr=new te,Lt=new te,yo=new ot,Eo=new ar;class pn{constructor(e=0,t=0,r=0,n=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yo,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ou=0;const To=new te,li=new ar,ln=new ot,Er=new te,qi=new te,Bu=new te,ku=new ar,bo=new te(1,0,0),Ao=new te(0,1,0),wo=new te(0,0,1),Ro={type:"added"},Gu={type:"removed"},ci={type:"childadded",child:null},Na={type:"childremoved",child:null};class Ft extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new te,t=new pn,r=new ar,n=new te(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ye}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(bo,e)}rotateY(e){return this.rotateOnAxis(Ao,e)}rotateZ(e){return this.rotateOnAxis(wo,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bo,e)}translateY(e){return this.translateOnAxis(Ao,e)}translateZ(e){return this.translateOnAxis(wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Er.copy(e):Er.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(qi,Er,this.up):ln.lookAt(Er,qi,this.up),this.quaternion.setFromRotationMatrix(ln),n&&(ln.extractRotation(n.matrixWorld),li.setFromRotationMatrix(ln),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ro),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gu),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ro),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++){const i=t[r];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++){const o=n[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];i(e.shapes,h)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),g=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),g.length>0&&(r.nodes=g)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}Ft.DEFAULT_UP=new te(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new te,cn=new te,Oa=new te,un=new te,ui=new te,hi=new te,Co=new te,Ba=new te,ka=new te,Ga=new te;class en{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),qt.subVectors(e,t),n.cross(qt);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){qt.subVectors(n,t),cn.subVectors(r,t),Oa.subVectors(e,t);const s=qt.dot(qt),o=qt.dot(cn),l=qt.dot(Oa),c=cn.dot(cn),u=cn.dot(Oa),h=s*c-o*o;if(h===0)return i.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,g=(s*u-o*l)*f;return i.set(1-d-g,g,d)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,un.x),l.addScaledVector(s,un.y),l.addScaledVector(o,un.z),l)}static isFrontFacing(e,t,r,n){return qt.subVectors(r,t),cn.subVectors(e,t),qt.cross(cn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),qt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return en.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;ui.subVectors(n,r),hi.subVectors(i,r),Ba.subVectors(e,r);const l=ui.dot(Ba),c=hi.dot(Ba);if(l<=0&&c<=0)return t.copy(r);ka.subVectors(e,n);const u=ui.dot(ka),h=hi.dot(ka);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(ui,s);Ga.subVectors(e,i);const d=ui.dot(Ga),g=hi.dot(Ga);if(g>=0&&d<=g)return t.copy(i);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(hi,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Co.subVectors(i,n),o=(h-u)/(h-u+(d-g)),t.copy(n).addScaledVector(Co,o);const m=1/(p+_+f);return s=_*m,o=f*m,t.copy(r).addScaledVector(ui,s).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function za(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ke{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=r,$e.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=$e.workingColorSpace){if(e=Tu(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const i=r<=.5?r*(1+t):r+t-r*t,s=2*r-i;this.r=za(s,i,e+1/3),this.g=za(s,i,e),this.b=za(s,i,e-1/3)}return $e.toWorkingColorSpace(this,n),this}setStyle(e,t=jt){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const r=Wl[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return $e.fromWorkingColorSpace(vt.copy(this),e),Math.round(Rt(vt.r*255,0,255))*65536+Math.round(Rt(vt.g*255,0,255))*256+Math.round(Rt(vt.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(vt.copy(this),t);const r=vt.r,n=vt.g,i=vt.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case r:l=(n-i)/h+(n<i?6:0);break;case n:l=(i-r)/h+2;break;case i:l=(r-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=jt){$e.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,r=vt.g,n=vt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(Tr);const r=Aa(En.h,Tr.h,t),n=Aa(En.s,Tr.s,t),i=Aa(En.l,Tr.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ke;Ke.NAMES=Wl;let zu=0;class ra extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ei,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=as,this.blendDst=ss,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(r.blending=this.blending),this.side!==dn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==as&&(r.blendSrc=this.blendSrc),this.blendDst!==ss&&(r.blendDst=this.blendDst),this.blendEquation!==Wn&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zt extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new te,br=new qe;class Zt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Au("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Wi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=wt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),e}}class Xl extends Zt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Yl extends Zt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Un extends Zt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Vu=0;const kt=new ot,Va=new Ft,fi=new te,Dt=new Pi,ji=new Pi,dt=new te;class mn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?Yl:Xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new Ye().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,r){return kt.makeTranslation(e,t,r),this.applyMatrix4(kt),this}scale(e,t,r){return kt.makeScale(e,t,r),this.applyMatrix4(kt),this}lookAt(e){return Va.lookAt(e),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Dt.setFromBufferAttribute(i),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(dt.addVectors(Dt.min,ji.min),Dt.expandByPoint(dt),dt.addVectors(Dt.max,ji.max),Dt.expandByPoint(dt)):(Dt.expandByPoint(ji.min),Dt.expandByPoint(ji.max))}Dt.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)dt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(dt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)dt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),dt.add(fi)),n=Math.max(n,r.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,n=t.normal,i=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<r.count;P++)o[P]=new te,l[P]=new te;const c=new te,u=new te,h=new te,f=new qe,d=new qe,g=new qe,_=new te,p=new te;function m(P,M,v){c.fromBufferAttribute(r,P),u.fromBufferAttribute(r,M),h.fromBufferAttribute(r,v),f.fromBufferAttribute(i,P),d.fromBufferAttribute(i,M),g.fromBufferAttribute(i,v),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const k=1/(d.x*g.y-g.x*d.y);isFinite(k)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(k),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(k),o[P].add(_),o[M].add(_),o[v].add(_),l[P].add(p),l[M].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,M=y.length;P<M;++P){const v=y[P],k=v.start,C=v.count;for(let A=k,F=k+C;A<F;A+=3)m(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const S=new te,E=new te,U=new te,R=new te;function T(P){U.fromBufferAttribute(n,P),R.copy(U);const M=o[P];S.copy(M),S.sub(U.multiplyScalar(U.dot(M))).normalize(),E.crossVectors(R,M);const k=E.dot(l[P])<0?-1:1;s.setXYZW(P,S.x,S.y,S.z,k)}for(let P=0,M=y.length;P<M;++P){const v=y[P],k=v.start,C=v.count;for(let A=k,F=k+C;A<F;A+=3)T(e.getX(A+0)),T(e.getX(A+1)),T(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const n=new te,i=new te,s=new te,o=new te,l=new te,c=new te,u=new te,h=new te;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),u.subVectors(s,i),h.subVectors(n,i),u.cross(h),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,_),c.fromBufferAttribute(r,p),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(_,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),i.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,i),h.subVectors(n,i),u.cross(h),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)f[g++]=c[d++]}return new Zt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,r);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],h=i[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new ot,On=new Iu,Ar=new ia,Po=new te,di=new te,pi=new te,mi=new te,Ha=new te,wr=new te,Rr=new qe,Cr=new qe,Ur=new qe,Lo=new te,Do=new te,Io=new te,Pr=new te,Lr=new te;class mt extends Ft{constructor(e=new mn,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(i&&o){wr.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const u=o[l],h=i[l];u!==0&&(Ha.fromBufferAttribute(h,e),s?wr.addScaledVector(Ha,u):wr.addScaledVector(Ha.sub(t),u))}t.add(wr)}return t}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ar.copy(r.boundingSphere),Ar.applyMatrix4(i),On.copy(e.ray).recast(e.near),!(Ar.containsPoint(On.origin)===!1&&(On.intersectSphere(Ar,Po)===null||On.origin.distanceToSquared(Po)>(e.far-e.near)**2))&&(Uo.copy(i).invert(),On.copy(e.ray).applyMatrix4(Uo),!(r.boundingBox!==null&&On.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,r){let n;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv1,h=i.attributes.normal,f=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=s[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,U=S;E<U;E+=3){const R=o.getX(E),T=o.getX(E+1),P=o.getX(E+2);n=Dr(this,m,e,r,c,u,h,R,T,P),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),S=o.getX(p+1),E=o.getX(p+2);n=Dr(this,s,e,r,c,u,h,y,S,E),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=s[p.materialIndex],y=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let E=y,U=S;E<U;E+=3){const R=E,T=E+1,P=E+2;n=Dr(this,m,e,r,c,u,h,R,T,P),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,S=p+1,E=p+2;n=Dr(this,s,e,r,c,u,h,y,S,E),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function Hu(a,e,t,r,n,i,s,o){let l;if(e.side===yt?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side===dn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:a}}function Dr(a,e,t,r,n,i,s,o,l,c){a.getVertexPosition(o,di),a.getVertexPosition(l,pi),a.getVertexPosition(c,mi);const u=Hu(a,e,t,r,di,pi,mi,Pr);if(u){n&&(Rr.fromBufferAttribute(n,o),Cr.fromBufferAttribute(n,l),Ur.fromBufferAttribute(n,c),u.uv=en.getInterpolation(Pr,di,pi,mi,Rr,Cr,Ur,new qe)),i&&(Rr.fromBufferAttribute(i,o),Cr.fromBufferAttribute(i,l),Ur.fromBufferAttribute(i,c),u.uv1=en.getInterpolation(Pr,di,pi,mi,Rr,Cr,Ur,new qe)),s&&(Lo.fromBufferAttribute(s,o),Do.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),u.normal=en.getInterpolation(Pr,di,pi,mi,Lo,Do,Io,new te),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new te,materialIndex:0};en.getNormal(di,pi,mi,h.normal),u.face=h}return u}class Jn extends mn{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(h,2));function g(_,p,m,y,S,E,U,R,T,P,M){const v=E/T,k=U/P,C=E/2,A=U/2,F=R/2,z=T+1,q=P+1;let ee=0,H=0;const X=new te;for(let G=0;G<q;G++){const D=G*k-A;for(let W=0;W<z;W++){const J=W*v-C;X[_]=J*y,X[p]=D*S,X[m]=F,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[m]=R>0?1:-1,u.push(X.x,X.y,X.z),h.push(W/T),h.push(1-G/P),ee+=1}}for(let G=0;G<P;G++)for(let D=0;D<T;D++){const W=f+D+z*G,J=f+D+z*(G+1),I=f+(D+1)+z*(G+1),O=f+(D+1)+z*G;l.push(W,J,O),l.push(J,I,O),H+=6}o.addGroup(d,H,M),d+=H,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Mt(a){const e={};for(let t=0;t<a.length;t++){const r=Ci(a[t]);for(const n in r)e[n]=r[n]}return e}function Wu(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function ql(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const jl={clone:Ci,merge:Mt};var Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=Wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Kl extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new te,Fo=new qe,No=new qe;class Gt extends Kl{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,Fo,No),t.subVectors(No,Fo)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class qu extends Ft{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Gt(gi,_i,e,t);n.layers=this.layers,this.add(n);const i=new Gt(gi,_i,e,t);i.layers=this.layers,this.add(i);const s=new Gt(gi,_i,e,t);s.layers=this.layers,this.add(s);const o=new Gt(gi,_i,e,t);o.layers=this.layers,this.add(o);const l=new Gt(gi,_i,e,t);l.layers=this.layers,this.add(l);const c=new Gt(gi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,n,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===fn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jr)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,s),e.setRenderTarget(r,2,n),e.render(t,o),e.setRenderTarget(r,3,n),e.render(t,l),e.setRenderTarget(r,4,n),e.render(t,c),r.texture.generateMipmaps=_,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class Zl extends xt{constructor(e,t,r,n,i,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,r,n,i,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ju extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Zl(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Jn(5,5,5),i=new Pn({name:"CubemapFromEquirect",uniforms:Ci(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:yt,blending:wn});i.uniforms.tEquirect.value=t;const s=new mt(n,i),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=It),new qu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}const Wa=new te,Ku=new te,Zu=new Ye;class Vn{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=Wa.subVectors(r,t).cross(Ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Wa),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Zu.getNormalMatrix(e),n=this.coplanarPoint(Wa).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bn=new ia,Ir=new te;class Jl{constructor(e=new Vn,t=new Vn,r=new Vn,n=new Vn,i=new Vn,s=new Vn){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=fn){const r=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],g=n[9],_=n[10],p=n[11],m=n[12],y=n[13],S=n[14],E=n[15];if(r[0].setComponents(l-i,f-c,p-d,E-m).normalize(),r[1].setComponents(l+i,f+c,p+d,E+m).normalize(),r[2].setComponents(l+s,f+u,p+g,E+y).normalize(),r[3].setComponents(l-s,f-u,p-g,E-y).normalize(),r[4].setComponents(l-o,f-h,p-_,E-S).normalize(),t===fn)r[5].setComponents(l+o,f+h,p+_,E+S).normalize();else if(t===Jr)r[5].setComponents(o,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(Ir.x=n.normal.x>0?e.max.x:e.min.x,Ir.y=n.normal.y>0?e.max.y:e.min.y,Ir.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ql(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Ju(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=a.createBuffer();a.bindBuffer(l,f),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,l,c){const u=l.array,h=l._updateRange,f=l.updateRanges;if(a.bindBuffer(c,o),h.count===-1&&f.length===0&&a.bufferSubData(c,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const _=f[d];a.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}h.count!==-1&&(a.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:s}}class nn extends mn{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*f-s;for(let S=0;S<c;S++){const E=S*h-i;g.push(E,-y,0),_.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const S=y+c*m,E=y+c*(m+1),U=y+1+c*(m+1),R=y+1+c*m;d.push(S,E,R),d.push(E,U,R)}this.setIndex(d),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rh=`#ifdef USE_AOMAP
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
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,fh=`#ifdef USE_BUMPMAP
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
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mh=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eh=`vec3 transformedNormal = objectNormal;
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
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ch=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
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
}`,Gh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,Yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zh=`PhysicalMaterial material;
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
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Qh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,$h=`#if defined( RE_IndirectDiffuse )
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Of=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
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
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
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
}`,sd=`#if DEPTH_PACKING == 3200
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
	#endif
}`,od=`#define DISTANCE
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
}`,ld=`#define DISTANCE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
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
}`,fd=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#define LAMBERT
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
}`,gd=`#define LAMBERT
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
}`,_d=`#define MATCAP
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
}`,vd=`#define MATCAP
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
}`,xd=`#define NORMAL
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
}`,Sd=`#define NORMAL
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
}`,Md=`#define PHONG
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
}`,yd=`#define PHONG
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
}`,Ed=`#define STANDARD
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
}`,Td=`#define STANDARD
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
}`,bd=`#define TOON
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
}`,Ad=`#define TOON
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
}`,wd=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Cd=`#include <common>
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
}`,Ud=`uniform vec3 color;
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
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Qu,alphahash_pars_fragment:$u,alphamap_fragment:eh,alphamap_pars_fragment:th,alphatest_fragment:nh,alphatest_pars_fragment:ih,aomap_fragment:rh,aomap_pars_fragment:ah,batching_pars_vertex:sh,batching_vertex:oh,begin_vertex:lh,beginnormal_vertex:ch,bsdfs:uh,iridescence_fragment:hh,bumpmap_pars_fragment:fh,clipping_planes_fragment:dh,clipping_planes_pars_fragment:ph,clipping_planes_pars_vertex:mh,clipping_planes_vertex:gh,color_fragment:_h,color_pars_fragment:vh,color_pars_vertex:xh,color_vertex:Sh,common:Mh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Th,displacementmap_vertex:bh,emissivemap_fragment:Ah,emissivemap_pars_fragment:wh,colorspace_fragment:Rh,colorspace_pars_fragment:Ch,envmap_fragment:Uh,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Lh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Xh,envmap_vertex:Ih,fog_vertex:Fh,fog_pars_vertex:Nh,fog_fragment:Oh,fog_pars_fragment:Bh,gradientmap_pars_fragment:kh,lightmap_fragment:Gh,lightmap_pars_fragment:zh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Wh,lights_toon_fragment:Yh,lights_toon_pars_fragment:qh,lights_phong_fragment:jh,lights_phong_pars_fragment:Kh,lights_physical_fragment:Zh,lights_physical_pars_fragment:Jh,lights_fragment_begin:Qh,lights_fragment_maps:$h,lights_fragment_end:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:af,map_fragment:sf,map_pars_fragment:of,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:hf,morphinstance_vertex:ff,morphcolor_vertex:df,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:xf,normal_pars_vertex:Sf,normal_vertex:Mf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Af,opaque_fragment:wf,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Uf,dithering_fragment:Pf,dithering_pars_fragment:Lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Nf,shadowmap_vertex:Of,shadowmask_pars_fragment:Bf,skinbase_vertex:kf,skinning_pars_vertex:Gf,skinning_vertex:zf,skinnormal_vertex:Vf,specularmap_fragment:Hf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:Yf,transmission_fragment:qf,transmission_pars_fragment:jf,uv_pars_fragment:Kf,uv_pars_vertex:Zf,uv_vertex:Jf,worldpos_vertex:Qf,background_vert:$f,background_frag:ed,backgroundCube_vert:td,backgroundCube_frag:nd,cube_vert:id,cube_frag:rd,depth_vert:ad,depth_frag:sd,distanceRGBA_vert:od,distanceRGBA_frag:ld,equirect_vert:cd,equirect_frag:ud,linedashed_vert:hd,linedashed_frag:fd,meshbasic_vert:dd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:gd,meshmatcap_vert:_d,meshmatcap_frag:vd,meshnormal_vert:xd,meshnormal_frag:Sd,meshphong_vert:Md,meshphong_frag:yd,meshphysical_vert:Ed,meshphysical_frag:Td,meshtoon_vert:bd,meshtoon_frag:Ad,points_vert:wd,points_frag:Rd,shadow_vert:Cd,shadow_frag:Ud,sprite_vert:Pd,sprite_frag:Ld},Ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},$t={basic:{uniforms:Mt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Mt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Mt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Mt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Mt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Mt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Mt([Ae.points,Ae.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Mt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Mt([Ae.common,Ae.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Mt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Mt([Ae.sprite,Ae.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Mt([Ae.common,Ae.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Mt([Ae.lights,Ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};$t.physical={uniforms:Mt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Fr={r:0,b:0,g:0},kn=new pn,Dd=new ot;function Id(a,e,t,r,n,i,s){const o=new Ke(0);let l=i===!0?0:1,c,u,h=null,f=0,d=null;function g(p,m){let y=!1,S=m.isScene===!0?m.background:null;S&&S.isTexture&&(S=(m.backgroundBlurriness>0?t:e).get(S)),S===null?_(o,l):S&&S.isColor&&(_(S,1),y=!0);const E=a.xr.getEnvironmentBlendMode();E==="additive"?r.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),S&&(S.isCubeTexture||S.mapping===ta)?(u===void 0&&(u=new mt(new Jn(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ci($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),kn.copy(m.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(kn)),u.material.toneMapped=$e.getTransfer(S.colorSpace)!==tt,(h!==S||f!==S.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=a.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new mt(new nn(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ci($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=$e.getTransfer(S.colorSpace)!==tt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Fr,ql(a)),r.buffers.color.setClear(Fr.r,Fr.g,Fr.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function Fd(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},n=f(null);let i=n,s=!1;function o(v,k,C,A,F){let z=!1;const q=h(A,C,k);i!==q&&(i=q,c(i.object)),z=d(v,A,C,F),z&&g(v,A,C,F),F!==null&&e.update(F,a.ELEMENT_ARRAY_BUFFER),(z||s)&&(s=!1,E(v,k,C,A),F!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return a.createVertexArray()}function c(v){return a.bindVertexArray(v)}function u(v){return a.deleteVertexArray(v)}function h(v,k,C){const A=C.wireframe===!0;let F=r[v.id];F===void 0&&(F={},r[v.id]=F);let z=F[k.id];z===void 0&&(z={},F[k.id]=z);let q=z[A];return q===void 0&&(q=f(l()),z[A]=q),q}function f(v){const k=[],C=[],A=[];for(let F=0;F<t;F++)k[F]=0,C[F]=0,A[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:C,attributeDivisors:A,object:v,attributes:{},index:null}}function d(v,k,C,A){const F=i.attributes,z=k.attributes;let q=0;const ee=C.getAttributes();for(const H in ee)if(ee[H].location>=0){const G=F[H];let D=z[H];if(D===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(D=v.instanceColor)),G===void 0||G.attribute!==D||D&&G.data!==D.data)return!0;q++}return i.attributesNum!==q||i.index!==A}function g(v,k,C,A){const F={},z=k.attributes;let q=0;const ee=C.getAttributes();for(const H in ee)if(ee[H].location>=0){let G=z[H];G===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(G=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(G=v.instanceColor));const D={};D.attribute=G,G&&G.data&&(D.data=G.data),F[H]=D,q++}i.attributes=F,i.attributesNum=q,i.index=A}function _(){const v=i.newAttributes;for(let k=0,C=v.length;k<C;k++)v[k]=0}function p(v){m(v,0)}function m(v,k){const C=i.newAttributes,A=i.enabledAttributes,F=i.attributeDivisors;C[v]=1,A[v]===0&&(a.enableVertexAttribArray(v),A[v]=1),F[v]!==k&&(a.vertexAttribDivisor(v,k),F[v]=k)}function y(){const v=i.newAttributes,k=i.enabledAttributes;for(let C=0,A=k.length;C<A;C++)k[C]!==v[C]&&(a.disableVertexAttribArray(C),k[C]=0)}function S(v,k,C,A,F,z,q){q===!0?a.vertexAttribIPointer(v,k,C,F,z):a.vertexAttribPointer(v,k,C,A,F,z)}function E(v,k,C,A){_();const F=A.attributes,z=C.getAttributes(),q=k.defaultAttributeValues;for(const ee in z){const H=z[ee];if(H.location>=0){let X=F[ee];if(X===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(X=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(X=v.instanceColor)),X!==void 0){const G=X.normalized,D=X.itemSize,W=e.get(X);if(W===void 0)continue;const J=W.buffer,I=W.type,O=W.bytesPerElement,Z=I===a.INT||I===a.UNSIGNED_INT||X.gpuType===Pl;if(X.isInterleavedBufferAttribute){const Y=X.data,ae=Y.stride,fe=X.offset;if(Y.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e,Y.meshPerAttribute);v.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e);a.bindBuffer(a.ARRAY_BUFFER,J);for(let _e=0;_e<H.locationSize;_e++)S(H.location+_e,D/H.locationSize,I,G,ae*O,(fe+D/H.locationSize*_e)*O,Z)}else{if(X.isInstancedBufferAttribute){for(let Y=0;Y<H.locationSize;Y++)m(H.location+Y,X.meshPerAttribute);v.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Y=0;Y<H.locationSize;Y++)p(H.location+Y);a.bindBuffer(a.ARRAY_BUFFER,J);for(let Y=0;Y<H.locationSize;Y++)S(H.location+Y,D/H.locationSize,I,G,D*O,D/H.locationSize*Y*O,Z)}}else if(q!==void 0){const G=q[ee];if(G!==void 0)switch(G.length){case 2:a.vertexAttrib2fv(H.location,G);break;case 3:a.vertexAttrib3fv(H.location,G);break;case 4:a.vertexAttrib4fv(H.location,G);break;default:a.vertexAttrib1fv(H.location,G)}}}}y()}function U(){P();for(const v in r){const k=r[v];for(const C in k){const A=k[C];for(const F in A)u(A[F].object),delete A[F];delete k[C]}delete r[v]}}function R(v){if(r[v.id]===void 0)return;const k=r[v.id];for(const C in k){const A=k[C];for(const F in A)u(A[F].object),delete A[F];delete k[C]}delete r[v.id]}function T(v){for(const k in r){const C=r[k];if(C[v.id]===void 0)continue;const A=C[v.id];for(const F in A)u(A[F].object),delete A[F];delete C[v.id]}}function P(){M(),s=!0,i!==n&&(i=n,c(i.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function Nd(a,e,t){let r;function n(l){r=l}function i(l,c){a.drawArrays(r,l,c),t.update(c,r,1)}function s(l,c,u){u!==0&&(a.drawArraysInstanced(r,l,c,u),t.update(c,r,u))}function o(l,c,u){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<u;f++)this.render(l[f],c[f]);else{h.multiDrawArraysWEBGL(r,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,r,1)}}this.setMode=n,this.render=i,this.renderInstances=s,this.renderMultiDraw=o}function Od(a,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(S){if(S==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=t.precision!==void 0?t.precision:"highp";const o=i(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);const l=t.logarithmicDepthBuffer===!0,c=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),u=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_TEXTURE_SIZE),f=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),d=a.getParameter(a.MAX_VERTEX_ATTRIBS),g=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),_=a.getParameter(a.MAX_VARYING_VECTORS),p=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,y=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:i,precision:s,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:h,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:m,maxSamples:y}}function Bd(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new Vn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||r!==0||n;return n=f,r=h.length,d},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=a.get(h);if(!n||g===null||g.length===0||i&&!p)i?u(null):c();else{const y=i?0:r,S=y*4;let E=m.clippingState||null;l.value=E,E=u(g,f,S,d);for(let U=0;U!==S;++U)E[U]=t[U];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,E=d;S!==_;++S,E+=4)s.copy(h[S]).applyMatrix4(y,o),s.normal.toArray(p,E),p[E+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function kd(a){let e=new WeakMap;function t(s,o){return o===os?s.mapping=Ai:o===ls&&(s.mapping=wi),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===os||o===ls)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new ju(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class Gd extends Kl{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,Oo=[.125,.215,.35,.446,.526,.582],Xn=20,Xa=new Gd,Bo=new Ke;let Ya=null,qa=0,ja=0,Ka=!1;const Hn=(1+Math.sqrt(5))/2,vi=1/Hn,ko=[new te(1,1,1),new te(-1,1,1),new te(1,1,-1),new te(-1,1,-1),new te(0,Hn,vi),new te(0,Hn,-vi),new te(vi,0,Hn),new te(-vi,0,Hn),new te(Hn,vi,0),new te(-Hn,vi,0)];class Go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ho(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ya,qa,ja),this._renderer.xr.enabled=Ka,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ya=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:It,minFilter:It,generateMipmaps:!1,type:qr,format:tn,colorSpace:Ln,depthBuffer:!1},n=zo(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(e,t,r);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(i)),this._blurMaterial=Vd(i,e,t)}return n}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,r,n){const o=new Gt(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Bo),u.toneMapping=Rn,u.autoClear=!1;const d=new zt({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new mt(new Jn,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Bo),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const S=this._cubeSize;Nr(n,y*S,m>2?S:0,S,S),u.setRenderTarget(n),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const r=this._renderer,n=e.mapping===Ai||e.mapping===wi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ho()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vo());const i=n?this._cubemapMaterial:this._equirectMaterial,s=new mt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Nr(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Xa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const i=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=ko[(n-1)%ko.length];this._blur(e,n-1,n,i,s)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[r]-1,g=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Xn-1),_=i/g,p=isFinite(i)?1+Math.floor(u*_):Xn;p>Xn&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const m=[];let y=0;for(let T=0;T<Xn;++T){const P=T/_,M=Math.exp(-P*P/2);m.push(M),T===0?y+=M:T<p&&(y+=2*M)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-r;const E=this._sizeLods[n],U=3*E*(n>S-yi?n-S+yi:0),R=4*(this._cubeSize-E);Nr(t,U,R,3*E,2*E),l.setRenderTarget(t),l.render(h,Xa)}}function zd(a){const e=[],t=[],r=[];let n=a;const i=a-yi+1+Oo.length;for(let s=0;s<i;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-yi?l=Oo[s-a+yi-1]:s===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),S=new Float32Array(p*g*d),E=new Float32Array(m*g*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,P=R>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(M,_*g*R),S.set(f,p*g*R);const v=[R,R,R,R,R,R];E.set(v,m*g*R)}const U=new mn;U.setAttribute("position",new Zt(y,_)),U.setAttribute("uv",new Zt(S,p)),U.setAttribute("faceIndex",new Zt(E,m)),e.push(U),n>yi&&n--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function zo(a,e,t){const r=new Zn(a,e,t);return r.texture.mapping=ta,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nr(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function Vd(a,e,t){const r=new Float32Array(Xn),n=new te(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ss(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Vo(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ss(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ho(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ss(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Ss(){return`

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
	`}function Hd(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===os||l===ls,u=l===Ai||l===wi;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Go(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new Go(a)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",i),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function Wd(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function Xd(a,e,t,r){const n={},i=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}f.removeEventListener("dispose",s),delete n[f.id];const d=i.get(f);d&&(e.remove(d),i.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],a.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],a.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let S=0,E=y.length;S<E;S+=3){const U=y[S+0],R=y[S+1],T=y[S+2];f.push(U,R,R,T,T,U)}}else if(g!==void 0){const y=g.array;_=g.version;for(let S=0,E=y.length/3-1;S<E;S+=3){const U=S+0,R=S+1,T=S+2;f.push(U,R,R,T,T,U)}}else return;const p=new(Gl(f)?Yl:Xl)(f,1);p.version=_;const m=i.get(h);m&&e.remove(m),i.set(h,p)}function u(h){const f=i.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return i.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Yd(a,e,t){let r;function n(h){r=h}let i,s;function o(h){i=h.type,s=h.bytesPerElement}function l(h,f){a.drawElements(r,f,i,h*s),t.update(f,r,1)}function c(h,f,d){d!==0&&(a.drawElementsInstanced(r,f,i,h*s,d),t.update(f,r,d))}function u(h,f,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(h[_]/s,f[_]);else{g.multiDrawElementsWEBGL(r,f,0,i,h,0,d);let _=0;for(let p=0;p<d;p++)_+=f[p];t.update(_,r,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function qd(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function jd(a,e,t){const r=new WeakMap,n=new lt;function i(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=r.get(o);if(f===void 0||f.count!==h){let v=function(){P.dispose(),r.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let U=o.attributes.position.count*E,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const T=new Float32Array(U*R*4*h),P=new Vl(T,U,R,h);P.type=An,P.needsUpdate=!0;const M=E*4;for(let k=0;k<h;k++){const C=m[k],A=y[k],F=S[k],z=U*R*4*k;for(let q=0;q<C.count;q++){const ee=q*M;g===!0&&(n.fromBufferAttribute(C,q),T[z+ee+0]=n.x,T[z+ee+1]=n.y,T[z+ee+2]=n.z,T[z+ee+3]=0),_===!0&&(n.fromBufferAttribute(A,q),T[z+ee+4]=n.x,T[z+ee+5]=n.y,T[z+ee+6]=n.z,T[z+ee+7]=0),p===!0&&(n.fromBufferAttribute(F,q),T[z+ee+8]=n.x,T[z+ee+9]=n.y,T[z+ee+10]=n.z,T[z+ee+11]=F.itemSize===4?n.w:1)}}f={count:h,texture:P,size:new qe(U,R)},r.set(o,f),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(a,"morphTargetBaseInfluence",_),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:i}}function Kd(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}class $l extends xt{constructor(e,t,r,n,i,s,o,l,c,u){if(u=u!==void 0?u:Ti,u!==Ti&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ti&&(r=Ri),r===void 0&&u===er&&(r=ir),super(null,n,i,s,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ec=new xt,tc=new $l(1,1);tc.compareFunction=kl;const nc=new Vl,ic=new Lu,rc=new Zl,Wo=[],Xo=[],Yo=new Float32Array(16),qo=new Float32Array(9),jo=new Float32Array(4);function Li(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=Wo[n];if(i===void 0&&(i=new Float32Array(n),Wo[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function ct(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function ut(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function aa(a,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function Zd(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Jd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2fv(this.addr,e),ut(t,e)}}function Qd(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;a.uniform3fv(this.addr,e),ut(t,e)}}function $d(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4fv(this.addr,e),ut(t,e)}}function ep(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,r))return;jo.set(r),a.uniformMatrix2fv(this.addr,!1,jo),ut(t,r)}}function tp(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,r))return;qo.set(r),a.uniformMatrix3fv(this.addr,!1,qo),ut(t,r)}}function np(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(ct(t,r))return;Yo.set(r),a.uniformMatrix4fv(this.addr,!1,Yo),ut(t,r)}}function ip(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function rp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2iv(this.addr,e),ut(t,e)}}function ap(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;a.uniform3iv(this.addr,e),ut(t,e)}}function sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4iv(this.addr,e),ut(t,e)}}function op(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function lp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;a.uniform2uiv(this.addr,e),ut(t,e)}}function cp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;a.uniform3uiv(this.addr,e),ut(t,e)}}function up(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;a.uniform4uiv(this.addr,e),ut(t,e)}}function hp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n);const i=this.type===a.SAMPLER_2D_SHADOW?tc:ec;t.setTexture2D(e||i,n)}function fp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||ic,n)}function dp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||rc,n)}function pp(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||nc,n)}function mp(a){switch(a){case 5126:return Zd;case 35664:return Jd;case 35665:return Qd;case 35666:return $d;case 35674:return ep;case 35675:return tp;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return sp;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return pp}}function gp(a,e){a.uniform1fv(this.addr,e)}function _p(a,e){const t=Li(e,this.size,2);a.uniform2fv(this.addr,t)}function vp(a,e){const t=Li(e,this.size,3);a.uniform3fv(this.addr,t)}function xp(a,e){const t=Li(e,this.size,4);a.uniform4fv(this.addr,t)}function Sp(a,e){const t=Li(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Mp(a,e){const t=Li(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function yp(a,e){const t=Li(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Ep(a,e){a.uniform1iv(this.addr,e)}function Tp(a,e){a.uniform2iv(this.addr,e)}function bp(a,e){a.uniform3iv(this.addr,e)}function Ap(a,e){a.uniform4iv(this.addr,e)}function wp(a,e){a.uniform1uiv(this.addr,e)}function Rp(a,e){a.uniform2uiv(this.addr,e)}function Cp(a,e){a.uniform3uiv(this.addr,e)}function Up(a,e){a.uniform4uiv(this.addr,e)}function Pp(a,e,t){const r=this.cache,n=e.length,i=aa(t,n);ct(r,i)||(a.uniform1iv(this.addr,i),ut(r,i));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ec,i[s])}function Lp(a,e,t){const r=this.cache,n=e.length,i=aa(t,n);ct(r,i)||(a.uniform1iv(this.addr,i),ut(r,i));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||ic,i[s])}function Dp(a,e,t){const r=this.cache,n=e.length,i=aa(t,n);ct(r,i)||(a.uniform1iv(this.addr,i),ut(r,i));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||rc,i[s])}function Ip(a,e,t){const r=this.cache,n=e.length,i=aa(t,n);ct(r,i)||(a.uniform1iv(this.addr,i),ut(r,i));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||nc,i[s])}function Fp(a){switch(a){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Sp;case 35675:return Mp;case 35676:return yp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return bp;case 35669:case 35673:return Ap;case 5125:return wp;case 36294:return Rp;case 36295:return Cp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Ip}}class Np{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=mp(t.type)}}class Op{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fp(t.type)}}class Bp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(e,t[o.id],r)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function Ko(a,e){a.seq.push(e),a.map[e.id]=e}function kp(a,e,t){const r=a.name,n=r.length;for(Za.lastIndex=0;;){const i=Za.exec(r),s=Za.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Ko(t,c===void 0?new Np(o,a,e):new Op(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Bp(o),Ko(t,h)),t=h}}}class Gr{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){const i=e.getActiveUniform(t,n),s=e.getUniformLocation(t,i.name);kp(i,s,this)}}setValue(e,t,r,n){const i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){const n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const r=[];for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.id in t&&r.push(s)}return r}}function Zo(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}const Gp=37297;let zp=0;function Vp(a,e){const t=a.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=n;s<i;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function Hp(a){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(a);let r;switch(e===t?r="":e===Zr&&t===Kr?r="LinearDisplayP3ToLinearSRGB":e===Kr&&t===Zr&&(r="LinearSRGBToLinearDisplayP3"),a){case Ln:case na:return[r,"LinearTransferOETF"];case jt:case xs:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[r,"LinearTransferOETF"]}}function Jo(a,e,t){const r=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(r&&n==="")return"";const i=/ERROR: 0:(\d+)/.exec(n);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+n+`

`+Vp(a.getShaderSource(e),s)}else return n}function Wp(a,e){const t=Hp(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Xp(a,e){let t;switch(e){case Zc:t="Linear";break;case Jc:t="Reinhard";break;case Qc:t="OptimizedCineon";break;case $c:t="ACESFilmic";break;case tu:t="AgX";break;case nu:t="Neutral";break;case eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yp(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function qp(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function jp(a,e){const t={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Ji(a){return a!==""}function Qo(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function fs(a){return a.replace(Kp,Jp)}const Zp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jp(a,e){let t=Xe[e];if(t===void 0){const r=Zp.get(e);if(r!==void 0)t=Xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return fs(t)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(a){return a.replace(Qp,$p)}function $p(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function tl(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function em(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function tm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function im(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Rl:e="ENVMAP_BLENDING_MULTIPLY";break;case jc:e="ENVMAP_BLENDING_MIX";break;case Kc:e="ENVMAP_BLENDING_ADD";break}return e}function rm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function am(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=em(t),c=tm(t),u=nm(t),h=im(t),f=rm(t),d=Yp(t),g=qp(i),_=n.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`)):(p=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),m=[tl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Wp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),s=fs(s),s=Qo(s,t),s=$o(s,t),o=fs(o),o=Qo(o,t),o=$o(o,t),s=el(s),o=el(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===_o?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+p+s,E=y+m+o,U=Zo(n,n.VERTEX_SHADER,S),R=Zo(n,n.FRAGMENT_SHADER,E);n.attachShader(_,U),n.attachShader(_,R),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function T(k){if(a.debug.checkShaderErrors){const C=n.getProgramInfoLog(_).trim(),A=n.getShaderInfoLog(U).trim(),F=n.getShaderInfoLog(R).trim();let z=!0,q=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(z=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,_,U,R);else{const ee=Jo(n,U,"vertex"),H=Jo(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+C+`
`+ee+`
`+H)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(A===""||F==="")&&(q=!1);q&&(k.diagnostics={runnable:z,programLog:C,vertexShader:{log:A,prefix:p},fragmentShader:{log:F,prefix:m}})}n.deleteShader(U),n.deleteShader(R),P=new Gr(n,_),M=jp(n,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(_,Gp)),v},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}let sm=0;class om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new lm(e),t.set(e,r)),r}}class lm{constructor(e){this.id=sm++,this.code=e,this.usedTimes=0}}function cm(a,e,t,r,n,i,s){const o=new Hl,l=new om,c=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,v,k,C,A){const F=C.fog,z=A.geometry,q=M.isMeshStandardMaterial?C.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),H=ee&&ee.mapping===ta?ee.image.height:null,X=g[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const G=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,D=G!==void 0?G.length:0;let W=0;z.morphAttributes.position!==void 0&&(W=1),z.morphAttributes.normal!==void 0&&(W=2),z.morphAttributes.color!==void 0&&(W=3);let J,I,O,Z;if(X){const We=$t[X];J=We.vertexShader,I=We.fragmentShader}else J=M.vertexShader,I=M.fragmentShader,l.update(M),O=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const Y=a.getRenderTarget(),ae=A.isInstancedMesh===!0,fe=A.isBatchedMesh===!0,_e=!!M.map,N=!!M.matcap,oe=!!ee,Me=!!M.aoMap,Pe=!!M.lightMap,me=!!M.bumpMap,Te=!!M.normalMap,w=!!M.displacementMap,x=!!M.emissiveMap,V=!!M.metalnessMap,j=!!M.roughnessMap,B=M.anisotropy>0,Q=M.clearcoat>0,ce=M.iridescence>0,$=M.sheen>0,ue=M.transmission>0,we=B&&!!M.anisotropyMap,se=Q&&!!M.clearcoatMap,he=Q&&!!M.clearcoatNormalMap,ve=Q&&!!M.clearcoatRoughnessMap,ge=ce&&!!M.iridescenceMap,xe=ce&&!!M.iridescenceThicknessMap,Le=$&&!!M.sheenColorMap,be=$&&!!M.sheenRoughnessMap,Re=!!M.specularMap,Se=!!M.specularColorMap,Ie=!!M.specularIntensityMap,Ee=ue&&!!M.transmissionMap,L=ue&&!!M.thicknessMap,de=!!M.gradientMap,le=!!M.alphaMap,ye=M.alphaTest>0,Ne=!!M.alphaHash,Oe=!!M.extensions;let De=Rn;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(De=a.toneMapping);const Ve={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:J,fragmentShader:I,defines:M.defines,customVertexShaderID:O,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:fe,instancing:ae,instancingColor:ae&&A.instanceColor!==null,instancingMorph:ae&&A.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?a.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ln,alphaToCoverage:!!M.alphaToCoverage,map:_e,matcap:N,envMap:oe,envMapMode:oe&&ee.mapping,envMapCubeUVHeight:H,aoMap:Me,lightMap:Pe,bumpMap:me,normalMap:Te,displacementMap:f&&w,emissiveMap:x,normalMapObjectSpace:Te&&M.normalMapType===gu,normalMapTangentSpace:Te&&M.normalMapType===mu,metalnessMap:V,roughnessMap:j,anisotropy:B,anisotropyMap:we,clearcoat:Q,clearcoatMap:se,clearcoatNormalMap:he,clearcoatRoughnessMap:ve,iridescence:ce,iridescenceMap:ge,iridescenceThicknessMap:xe,sheen:$,sheenColorMap:Le,sheenRoughnessMap:be,specularMap:Re,specularColorMap:Se,specularIntensityMap:Ie,transmission:ue,transmissionMap:Ee,thicknessMap:L,gradientMap:de,opaque:M.transparent===!1&&M.blending===Ei&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:ye,alphaHash:Ne,combine:M.combine,mapUv:_e&&_(M.map.channel),aoMapUv:Me&&_(M.aoMap.channel),lightMapUv:Pe&&_(M.lightMap.channel),bumpMapUv:me&&_(M.bumpMap.channel),normalMapUv:Te&&_(M.normalMap.channel),displacementMapUv:w&&_(M.displacementMap.channel),emissiveMapUv:x&&_(M.emissiveMap.channel),metalnessMapUv:V&&_(M.metalnessMap.channel),roughnessMapUv:j&&_(M.roughnessMap.channel),anisotropyMapUv:we&&_(M.anisotropyMap.channel),clearcoatMapUv:se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(M.sheenRoughnessMap.channel),specularMapUv:Re&&_(M.specularMap.channel),specularColorMapUv:Se&&_(M.specularColorMap.channel),specularIntensityMapUv:Ie&&_(M.specularIntensityMap.channel),transmissionMapUv:Ee&&_(M.transmissionMap.channel),thicknessMapUv:L&&_(M.thicknessMap.channel),alphaMapUv:le&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Te||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!z.attributes.uv&&(_e||le),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:A.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:W,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:De,useLegacyLights:a._useLegacyLights,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kt,flipSided:M.side===yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Oe&&M.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function m(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)v.push(k),v.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(y(v,M),S(v,M),v.push(a.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function y(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function S(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),M.push(o.mask)}function E(M){const v=g[M.type];let k;if(v){const C=$t[v];k=jl.clone(C.uniforms)}else k=M.uniforms;return k}function U(M,v){let k;for(let C=0,A=u.length;C<A;C++){const F=u[C];if(F.cacheKey===v){k=F,++k.usedTimes;break}}return k===void 0&&(k=new am(a,v,M,i),u.push(k)),k}function R(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:U,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:P}}function um(){let a=new WeakMap;function e(i){let s=a.get(i);return s===void 0&&(s={},a.set(i,s)),s}function t(i){a.delete(i)}function r(i,s,o){a.get(i)[s]=o}function n(){a=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function hm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function nl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function il(){const a=[];let e=0;const t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function s(h,f,d,g,_,p){let m=a[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},a[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,f,d,g,_,p){const m=s(h,f,d,g,_,p);d.transmission>0?r.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,g,_,p){const m=s(h,f,d,g,_,p);d.transmission>0?r.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||hm),r.length>1&&r.sort(f||nl),n.length>1&&n.sort(f||nl)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:o,unshift:l,finish:u,sort:c}}function fm(){let a=new WeakMap;function e(r,n){const i=a.get(r);let s;return i===void 0?(s=new il,a.set(r,[s])):n>=i.length?(s=new il,i.push(s)):s=i[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function dm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Ke};break;case"SpotLight":t={position:new te,direction:new te,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new te,halfWidth:new te,halfHeight:new te};break}return a[e.id]=t,t}}}function pm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let mm=0;function gm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function _m(a){const e=new dm,t=pm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new te);const n=new te,i=new ot,s=new ot;function o(c,u){let h=0,f=0,d=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let g=0,_=0,p=0,m=0,y=0,S=0,E=0,U=0,R=0,T=0,P=0;c.sort(gm);const M=u===!0?Math.PI:1;for(let k=0,C=c.length;k<C;k++){const A=c[k],F=A.color,z=A.intensity,q=A.distance,ee=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=F.r*z*M,f+=F.g*z*M,d+=F.b*z*M;else if(A.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(A.sh.coefficients[H],z);P++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity*M),A.castShadow){const X=A.shadow,G=t.get(A);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,r.directionalShadow[g]=G,r.directionalShadowMap[g]=ee,r.directionalShadowMatrix[g]=A.shadow.matrix,S++}r.directional[g]=H,g++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(F).multiplyScalar(z*M),H.distance=q,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,r.spot[p]=H;const X=A.shadow;if(A.map&&(r.spotLightMap[R]=A.map,R++,X.updateMatrices(A),A.castShadow&&T++),r.spotLightMatrix[p]=X.matrix,A.castShadow){const G=t.get(A);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,r.spotShadow[p]=G,r.spotShadowMap[p]=ee,U++}p++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(F).multiplyScalar(z),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),r.rectArea[m]=H,m++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity*M),H.distance=A.distance,H.decay=A.decay,A.castShadow){const X=A.shadow,G=t.get(A);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,r.pointShadow[_]=G,r.pointShadowMap[_]=ee,r.pointShadowMatrix[_]=A.shadow.matrix,E++}r.point[_]=H,_++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(z*M),H.groundColor.copy(A.groundColor).multiplyScalar(z*M),r.hemi[y]=H,y++}}m>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=d;const v=r.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==m||v.hemiLength!==y||v.numDirectionalShadows!==S||v.numPointShadows!==E||v.numSpotShadows!==U||v.numSpotMaps!==R||v.numLightProbes!==P)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=m,r.point.length=_,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=U+R-T,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=P,v.directionalLength=g,v.pointLength=_,v.spotLength=p,v.rectAreaLength=m,v.hemiLength=y,v.numDirectionalShadows=S,v.numPointShadows=E,v.numSpotShadows=U,v.numSpotMaps=R,v.numLightProbes=P,r.version=mm++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(p),h++}else if(S.isSpotLight){const E=r.spot[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),s.identity(),i.copy(S.matrixWorld),i.premultiply(p),s.extractRotation(i),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const E=r.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const E=r.hemi[_];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:r}}function rl(a){const e=new _m(a),t=[],r=[];function n(){t.length=0,r.length=0}function i(u){t.push(u)}function s(u){r.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:n,state:{lightsArray:t,shadowsArray:r,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:i,pushShadow:s}}function vm(a){let e=new WeakMap;function t(n,i=0){const s=e.get(n);let o;return s===void 0?(o=new rl(a),e.set(n,[o])):i>=s.length?(o=new rl(a),s.push(o)):o=s[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}class ac extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sc extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function Mm(a,e,t){let r=new Jl;const n=new qe,i=new qe,s=new lt,o=new ac({depthPacking:Bl}),l=new sc,c={},u=t.maxTextureSize,h={[dn]:yt,[yt]:dn,[Kt]:Kt},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:xm,fragmentShader:Sm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let m=this.type;this.render=function(R,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=a.getRenderTarget(),v=a.getActiveCubeFace(),k=a.getActiveMipmapLevel(),C=a.state;C.setBlending(wn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const A=m!==hn&&this.type===hn,F=m===hn&&this.type!==hn;for(let z=0,q=R.length;z<q;z++){const ee=R[z],H=ee.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const X=H.getFrameExtents();if(n.multiply(X),i.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/X.x),n.x=i.x*X.x,H.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/X.y),n.y=i.y*X.y,H.mapSize.y=i.y)),H.map===null||A===!0||F===!0){const D=this.type!==hn?{minFilter:Ct,magFilter:Ct}:{};H.map!==null&&H.map.dispose(),H.map=new Zn(n.x,n.y,D),H.map.texture.name=ee.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const G=H.getViewportCount();for(let D=0;D<G;D++){const W=H.getViewport(D);s.set(i.x*W.x,i.y*W.y,i.x*W.z,i.y*W.w),C.viewport(s),H.updateMatrices(ee,D),r=H.getFrustum(),E(T,P,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===hn&&y(H,P),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(M,v,k)};function y(R,T){const P=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zn(n.x,n.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(T,null,P,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(T,null,P,d,_,null)}function S(R,T,P,M){let v=null;const k=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)v=k;else if(v=P.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const C=v.uuid,A=T.uuid;let F=c[C];F===void 0&&(F={},c[C]=F);let z=F[A];z===void 0&&(z=v.clone(),F[A]=z,T.addEventListener("dispose",U)),v=z}if(v.visible=T.visible,v.wireframe=T.wireframe,M===hn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const C=a.properties.get(v);C.light=P}return v}function E(R,T,P,M,v){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===hn)&&(!R.frustumCulled||r.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const A=e.update(R),F=R.material;if(Array.isArray(F)){const z=A.groups;for(let q=0,ee=z.length;q<ee;q++){const H=z[q],X=F[H.materialIndex];if(X&&X.visible){const G=S(R,X,M,v);R.onBeforeShadow(a,R,T,P,A,G,H),a.renderBufferDirect(P,null,A,G,R,H),R.onAfterShadow(a,R,T,P,A,G,H)}}}else if(F.visible){const z=S(R,F,M,v);R.onBeforeShadow(a,R,T,P,A,z,null),a.renderBufferDirect(P,null,A,z,R,null),R.onAfterShadow(a,R,T,P,A,z,null)}}const C=R.children;for(let A=0,F=C.length;A<F;A++)E(C[A],T,P,M,v)}function U(R){R.target.removeEventListener("dispose",U);for(const P in c){const M=c[P],v=R.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}function ym(a){function e(){let L=!1;const de=new lt;let le=null;const ye=new lt(0,0,0,0);return{setMask:function(Ne){le!==Ne&&!L&&(a.colorMask(Ne,Ne,Ne,Ne),le=Ne)},setLocked:function(Ne){L=Ne},setClear:function(Ne,Oe,De,Ve,We){We===!0&&(Ne*=Ve,Oe*=Ve,De*=Ve),de.set(Ne,Oe,De,Ve),ye.equals(de)===!1&&(a.clearColor(Ne,Oe,De,Ve),ye.copy(de))},reset:function(){L=!1,le=null,ye.set(-1,0,0,0)}}}function t(){let L=!1,de=null,le=null,ye=null;return{setTest:function(Ne){Ne?Z(a.DEPTH_TEST):Y(a.DEPTH_TEST)},setMask:function(Ne){de!==Ne&&!L&&(a.depthMask(Ne),de=Ne)},setFunc:function(Ne){if(le!==Ne){switch(Ne){case zc:a.depthFunc(a.NEVER);break;case Vc:a.depthFunc(a.ALWAYS);break;case Hc:a.depthFunc(a.LESS);break;case Yr:a.depthFunc(a.LEQUAL);break;case Wc:a.depthFunc(a.EQUAL);break;case Xc:a.depthFunc(a.GEQUAL);break;case Yc:a.depthFunc(a.GREATER);break;case qc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}le=Ne}},setLocked:function(Ne){L=Ne},setClear:function(Ne){ye!==Ne&&(a.clearDepth(Ne),ye=Ne)},reset:function(){L=!1,de=null,le=null,ye=null}}}function r(){let L=!1,de=null,le=null,ye=null,Ne=null,Oe=null,De=null,Ve=null,We=null;return{setTest:function(Ue){L||(Ue?Z(a.STENCIL_TEST):Y(a.STENCIL_TEST))},setMask:function(Ue){de!==Ue&&!L&&(a.stencilMask(Ue),de=Ue)},setFunc:function(Ue,je,et){(le!==Ue||ye!==je||Ne!==et)&&(a.stencilFunc(Ue,je,et),le=Ue,ye=je,Ne=et)},setOp:function(Ue,je,et){(Oe!==Ue||De!==je||Ve!==et)&&(a.stencilOp(Ue,je,et),Oe=Ue,De=je,Ve=et)},setLocked:function(Ue){L=Ue},setClear:function(Ue){We!==Ue&&(a.clearStencil(Ue),We=Ue)},reset:function(){L=!1,de=null,le=null,ye=null,Ne=null,Oe=null,De=null,Ve=null,We=null}}}const n=new e,i=new t,s=new r,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,y=null,S=null,E=null,U=null,R=new Ke(0,0,0),T=0,P=!1,M=null,v=null,k=null,C=null,A=null;const F=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const ee=a.getParameter(a.VERSION);ee.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),z=q>=1):ee.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),z=q>=2);let H=null,X={};const G=a.getParameter(a.SCISSOR_BOX),D=a.getParameter(a.VIEWPORT),W=new lt().fromArray(G),J=new lt().fromArray(D);function I(L,de,le,ye){const Ne=new Uint8Array(4),Oe=a.createTexture();a.bindTexture(L,Oe),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let De=0;De<le;De++)L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY?a.texImage3D(de,0,a.RGBA,1,1,ye,0,a.RGBA,a.UNSIGNED_BYTE,Ne):a.texImage2D(de+De,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ne);return Oe}const O={};O[a.TEXTURE_2D]=I(a.TEXTURE_2D,a.TEXTURE_2D,1),O[a.TEXTURE_CUBE_MAP]=I(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[a.TEXTURE_2D_ARRAY]=I(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),O[a.TEXTURE_3D]=I(a.TEXTURE_3D,a.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),s.setClear(0),Z(a.DEPTH_TEST),i.setFunc(Yr),me(!1),Te(ks),Z(a.CULL_FACE),Me(wn);function Z(L){c[L]!==!0&&(a.enable(L),c[L]=!0)}function Y(L){c[L]!==!1&&(a.disable(L),c[L]=!1)}function ae(L,de){return u[L]!==de?(a.bindFramebuffer(L,de),u[L]=de,L===a.DRAW_FRAMEBUFFER&&(u[a.FRAMEBUFFER]=de),L===a.FRAMEBUFFER&&(u[a.DRAW_FRAMEBUFFER]=de),!0):!1}function fe(L,de){let le=f,ye=!1;if(L){le=h.get(de),le===void 0&&(le=[],h.set(de,le));const Ne=L.textures;if(le.length!==Ne.length||le[0]!==a.COLOR_ATTACHMENT0){for(let Oe=0,De=Ne.length;Oe<De;Oe++)le[Oe]=a.COLOR_ATTACHMENT0+Oe;le.length=Ne.length,ye=!0}}else le[0]!==a.BACK&&(le[0]=a.BACK,ye=!0);ye&&a.drawBuffers(le)}function _e(L){return d!==L?(a.useProgram(L),d=L,!0):!1}const N={[Wn]:a.FUNC_ADD,[Tc]:a.FUNC_SUBTRACT,[bc]:a.FUNC_REVERSE_SUBTRACT};N[Ac]=a.MIN,N[wc]=a.MAX;const oe={[Rc]:a.ZERO,[Cc]:a.ONE,[Uc]:a.SRC_COLOR,[as]:a.SRC_ALPHA,[Nc]:a.SRC_ALPHA_SATURATE,[Ic]:a.DST_COLOR,[Lc]:a.DST_ALPHA,[Pc]:a.ONE_MINUS_SRC_COLOR,[ss]:a.ONE_MINUS_SRC_ALPHA,[Fc]:a.ONE_MINUS_DST_COLOR,[Dc]:a.ONE_MINUS_DST_ALPHA,[Oc]:a.CONSTANT_COLOR,[Bc]:a.ONE_MINUS_CONSTANT_COLOR,[kc]:a.CONSTANT_ALPHA,[Gc]:a.ONE_MINUS_CONSTANT_ALPHA};function Me(L,de,le,ye,Ne,Oe,De,Ve,We,Ue){if(L===wn){g===!0&&(Y(a.BLEND),g=!1);return}if(g===!1&&(Z(a.BLEND),g=!0),L!==Ec){if(L!==_||Ue!==P){if((p!==Wn||S!==Wn)&&(a.blendEquation(a.FUNC_ADD),p=Wn,S=Wn),Ue)switch(L){case Ei:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Gs:a.blendFunc(a.ONE,a.ONE);break;case zs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Vs:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ei:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Gs:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case zs:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Vs:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,y=null,E=null,U=null,R.set(0,0,0),T=0,_=L,P=Ue}return}Ne=Ne||de,Oe=Oe||le,De=De||ye,(de!==p||Ne!==S)&&(a.blendEquationSeparate(N[de],N[Ne]),p=de,S=Ne),(le!==m||ye!==y||Oe!==E||De!==U)&&(a.blendFuncSeparate(oe[le],oe[ye],oe[Oe],oe[De]),m=le,y=ye,E=Oe,U=De),(Ve.equals(R)===!1||We!==T)&&(a.blendColor(Ve.r,Ve.g,Ve.b,We),R.copy(Ve),T=We),_=L,P=!1}function Pe(L,de){L.side===Kt?Y(a.CULL_FACE):Z(a.CULL_FACE);let le=L.side===yt;de&&(le=!le),me(le),L.blending===Ei&&L.transparent===!1?Me(wn):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),i.setFunc(L.depthFunc),i.setTest(L.depthTest),i.setMask(L.depthWrite),n.setMask(L.colorWrite);const ye=L.stencilWrite;s.setTest(ye),ye&&(s.setMask(L.stencilWriteMask),s.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),s.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),x(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(a.SAMPLE_ALPHA_TO_COVERAGE):Y(a.SAMPLE_ALPHA_TO_COVERAGE)}function me(L){M!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),M=L)}function Te(L){L!==Sc?(Z(a.CULL_FACE),L!==v&&(L===ks?a.cullFace(a.BACK):L===Mc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Y(a.CULL_FACE),v=L}function w(L){L!==k&&(z&&a.lineWidth(L),k=L)}function x(L,de,le){L?(Z(a.POLYGON_OFFSET_FILL),(C!==de||A!==le)&&(a.polygonOffset(de,le),C=de,A=le)):Y(a.POLYGON_OFFSET_FILL)}function V(L){L?Z(a.SCISSOR_TEST):Y(a.SCISSOR_TEST)}function j(L){L===void 0&&(L=a.TEXTURE0+F-1),H!==L&&(a.activeTexture(L),H=L)}function B(L,de,le){le===void 0&&(H===null?le=a.TEXTURE0+F-1:le=H);let ye=X[le];ye===void 0&&(ye={type:void 0,texture:void 0},X[le]=ye),(ye.type!==L||ye.texture!==de)&&(H!==le&&(a.activeTexture(le),H=le),a.bindTexture(L,de||O[L]),ye.type=L,ye.texture=de)}function Q(){const L=X[H];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){W.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),W.copy(L))}function Re(L){J.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function Se(L,de){let le=l.get(de);le===void 0&&(le=new WeakMap,l.set(de,le));let ye=le.get(L);ye===void 0&&(ye=a.getUniformBlockIndex(de,L.name),le.set(L,ye))}function Ie(L,de){const ye=l.get(de).get(L);o.get(de)!==ye&&(a.uniformBlockBinding(de,ye,L.__bindingPointIndex),o.set(de,ye))}function Ee(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),c={},H=null,X={},u={},h=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,y=null,S=null,E=null,U=null,R=new Ke(0,0,0),T=0,P=!1,M=null,v=null,k=null,C=null,A=null,W.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),n.reset(),i.reset(),s.reset()}return{buffers:{color:n,depth:i,stencil:s},enable:Z,disable:Y,bindFramebuffer:ae,drawBuffers:fe,useProgram:_e,setBlending:Me,setMaterial:Pe,setFlipSided:me,setCullFace:Te,setLineWidth:w,setPolygonOffset:x,setScissorTest:V,activeTexture:j,bindTexture:B,unbindTexture:Q,compressedTexImage2D:ce,compressedTexImage3D:$,texImage2D:xe,texImage3D:Le,updateUBOMapping:Se,uniformBlockBinding:Ie,texStorage2D:ve,texStorage3D:ge,texSubImage2D:ue,texSubImage3D:we,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:be,viewport:Re,reset:Ee}}function Em(a,e,t,r,n,i,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return d?new OffscreenCanvas(w,x):tr("canvas")}function _(w,x,V){let j=1;const B=Te(w);if((B.width>V||B.height>V)&&(j=V/Math.max(B.width,B.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(j*B.width),ce=Math.floor(j*B.height);h===void 0&&(h=g(Q,ce));const $=x?g(Q,ce):h;return $.width=Q,$.height=ce,$.getContext("2d").drawImage(w,0,0,Q,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+Q+"x"+ce+")."),$}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==Ct&&w.minFilter!==It}function m(w){a.generateMipmap(w)}function y(w,x,V,j,B=!1){if(w!==null){if(a[w]!==void 0)return a[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=x;if(x===a.RED&&(V===a.FLOAT&&(Q=a.R32F),V===a.HALF_FLOAT&&(Q=a.R16F),V===a.UNSIGNED_BYTE&&(Q=a.R8)),x===a.RED_INTEGER&&(V===a.UNSIGNED_BYTE&&(Q=a.R8UI),V===a.UNSIGNED_SHORT&&(Q=a.R16UI),V===a.UNSIGNED_INT&&(Q=a.R32UI),V===a.BYTE&&(Q=a.R8I),V===a.SHORT&&(Q=a.R16I),V===a.INT&&(Q=a.R32I)),x===a.RG&&(V===a.FLOAT&&(Q=a.RG32F),V===a.HALF_FLOAT&&(Q=a.RG16F),V===a.UNSIGNED_BYTE&&(Q=a.RG8)),x===a.RG_INTEGER&&(V===a.UNSIGNED_BYTE&&(Q=a.RG8UI),V===a.UNSIGNED_SHORT&&(Q=a.RG16UI),V===a.UNSIGNED_INT&&(Q=a.RG32UI),V===a.BYTE&&(Q=a.RG8I),V===a.SHORT&&(Q=a.RG16I),V===a.INT&&(Q=a.RG32I)),x===a.RGB&&V===a.UNSIGNED_INT_5_9_9_9_REV&&(Q=a.RGB9_E5),x===a.RGBA){const ce=B?jr:$e.getTransfer(j);V===a.FLOAT&&(Q=a.RGBA32F),V===a.HALF_FLOAT&&(Q=a.RGBA16F),V===a.UNSIGNED_BYTE&&(Q=ce===tt?a.SRGB8_ALPHA8:a.RGBA8),V===a.UNSIGNED_SHORT_4_4_4_4&&(Q=a.RGBA4),V===a.UNSIGNED_SHORT_5_5_5_1&&(Q=a.RGB5_A1)}return(Q===a.R16F||Q===a.R32F||Q===a.RG16F||Q===a.RG32F||Q===a.RGBA16F||Q===a.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ct&&w.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function E(w){const x=w.target;x.removeEventListener("dispose",E),R(x),x.isVideoTexture&&u.delete(x)}function U(w){const x=w.target;x.removeEventListener("dispose",U),P(x)}function R(w){const x=r.get(w);if(x.__webglInit===void 0)return;const V=w.source,j=f.get(V);if(j){const B=j[x.__cacheKey];B.usedTimes--,B.usedTimes===0&&T(w),Object.keys(j).length===0&&f.delete(V)}r.remove(w)}function T(w){const x=r.get(w);a.deleteTexture(x.__webglTexture);const V=w.source,j=f.get(V);delete j[x.__cacheKey],s.memory.textures--}function P(w){const x=r.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let B=0;B<x.__webglFramebuffer[j].length;B++)a.deleteFramebuffer(x.__webglFramebuffer[j][B]);else a.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)a.deleteFramebuffer(x.__webglFramebuffer[j]);else a.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&a.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&a.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&a.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=w.textures;for(let j=0,B=V.length;j<B;j++){const Q=r.get(V[j]);Q.__webglTexture&&(a.deleteTexture(Q.__webglTexture),s.memory.textures--),r.remove(V[j])}r.remove(w)}let M=0;function v(){M=0}function k(){const w=M;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),M+=1,w}function C(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function A(w,x){const V=r.get(w);if(w.isVideoTexture&&Pe(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,w,x);return}}t.bindTexture(a.TEXTURE_2D,V.__webglTexture,a.TEXTURE0+x)}function F(w,x){const V=r.get(w);if(w.version>0&&V.__version!==w.version){W(V,w,x);return}t.bindTexture(a.TEXTURE_2D_ARRAY,V.__webglTexture,a.TEXTURE0+x)}function z(w,x){const V=r.get(w);if(w.version>0&&V.__version!==w.version){W(V,w,x);return}t.bindTexture(a.TEXTURE_3D,V.__webglTexture,a.TEXTURE0+x)}function q(w,x){const V=r.get(w);if(w.version>0&&V.__version!==w.version){J(V,w,x);return}t.bindTexture(a.TEXTURE_CUBE_MAP,V.__webglTexture,a.TEXTURE0+x)}const ee={[cs]:a.REPEAT,[Yn]:a.CLAMP_TO_EDGE,[us]:a.MIRRORED_REPEAT},H={[Ct]:a.NEAREST,[iu]:a.NEAREST_MIPMAP_NEAREST,[mr]:a.NEAREST_MIPMAP_LINEAR,[It]:a.LINEAR,[xa]:a.LINEAR_MIPMAP_NEAREST,[qn]:a.LINEAR_MIPMAP_LINEAR},X={[_u]:a.NEVER,[Eu]:a.ALWAYS,[vu]:a.LESS,[kl]:a.LEQUAL,[xu]:a.EQUAL,[yu]:a.GEQUAL,[Su]:a.GREATER,[Mu]:a.NOTEQUAL};function G(w,x){if(x.type===An&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===It||x.magFilter===xa||x.magFilter===mr||x.magFilter===qn||x.minFilter===It||x.minFilter===xa||x.minFilter===mr||x.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(w,a.TEXTURE_WRAP_S,ee[x.wrapS]),a.texParameteri(w,a.TEXTURE_WRAP_T,ee[x.wrapT]),(w===a.TEXTURE_3D||w===a.TEXTURE_2D_ARRAY)&&a.texParameteri(w,a.TEXTURE_WRAP_R,ee[x.wrapR]),a.texParameteri(w,a.TEXTURE_MAG_FILTER,H[x.magFilter]),a.texParameteri(w,a.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(a.texParameteri(w,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(w,a.TEXTURE_COMPARE_FUNC,X[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==mr&&x.minFilter!==qn||x.type===An&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");a.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function D(w,x){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",E));const j=x.source;let B=f.get(j);B===void 0&&(B={},f.set(j,B));const Q=C(x);if(Q!==w.__cacheKey){B[Q]===void 0&&(B[Q]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,V=!0),B[Q].usedTimes++;const ce=B[w.__cacheKey];ce!==void 0&&(B[w.__cacheKey].usedTimes--,ce.usedTimes===0&&T(x)),w.__cacheKey=Q,w.__webglTexture=B[Q].texture}return V}function W(w,x,V){let j=a.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=a.TEXTURE_3D);const B=D(w,x),Q=x.source;t.bindTexture(j,w.__webglTexture,a.TEXTURE0+V);const ce=r.get(Q);if(Q.version!==ce.__version||B===!0){t.activeTexture(a.TEXTURE0+V);const $=$e.getPrimaries($e.workingColorSpace),ue=x.colorSpace===bn?null:$e.getPrimaries(x.colorSpace),we=x.colorSpace===bn||$===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=_(x.image,!1,n.maxTextureSize);se=me(x,se);const he=i.convert(x.format,x.colorSpace),ve=i.convert(x.type);let ge=y(x.internalFormat,he,ve,x.colorSpace,x.isVideoTexture);G(j,x);let xe;const Le=x.mipmaps,be=x.isVideoTexture!==!0&&ge!==Ol,Re=ce.__version===void 0||B===!0,Se=Q.dataReady,Ie=S(x,se);if(x.isDepthTexture)ge=a.DEPTH_COMPONENT16,x.type===An?ge=a.DEPTH_COMPONENT32F:x.type===Ri?ge=a.DEPTH_COMPONENT24:x.type===ir&&(ge=a.DEPTH24_STENCIL8),Re&&(be?t.texStorage2D(a.TEXTURE_2D,1,ge,se.width,se.height):t.texImage2D(a.TEXTURE_2D,0,ge,se.width,se.height,0,he,ve,null));else if(x.isDataTexture)if(Le.length>0){be&&Re&&t.texStorage2D(a.TEXTURE_2D,Ie,ge,Le[0].width,Le[0].height);for(let Ee=0,L=Le.length;Ee<L;Ee++)xe=Le[Ee],be?Se&&t.texSubImage2D(a.TEXTURE_2D,Ee,0,0,xe.width,xe.height,he,ve,xe.data):t.texImage2D(a.TEXTURE_2D,Ee,ge,xe.width,xe.height,0,he,ve,xe.data);x.generateMipmaps=!1}else be?(Re&&t.texStorage2D(a.TEXTURE_2D,Ie,ge,se.width,se.height),Se&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,se.width,se.height,he,ve,se.data)):t.texImage2D(a.TEXTURE_2D,0,ge,se.width,se.height,0,he,ve,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){be&&Re&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,ge,Le[0].width,Le[0].height,se.depth);for(let Ee=0,L=Le.length;Ee<L;Ee++)xe=Le[Ee],x.format!==tn?he!==null?be?Se&&t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,xe.width,xe.height,se.depth,he,xe.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ee,ge,xe.width,xe.height,se.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Se&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,Ee,0,0,0,xe.width,xe.height,se.depth,he,ve,xe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,Ee,ge,xe.width,xe.height,se.depth,0,he,ve,xe.data)}else{be&&Re&&t.texStorage2D(a.TEXTURE_2D,Ie,ge,Le[0].width,Le[0].height);for(let Ee=0,L=Le.length;Ee<L;Ee++)xe=Le[Ee],x.format!==tn?he!==null?be?Se&&t.compressedTexSubImage2D(a.TEXTURE_2D,Ee,0,0,xe.width,xe.height,he,xe.data):t.compressedTexImage2D(a.TEXTURE_2D,Ee,ge,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Se&&t.texSubImage2D(a.TEXTURE_2D,Ee,0,0,xe.width,xe.height,he,ve,xe.data):t.texImage2D(a.TEXTURE_2D,Ee,ge,xe.width,xe.height,0,he,ve,xe.data)}else if(x.isDataArrayTexture)be?(Re&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ie,ge,se.width,se.height,se.depth),Se&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,ve,se.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,ge,se.width,se.height,se.depth,0,he,ve,se.data);else if(x.isData3DTexture)be?(Re&&t.texStorage3D(a.TEXTURE_3D,Ie,ge,se.width,se.height,se.depth),Se&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,ve,se.data)):t.texImage3D(a.TEXTURE_3D,0,ge,se.width,se.height,se.depth,0,he,ve,se.data);else if(x.isFramebufferTexture){if(Re)if(be)t.texStorage2D(a.TEXTURE_2D,Ie,ge,se.width,se.height);else{let Ee=se.width,L=se.height;for(let de=0;de<Ie;de++)t.texImage2D(a.TEXTURE_2D,de,ge,Ee,L,0,he,ve,null),Ee>>=1,L>>=1}}else if(Le.length>0){if(be&&Re){const Ee=Te(Le[0]);t.texStorage2D(a.TEXTURE_2D,Ie,ge,Ee.width,Ee.height)}for(let Ee=0,L=Le.length;Ee<L;Ee++)xe=Le[Ee],be?Se&&t.texSubImage2D(a.TEXTURE_2D,Ee,0,0,he,ve,xe):t.texImage2D(a.TEXTURE_2D,Ee,ge,he,ve,xe);x.generateMipmaps=!1}else if(be){if(Re){const Ee=Te(se);t.texStorage2D(a.TEXTURE_2D,Ie,ge,Ee.width,Ee.height)}Se&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,he,ve,se)}else t.texImage2D(a.TEXTURE_2D,0,ge,he,ve,se);p(x)&&m(j),ce.__version=Q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function J(w,x,V){if(x.image.length!==6)return;const j=D(w,x),B=x.source;t.bindTexture(a.TEXTURE_CUBE_MAP,w.__webglTexture,a.TEXTURE0+V);const Q=r.get(B);if(B.version!==Q.__version||j===!0){t.activeTexture(a.TEXTURE0+V);const ce=$e.getPrimaries($e.workingColorSpace),$=x.colorSpace===bn?null:$e.getPrimaries(x.colorSpace),ue=x.colorSpace===bn||ce===$?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,x.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,x.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,he=[];for(let L=0;L<6;L++)!we&&!se?he[L]=_(x.image[L],!0,n.maxCubemapSize):he[L]=se?x.image[L].image:x.image[L],he[L]=me(x,he[L]);const ve=he[0],ge=i.convert(x.format,x.colorSpace),xe=i.convert(x.type),Le=y(x.internalFormat,ge,xe,x.colorSpace),be=x.isVideoTexture!==!0,Re=Q.__version===void 0||j===!0,Se=B.dataReady;let Ie=S(x,ve);G(a.TEXTURE_CUBE_MAP,x);let Ee;if(we){be&&Re&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,Le,ve.width,ve.height);for(let L=0;L<6;L++){Ee=he[L].mipmaps;for(let de=0;de<Ee.length;de++){const le=Ee[de];x.format!==tn?ge!==null?be?Se&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de,Le,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de,0,0,le.width,le.height,ge,xe,le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de,Le,le.width,le.height,0,ge,xe,le.data)}}}else{if(Ee=x.mipmaps,be&&Re){Ee.length>0&&Ie++;const L=Te(he[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,Le,L.width,L.height)}for(let L=0;L<6;L++)if(se){be?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,he[L].width,he[L].height,ge,xe,he[L].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Le,he[L].width,he[L].height,0,ge,xe,he[L].data);for(let de=0;de<Ee.length;de++){const ye=Ee[de].image[L].image;be?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de+1,0,0,ye.width,ye.height,ge,xe,ye.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de+1,Le,ye.width,ye.height,0,ge,xe,ye.data)}}else{be?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ge,xe,he[L]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Le,ge,xe,he[L]);for(let de=0;de<Ee.length;de++){const le=Ee[de];be?Se&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de+1,0,0,ge,xe,le.image[L]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+L,de+1,Le,ge,xe,le.image[L])}}}p(x)&&m(a.TEXTURE_CUBE_MAP),Q.__version=B.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function I(w,x,V,j,B,Q){const ce=i.convert(V.format,V.colorSpace),$=i.convert(V.type),ue=y(V.internalFormat,ce,$,V.colorSpace);if(!r.get(x).__hasExternalTextures){const se=Math.max(1,x.width>>Q),he=Math.max(1,x.height>>Q);B===a.TEXTURE_3D||B===a.TEXTURE_2D_ARRAY?t.texImage3D(B,Q,ue,se,he,x.depth,0,ce,$,null):t.texImage2D(B,Q,ue,se,he,0,ce,$,null)}t.bindFramebuffer(a.FRAMEBUFFER,w),Me(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,B,r.get(V).__webglTexture,0,oe(x)):(B===a.TEXTURE_2D||B>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,B,r.get(V).__webglTexture,Q),t.bindFramebuffer(a.FRAMEBUFFER,null)}function O(w,x,V){if(a.bindRenderbuffer(a.RENDERBUFFER,w),x.depthBuffer&&!x.stencilBuffer){let j=a.DEPTH_COMPONENT24;if(V||Me(x)){const B=x.depthTexture;B&&B.isDepthTexture&&(B.type===An?j=a.DEPTH_COMPONENT32F:B.type===Ri&&(j=a.DEPTH_COMPONENT24));const Q=oe(x);Me(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Q,j,x.width,x.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,Q,j,x.width,x.height)}else a.renderbufferStorage(a.RENDERBUFFER,j,x.width,x.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,w)}else if(x.depthBuffer&&x.stencilBuffer){const j=oe(x);V&&Me(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,j,a.DEPTH24_STENCIL8,x.width,x.height):Me(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,j,a.DEPTH24_STENCIL8,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,x.width,x.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,w)}else{const j=x.textures;for(let B=0;B<j.length;B++){const Q=j[B],ce=i.convert(Q.format,Q.colorSpace),$=i.convert(Q.type),ue=y(Q.internalFormat,ce,$,Q.colorSpace),we=oe(x);V&&Me(x)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,ue,x.width,x.height):Me(x)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,ue,x.width,x.height):a.renderbufferStorage(a.RENDERBUFFER,ue,x.width,x.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Z(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),A(x.depthTexture,0);const j=r.get(x.depthTexture).__webglTexture,B=oe(x);if(x.depthTexture.format===Ti)Me(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0,B):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0);else if(x.depthTexture.format===er)Me(x)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0,B):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Y(w){const x=r.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(x.__webglFramebuffer,w)}else if(V){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=a.createRenderbuffer(),O(x.__webglDepthbuffer[j],w,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=a.createRenderbuffer(),O(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function ae(w,x,V){const j=r.get(w);x!==void 0&&I(j.__webglFramebuffer,w,w.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),V!==void 0&&Y(w)}function fe(w){const x=w.texture,V=r.get(w),j=r.get(x);w.addEventListener("dispose",U);const B=w.textures,Q=w.isWebGLCubeRenderTarget===!0,ce=B.length>1;if(ce||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=x.version,s.memory.textures++),Q){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let ue=0;ue<x.mipmaps.length;ue++)V.__webglFramebuffer[$][ue]=a.createFramebuffer()}else V.__webglFramebuffer[$]=a.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)V.__webglFramebuffer[$]=a.createFramebuffer()}else V.__webglFramebuffer=a.createFramebuffer();if(ce)for(let $=0,ue=B.length;$<ue;$++){const we=r.get(B[$]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),s.memory.textures++)}if(w.samples>0&&Me(w)===!1){V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<B.length;$++){const ue=B[$];V.__webglColorRenderbuffer[$]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const we=i.convert(ue.format,ue.colorSpace),se=i.convert(ue.type),he=y(ue.internalFormat,we,se,ue.colorSpace,w.isXRRenderTarget===!0),ve=oe(w);a.renderbufferStorageMultisample(a.RENDERBUFFER,ve,he,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+$,a.RENDERBUFFER,V.__webglColorRenderbuffer[$])}a.bindRenderbuffer(a.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),O(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Q){t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),G(a.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)I(V.__webglFramebuffer[$][ue],w,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+$,ue);else I(V.__webglFramebuffer[$],w,x,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(x)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,ue=B.length;$<ue;$++){const we=B[$],se=r.get(we);t.bindTexture(a.TEXTURE_2D,se.__webglTexture),G(a.TEXTURE_2D,we),I(V.__webglFramebuffer,w,we,a.COLOR_ATTACHMENT0+$,a.TEXTURE_2D,0),p(we)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let $=a.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture($,j.__webglTexture),G($,x),x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)I(V.__webglFramebuffer[ue],w,x,a.COLOR_ATTACHMENT0,$,ue);else I(V.__webglFramebuffer,w,x,a.COLOR_ATTACHMENT0,$,0);p(x)&&m($),t.unbindTexture()}w.depthBuffer&&Y(w)}function _e(w){const x=w.textures;for(let V=0,j=x.length;V<j;V++){const B=x[V];if(p(B)){const Q=w.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,ce=r.get(B).__webglTexture;t.bindTexture(Q,ce),m(Q),t.unbindTexture()}}}function N(w){if(w.samples>0&&Me(w)===!1){const x=w.textures,V=w.width,j=w.height;let B=a.COLOR_BUFFER_BIT;const Q=[],ce=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,$=r.get(w),ue=x.length>1;if(ue)for(let we=0;we<x.length;we++)t.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,$.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let we=0;we<x.length;we++){Q.push(a.COLOR_ATTACHMENT0+we),w.depthBuffer&&Q.push(ce);const se=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(se===!1&&(w.depthBuffer&&(B|=a.DEPTH_BUFFER_BIT),w.stencilBuffer&&$.__isTransmissionRenderTarget!==!0&&(B|=a.STENCIL_BUFFER_BIT)),ue&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,$.__webglColorRenderbuffer[we]),se===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[ce]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[ce])),ue){const he=r.get(x[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,he,0)}a.blitFramebuffer(0,0,V,j,0,0,V,j,B,a.NEAREST),l&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let we=0;we<x.length;we++){t.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const se=r.get(x[we]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,$.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,se,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function oe(w){return Math.min(n.maxSamples,w.samples)}function Me(w){const x=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pe(w){const x=s.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function me(w,x){const V=w.colorSpace,j=w.format,B=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==Ln&&V!==bn&&($e.getTransfer(V)===tt?(j!==tn||B!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Te(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=v,this.setTexture2D=A,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=ae,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=I,this.useMultisampledRTT=Me}function Tm(a,e){function t(r,n=bn){let i;const s=$e.getTransfer(n);if(r===Cn)return a.UNSIGNED_BYTE;if(r===Ll)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Dl)return a.UNSIGNED_SHORT_5_5_5_1;if(r===su)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ru)return a.BYTE;if(r===au)return a.SHORT;if(r===Ul)return a.UNSIGNED_SHORT;if(r===Pl)return a.INT;if(r===Ri)return a.UNSIGNED_INT;if(r===An)return a.FLOAT;if(r===qr)return a.HALF_FLOAT;if(r===ou)return a.ALPHA;if(r===lu)return a.RGB;if(r===tn)return a.RGBA;if(r===cu)return a.LUMINANCE;if(r===uu)return a.LUMINANCE_ALPHA;if(r===Ti)return a.DEPTH_COMPONENT;if(r===er)return a.DEPTH_STENCIL;if(r===hu)return a.RED;if(r===Il)return a.RED_INTEGER;if(r===fu)return a.RG;if(r===Fl)return a.RG_INTEGER;if(r===Nl)return a.RGBA_INTEGER;if(r===Sa||r===Ma||r===ya||r===Ea)if(s===tt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Sa)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ma)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ya)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ea)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Sa)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ma)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ya)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ea)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hs||r===Ws||r===Xs||r===Ys)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===Hs)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ws)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xs)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ys)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ol)return i=e.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qs||r===js)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===qs)return s===tt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===js)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ks||r===Zs||r===Js||r===Qs||r===$s||r===eo||r===to||r===no||r===io||r===ro||r===ao||r===so||r===oo||r===lo)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===Ks)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zs)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Js)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qs)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$s)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eo)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===to)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===no)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===io)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ro)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ao)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===so)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oo)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lo)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ta||r===co||r===uo)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===Ta)return s===tt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===co)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===du||r===ho||r===fo||r===po)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Ta)return i.COMPRESSED_RED_RGTC1_EXT;if(r===ho)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===po)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ir?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:t}}class bm extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jn extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Am={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,r),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new jn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rm=`
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

}`;class Cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const n=new xt,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const r=t.cameras[0].viewport,n=new Pn({vertexShader:wm,fragmentShader:Rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new mt(new nn(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Um extends Ui{constructor(e,t){super();const r=this;let n=null,i=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Cm,p=t.getContextAttributes();let m=null,y=null;const S=[],E=[],U=new qe;let R=null;const T=new Gt;T.layers.enable(1),T.viewport=new lt;const P=new Gt;P.layers.enable(2),P.viewport=new lt;const M=[T,P],v=new bm;v.layers.enable(1),v.layers.enable(2);let k=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=S[I];return O===void 0&&(O=new Ja,S[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=S[I];return O===void 0&&(O=new Ja,S[I]=O),O.getGripSpace()},this.getHand=function(I){let O=S[I];return O===void 0&&(O=new Ja,S[I]=O),O.getHandSpace()};function A(I){const O=E.indexOf(I.inputSource);if(O===-1)return;const Z=S[O];Z!==void 0&&(Z.update(I.inputSource,I.frame,c||s),Z.dispatchEvent({type:I.type,data:I.inputSource}))}function F(){n.removeEventListener("select",A),n.removeEventListener("selectstart",A),n.removeEventListener("selectend",A),n.removeEventListener("squeeze",A),n.removeEventListener("squeezestart",A),n.removeEventListener("squeezeend",A),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",z);for(let I=0;I<S.length;I++){const O=E[I];O!==null&&(E[I]=null,S[I].disconnect(O))}k=null,C=null,_.reset(),e.setRenderTarget(m),d=null,f=null,h=null,n=null,y=null,J.stop(),r.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){i=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(I){if(n=I,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",A),n.addEventListener("selectstart",A),n.addEventListener("selectend",A),n.addEventListener("squeeze",A),n.addEventListener("squeezestart",A),n.addEventListener("squeezeend",A),n.addEventListener("end",F),n.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),n.renderState.layers===void 0){const O={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,O),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Zn(d.framebufferWidth,d.framebufferHeight,{format:tn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let O=null,Z=null,Y=null;p.depth&&(Y=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=p.stencil?er:Ti,Z=p.stencil?ir:Ri);const ae={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:i};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(ae),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Zn(f.textureWidth,f.textureHeight,{format:tn,type:Cn,depthTexture:new $l(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const fe=e.properties.get(y);fe.__ignoreDepthValues=f.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),J.setContext(n),J.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function z(I){for(let O=0;O<I.removed.length;O++){const Z=I.removed[O],Y=E.indexOf(Z);Y>=0&&(E[Y]=null,S[Y].disconnect(Z))}for(let O=0;O<I.added.length;O++){const Z=I.added[O];let Y=E.indexOf(Z);if(Y===-1){for(let fe=0;fe<S.length;fe++)if(fe>=E.length){E.push(Z),Y=fe;break}else if(E[fe]===null){E[fe]=Z,Y=fe;break}if(Y===-1)break}const ae=S[Y];ae&&ae.connect(Z)}}const q=new te,ee=new te;function H(I,O,Z){q.setFromMatrixPosition(O.matrixWorld),ee.setFromMatrixPosition(Z.matrixWorld);const Y=q.distanceTo(ee),ae=O.projectionMatrix.elements,fe=Z.projectionMatrix.elements,_e=ae[14]/(ae[10]-1),N=ae[14]/(ae[10]+1),oe=(ae[9]+1)/ae[5],Me=(ae[9]-1)/ae[5],Pe=(ae[8]-1)/ae[0],me=(fe[8]+1)/fe[0],Te=_e*Pe,w=_e*me,x=Y/(-Pe+me),V=x*-Pe;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(V),I.translateZ(x),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const j=_e+x,B=N+x,Q=Te-V,ce=w+(Y-V),$=oe*N/B*j,ue=Me*N/B*j;I.projectionMatrix.makePerspective(Q,ce,$,ue,j,B),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function X(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(n===null)return;_.texture!==null&&(I.near=_.depthNear,I.far=_.depthFar),v.near=P.near=T.near=I.near,v.far=P.far=T.far=I.far,(k!==v.near||C!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),k=v.near,C=v.far,T.near=k,T.far=C,P.near=k,P.far=C,T.updateProjectionMatrix(),P.updateProjectionMatrix(),I.updateProjectionMatrix());const O=I.parent,Z=v.cameras;X(v,O);for(let Y=0;Y<Z.length;Y++)X(Z[Y],O);Z.length===2?H(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),G(I,v,O)};function G(I,O,Z){Z===null?I.matrix.copy(O.matrixWorld):(I.matrix.copy(Z.matrixWorld),I.matrix.invert(),I.matrix.multiply(O.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=hs*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return _.texture!==null};let D=null;function W(I,O){if(u=O.getViewerPose(c||s),g=O,u!==null){const Z=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Y=!1;Z.length!==v.cameras.length&&(v.cameras.length=0,Y=!0);for(let fe=0;fe<Z.length;fe++){const _e=Z[fe];let N=null;if(d!==null)N=d.getViewport(_e);else{const Me=h.getViewSubImage(f,_e);N=Me.viewport,fe===0&&(e.setRenderTargetTextures(y,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(y))}let oe=M[fe];oe===void 0&&(oe=new Gt,oe.layers.enable(fe),oe.viewport=new lt,M[fe]=oe),oe.matrix.fromArray(_e.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(_e.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(N.x,N.y,N.width,N.height),fe===0&&(v.matrix.copy(oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Y===!0&&v.cameras.push(oe)}const ae=n.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const fe=h.getDepthInformation(Z[0]);fe&&fe.isValid&&fe.texture&&_.init(e,fe,n.renderState)}}for(let Z=0;Z<S.length;Z++){const Y=E[Z],ae=S[Z];Y!==null&&ae!==void 0&&ae.update(Y,O,c||s)}_.render(e,v),D&&D(I,O),O.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:O}),g=null}const J=new Ql;J.setAnimationLoop(W),this.setAnimationLoop=function(I){D=I},this.dispose=function(){}}}const Gn=new pn,Pm=new ot;function Lm(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function r(p,m){m.color.getRGB(p.fogColor.value,ql(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,S,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),u(p,m)):m.isMeshStandardMaterial?(i(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,E)):m.isMeshMatcapMaterial?(i(p,m),g(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),_(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===yt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===yt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),S=y.envMap,E=y.envMapRotation;if(S&&(p.envMap.value=S,Gn.copy(E),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),p.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(Gn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const U=a._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*U,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===yt&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function Dm(a,e,t,r){let n={},i={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const E=S.program;r.uniformBlockBinding(y,E)}function c(y,S){let E=n[y.id];E===void 0&&(g(y),E=u(y),n[y.id]=E,y.addEventListener("dispose",p));const U=S.program;r.updateUBOMapping(y,U);const R=e.render.frame;i[y.id]!==R&&(f(y),i[y.id]=R)}function u(y){const S=h();y.__bindingPointIndex=S;const E=a.createBuffer(),U=y.__size,R=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,U,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,S,E),E}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=n[y.id],E=y.uniforms,U=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,S);for(let R=0,T=E.length;R<T;R++){const P=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,v=P.length;M<v;M++){const k=P[M];if(d(k,R,M,U)===!0){const C=k.__offset,A=Array.isArray(k.value)?k.value:[k.value];let F=0;for(let z=0;z<A.length;z++){const q=A[z],ee=_(q);typeof q=="number"||typeof q=="boolean"?(k.__data[0]=q,a.bufferSubData(a.UNIFORM_BUFFER,C+F,k.__data)):q.isMatrix3?(k.__data[0]=q.elements[0],k.__data[1]=q.elements[1],k.__data[2]=q.elements[2],k.__data[3]=0,k.__data[4]=q.elements[3],k.__data[5]=q.elements[4],k.__data[6]=q.elements[5],k.__data[7]=0,k.__data[8]=q.elements[6],k.__data[9]=q.elements[7],k.__data[10]=q.elements[8],k.__data[11]=0):(q.toArray(k.__data,F),F+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,C,k.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,S,E,U){const R=y.value,T=S+"_"+E;if(U[T]===void 0)return typeof R=="number"||typeof R=="boolean"?U[T]=R:U[T]=R.clone(),!0;{const P=U[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return U[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(y){const S=y.uniforms;let E=0;const U=16;for(let T=0,P=S.length;T<P;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let v=0,k=M.length;v<k;v++){const C=M[v],A=Array.isArray(C.value)?C.value:[C.value];for(let F=0,z=A.length;F<z;F++){const q=A[F],ee=_(q),H=E%U;H!==0&&U-H<ee.boundary&&(E+=U-H),C.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=ee.storage}}}const R=E%U;return R>0&&(E+=U-R),y.__size=E,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const E=s.indexOf(S.__bindingPointIndex);s.splice(E,1),a.deleteBuffer(n[S.id]),delete n[S.id],delete i[S.id]}function m(){for(const y in n)a.deleteBuffer(n[y]);s=[],n={},i={}}return{bind:l,update:c,dispose:m}}class Im{constructor(e={}){const{canvas:t=bu(),context:r=null,depth:n=!0,stencil:i=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=s;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;const S=this;let E=!1,U=0,R=0,T=null,P=-1,M=null;const v=new lt,k=new lt;let C=null;const A=new Ke(0);let F=0,z=t.width,q=t.height,ee=1,H=null,X=null;const G=new lt(0,0,z,q),D=new lt(0,0,z,q);let W=!1;const J=new Jl;let I=!1,O=!1;const Z=new ot,Y=new qe,ae=new te,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return T===null?ee:1}let N=r;function oe(b,K){const ie=t.getContext(b,K);return ie!==null?ie:null}try{const b={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vs}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ye,!1),N===null){const K="webgl2";if(N=oe(K,b),N===null)throw oe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Me,Pe,me,Te,w,x,V,j,B,Q,ce,$,ue,we,se,he,ve,ge,xe,Le,be,Re,Se,Ie;function Ee(){Me=new Wd(N),Me.init(),Pe=new Od(N,Me,e),Re=new Tm(N,Me),me=new ym(N),Te=new qd(N),w=new um,x=new Em(N,Me,me,w,Pe,Re,Te),V=new kd(S),j=new Hd(S),B=new Ju(N),Se=new Fd(N,B),Q=new Xd(N,B,Te,Se),ce=new Kd(N,Q,B,Te),xe=new jd(N,Pe,x),he=new Bd(w),$=new cm(S,V,j,Me,Pe,Se,he),ue=new Lm(S,w),we=new fm,se=new vm(Me),ge=new Id(S,V,j,me,ce,f,l),ve=new Mm(S,ce,Pe),Ie=new Dm(N,Te,Pe,me),Le=new Nd(N,Me,Te),be=new Yd(N,Me,Te),Te.programs=$.programs,S.capabilities=Pe,S.extensions=Me,S.properties=w,S.renderLists=we,S.shadowMap=ve,S.state=me,S.info=Te}Ee();const L=new Um(S,N);this.xr=L,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(z,q,!1))},this.getSize=function(b){return b.set(z,q)},this.setSize=function(b,K,ie=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,q=K,t.width=Math.floor(b*ee),t.height=Math.floor(K*ee),ie===!0&&(t.style.width=b+"px",t.style.height=K+"px"),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(z*ee,q*ee).floor()},this.setDrawingBufferSize=function(b,K,ie){z=b,q=K,ee=ie,t.width=Math.floor(b*ie),t.height=Math.floor(K*ie),this.setViewport(0,0,b,K)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(G)},this.setViewport=function(b,K,ie,re){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,K,ie,re),me.viewport(v.copy(G).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(D)},this.setScissor=function(b,K,ie,re){b.isVector4?D.set(b.x,b.y,b.z,b.w):D.set(b,K,ie,re),me.scissor(k.copy(D).multiplyScalar(ee).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(b){me.setScissorTest(W=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(b=!0,K=!0,ie=!0){let re=0;if(b){let ne=!1;if(T!==null){const Ce=T.texture.format;ne=Ce===Nl||Ce===Fl||Ce===Il}if(ne){const Ce=T.texture.type,Fe=Ce===Cn||Ce===Ri||Ce===Ul||Ce===ir||Ce===Ll||Ce===Dl,Be=ge.getClearColor(),ke=ge.getClearAlpha(),pe=Be.r,Ge=Be.g,He=Be.b;Fe?(d[0]=pe,d[1]=Ge,d[2]=He,d[3]=ke,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=pe,g[1]=Ge,g[2]=He,g[3]=ke,N.clearBufferiv(N.COLOR,0,g))}else re|=N.COLOR_BUFFER_BIT}K&&(re|=N.DEPTH_BUFFER_BIT),ie&&(re|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),we.dispose(),se.dispose(),w.dispose(),V.dispose(),j.dispose(),ce.dispose(),Se.dispose(),Ie.dispose(),$.dispose(),L.dispose(),L.removeEventListener("sessionstart",je),L.removeEventListener("sessionend",et),nt.stop()};function de(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Te.autoReset,K=ve.enabled,ie=ve.autoUpdate,re=ve.needsUpdate,ne=ve.type;Ee(),Te.autoReset=b,ve.enabled=K,ve.autoUpdate=ie,ve.needsUpdate=re,ve.type=ne}function ye(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ne(b){const K=b.target;K.removeEventListener("dispose",Ne),Oe(K)}function Oe(b){De(b),w.remove(b)}function De(b){const K=w.get(b).programs;K!==void 0&&(K.forEach(function(ie){$.releaseProgram(ie)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,ie,re,ne,Ce){K===null&&(K=fe);const Fe=ne.isMesh&&ne.matrixWorld.determinant()<0,Be=rn(b,K,ie,re,ne);me.setMaterial(re,Fe);let ke=ie.index,pe=1;if(re.wireframe===!0){if(ke=Q.getWireframeAttribute(ie),ke===void 0)return;pe=2}const Ge=ie.drawRange,He=ie.attributes.position;let Je=Ge.start*pe,ft=(Ge.start+Ge.count)*pe;Ce!==null&&(Je=Math.max(Je,Ce.start*pe),ft=Math.min(ft,(Ce.start+Ce.count)*pe)),ke!==null?(Je=Math.max(Je,0),ft=Math.min(ft,ke.count)):He!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,He.count));const rt=ft-Je;if(rt<0||rt===1/0)return;Se.setup(ne,re,Be,ie,ke);let Ut,Qe=Le;if(ke!==null&&(Ut=B.get(ke),Qe=be,Qe.setIndex(Ut)),ne.isMesh)re.wireframe===!0?(me.setLineWidth(re.wireframeLinewidth*_e()),Qe.setMode(N.LINES)):Qe.setMode(N.TRIANGLES);else if(ne.isLine){let ze=re.linewidth;ze===void 0&&(ze=1),me.setLineWidth(ze*_e()),ne.isLineSegments?Qe.setMode(N.LINES):ne.isLineLoop?Qe.setMode(N.LINE_LOOP):Qe.setMode(N.LINE_STRIP)}else ne.isPoints?Qe.setMode(N.POINTS):ne.isSprite&&Qe.setMode(N.TRIANGLES);if(ne.isBatchedMesh)Qe.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)Qe.renderInstances(Je,rt,ne.count);else if(ie.isInstancedBufferGeometry){const ze=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Qn=Math.min(ie.instanceCount,ze);Qe.renderInstances(Je,rt,Qn)}else Qe.render(Je,rt)};function Ve(b,K,ie){b.transparent===!0&&b.side===Kt&&b.forceSinglePass===!1?(b.side=yt,b.needsUpdate=!0,Nt(b,K,ie),b.side=dn,b.needsUpdate=!0,Nt(b,K,ie),b.side=Kt):Nt(b,K,ie)}this.compile=function(b,K,ie=null){ie===null&&(ie=b),p=se.get(ie),p.init(),y.push(p),ie.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),b!==ie&&b.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights(S._useLegacyLights);const re=new Set;return b.traverse(function(ne){const Ce=ne.material;if(Ce)if(Array.isArray(Ce))for(let Fe=0;Fe<Ce.length;Fe++){const Be=Ce[Fe];Ve(Be,ie,ne),re.add(Be)}else Ve(Ce,ie,ne),re.add(Ce)}),y.pop(),p=null,re},this.compileAsync=function(b,K,ie=null){const re=this.compile(b,K,ie);return new Promise(ne=>{function Ce(){if(re.forEach(function(Fe){w.get(Fe).currentProgram.isReady()&&re.delete(Fe)}),re.size===0){ne(b);return}setTimeout(Ce,10)}Me.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let We=null;function Ue(b){We&&We(b)}function je(){nt.stop()}function et(){nt.start()}const nt=new Ql;nt.setAnimationLoop(Ue),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(b){We=b,L.setAnimationLoop(b),b===null?nt.stop():nt.start()},L.addEventListener("sessionstart",je),L.addEventListener("sessionend",et),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(K),K=L.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,K,T),p=se.get(b,y.length),p.init(),y.push(p),Z.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),J.setFromProjectionMatrix(Z),O=this.localClippingEnabled,I=he.init(this.clippingPlanes,O),_=we.get(b,m.length),_.init(),m.push(_),it(b,K,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(H,X),this.info.render.frame++,I===!0&&he.beginShadows();const ie=p.state.shadowsArray;if(ve.render(ie,b,K),I===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1)&&ge.render(_,b),p.setupLights(S._useLegacyLights),K.isArrayCamera){const re=K.cameras;for(let ne=0,Ce=re.length;ne<Ce;ne++){const Fe=re[ne];Et(_,b,Fe,Fe.viewport)}}else Et(_,b,K);T!==null&&(x.updateMultisampleRenderTarget(T),x.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(S,b,K),Se.resetDefaultState(),P=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function it(b,K,ie,re){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)ie=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){re&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const Fe=ce.update(b),Be=b.material;Be.visible&&_.push(b,Fe,Be,ie,ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const Fe=ce.update(b),Be=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ae.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ae.copy(Fe.boundingSphere.center)),ae.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Be)){const ke=Fe.groups;for(let pe=0,Ge=ke.length;pe<Ge;pe++){const He=ke[pe],Je=Be[He.materialIndex];Je&&Je.visible&&_.push(b,Fe,Je,ie,ae.z,He)}}else Be.visible&&_.push(b,Fe,Be,ie,ae.z,null)}}const Ce=b.children;for(let Fe=0,Be=Ce.length;Fe<Be;Fe++)it(Ce[Fe],K,ie,re)}function Et(b,K,ie,re){const ne=b.opaque,Ce=b.transmissive,Fe=b.transparent;p.setupLightsView(ie),I===!0&&he.setGlobalState(S.clippingPlanes,ie),Ce.length>0&&Jt(ne,Ce,K,ie),re&&me.viewport(v.copy(re)),ne.length>0&&Tt(ne,K,ie),Ce.length>0&&Tt(Ce,K,ie),Fe.length>0&&Tt(Fe,K,ie),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Jt(b,K,ie,re){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Zn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?qr:Cn,minFilter:qn,samples:4,stencilBuffer:i});const pe=w.get(p.state.transmissionRenderTarget);pe.__isTransmissionRenderTarget=!0}const Ce=p.state.transmissionRenderTarget;S.getDrawingBufferSize(Y),Ce.setSize(Y.x,Y.y);const Fe=S.getRenderTarget();S.setRenderTarget(Ce),S.getClearColor(A),F=S.getClearAlpha(),F<1&&S.setClearColor(16777215,.5),S.clear();const Be=S.toneMapping;S.toneMapping=Rn,Tt(b,ie,re),x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce);let ke=!1;for(let pe=0,Ge=K.length;pe<Ge;pe++){const He=K[pe],Je=He.object,ft=He.geometry,rt=He.material,Ut=He.group;if(rt.side===Kt&&Je.layers.test(re.layers)){const Qe=rt.side;rt.side=yt,rt.needsUpdate=!0,Vt(Je,ie,re,ft,rt,Ut),rt.side=Qe,rt.needsUpdate=!0,ke=!0}}ke===!0&&(x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce)),S.setRenderTarget(Fe),S.setClearColor(A,F),S.toneMapping=Be}function Tt(b,K,ie){const re=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Ce=b.length;ne<Ce;ne++){const Fe=b[ne],Be=Fe.object,ke=Fe.geometry,pe=re===null?Fe.material:re,Ge=Fe.group;Be.layers.test(ie.layers)&&Vt(Be,K,ie,ke,pe,Ge)}}function Vt(b,K,ie,re,ne,Ce){b.onBeforeRender(S,K,ie,re,ne,Ce),b.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(S,K,ie,re,b,Ce),ne.transparent===!0&&ne.side===Kt&&ne.forceSinglePass===!1?(ne.side=yt,ne.needsUpdate=!0,S.renderBufferDirect(ie,K,re,ne,b,Ce),ne.side=dn,ne.needsUpdate=!0,S.renderBufferDirect(ie,K,re,ne,b,Ce),ne.side=Kt):S.renderBufferDirect(ie,K,re,ne,b,Ce),b.onAfterRender(S,K,ie,re,ne,Ce)}function Nt(b,K,ie){K.isScene!==!0&&(K=fe);const re=w.get(b),ne=p.state.lights,Ce=p.state.shadowsArray,Fe=ne.state.version,Be=$.getParameters(b,ne.state,Ce,K,ie),ke=$.getProgramCacheKey(Be);let pe=re.programs;re.environment=b.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(b.isMeshStandardMaterial?j:V).get(b.envMap||re.environment),re.envMapRotation=re.environment!==null&&b.envMap===null?K.environmentRotation:b.envMapRotation,pe===void 0&&(b.addEventListener("dispose",Ne),pe=new Map,re.programs=pe);let Ge=pe.get(ke);if(Ge!==void 0){if(re.currentProgram===Ge&&re.lightsStateVersion===Fe)return ht(b,Be),Ge}else Be.uniforms=$.getUniforms(b),b.onBuild(ie,Be,S),b.onBeforeCompile(Be,S),Ge=$.acquireProgram(Be,ke),pe.set(ke,Ge),re.uniforms=Be.uniforms;const He=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=he.uniform),ht(b,Be),re.needsLights=Fi(b),re.lightsStateVersion=Fe,re.needsLights&&(He.ambientLightColor.value=ne.state.ambient,He.lightProbe.value=ne.state.probe,He.directionalLights.value=ne.state.directional,He.directionalLightShadows.value=ne.state.directionalShadow,He.spotLights.value=ne.state.spot,He.spotLightShadows.value=ne.state.spotShadow,He.rectAreaLights.value=ne.state.rectArea,He.ltc_1.value=ne.state.rectAreaLTC1,He.ltc_2.value=ne.state.rectAreaLTC2,He.pointLights.value=ne.state.point,He.pointLightShadows.value=ne.state.pointShadow,He.hemisphereLights.value=ne.state.hemi,He.directionalShadowMap.value=ne.state.directionalShadowMap,He.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,He.spotShadowMap.value=ne.state.spotShadowMap,He.spotLightMatrix.value=ne.state.spotLightMatrix,He.spotLightMap.value=ne.state.spotLightMap,He.pointShadowMap.value=ne.state.pointShadowMap,He.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=Ge,re.uniformsList=null,Ge}function Ot(b){if(b.uniformsList===null){const K=b.currentProgram.getUniforms();b.uniformsList=Gr.seqWithValue(K.seq,b.uniforms)}return b.uniformsList}function ht(b,K){const ie=w.get(b);ie.outputColorSpace=K.outputColorSpace,ie.batching=K.batching,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.instancingMorph=K.instancingMorph,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function rn(b,K,ie,re,ne){K.isScene!==!0&&(K=fe),x.resetTextureUnits();const Ce=K.fog,Fe=re.isMeshStandardMaterial?K.environment:null,Be=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ln,ke=(re.isMeshStandardMaterial?j:V).get(re.envMap||Fe),pe=re.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Ge=!!ie.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!ie.morphAttributes.position,Je=!!ie.morphAttributes.normal,ft=!!ie.morphAttributes.color;let rt=Rn;re.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(rt=S.toneMapping);const Ut=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Qe=Ut!==void 0?Ut.length:0,ze=w.get(re),Qn=p.state.lights;if(I===!0&&(O===!0||b!==M)){const gt=b===M&&re.id===P;he.setState(re,b,gt)}let Ze=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Qn.state.version||ze.outputColorSpace!==Be||ne.isBatchedMesh&&ze.batching===!1||!ne.isBatchedMesh&&ze.batching===!0||ne.isInstancedMesh&&ze.instancing===!1||!ne.isInstancedMesh&&ze.instancing===!0||ne.isSkinnedMesh&&ze.skinning===!1||!ne.isSkinnedMesh&&ze.skinning===!0||ne.isInstancedMesh&&ze.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ze.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ze.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ze.instancingMorph===!1&&ne.morphTexture!==null||ze.envMap!==ke||re.fog===!0&&ze.fog!==Ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==he.numPlanes||ze.numIntersection!==he.numIntersection)||ze.vertexAlphas!==pe||ze.vertexTangents!==Ge||ze.morphTargets!==He||ze.morphNormals!==Je||ze.morphColors!==ft||ze.toneMapping!==rt||ze.morphTargetsCount!==Qe)&&(Ze=!0):(Ze=!0,ze.__version=re.version);let Qt=ze.currentProgram;Ze===!0&&(Qt=Nt(re,K,ne));let $n=!1,gn=!1,an=!1;const at=Qt.getUniforms(),St=ze.uniforms;if(me.useProgram(Qt.program)&&($n=!0,gn=!0,an=!0),re.id!==P&&(P=re.id,gn=!0),$n||M!==b){at.setValue(N,"projectionMatrix",b.projectionMatrix),at.setValue(N,"viewMatrix",b.matrixWorldInverse);const gt=at.map.cameraPosition;gt!==void 0&&gt.setValue(N,ae.setFromMatrixPosition(b.matrixWorld)),Pe.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&at.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,gn=!0,an=!0)}if(ne.isSkinnedMesh){at.setOptional(N,ne,"bindMatrix"),at.setOptional(N,ne,"bindMatrixInverse");const gt=ne.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),at.setValue(N,"boneTexture",gt.boneTexture,x))}ne.isBatchedMesh&&(at.setOptional(N,ne,"batchingTexture"),at.setValue(N,"batchingTexture",ne._matricesTexture,x));const Dn=ie.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&xe.update(ne,ie,Qt),(gn||ze.receiveShadow!==ne.receiveShadow)&&(ze.receiveShadow=ne.receiveShadow,at.setValue(N,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(St.envMap.value=ke,St.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&K.environment!==null&&(St.envMapIntensity.value=K.environmentIntensity),gn&&(at.setValue(N,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&sr(St,an),Ce&&re.fog===!0&&ue.refreshFogUniforms(St,Ce),ue.refreshMaterialUniforms(St,re,ee,q,p.state.transmissionRenderTarget),Gr.upload(N,Ot(ze),St,x)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Gr.upload(N,Ot(ze),St,x),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&at.setValue(N,"center",ne.center),at.setValue(N,"modelViewMatrix",ne.modelViewMatrix),at.setValue(N,"normalMatrix",ne.normalMatrix),at.setValue(N,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const gt=re.uniformsGroups;for(let In=0,Bt=gt.length;In<Bt;In++){const or=gt[In];Ie.update(or,Qt),Ie.bind(or,Qt)}}return Qt}function sr(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function Fi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,K,ie){w.get(b.texture).__webglTexture=K,w.get(b.depthTexture).__webglTexture=ie;const re=w.get(b);re.__hasExternalTextures=!0,re.__autoAllocateDepthBuffer=ie===void 0,re.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,K){const ie=w.get(b);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(b,K=0,ie=0){T=b,U=K,R=ie;let re=!0,ne=null,Ce=!1,Fe=!1;if(b){const ke=w.get(b);ke.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(N.FRAMEBUFFER,null),re=!1):ke.__webglFramebuffer===void 0?x.setupRenderTarget(b):ke.__hasExternalTextures&&x.rebindTextures(b,w.get(b.texture).__webglTexture,w.get(b.depthTexture).__webglTexture);const pe=b.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(Fe=!0);const Ge=w.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ge[K])?ne=Ge[K][ie]:ne=Ge[K],Ce=!0):b.samples>0&&x.useMultisampledRTT(b)===!1?ne=w.get(b).__webglMultisampledFramebuffer:Array.isArray(Ge)?ne=Ge[ie]:ne=Ge,v.copy(b.viewport),k.copy(b.scissor),C=b.scissorTest}else v.copy(G).multiplyScalar(ee).floor(),k.copy(D).multiplyScalar(ee).floor(),C=W;if(me.bindFramebuffer(N.FRAMEBUFFER,ne)&&re&&me.drawBuffers(b,ne),me.viewport(v),me.scissor(k),me.setScissorTest(C),Ce){const ke=w.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+K,ke.__webglTexture,ie)}else if(Fe){const ke=w.get(b.texture),pe=K||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.__webglTexture,ie||0,pe)}P=-1},this.readRenderTargetPixels=function(b,K,ie,re,ne,Ce,Fe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){me.bindFramebuffer(N.FRAMEBUFFER,Be);try{const ke=b.texture,pe=ke.format,Ge=ke.type;if(pe!==tn&&Re.convert(pe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ge===qr&&(Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float"));if(Ge!==Cn&&Re.convert(Ge)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&Ge!==An&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-re&&ie>=0&&ie<=b.height-ne&&N.readPixels(K,ie,re,ne,Re.convert(pe),Re.convert(Ge),Ce)}finally{const ke=T!==null?w.get(T).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(b,K,ie=0){const re=Math.pow(2,-ie),ne=Math.floor(K.image.width*re),Ce=Math.floor(K.image.height*re);x.setTexture2D(K,0),N.copyTexSubImage2D(N.TEXTURE_2D,ie,0,0,b.x,b.y,ne,Ce),me.unbindTexture()},this.copyTextureToTexture=function(b,K,ie,re=0){const ne=K.image.width,Ce=K.image.height,Fe=Re.convert(ie.format),Be=Re.convert(ie.type);x.setTexture2D(ie,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,ie.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,ie.unpackAlignment),K.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,re,b.x,b.y,ne,Ce,Fe,Be,K.image.data):K.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,re,b.x,b.y,K.mipmaps[0].width,K.mipmaps[0].height,Fe,K.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,re,b.x,b.y,Fe,Be,K.image),re===0&&ie.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(b,K,ie,re,ne=0){const Ce=Math.round(b.max.x-b.min.x),Fe=Math.round(b.max.y-b.min.y),Be=b.max.z-b.min.z+1,ke=Re.convert(re.format),pe=Re.convert(re.type);let Ge;if(re.isData3DTexture)x.setTexture3D(re,0),Ge=N.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)x.setTexture2DArray(re,0),Ge=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,re.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,re.unpackAlignment);const He=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ft=N.getParameter(N.UNPACK_SKIP_PIXELS),rt=N.getParameter(N.UNPACK_SKIP_ROWS),Ut=N.getParameter(N.UNPACK_SKIP_IMAGES),Qe=ie.isCompressedTexture?ie.mipmaps[ne]:ie.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Qe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,b.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,b.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,b.min.z),ie.isDataTexture||ie.isData3DTexture?N.texSubImage3D(Ge,ne,K.x,K.y,K.z,Ce,Fe,Be,ke,pe,Qe.data):re.isCompressedArrayTexture?N.compressedTexSubImage3D(Ge,ne,K.x,K.y,K.z,Ce,Fe,Be,ke,Qe.data):N.texSubImage3D(Ge,ne,K.x,K.y,K.z,Ce,Fe,Be,ke,pe,Qe),N.pixelStorei(N.UNPACK_ROW_LENGTH,He),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ft),N.pixelStorei(N.UNPACK_SKIP_ROWS,rt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ut),ne===0&&re.generateMipmaps&&N.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?x.setTextureCube(b,0):b.isData3DTexture?x.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?x.setTexture2DArray(b,0):x.setTexture2D(b,0),me.unbindTexture()},this.resetState=function(){U=0,R=0,T=null,me.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xs?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===na?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ms{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=r}clone(){return new Ms(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class oc extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Fm extends Zt{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const al={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Nm{constructor(e,t,r){const n=this;let i=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,i===!1&&n.onStart!==void 0&&n.onStart(u,s,o),i=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Om=new Nm;class ys{constructor(e){this.manager=e!==void 0?e:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";class Bm extends ys{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=al.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o=tr("img");function l(){u(),al.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(h){u(),n&&n(h),i.manager.itemError(e),i.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class km extends ys{constructor(e){super(e)}load(e,t,r,n){const i=new xt,s=new Bm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},r,n),i}}class Gm extends mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class zm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vs);class Vm{constructor(){this.scene=new oc}getScene(){return this.scene}}var sa=(a=>(a.Ground="X",a.Gap=" ",a))(sa||{});function ol(a,e){const r=e[e.length-1].split(`
`).filter(d=>d.trim().length>0).map(d=>d.split("")).reverse(),n=Math.min(...r.map(d=>d.findIndex(g=>g!==" "))),i=Math.max(...r.map(d=>d.length-[...d].reverse().findIndex(g=>g!==" "))),s=r.map(d=>d.slice(n,i)),o=s[0].length,l=s.length;if(s.some(d=>d.length!==o))throw new Error("Inconsistent row length");let c,u;const h=[],f=s.map((d,g)=>d.map((_,p)=>{switch(_){case"X":return"X";case" ":return" ";case"P":{if(c)throw new Error("Level contains more than one player start location");return c=new qe(p,g),"X"}case"C":return h.push(new qe(p,g)),"X";case"G":if(u)throw new Error("Level contains more than one goal location");return u=new qe(p,g),"X";default:throw new Error(`Unrecognized tile: ${_}`)}}));if(!c)throw new Error("No level start location");if(!u)throw new Error("No goal location");return{index:a,map:{width:o,height:l,depth:1,at(d,g){return d<0||g<0||d>=o||g>=l?" ":f[g][d]},tiles:f},playerStartLocation:c,catStartLocations:h,goalLocation:u}}const zr=[ol(0,[`
        XXXXXXXXXXXXX
        XXXXXXXXXXXXX
        XXGXPXXXXCXXX
        XXXXXXXXXXXXX
        XXXXXXXXXXXXX
    `]),ol(1,[`
        XXXXX   XXXXX
        XXXXXXXXXXCXX
        XXPXX   XXXXX
        XXXXX     X  
        XXGXX   XXXXX
        XXXXXXXXXXCXX
        XXXXX   XXXXX
    `])];class Hm{constructor(e){this.scene=e,this.entities=[]}add(e){if(this.entities.includes(e))throw new Error(`Duplicate entity: ${e}`);this.entities.push(e),this.scene.add(e.getGroup()),e.setup()}remove(e){const t=this.entities.indexOf(e);if(t<0)throw new Error("Entity not found for removal");this.entities.splice(t,1),e.teardown(),this.scene.remove(e.getGroup())}findOne(e){return this.entities.find(t=>t instanceof e)}findAll(e){return this.entities.filter(t=>t instanceof e)}update(e){for(const t of this.entities)t.update(e)}}class Di{constructor(e){this.entityCollection=e,this.group=new jn}getGroup(){return this.group}}function Qa(a,e,t){return Math.max(e,Math.min(t,a))}function Wm(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function ll(a,e){if(a>e)throw new Error(`Invalid from-to: ${a}, ${e}`);const t=e-a+1;return new Array(t).fill(0).map((r,n)=>n+a)}function $a(a,e){if(a>e)throw new Error(`Invalid from-to: ${a}, ${e}`);return Math.random()*(e-a)+a}function Vr(a,e,t){const r=Wm(a,0,1);return e+(t-e)*r}function nr(a){const e=new km().load(`assets/${a}`);return e.minFilter=Ct,e.magFilter=Ct,e.colorSpace=jt,e}function Xm(){const a=nr("grass-top.png"),e=nr("grass-side.png"),t=new Ke(1+$a(-.05,.05)*0,1+$a(-.1,0)*0,1+$a(-.05,.05)*0),r=new zt({color:t,map:a}),n=new zt({color:t,map:e});return new zt({color:t,map:e}),new zt({color:t,map:e}),new zt({color:t,map:e}),[n,n,n,n,r,n]}class oa extends Di{constructor(e,t){super(e),this.map=t}getMap(){return this.map}setup(){const e=new Jn(1,1,1),t=Xm();for(const r of ll(0,this.map.width-1))for(const n of ll(0,this.map.height-1)){if(this.map.at(r,n)===sa.Gap)continue;const s=new mt(e,t),o=1;s.position.x=r+.5,s.position.y=n+.5,s.position.z=-o/2,s.scale.set(1,1,o),this.group.add(s),this.cube||(this.cube=s)}}update(e){this.cube.rotateZ(e.deltaTime)}teardown(){}}const lc=16/10;function cl(){const e=window.innerHeight-128;return[e*lc,e]}function Ym(){const a=new Im({antialias:!0});return a.setSize(...cl()),document.body.appendChild(a.domElement),window.addEventListener("resize",()=>{a.setSize(...cl())}),a}class Qr extends Di{constructor(e){super(e),this.camera=new Gt(15,lc,.1,1e3)}setup(){const e=this.entityCollection.findOne(oa).getMap();this.camera.position.x=e.width/2,this.camera.position.y=-e.height*4,this.camera.position.z=40,this.camera.up=new te(0,0,1),this.camera.lookAt(new te(e.width/2,e.height/2,0))}getCamera(){return this.camera}update(e){}teardown(){}}function $r(a){return new qe(a.x,a.y)}function qm(a,e=0){return new te(a.x,a.y,e)}const jm=.8,xi=.25;class Hr extends Di{constructor(e,t){super(e),this.initialPosition=t,this.randomOffset=Math.random()*1e3,this.isFalling=!1,this.fallingVelocity=0}getIsFalling(){return this.isFalling}setup(){const e=nr("kissi_2.png"),t=new zt({map:e,transparent:!0,depthWrite:!1}),r=new nn(1,1),n=new mt(r,t);n.position.z=.1,n.position.x=0,n.position.y=.5;{const i=new Jn(1,1,1),s=new mt(i,new zt({color:"red"}));s.scale.set(xi,xi,.1),s.position.set(0,0,.1),this.group.add(s)}this.pivot=new jn,this.pivot.add(n),this.group.add(this.pivot),this.group.position.x=this.initialPosition.x,this.group.position.y=this.initialPosition.y,this.group.position.z=0}startSummoning(e){this.summonTarget=e}stopSummoning(){this.summonTarget=void 0}update(e){this.updateMovement(e),this.updateRotation(e),this.updateIsFalling(e)}teardown(){}updateMovement(e){if(this.summonTarget&&!this.isFalling&&!this.summonTarget.getIsFalling()){const t=$r(this.summonTarget.getGroup().position).sub($r(this.group.position)).normalize();this.group.position.add(qm(t.multiplyScalar(jm*e.deltaTime)))}}updateRotation(e){this.pivot.up.set(0,0,1),this.pivot.lookAt(this.entityCollection.findOne(Qr).getCamera().position);const t=this.summonTarget?8:2,r=this.summonTarget?.1:.05;this.pivot.rotateOnAxis(new te(0,0,1),Math.sin((e.totalTime+this.randomOffset)*t)*r)}updateIsFalling(e){if(this.isFalling)this.fallingVelocity+=9.81*e.deltaTime,this.group.position.z-=e.deltaTime*this.fallingVelocity;else{const t=this.entityCollection.findOne(oa).getMap(),r=this.group.position.x-xi/2,n=this.group.position.x+xi/2,i=this.group.position.y+xi/2,s=this.group.position.y-xi/2;[[r,i],[r,s],[n,i],[n,s]].map(([l,c])=>[Math.floor(l),Math.floor(c)]).every(([l,c])=>t.at(l,c)===sa.Gap)&&(this.isFalling=!0)}}}const es=1.5,Or=.25;class Ki extends Di{constructor(e,t){super(e),this.initialPosition=t,this.isFalling=!1,this.isSummoning=!1,this.isLevelFinished=!1,this.fallingVelocity=0}getIsFalling(){return this.isFalling}setLevelFinished(){this.isLevelFinished=!0}setup(){const e=nr("nipsu_1.png"),t=new zt({map:e,transparent:!0,depthWrite:!1}),r=new nn(1,1),n=new mt(r,t);n.position.z=.1,n.position.x=0,n.position.y=.5,n.renderOrder=1e3,this.pivot=new jn,this.pivot.add(n),this.group.add(this.pivot),this.group.position.x=this.initialPosition.x,this.group.position.y=this.initialPosition.y,this.group.position.z=0}update(e){this.handleInput(e),this.updateSummoning(e),this.updateIsFalling(e),this.pivot.up.set(0,0,1),this.pivot.lookAt(this.entityCollection.findOne(Qr).getCamera().position)}updateSummoning(e){const t=this.entityCollection.findAll(Hr);this.isSummoning&&!this.isLevelFinished?t.forEach(r=>r.startSummoning(this)):t.forEach(r=>r.stopSummoning())}handleInput(e){this.isFalling||(this.handleMovementInput(e),this.handleSummoningInput(e))}handleMovementInput(e){const t=new qe(0,0);e.input.isKeyDown("W")&&(t.y+=1),e.input.isKeyDown("S")&&(t.y-=1),e.input.isKeyDown("A")&&(t.x-=1),e.input.isKeyDown("D")&&(t.x+=1),this.lastDirection=t,this.group.position.x+=t.x*es*e.deltaTime,this.group.position.y+=t.y*es*e.deltaTime}handleSummoningInput(e){this.isSummoning=e.input.isKeyDown(" ")}updateIsFalling(e){if(this.isFalling)this.fallingVelocity+=9.81*e.deltaTime,this.group.position.z-=e.deltaTime*this.fallingVelocity,this.group.position.add(new te(this.lastDirection.x,this.lastDirection.y,0).multiplyScalar(es*e.deltaTime));else{const t=this.entityCollection.findOne(oa).getMap(),r=this.group.position.x-Or/2,n=this.group.position.x+Or/2,i=this.group.position.y+Or/2,s=this.group.position.y-Or/2;[[r,i],[r,s],[n,i],[n,s]].map(([l,c])=>[Math.floor(l),Math.floor(c)]).every(([l,c])=>t.at(l,c)===sa.Gap)&&(this.isFalling=!0)}}teardown(){}}class ul extends Di{constructor(e,t){super(e),this.location=t}setup(){const e=nr("picnic.png"),t=new zt({map:e,alphaTest:0,transparent:!0}),r=new nn(1,1),n=new mt(r,t);n.position.z=.1,n.position.x=0,n.position.y=.5,n.scale.set(1.5,.75,.75),n.renderOrder=0,this.group.add(n),this.group.position.set(this.location.x,this.location.y,.001)}update(e){}teardown(){}}function Km(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=a[f.id].value),f}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:h,getTransferables:u},i(h)}catch(f){f&&f.noLog||console.error(f),i(f)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(h){return i(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){i(h)}function u(h){try{var f=a[o].getTransferables&&a[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),i(h,f)}catch(d){console.error(d),i(d)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Zm(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var cc=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return cc=function(){return a},a},Jm=0,Qm=0,ts=!1,Qi=Object.create(null),$i=Object.create(null),ds=Object.create(null);function Ii(a){if((!a||typeof a.init!="function")&&!ts)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId;if(!cc())return Zm(a);n==null&&(n="#default");var i="workerModule"+ ++Jm,s=a.name||i,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(ts=!0,c=Ii({workerId:n,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+Wr(c)+`
)}`}),ts=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!o){o=hl(n,"registerModule",l.workerModuleData);var h=function(){o=null,$i[n].delete(h)};($i[n]||($i[n]=new Set)).add(h)}return o.then(function(f){var d=f.isCallable;if(d)return hl(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:s,dependencies:e,init:Wr(t),getTransferables:r&&Wr(r)},l}function $m(a){$i[a]&&$i[a].forEach(function(e){e()}),Qi[a]&&(Qi[a].terminate(),delete Qi[a])}function Wr(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function eg(a){var e=Qi[a];if(!e){var t=Wr(Km);e=Qi[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=ds[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete ds[i],s(n)}}return e}function hl(a,e,t){return new Promise(function(r,n){var i=++Qm;ds[i]=function(s){s.success?r(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},eg(a).postMessage({messageId:i,action:e,data:t})})}function uc(){var a=function(e){function t(X,G,D,W,J,I,O,Z){var Y=1-O;Z.x=Y*Y*X+2*Y*O*D+O*O*J,Z.y=Y*Y*G+2*Y*O*W+O*O*I}function r(X,G,D,W,J,I,O,Z,Y,ae){var fe=1-Y;ae.x=fe*fe*fe*X+3*fe*fe*Y*D+3*fe*Y*Y*J+Y*Y*Y*O,ae.y=fe*fe*fe*G+3*fe*fe*Y*W+3*fe*Y*Y*I+Y*Y*Y*Z}function n(X,G){for(var D=/([MLQCZ])([^MLQCZ]*)/g,W,J,I,O,Z;W=D.exec(X);){var Y=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ae){return parseFloat(ae)});switch(W[1]){case"M":O=J=Y[0],Z=I=Y[1];break;case"L":(Y[0]!==O||Y[1]!==Z)&&G("L",O,Z,O=Y[0],Z=Y[1]);break;case"Q":{G("Q",O,Z,O=Y[2],Z=Y[3],Y[0],Y[1]);break}case"C":{G("C",O,Z,O=Y[4],Z=Y[5],Y[0],Y[1],Y[2],Y[3]);break}case"Z":(O!==J||Z!==I)&&G("L",O,Z,J,I);break}}}function i(X,G,D){D===void 0&&(D=16);var W={x:0,y:0};n(X,function(J,I,O,Z,Y,ae,fe,_e,N){switch(J){case"L":G(I,O,Z,Y);break;case"Q":{for(var oe=I,Me=O,Pe=1;Pe<D;Pe++)t(I,O,ae,fe,Z,Y,Pe/(D-1),W),G(oe,Me,W.x,W.y),oe=W.x,Me=W.y;break}case"C":{for(var me=I,Te=O,w=1;w<D;w++)r(I,O,ae,fe,_e,N,Z,Y,w/(D-1),W),G(me,Te,W.x,W.y),me=W.x,Te=W.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(X,G){var D=X.getContext?X.getContext("webgl",c):X,W=l.get(D);if(!W){let me=function(B){var Q=I[B];if(!Q&&(Q=I[B]=D.getExtension(B),!Q))throw new Error(B+" not supported");return Q},Te=function(B,Q){var ce=D.createShader(Q);return D.shaderSource(ce,B),D.compileShader(ce),ce},w=function(B,Q,ce,$){if(!O[B]){var ue={},we={},se=D.createProgram();D.attachShader(se,Te(Q,D.VERTEX_SHADER)),D.attachShader(se,Te(ce,D.FRAGMENT_SHADER)),D.linkProgram(se),O[B]={program:se,transaction:function(ve){D.useProgram(se),ve({setUniform:function(xe,Le){for(var be=[],Re=arguments.length-2;Re-- >0;)be[Re]=arguments[Re+2];var Se=we[Le]||(we[Le]=D.getUniformLocation(se,Le));D["uniform"+xe].apply(D,[Se].concat(be))},setAttribute:function(xe,Le,be,Re,Se){var Ie=ue[xe];Ie||(Ie=ue[xe]={buf:D.createBuffer(),loc:D.getAttribLocation(se,xe),data:null}),D.bindBuffer(D.ARRAY_BUFFER,Ie.buf),D.vertexAttribPointer(Ie.loc,Le,D.FLOAT,!1,0,0),D.enableVertexAttribArray(Ie.loc),J?D.vertexAttribDivisor(Ie.loc,Re):me("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ie.loc,Re),Se!==Ie.data&&(D.bufferData(D.ARRAY_BUFFER,Se,be),Ie.data=Se)}})}}}O[B].transaction($)},x=function(B,Q){Y++;try{D.activeTexture(D.TEXTURE0+Y);var ce=Z[B];ce||(ce=Z[B]=D.createTexture(),D.bindTexture(D.TEXTURE_2D,ce),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.NEAREST)),D.bindTexture(D.TEXTURE_2D,ce),Q(ce,Y)}finally{Y--}},V=function(B,Q,ce){var $=D.createFramebuffer();ae.push($),D.bindFramebuffer(D.FRAMEBUFFER,$),D.activeTexture(D.TEXTURE0+Q),D.bindTexture(D.TEXTURE_2D,B),D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,B,0);try{ce($)}finally{D.deleteFramebuffer($),D.bindFramebuffer(D.FRAMEBUFFER,ae[--ae.length-1]||null)}},j=function(){I={},O={},Z={},Y=-1,ae.length=0};var fe=me,_e=Te,N=w,oe=x,Me=V,Pe=j,J=typeof WebGL2RenderingContext<"u"&&D instanceof WebGL2RenderingContext,I={},O={},Z={},Y=-1,ae=[];D.canvas.addEventListener("webglcontextlost",function(B){j(),B.preventDefault()},!1),l.set(D,W={gl:D,isWebGL2:J,getExtension:me,withProgram:w,withTexture:x,withTextureFramebuffer:V,handleContextLoss:j})}G(W)}function h(X,G,D,W,J,I,O,Z){O===void 0&&(O=15),Z===void 0&&(Z=null),u(X,function(Y){var ae=Y.gl,fe=Y.withProgram,_e=Y.withTexture;_e("copy",function(N,oe){ae.texImage2D(ae.TEXTURE_2D,0,ae.RGBA,J,I,0,ae.RGBA,ae.UNSIGNED_BYTE,G),fe("copy",s,o,function(Me){var Pe=Me.setUniform,me=Me.setAttribute;me("aUV",2,ae.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Pe("1i","image",oe),ae.bindFramebuffer(ae.FRAMEBUFFER,Z||null),ae.disable(ae.BLEND),ae.colorMask(O&8,O&4,O&2,O&1),ae.viewport(D,W,J,I),ae.scissor(D,W,J,I),ae.drawArrays(ae.TRIANGLES,0,3)})})})}function f(X,G,D){var W=X.width,J=X.height;u(X,function(I){var O=I.gl,Z=new Uint8Array(W*J*4);O.readPixels(0,0,W,J,O.RGBA,O.UNSIGNED_BYTE,Z),X.width=G,X.height=D,h(O,Z,0,0,W,J)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function g(X,G,D,W,J,I){I===void 0&&(I=1);var O=new Uint8Array(X*G),Z=W[2]-W[0],Y=W[3]-W[1],ae=[];i(D,function(me,Te,w,x){ae.push({x1:me,y1:Te,x2:w,y2:x,minX:Math.min(me,w),minY:Math.min(Te,x),maxX:Math.max(me,w),maxY:Math.max(Te,x)})}),ae.sort(function(me,Te){return me.maxX-Te.maxX});for(var fe=0;fe<X;fe++)for(var _e=0;_e<G;_e++){var N=Me(W[0]+Z*(fe+.5)/X,W[1]+Y*(_e+.5)/G),oe=Math.pow(1-Math.abs(N)/J,I)/2;N<0&&(oe=1-oe),oe=Math.max(0,Math.min(255,Math.round(oe*255))),O[_e*X+fe]=oe}return O;function Me(me,Te){for(var w=1/0,x=1/0,V=ae.length;V--;){var j=ae[V];if(j.maxX+x<=me)break;if(me+x>j.minX&&Te-x<j.maxY&&Te+x>j.minY){var B=m(me,Te,j.x1,j.y1,j.x2,j.y2);B<w&&(w=B,x=Math.sqrt(w))}}return Pe(me,Te)&&(x=-x),x}function Pe(me,Te){for(var w=0,x=ae.length;x--;){var V=ae[x];if(V.maxX<=me)break;var j=V.y1>Te!=V.y2>Te&&me<(V.x2-V.x1)*(Te-V.y1)/(V.y2-V.y1)+V.x1;j&&(w+=V.y1<V.y2?1:-1)}return w!==0}}function _(X,G,D,W,J,I,O,Z,Y,ae){I===void 0&&(I=1),Z===void 0&&(Z=0),Y===void 0&&(Y=0),ae===void 0&&(ae=0),p(X,G,D,W,J,I,O,null,Z,Y,ae)}function p(X,G,D,W,J,I,O,Z,Y,ae,fe){I===void 0&&(I=1),Y===void 0&&(Y=0),ae===void 0&&(ae=0),fe===void 0&&(fe=0);for(var _e=g(X,G,D,W,J,I),N=new Uint8Array(_e.length*4),oe=0;oe<_e.length;oe++)N[oe*4+fe]=_e[oe];h(O,N,Y,ae,X,G,1<<3-fe,Z)}function m(X,G,D,W,J,I){var O=J-D,Z=I-W,Y=O*O+Z*Z,ae=Y?Math.max(0,Math.min(1,((X-D)*O+(G-W)*Z)/Y)):0,fe=X-(D+ae*O),_e=G-(W+ae*Z);return fe*fe+_e*_e}var y=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:_,generateIntoFramebuffer:p}),S="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",E="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",U="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",R=new Float32Array([0,0,2,0,0,2]),T=null,P=!1,M={},v=new WeakMap;function k(X){if(!P&&!z(X))throw new Error("WebGL generation not supported")}function C(X,G,D,W,J,I,O){if(I===void 0&&(I=1),O===void 0&&(O=null),!O&&(O=T,!O)){var Z=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!Z)throw new Error("OffscreenCanvas or DOM canvas not supported");O=T=Z.getContext("webgl",{depth:!1})}k(O);var Y=new Uint8Array(X*G*4);u(O,function(N){var oe=N.gl,Me=N.withTexture,Pe=N.withTextureFramebuffer;Me("readable",function(me,Te){oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,X,G,0,oe.RGBA,oe.UNSIGNED_BYTE,null),Pe(me,Te,function(w){F(X,G,D,W,J,I,oe,w,0,0,0),oe.readPixels(0,0,X,G,oe.RGBA,oe.UNSIGNED_BYTE,Y)})})});for(var ae=new Uint8Array(X*G),fe=0,_e=0;fe<Y.length;fe+=4)ae[_e++]=Y[fe];return ae}function A(X,G,D,W,J,I,O,Z,Y,ae){I===void 0&&(I=1),Z===void 0&&(Z=0),Y===void 0&&(Y=0),ae===void 0&&(ae=0),F(X,G,D,W,J,I,O,null,Z,Y,ae)}function F(X,G,D,W,J,I,O,Z,Y,ae,fe){I===void 0&&(I=1),Y===void 0&&(Y=0),ae===void 0&&(ae=0),fe===void 0&&(fe=0),k(O);var _e=[];i(D,function(N,oe,Me,Pe){_e.push(N,oe,Me,Pe)}),_e=new Float32Array(_e),u(O,function(N){var oe=N.gl,Me=N.isWebGL2,Pe=N.getExtension,me=N.withProgram,Te=N.withTexture,w=N.withTextureFramebuffer,x=N.handleContextLoss;if(Te("rawDistances",function(V,j){(X!==V._lastWidth||G!==V._lastHeight)&&oe.texImage2D(oe.TEXTURE_2D,0,oe.RGBA,V._lastWidth=X,V._lastHeight=G,0,oe.RGBA,oe.UNSIGNED_BYTE,null),me("main",S,E,function(B){var Q=B.setAttribute,ce=B.setUniform,$=!Me&&Pe("ANGLE_instanced_arrays"),ue=!Me&&Pe("EXT_blend_minmax");Q("aUV",2,oe.STATIC_DRAW,0,R),Q("aLineSegment",4,oe.DYNAMIC_DRAW,1,_e),ce.apply(void 0,["4f","uGlyphBounds"].concat(W)),ce("1f","uMaxDistance",J),ce("1f","uExponent",I),w(V,j,function(we){oe.enable(oe.BLEND),oe.colorMask(!0,!0,!0,!0),oe.viewport(0,0,X,G),oe.scissor(0,0,X,G),oe.blendFunc(oe.ONE,oe.ONE),oe.blendEquationSeparate(oe.FUNC_ADD,Me?oe.MAX:ue.MAX_EXT),oe.clear(oe.COLOR_BUFFER_BIT),Me?oe.drawArraysInstanced(oe.TRIANGLES,0,3,_e.length/4):$.drawArraysInstancedANGLE(oe.TRIANGLES,0,3,_e.length/4)})}),me("post",s,U,function(B){B.setAttribute("aUV",2,oe.STATIC_DRAW,0,R),B.setUniform("1i","tex",j),oe.bindFramebuffer(oe.FRAMEBUFFER,Z),oe.disable(oe.BLEND),oe.colorMask(fe===0,fe===1,fe===2,fe===3),oe.viewport(Y,ae,X,G),oe.scissor(Y,ae,X,G),oe.drawArrays(oe.TRIANGLES,0,3)})}),oe.isContextLost())throw x(),new Error("webgl context lost")})}function z(X){var G=!X||X===T?M:X.canvas||X,D=v.get(G);if(D===void 0){P=!0;var W=null;try{var J=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],I=C(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,X);D=I&&J.length===I.length&&I.every(function(O,Z){return O===J[Z]}),D||(W="bad trial run results",console.info(J,I))}catch(O){D=!1,W=O.message}W&&console.warn("WebGL SDF generation not supported:",W),P=!1,v.set(G,D)}return D}var q=Object.freeze({__proto__:null,generate:C,generateIntoCanvas:A,generateIntoFramebuffer:F,isSupported:z});function ee(X,G,D,W,J,I){J===void 0&&(J=Math.max(W[2]-W[0],W[3]-W[1])/2),I===void 0&&(I=1);try{return C.apply(q,arguments)}catch(O){return console.info("WebGL SDF generation failed, falling back to JS",O),g.apply(y,arguments)}}function H(X,G,D,W,J,I,O,Z,Y,ae){J===void 0&&(J=Math.max(W[2]-W[0],W[3]-W[1])/2),I===void 0&&(I=1),Z===void 0&&(Z=0),Y===void 0&&(Y=0),ae===void 0&&(ae=0);try{return A.apply(q,arguments)}catch(fe){return console.info("WebGL SDF generation failed, falling back to JS",fe),_.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=ee,e.generateIntoCanvas=H,e.javascript=y,e.pathToLineSegments=i,e.webgl=q,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function tg(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(x,V){r[x]=1<<V+1,n[r[x]]=x}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function h(){if(!u){u=new Map;var x=function(j){if(t.hasOwnProperty(j)){var B=0;t[j].split(",").forEach(function(Q){var ce=Q.split("+"),$=ce[0],ue=ce[1];$=parseInt($,36),ue=ue?parseInt(ue,36):0,u.set(B+=$,r[j]);for(var we=0;we<ue;we++)u.set(++B,r[j])})}};for(var V in t)x(V)}}function f(x){return h(),u.get(x.codePointAt(0))||r.L}function d(x){return n[f(x)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function _(x,V){var j=36,B=0,Q=new Map,ce=V&&new Map,$;return x.split(",").forEach(function ue(we){if(we.indexOf("+")!==-1)for(var se=+we;se--;)ue($);else{$=we;var he=we.split(">"),ve=he[0],ge=he[1];ve=String.fromCodePoint(B+=parseInt(ve,j)),ge=String.fromCodePoint(B+=parseInt(ge,j)),Q.set(ve,ge),V&&ce.set(ge,ve)}}),{map:Q,reverseMap:ce}}var p,m,y;function S(){if(!p){var x=_(g.pairs,!0),V=x.map,j=x.reverseMap;p=V,m=j,y=_(g.canonical,!1).map}}function E(x){return S(),p.get(x)||null}function U(x){return S(),m.get(x)||null}function R(x){return S(),y.get(x)||null}var T=r.L,P=r.R,M=r.EN,v=r.ES,k=r.ET,C=r.AN,A=r.CS,F=r.B,z=r.S,q=r.ON,ee=r.BN,H=r.NSM,X=r.AL,G=r.LRO,D=r.RLO,W=r.LRE,J=r.RLE,I=r.PDF,O=r.LRI,Z=r.RLI,Y=r.FSI,ae=r.PDI;function fe(x,V){for(var j=125,B=new Uint32Array(x.length),Q=0;Q<x.length;Q++)B[Q]=f(x[Q]);var ce=new Map;function $(bt,Wt){var At=B[bt];B[bt]=Wt,ce.set(At,ce.get(At)-1),At&o&&ce.set(o,ce.get(o)-1),ce.set(Wt,(ce.get(Wt)||0)+1),Wt&o&&ce.set(o,(ce.get(o)||0)+1)}for(var ue=new Uint8Array(x.length),we=new Map,se=[],he=null,ve=0;ve<x.length;ve++)he||se.push(he={start:ve,end:x.length-1,level:V==="rtl"?1:V==="ltr"?0:Os(ve,!1)}),B[ve]&F&&(he.end=ve,he=null);for(var ge=J|W|D|G|i|ae|I|F,xe=function(bt){return bt+(bt&1?1:2)},Le=function(bt){return bt+(bt&1?2:1)},be=0;be<se.length;be++){he=se[be];var Re=[{_level:he.level,_override:0,_isolate:0}],Se=void 0,Ie=0,Ee=0,L=0;ce.clear();for(var de=he.start;de<=he.end;de++){var le=B[de];if(Se=Re[Re.length-1],ce.set(le,(ce.get(le)||0)+1),le&o&&ce.set(o,(ce.get(o)||0)+1),le&ge)if(le&(J|W)){ue[de]=Se._level;var ye=(le===J?Le:xe)(Se._level);ye<=j&&!Ie&&!Ee?Re.push({_level:ye,_override:0,_isolate:0}):Ie||Ee++}else if(le&(D|G)){ue[de]=Se._level;var Ne=(le===D?Le:xe)(Se._level);Ne<=j&&!Ie&&!Ee?Re.push({_level:Ne,_override:le&D?P:T,_isolate:0}):Ie||Ee++}else if(le&i){le&Y&&(le=Os(de+1,!0)===1?Z:O),ue[de]=Se._level,Se._override&&$(de,Se._override);var Oe=(le===Z?Le:xe)(Se._level);Oe<=j&&Ie===0&&Ee===0?(L++,Re.push({_level:Oe,_override:0,_isolate:1,_isolInitIndex:de})):Ie++}else if(le&ae){if(Ie>0)Ie--;else if(L>0){for(Ee=0;!Re[Re.length-1]._isolate;)Re.pop();var De=Re[Re.length-1]._isolInitIndex;De!=null&&(we.set(De,de),we.set(de,De)),Re.pop(),L--}Se=Re[Re.length-1],ue[de]=Se._level,Se._override&&$(de,Se._override)}else le&I?(Ie===0&&(Ee>0?Ee--:!Se._isolate&&Re.length>1&&(Re.pop(),Se=Re[Re.length-1])),ue[de]=Se._level):le&F&&(ue[de]=he.level);else ue[de]=Se._level,Se._override&&le!==ee&&$(de,Se._override)}for(var Ve=[],We=null,Ue=he.start;Ue<=he.end;Ue++){var je=B[Ue];if(!(je&l)){var et=ue[Ue],nt=je&i,it=je===ae;We&&et===We._level?(We._end=Ue,We._endsWithIsolInit=nt):Ve.push(We={_start:Ue,_end:Ue,_level:et,_startsWithPDI:it,_endsWithIsolInit:nt})}}for(var Et=[],Jt=0;Jt<Ve.length;Jt++){var Tt=Ve[Jt];if(!Tt._startsWithPDI||Tt._startsWithPDI&&!we.has(Tt._start)){for(var Vt=[We=Tt],Nt=void 0;We&&We._endsWithIsolInit&&(Nt=we.get(We._end))!=null;)for(var Ot=Jt+1;Ot<Ve.length;Ot++)if(Ve[Ot]._start===Nt){Vt.push(We=Ve[Ot]);break}for(var ht=[],rn=0;rn<Vt.length;rn++)for(var sr=Vt[rn],Fi=sr._start;Fi<=sr._end;Fi++)ht.push(Fi);for(var b=ue[ht[0]],K=he.level,ie=ht[0]-1;ie>=0;ie--)if(!(B[ie]&l)){K=ue[ie];break}var re=ht[ht.length-1],ne=ue[re],Ce=he.level;if(!(B[re]&i)){for(var Fe=re+1;Fe<=he.end;Fe++)if(!(B[Fe]&l)){Ce=ue[Fe];break}}Et.push({_seqIndices:ht,_sosType:Math.max(K,b)%2?P:T,_eosType:Math.max(Ce,ne)%2?P:T})}}for(var Be=0;Be<Et.length;Be++){var ke=Et[Be],pe=ke._seqIndices,Ge=ke._sosType,He=ke._eosType,Je=ue[pe[0]]&1?P:T;if(ce.get(H))for(var ft=0;ft<pe.length;ft++){var rt=pe[ft];if(B[rt]&H){for(var Ut=Ge,Qe=ft-1;Qe>=0;Qe--)if(!(B[pe[Qe]]&l)){Ut=B[pe[Qe]];break}$(rt,Ut&(i|ae)?q:Ut)}}if(ce.get(M))for(var ze=0;ze<pe.length;ze++){var Qn=pe[ze];if(B[Qn]&M)for(var Ze=ze-1;Ze>=-1;Ze--){var Qt=Ze===-1?Ge:B[pe[Ze]];if(Qt&s){Qt===X&&$(Qn,C);break}}}if(ce.get(X))for(var $n=0;$n<pe.length;$n++){var gn=pe[$n];B[gn]&X&&$(gn,P)}if(ce.get(v)||ce.get(A))for(var an=1;an<pe.length-1;an++){var at=pe[an];if(B[at]&(v|A)){for(var St=0,Dn=0,gt=an-1;gt>=0&&(St=B[pe[gt]],!!(St&l));gt--);for(var In=an+1;In<pe.length&&(Dn=B[pe[In]],!!(Dn&l));In++);St===Dn&&(B[at]===v?St===M:St&(M|C))&&$(at,St)}}if(ce.get(M))for(var Bt=0;Bt<pe.length;Bt++){var or=pe[Bt];if(B[or]&M){for(var lr=Bt-1;lr>=0&&B[pe[lr]]&(k|l);lr--)$(pe[lr],M);for(Bt++;Bt<pe.length&&B[pe[Bt]]&(k|l|M);Bt++)B[pe[Bt]]!==M&&$(pe[Bt],M)}}if(ce.get(k)||ce.get(v)||ce.get(A))for(var Ni=0;Ni<pe.length;Ni++){var Ts=pe[Ni];if(B[Ts]&(k|v|A)){$(Ts,q);for(var cr=Ni-1;cr>=0&&B[pe[cr]]&l;cr--)$(pe[cr],q);for(var ur=Ni+1;ur<pe.length&&B[pe[ur]]&l;ur++)$(pe[ur],q)}}if(ce.get(M))for(var ca=0,bs=Ge;ca<pe.length;ca++){var As=pe[ca],ua=B[As];ua&M?bs===T&&$(As,T):ua&s&&(bs=ua)}if(ce.get(o)){var Oi=P|M|C,ws=Oi|T,hr=[];{for(var ei=[],ti=0;ti<pe.length;ti++)if(B[pe[ti]]&o){var Bi=x[pe[ti]],Rs=void 0;if(E(Bi)!==null)if(ei.length<63)ei.push({char:Bi,seqIndex:ti});else break;else if((Rs=U(Bi))!==null)for(var ki=ei.length-1;ki>=0;ki--){var ha=ei[ki].char;if(ha===Rs||ha===U(R(Bi))||E(R(ha))===Bi){hr.push([ei[ki].seqIndex,ti]),ei.length=ki;break}}}hr.sort(function(bt,Wt){return bt[0]-Wt[0]})}for(var fa=0;fa<hr.length;fa++){for(var Cs=hr[fa],fr=Cs[0],da=Cs[1],Us=!1,Ht=0,pa=fr+1;pa<da;pa++){var Ps=pe[pa];if(B[Ps]&ws){Us=!0;var Ls=B[Ps]&Oi?P:T;if(Ls===Je){Ht=Ls;break}}}if(Us&&!Ht){Ht=Ge;for(var ma=fr-1;ma>=0;ma--){var Ds=pe[ma];if(B[Ds]&ws){var Is=B[Ds]&Oi?P:T;Is!==Je?Ht=Is:Ht=Je;break}}}if(Ht){if(B[pe[fr]]=B[pe[da]]=Ht,Ht!==Je){for(var Gi=fr+1;Gi<pe.length;Gi++)if(!(B[pe[Gi]]&l)){f(x[pe[Gi]])&H&&(B[pe[Gi]]=Ht);break}}if(Ht!==Je){for(var zi=da+1;zi<pe.length;zi++)if(!(B[pe[zi]]&l)){f(x[pe[zi]])&H&&(B[pe[zi]]=Ht);break}}}}for(var _n=0;_n<pe.length;_n++)if(B[pe[_n]]&o){for(var Fs=_n,ga=_n,_a=Ge,Vi=_n-1;Vi>=0;Vi--)if(B[pe[Vi]]&l)Fs=Vi;else{_a=B[pe[Vi]]&Oi?P:T;break}for(var Ns=He,Hi=_n+1;Hi<pe.length;Hi++)if(B[pe[Hi]]&(o|l))ga=Hi;else{Ns=B[pe[Hi]]&Oi?P:T;break}for(var va=Fs;va<=ga;va++)B[pe[va]]=_a===Ns?_a:Je;_n=ga}}}for(var Pt=he.start;Pt<=he.end;Pt++){var vc=ue[Pt],dr=B[Pt];if(vc&1?dr&(T|M|C)&&ue[Pt]++:dr&P?ue[Pt]++:dr&(C|M)&&(ue[Pt]+=2),dr&l&&(ue[Pt]=Pt===0?he.level:ue[Pt-1]),Pt===he.end||f(x[Pt])&(z|F))for(var pr=Pt;pr>=0&&f(x[pr])&c;pr--)ue[pr]=he.level}}return{levels:ue,paragraphs:se};function Os(bt,Wt){for(var At=bt;At<x.length;At++){var vn=B[At];if(vn&(P|X))return 1;if(vn&(F|T)||Wt&&vn===ae)return 0;if(vn&i){var Bs=xc(At);At=Bs===-1?x.length:Bs}}return 0}function xc(bt){for(var Wt=1,At=bt+1;At<x.length;At++){var vn=B[At];if(vn&F)break;if(vn&ae){if(--Wt===0)return At}else vn&i&&Wt++}return-1}}var _e="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",N;function oe(){if(!N){var x=_(_e,!0),V=x.map,j=x.reverseMap;j.forEach(function(B,Q){V.set(Q,B)}),N=V}}function Me(x){return oe(),N.get(x)||null}function Pe(x,V,j,B){var Q=x.length;j=Math.max(0,j==null?0:+j),B=Math.min(Q-1,B==null?Q-1:+B);for(var ce=new Map,$=j;$<=B;$++)if(V[$]&1){var ue=Me(x[$]);ue!==null&&ce.set($,ue)}return ce}function me(x,V,j,B){var Q=x.length;j=Math.max(0,j==null?0:+j),B=Math.min(Q-1,B==null?Q-1:+B);var ce=[];return V.paragraphs.forEach(function($){var ue=Math.max(j,$.start),we=Math.min(B,$.end);if(ue<we){for(var se=V.levels.slice(ue,we+1),he=we;he>=ue&&f(x[he])&c;he--)se[he]=$.level;for(var ve=$.level,ge=1/0,xe=0;xe<se.length;xe++){var Le=se[xe];Le>ve&&(ve=Le),Le<ge&&(ge=Le|1)}for(var be=ve;be>=ge;be--)for(var Re=0;Re<se.length;Re++)if(se[Re]>=be){for(var Se=Re;Re+1<se.length&&se[Re+1]>=be;)Re++;Re>Se&&ce.push([Se+ue,Re+ue])}}}),ce}function Te(x,V,j,B){var Q=w(x,V,j,B),ce=[].concat(x);return Q.forEach(function($,ue){ce[ue]=(V.levels[$]&1?Me(x[$]):null)||x[$]}),ce.join("")}function w(x,V,j,B){for(var Q=me(x,V,j,B),ce=[],$=0;$<x.length;$++)ce[$]=$;return Q.forEach(function(ue){for(var we=ue[0],se=ue[1],he=ce.slice(we,se+1),ve=he.length;ve--;)ce[se-ve]=he[ve]}),ce}return e.closingToOpeningBracket=U,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=R,e.getEmbeddingLevels=fe,e.getMirroredCharacter=Me,e.getMirroredCharactersMap=Pe,e.getReorderSegments=me,e.getReorderedIndices=w,e.getReorderedString=Te,e.openingToClosingBracket=E,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const hc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function ps(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Xe[n];return i?ps(i):r}return a.replace(e,t)}const pt=[];for(let a=0;a<256;a++)pt[a]=(a<16?"0":"")+a.toString(16);function ng(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pt[a&255]+pt[a>>8&255]+pt[a>>16&255]+pt[a>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]).toUpperCase()}const zn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(a[n]=r[n])}return a},ig=Date.now(),fl=new WeakMap,dl=new Map;let rg=1e10;function ms(a,e){const t=lg(e);let r=fl.get(a);if(r||fl.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c,u){a.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=dl[h];if(!f){const d=ag(this,c,e,t);f=dl[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,zn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-ig}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:rg++}),u.uuid=ng(),u.uniforms=zn({},c.uniforms,e.uniforms),u.defines=zn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=zn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(zn(this.extensions,c.extensions),zn(this.defines,c.defines),zn(this.uniforms,jl.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=ms(a.isDerivedMaterial?a.getDepthMaterial():new ac({depthPacking:Bl}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=ms(a.isDerivedMaterial?a.getDistanceMaterial():new sc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function ag(a,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:g}=r;if(i=i||"",s=s||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=ps(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=ps(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(_.push(p),"")),h=`${f}
${_.join(`
`)}
${h}`}if(g){const _=`
uniform float ${g};
`;i=_+i,c=_+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,p,m,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,m))?p:`troika_${p}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=pl(e,n,i,s,o),t=pl(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function pl(a,e,t,r,n){return(r||n||t)&&(a=a.replace(hc,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function sg(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let og=0;const ml=new Map;function lg(a){const e=JSON.stringify(a,sg);let t=ml.get(e);return t==null&&ml.set(e,t=++og),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function cg(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var h=i.readUint(s,o);o+=4,c.push(e._readFont(s,h))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var _=s.readUint(n,i);i+=4,h[d]={offset:g,length:_}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(n,h[p].offset,h[p].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==i)return f}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,u={},h=i;c.readFixed(n,i),i+=4;var f=c.readUshort(n,i);i+=2;var d=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+g,l),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var d=e._lctf.readLookupTable(n,l+f,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,i);i+=2;var g=s(n,h,l+d,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)n>>>s&1&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(s.readUshort(n,i)),i+=2}if(l==2){var f=s.readUshort(n,i);for(i+=2,h=0;h<f;h++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,i);i+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(s.readUshort(n,i+2*h));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,i);i+=2;for(var h=0;h<u;h++){var f=s.readASCII(n,i,4);i+=4;var d=s.readUshort(n,i);i+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var h=[];i=e.CFF.readIndex(n,i,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,i+h[u],i+h[u+1]));i+=h[h.length-1];var d=f[0],g=[];i=e.CFF.readIndex(n,i,g);var _=[];for(u=0;u<g.length-1;u++)_.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,d),d.CharStrings){i=d.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var p=[];for(u=0;u<g.length-1;u++)p.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));d.CharStrings=p}if(d.ROS){i=d.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),d.FDArray=[],u=0;u<m.length-1;u++){var y=e.CFF.readDict(n,i+m[u],i+m[u+1]);e.CFF._readFDict(n,y,_),d.FDArray.push(y)}i+=m[m.length-1],i=d.FDSelect,d.FDSelect=[];var S=n[i];if(i++,S!=3)throw S;var E=o.readUshort(n,i);for(i+=2,u=0;u<E+1;u++)d.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,_),d},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var h=0;h<l.length-1;h++)s.Subrs.push(o.readBytes(n,i+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<s;u++){var h=o.readUshort(n,i);i+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){h=o.readUshort(n,i),i+=2;var f=0;for(c==1?(f=n[i],i++):(f=o.readUshort(n,i),i+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)s.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,i+1)/65535,u=5),s.val=f??"o"+h,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(g=l.readShort(n,i+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255&&(g=l.readInt(n,i+1)/65535,f=5),c.push(g??"o"+d),i+=f}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var u=n[i],h=n[i+1];n[i+2],n[i+3],n[i+4];var f=1,d=null,g=null;if(u==28&&(g=o.readShort(n,i+1),f=3),u==29&&(g=o.readInt(n,i+1),f=5),32<=u&&u<=246&&(g=u-139,f=1),247<=u&&u<=250&&(g=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(g=256*-(u-251)-h-108,f=2),u==255)throw g=o.readInt(n,i+1)/65535,f=5,"unknown number";if(u==30){var _=[];for(f=1;;){var p=n[i+f];f++;var m=p>>4,y=15&p;if(m!=15&&_.push(m),y!=15&&_.push(y),y==15)break}for(var S="",E=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],U=0;U<_.length;U++)S+=E[_[U]];g=parseFloat(S)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(g),i+=f}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,i);i+=2;var d=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var _="p"+f+"e"+d,p=u.indexOf(g);if(p==-1){var m;p=l.tables.length,u.push(g);var y=o.readUshort(n,g);y==0?m=e.cmap.parse0(n,g):y==4?m=e.cmap.parse4(n,g):y==6?m=e.cmap.parse6(n,g):y==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+y,f,d,g),l.tables.push(m)}if(l[_]!=null)throw"multiple tables for one platform+encoding";l[_]=p}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var h=u/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,h),i+=2*h,i+=2,l.startCount=s.readUshorts(n,i,h),i+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,h),i+=2*h,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,h=s.readUint(n,u+0),f=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var h=s.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=s.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var g=o[l];l++;for(var _=0;_<g;_++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,S=0;for(u=0;u<f;u++)y+=c.xs[u],S+=c.ys[u],c.xs[u]=y,c.ys[u]=S}else{var E;c.parts=[];do{E=s.readUshort(o,l),l+=2;var U={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(U),U.glyphIndex=s.readUshort(o,l),l+=2,1&E){var R=s.readShort(o,l);l+=2;var T=s.readShort(o,l);l+=2}else R=s.readInt8(o,l),l++,T=s.readInt8(o,l),l++;2&E?(U.m.tx=R,U.m.ty=T):(U.p1=R,U.p2=T),8&E?(U.m.a=U.m.d=s.readF2dot14(o,l),l+=2):64&E?(U.m.a=s.readF2dot14(o,l),l+=2,U.m.d=s.readF2dot14(o,l),l+=2):128&E&&(U.m.a=s.readF2dot14(o,l),l+=2,U.m.b=s.readF2dot14(o,l),l+=2,U.m.c=s.readF2dot14(o,l),l+=2,U.m.d=s.readF2dot14(o,l),l+=2)}while(32&E);if(256&E){var P=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<P;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,s,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var h=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(i==1&&u.fmt==1){var f=l.readUshort(n,s);s+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,s,f))}else if(i==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var g=e._lctf.numOfOnes(f),_=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,s);s+=2;for(var m=0;m<p;m++){var y=c+l.readUshort(n,s);s+=2;var S=l.readUshort(n,y);y+=2;for(var E=[],U=0;U<S;U++){var R=l.readUshort(n,y);y+=2,f!=0&&(C=e.GPOS.readValueRecord(n,y,f),y+=2*g),d!=0&&(A=e.GPOS.readValueRecord(n,y,d),y+=2*_),E.push({gid2:R,val1:C,val2:A})}u.pairsets.push(E)}}if(u.fmt==2){var T=l.readUshort(n,s);s+=2;var P=l.readUshort(n,s);s+=2;var M=l.readUshort(n,s);s+=2;var v=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+P),u.matrix=[],m=0;m<M;m++){var k=[];for(U=0;U<v;U++){var C=null,A=null;f!=0&&(C=e.GPOS.readValueRecord(n,s,f),s+=2*g),d!=0&&(A=e.GPOS.readValueRecord(n,s,d),s+=2*_),k.push({val1:C,val2:A})}u.matrix.push(k)}}}else if(i==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(i==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(i==9&&u.fmt==1){var F=l.readUshort(n,s);s+=2;var z=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+z)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,i,s){var o=e._bin,l=[],c=i,u=o.readUshort(n,i);i+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<s;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,i){var s=e._bin,o=[],l=i,c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,s.readUshort(n,i+2)+l);h.markClass=s.readUshort(n,i),o.push(h),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var s=e._bin,o={};return o.fmt=s.readUshort(n,i),o.x=s.readShort(n,i+2),o.y=s.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var h=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var f=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,f),s+=2*u.newg.length}}else if(i==2&&u.fmt==1){f=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<f;d++){var g=l.readUshort(n,s)+c;s+=2;var _=l.readUshort(n,g);u.seqs.push(l.readUshorts(n,g+2,_))}}else if(i==4)for(u.vals=[],f=l.readUshort(n,s),s+=2,d=0;d<f;d++){var p=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(i==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var y=l.readUshort(n,s);for(s+=2,d=0;d<y;d++){var S=l.readUshort(n,s);s+=2,u.scset.push(S==0?null:e.GSUB.readSubClassSet(n,c+S))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,s),s+=2;for(var E=[],U=0;U<f;U++)E.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*U)));s+=2*f,d==0&&(u.backCvg=E),d==1&&(u.inptCvg=E),d==2&&(u.ahedCvg=E)}f=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,f)}}else{if(i==7&&u.fmt==1){var R=l.readUshort(n,s);s+=2;var T=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=R;else if(o.ltype!=R)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var u=0;u<c;u++){var h=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var h=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,h=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var u=l.readUshort(n,i);i+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){i+=2,s=l.readUshort(n,i),i+=2;var d=l.readUshort(n,i);i+=2;var g=d>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,h)}return h},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,i),i+=4;var f=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var d=o.readShort(n,i);i+=2,h!=l&&(s.glyph1.push(h),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(f),g.vals.push(d),l=h}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,i+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,i+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=i+=2,d=0;d<c;d++){var g=o.readUshort(n,i);i+=2;var _=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var y=o.readUshort(n,i);i+=2;var S=o.readUshort(n,i);i+=2;var E,U=h[m],R=f+12*c+S;if(g==0)E=o.readUnicode(n,R,y/2);else if(g==3&&_==0)E=o.readUnicode(n,R,y/2);else if(_==0)E=o.readASCII(n,R,y);else if(_==1)E=o.readUnicode(n,R,y/2);else if(_==3)E=o.readUnicode(n,R,y/2);else{if(g!=1)throw"unknown encoding "+_+", platformID: "+g;E=o.readASCII(n,R,y),console.debug("reading unknown MAC encoding "+_+" as ASCII")}var T="p"+g+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][U!==void 0?U:m]=E,l[T]._lang=p}for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==1033)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==0)return l[P];for(var P in l)if(l[P].postScriptName!=null&&l[P]._lang==3084)return l[P];for(var P in l)if(l[P].postScriptName!=null)return l[P];for(var P in l){u=P;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=i&&i<=h[1])return h[2]+(i-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=i;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],g=1&n.flags[h],_=n.xs[c],p=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(i,_,p);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+_)/2,(n.ys[u]+p)/2);f?d&&e.U.P.lineTo(i,_,p):g?e.U.P.qcurveTo(i,_,p,n.xs[h],n.ys[h]):e.U.P.qcurveTo(i,_,p,(_+n.xs[h])/2,(p+n.ys[h])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];s.crds.push(f*u.a+d*u.b+u.tx),s.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)s.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,h=s.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[i]))!=-1){if(s.ltype==1)n[i],h.fmt==1?n[i]=n[i]+h.delta:n[i]=h.newg[u];else if(s.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var g=f[d],_=g.chain.length;if(!(_>l)){for(var p=!0,m=0,y=0;y<_;y++){for(;n[i+m+(1+y)]==-1;)m++;g.chain[y]!=n[i+m+(1+y)]&&(p=!1)}if(p){for(n[i]=g.nglyph,y=0;y<_+m;y++)n[i+y+1]=-1;break}}}else if(s.ltype==5&&h.fmt==2)for(var S=e._lctf.getInterval(h.cDef,n[i]),E=h.cDef[S+2],U=h.scset[E],R=0;R<U.length;R++){var T=U[R],P=T.input;if(!(P.length>l)){for(p=!0,y=0;y<P.length;y++){var M=e._lctf.getInterval(h.cDef,n[i+1+y]);if(S==-1&&h.cDef[M+2]!=P[y]){p=!1;break}}if(p){var v=T.substLookupRecords;for(d=0;d<v.length;d+=2)v[d],v[d+1]}}}else if(s.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,i-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,i)||!e.U._glsCovered(n,h.ahedCvg,i+h.inptCvg.length))continue;var k=h.lookupRec;for(R=0;R<k.length;R+=2){S=k[R];var C=o[k[R+1]];e.U._applySubs(n,i+S,C,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var h=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,u){n.cmds.push("C"),n.crds.push(i,s,o,l,c,u)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open,g=0,_=i.x,p=i.y,m=0,y=0,S=0,E=0,U=0,R=0,T=0,P=0,M=0,v=0,k={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,k);var C=k.val;if(g+=k.size,C=="o1"||C=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(C=="o3"||C=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(C=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,_,p),d=!0;else if(C=="o5")for(;c.length>0;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);else if(C=="o6"||C=="o7")for(var A=c.length,F=C=="o6",z=0;z<A;z++){var q=c.shift();F?_+=q:p+=q,F=!F,e.U.P.lineTo(l,_,p)}else if(C=="o8"||C=="o24"){A=c.length;for(var ee=0;ee+6<=A;)m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),E=y+c.shift(),_=S+c.shift(),p=E+c.shift(),e.U.P.curveTo(l,m,y,S,E,_,p),ee+=6;C=="o24"&&(_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p))}else{if(C=="o11")break;if(C=="o1234"||C=="o1235"||C=="o1236"||C=="o1237")C=="o1234"&&(y=p,S=(m=_+c.shift())+c.shift(),v=E=y+c.shift(),R=E,P=p,_=(T=(U=(M=S+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,S,E,M,v),e.U.P.curveTo(l,U,R,T,P,_,p)),C=="o1235"&&(m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),E=y+c.shift(),M=S+c.shift(),v=E+c.shift(),U=M+c.shift(),R=v+c.shift(),T=U+c.shift(),P=R+c.shift(),_=T+c.shift(),p=P+c.shift(),c.shift(),e.U.P.curveTo(l,m,y,S,E,M,v),e.U.P.curveTo(l,U,R,T,P,_,p)),C=="o1236"&&(m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),v=E=y+c.shift(),R=E,T=(U=(M=S+c.shift())+c.shift())+c.shift(),P=R+c.shift(),_=T+c.shift(),e.U.P.curveTo(l,m,y,S,E,M,v),e.U.P.curveTo(l,U,R,T,P,_,p)),C=="o1237"&&(m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),E=y+c.shift(),M=S+c.shift(),v=E+c.shift(),U=M+c.shift(),R=v+c.shift(),T=U+c.shift(),P=R+c.shift(),Math.abs(T-_)>Math.abs(P-p)?_=T+c.shift():p=P+c.shift(),e.U.P.curveTo(l,m,y,S,E,M,v),e.U.P.curveTo(l,U,R,T,P,_,p));else if(C=="o14"){if(c.length>0&&!h&&(f=c.shift()+s.nominalWidthX,h=!0),c.length==4){var H=c.shift(),X=c.shift(),G=c.shift(),D=c.shift(),W=e.CFF.glyphBySE(s,G),J=e.CFF.glyphBySE(s,D);e.U._drawCFF(s.CharStrings[W],i,s,o,l),i.x=H,i.y=X,e.U._drawCFF(s.CharStrings[J],i,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(C=="o19"||C=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,g+=u+7>>3;else if(C=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(C=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),_+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,_,p),d=!0;else if(C=="o25"){for(;c.length>6;)_+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,_,p);m=_+c.shift(),y=p+c.shift(),S=m+c.shift(),E=y+c.shift(),_=S+c.shift(),p=E+c.shift(),e.U.P.curveTo(l,m,y,S,E,_,p)}else if(C=="o26")for(c.length%2&&(_+=c.shift());c.length>0;)m=_,y=p+c.shift(),_=S=m+c.shift(),p=(E=y+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,S,E,_,p);else if(C=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)y=p,S=(m=_+c.shift())+c.shift(),E=y+c.shift(),_=S+c.shift(),p=E,e.U.P.curveTo(l,m,y,S,E,_,p);else if(C=="o10"||C=="o29"){var I=C=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var O=c.pop(),Z=I.Subrs[O+I.Bias];i.x=_,i.y=p,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d,e.U._drawCFF(Z,i,s,o,l),_=i.x,p=i.y,u=i.nStems,h=i.haveWidth,f=i.width,d=i.open}}else if(C=="o30"||C=="o31"){var Y=c.length,ae=(ee=0,C=="o31");for(ee+=Y-(A=-3&Y);ee<A;)ae?(y=p,S=(m=_+c.shift())+c.shift(),p=(E=y+c.shift())+c.shift(),A-ee==5?(_=S+c.shift(),ee++):_=S,ae=!1):(m=_,y=p+c.shift(),S=m+c.shift(),E=y+c.shift(),_=S+c.shift(),A-ee==5?(p=E+c.shift(),ee++):p=E,ae=!0),e.U.P.curveTo(l,m,y,S,E,_,p),ee+=4}else{if((C+"").charAt(0)=="o")throw console.debug("Unknown operation: "+C,n),C;c.push(C)}}}i.x=_,i.y=p,i.nStems=u,i.haveWidth=h,i.width=f,i.open=d};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function ug(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(C,A){for(var F=new t(31),z=0;z<31;++z)F[z]=A+=1<<C[z-1];var q=new r(F[30]);for(z=1;z<30;++z)for(var ee=F[z];ee<F[z+1];++ee)q[ee]=ee-F[z]<<5|z;return[F,q]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(i,0)[0],f=new t(32768),d=0;d<32768;++d){var g=(43690&d)>>>1|(21845&d)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,f[d]=((65280&g)>>>8|(255&g)<<8)>>>1}var _=function(C,A,F){for(var z=C.length,q=0,ee=new t(A);q<z;++q)++ee[C[q]-1];var H,X=new t(A);for(q=0;q<A;++q)X[q]=X[q-1]+ee[q-1]<<1;if(F){H=new t(1<<A);var G=15-A;for(q=0;q<z;++q)if(C[q])for(var D=q<<4|C[q],W=A-C[q],J=X[C[q]-1]++<<W,I=J|(1<<W)-1;J<=I;++J)H[f[J]>>>G]=D}else for(H=new t(z),q=0;q<z;++q)C[q]&&(H[q]=f[X[C[q]-1]++]>>>15-C[q]);return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var y=_(p,9,1),S=_(m,5,1),E=function(C){for(var A=C[0],F=1;F<C.length;++F)C[F]>A&&(A=C[F]);return A},U=function(C,A,F){var z=A/8|0;return(C[z]|C[z+1]<<8)>>(7&A)&F},R=function(C,A){var F=A/8|0;return(C[F]|C[F+1]<<8|C[F+2]<<16)>>(7&A)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(C,A,F){var z=new Error(A||T[C]);if(z.code=C,Error.captureStackTrace&&Error.captureStackTrace(z,P),!F)throw z;return z},M=function(C,A,F){var z=C.length;if(!z||F&&!F.l&&z<5)return A||new e(0);var q=!A||F,ee=!F||F.i;F||(F={}),A||(A=new e(3*z));var H,X=function(Se){var Ie=A.length;if(Se>Ie){var Ee=new e(Math.max(2*Ie,Se));Ee.set(A),A=Ee}},G=F.f||0,D=F.p||0,W=F.b||0,J=F.l,I=F.d,O=F.m,Z=F.n,Y=8*z;do{if(!J){F.f=G=U(C,D,1);var ae=U(C,D+1,3);if(D+=3,!ae){var fe=C[(j=((H=D)/8|0)+(7&H&&1)+4)-4]|C[j-3]<<8,_e=j+fe;if(_e>z){ee&&P(0);break}q&&X(W+fe),A.set(C.subarray(j,_e),W),F.b=W+=fe,F.p=D=8*_e;continue}if(ae==1)J=y,I=S,O=9,Z=5;else if(ae==2){var N=U(C,D,31)+257,oe=U(C,D+10,15)+4,Me=N+U(C,D+5,31)+1;D+=14;for(var Pe=new e(Me),me=new e(19),Te=0;Te<oe;++Te)me[s[Te]]=U(C,D+3*Te,7);D+=3*oe;var w=E(me),x=(1<<w)-1,V=_(me,w,1);for(Te=0;Te<Me;){var j,B=V[U(C,D,x)];if(D+=15&B,(j=B>>>4)<16)Pe[Te++]=j;else{var Q=0,ce=0;for(j==16?(ce=3+U(C,D,3),D+=2,Q=Pe[Te-1]):j==17?(ce=3+U(C,D,7),D+=3):j==18&&(ce=11+U(C,D,127),D+=7);ce--;)Pe[Te++]=Q}}var $=Pe.subarray(0,N),ue=Pe.subarray(N);O=E($),Z=E(ue),J=_($,O,1),I=_(ue,Z,1)}else P(1);if(D>Y){ee&&P(0);break}}q&&X(W+131072);for(var we=(1<<O)-1,se=(1<<Z)-1,he=D;;he=D){var ve=(Q=J[R(C,D)&we])>>>4;if((D+=15&Q)>Y){ee&&P(0);break}if(Q||P(2),ve<256)A[W++]=ve;else{if(ve==256){he=D,J=null;break}var ge=ve-254;if(ve>264){var xe=n[Te=ve-257];ge=U(C,D,(1<<xe)-1)+c[Te],D+=xe}var Le=I[R(C,D)&se],be=Le>>>4;if(Le||P(3),D+=15&Le,ue=h[be],be>3&&(xe=i[be],ue+=R(C,D)&(1<<xe)-1,D+=xe),D>Y){ee&&P(0);break}q&&X(W+131072);for(var Re=W+ge;W<Re;W+=4)A[W]=A[W-ue],A[W+1]=A[W+1-ue],A[W+2]=A[W+2-ue],A[W+3]=A[W+3-ue];W=Re}}F.l=J,F.p=he,F.b=W,J&&(G=1,F.m=O,F.d=I,F.n=Z)}while(!G);return W==A.length?A:function(Se,Ie,Ee){(Ie==null||Ie<0)&&(Ie=0),(Ee==null||Ee>Se.length)&&(Ee=Se.length);var L=new(Se instanceof t?t:Se instanceof r?r:e)(Ee-Ie);return L.set(Se.subarray(Ie,Ee)),L}(A,0,W)},v=new e(0),k=typeof TextDecoder<"u"&&new TextDecoder;try{k.decode(v,{stream:!0})}catch{}return a.convert_streams=function(C){var A=new DataView(C),F=0;function z(){var N=A.getUint16(F);return F+=2,N}function q(){var N=A.getUint32(F);return F+=4,N}function ee(N){fe.setUint16(_e,N),_e+=2}function H(N){fe.setUint32(_e,N),_e+=4}for(var X={signature:q(),flavor:q(),length:q(),numTables:z(),reserved:z(),totalSfntSize:q(),majorVersion:z(),minorVersion:z(),metaOffset:q(),metaLength:q(),metaOrigLength:q(),privOffset:q(),privLength:q()},G=0;Math.pow(2,G)<=X.numTables;)G++;G--;for(var D=16*Math.pow(2,G),W=16*X.numTables-D,J=12,I=[],O=0;O<X.numTables;O++)I.push({tag:q(),offset:q(),compLength:q(),origLength:q(),origChecksum:q()}),J+=16;var Z,Y=new Uint8Array(12+16*I.length+I.reduce(function(N,oe){return N+oe.origLength+4},0)),ae=Y.buffer,fe=new DataView(ae),_e=0;return H(X.flavor),ee(X.numTables),ee(D),ee(G),ee(W),I.forEach(function(N){H(N.tag),H(N.origChecksum),H(J),H(N.origLength),N.outOffset=J,(J+=N.origLength)%4!=0&&(J+=4-J%4)}),I.forEach(function(N){var oe,Me=C.slice(N.offset,N.offset+N.compLength);if(N.compLength!=N.origLength){var Pe=new Uint8Array(N.origLength);oe=new Uint8Array(Me,2),M(oe,Pe)}else Pe=new Uint8Array(Me);Y.set(Pe,N.outOffset);var me=0;(J=N.outOffset+N.origLength)%4!=0&&(me=4-J%4),Y.set(new Uint8Array(me).buffer,N.outOffset+N.origLength),Z=J+me}),ae.slice(0,Z)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function hg(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let u;function h(T){if(!u){const P={R:i,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let M in r){let v=0;r[M].split(",").forEach(k=>{let[C,A]=k.split("+");C=parseInt(C,36),A=A?parseInt(A,36):0,u.set(v+=C,P[M]);for(let F=A;F--;)u.set(++v,P[M])})}}return u.get(T)||c}const f=1,d=2,g=3,_=4,p=[null,"isol","init","fina","medi"];function m(T){const P=new Uint8Array(T.length);let M=c,v=f,k=-1;for(let C=0;C<T.length;C++){const A=T.codePointAt(C);let F=h(A)|0,z=f;F&o||(M&(n|s|l)?F&(i|s|l)?(z=g,(v===f||v===g)&&P[k]++):F&(n|c)&&(v===d||v===_)&&P[k]--:M&(i|c)&&(v===d||v===_)&&P[k]--,v=P[C]=z,M=F,k=C,A>65535&&C++)}return P}function y(T,P){const M=[];for(let k=0;k<P.length;k++){const C=P.codePointAt(k);C>65535&&k++,M.push(a.U.codeToGlyph(T,C))}const v=T.GSUB;if(v){const{lookupList:k,featureList:C}=v;let A;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,z=[];C.forEach(q=>{if(F.test(q.tag))for(let ee=0;ee<q.tab.length;ee++){if(z[q.tab[ee]])continue;z[q.tab[ee]]=!0;const H=k[q.tab[ee]],X=/^(isol|init|fina|medi)$/.test(q.tag);X&&!A&&(A=m(P));for(let G=0;G<M.length;G++)(!A||!X||p[A[G]]===q.tag)&&a.U._applySubs(M,G,H,k)}})}return M}function S(T,P){const M=new Int16Array(P.length*3);let v=0;for(;v<P.length;v++){const F=P[v];if(F===-1)continue;M[v*3+2]=T.hmtx.aWidth[F];const z=T.GPOS;if(z){const q=z.lookupList;for(let ee=0;ee<q.length;ee++){const H=q[ee];for(let X=0;X<H.tabs.length;X++){const G=H.tabs[X];if(H.ltype===1){if(a._lctf.coverageIndex(G.coverage,F)!==-1&&G.pos){A(G.pos,v);break}}else if(H.ltype===2){let D=null,W=k();if(W!==-1){const J=a._lctf.coverageIndex(G.coverage,P[W]);if(J!==-1){if(G.fmt===1){const I=G.pairsets[J];for(let O=0;O<I.length;O++)I[O].gid2===F&&(D=I[O])}else if(G.fmt===2){const I=a.U._getGlyphClass(P[W],G.classDef1),O=a.U._getGlyphClass(F,G.classDef2);D=G.matrix[I][O]}if(D){D.val1&&A(D.val1,W),D.val2&&A(D.val2,v);break}}}}else if(H.ltype===4){const D=a._lctf.coverageIndex(G.markCoverage,F);if(D!==-1){const W=k(C),J=W===-1?-1:a._lctf.coverageIndex(G.baseCoverage,P[W]);if(J!==-1){const I=G.markArray[D],O=G.baseArray[J][I.markClass];M[v*3]=O.x-I.x+M[W*3]-M[W*3+2],M[v*3+1]=O.y-I.y+M[W*3+1];break}}}else if(H.ltype===6){const D=a._lctf.coverageIndex(G.mark1Coverage,F);if(D!==-1){const W=k();if(W!==-1){const J=P[W];if(E(T,J)===3){const I=a._lctf.coverageIndex(G.mark2Coverage,J);if(I!==-1){const O=G.mark1Array[D],Z=G.mark2Array[I][O.markClass];M[v*3]=Z.x-O.x+M[W*3]-M[W*3+2],M[v*3+1]=Z.y-O.y+M[W*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const q=k();if(q!==-1){const ee=T.kern.glyph1.indexOf(P[q]);if(ee!==-1){const H=T.kern.rval[ee].glyph2.indexOf(F);H!==-1&&(M[q*3+2]+=T.kern.rval[ee].vals[H])}}}}return M;function k(F){for(let z=v-1;z>=0;z--)if(P[z]!==-1&&(!F||F(P[z])))return z;return-1}function C(F){return E(T,F)===1}function A(F,z){for(let q=0;q<3;q++)M[z*3+q]+=F[q]||0}}function E(T,P){const M=T.GDEF&&T.GDEF.glyphClassDef;return M?a.U._getGlyphClass(P,M):0}function U(...T){for(let P=0;P<T.length;P++)if(typeof T[P]=="number")return T[P]}function R(T){const P=Object.create(null),M=T["OS/2"],v=T.hhea,k=T.head.unitsPerEm,C=U(M&&M.sTypoAscender,v&&v.ascender,k),A={unitsPerEm:k,ascender:C,descender:U(M&&M.sTypoDescender,v&&v.descender,0),capHeight:U(M&&M.sCapHeight,C),xHeight:U(M&&M.sxHeight,C),lineGap:U(M&&M.sTypoLineGap,v&&v.lineGap),supportsCodePoint(F){return a.U.codeToGlyph(T,F)>0},forEachGlyph(F,z,q,ee){let H=0;const X=1/A.unitsPerEm*z,G=y(T,F);let D=0;const W=S(T,G);return G.forEach((J,I)=>{if(J!==-1){let O=P[J];if(!O){const{cmds:Z,crds:Y}=a.U.glyphToPath(T,J);let ae="",fe=0;for(let Pe=0,me=Z.length;Pe<me;Pe++){const Te=t[Z[Pe]];ae+=Z[Pe];for(let w=1;w<=Te;w++)ae+=(w>1?",":"")+Y[fe++]}let _e,N,oe,Me;if(Y.length){_e=N=1/0,oe=Me=-1/0;for(let Pe=0,me=Y.length;Pe<me;Pe+=2){let Te=Y[Pe],w=Y[Pe+1];Te<_e&&(_e=Te),w<N&&(N=w),Te>oe&&(oe=Te),w>Me&&(Me=w)}}else _e=oe=N=Me=0;O=P[J]={index:J,advanceWidth:T.hmtx.aWidth[J],xMin:_e,yMin:N,xMax:oe,yMax:Me,path:ae}}ee.call(null,O,H+W[I*3]*X,W[I*3+1]*X,D),H+=W[I*3+2]*X,q&&(H+=q*z)}D+=F.codePointAt(D)>65535?2:1}),H}};return A}return function(P){const M=new Uint8Array(P,0,4),v=a._bin.readASCII(M,0,4);if(v==="wOFF")P=e(P);else if(v==="wOF2")throw new Error("woff2 fonts not supported");return R(a.parse(P)[0])}}const fg=Ii({name:"Typr Font Parser",dependencies:[cg,ug,hg],init(a,e,t){const r=a(),n=e();return t(r,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function dg(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(S){var E=S>>5;this.buckets.set(E,(this.buckets.get(E)||0)|1<<(31&S))},e.prototype.has=function(S){var E=this.buckets.get(S>>5);return E!==void 0&&(E&1<<(31&S))!=0},e.prototype.serialize=function(){var S=[];return this.buckets.forEach(function(E,U){S.push((+U).toString(36)+":"+E.toString(36))}),S.join(",")},e.prototype.deserialize=function(S){var E=this;this.buckets.clear(),S.split(",").forEach(function(U){var R=U.split(":");E.buckets.set(parseInt(R[0],36),parseInt(R[1],36))})};var t=Math.pow(2,8),r=t-1,n=~r;function i(S){var E=function(R){return R&n}(S).toString(16),U=function(R){return(R&n)+t-1}(S).toString(16);return"codepoint-index/plane"+(S>>16)+"/"+E+"-"+U+".json"}function s(S,E){var U=S&r,R=E.codePointAt(U/6|0);return((R=(R||48)-48)&1<<U%6)!=0}function o(S,E){var U;(U=S,U.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(R){return R.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(R){var T=R[0],P=R[1];P===void 0&&(P=T),E(T,P)})}function l(S,E){o(S,function(U,R){for(var T=U;T<=R;T++)E(T)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(S){var E=h.get(S);return E||(E=new e,l(S.ranges,function(U){return E.add(U)}),h.set(S,E)),E}var g,_=new Map;function p(S,E,U){return S[E]?E:S[U]?U:function(R){for(var T in R)return T}(S)}function m(S,E){var U=E;if(!S.includes(U)){U=1/0;for(var R=0;R<S.length;R++)Math.abs(S[R]-E)<Math.abs(U-E)&&(U=S[R])}return U}function y(S){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(E){g.add(E)})),g.has(S)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(S,E){E===void 0&&(E={});var U,R=E.lang;R===void 0&&(R=new RegExp("\\p{Script=Hangul}","u").test(U=S)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(U)?"ja":"en");var T=E.category;T===void 0&&(T="sans-serif");var P=E.style;P===void 0&&(P="normal");var M=E.weight;M===void 0&&(M=400);var v=(E.dataUrl||f).replace(/\/$/g,""),k=new Map,C=new Uint8Array(S.length),A={},F={},z=new Array(S.length),q=new Map,ee=!1;function H(D){var W=_.get(D);return W||(W=fetch(v+"/"+D).then(function(J){if(!J.ok)throw new Error(J.statusText);return J.json().then(function(I){if(!Array.isArray(I)||I[0]!==1)throw new Error("Incorrect schema version; need 1, got "+I[0]);return I[1]})}).catch(function(J){if(v!==f)return ee||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+v+'", trying default CDN. '+J.message),ee=!0),v=f,_.delete(D),H(D);throw J}),_.set(D,W)),W}for(var X=function(D){var W=S.codePointAt(D),J=i(W);z[D]=J,c[J]||q.has(J)||q.set(J,H(J).then(function(I){c[J]=I})),W>65535&&(D++,G=D)},G=0;G<S.length;G++)X(G);return Promise.all(q.values()).then(function(){q.clear();for(var D=function(J){var I=S.codePointAt(J),O=null,Z=c[z[J]],Y=void 0;for(var ae in Z){var fe=F[ae];if(fe===void 0&&(fe=F[ae]=new RegExp(ae).test(R||"en")),fe){for(var _e in Y=ae,Z[ae])if(s(I,Z[ae][_e])){O=_e;break}break}}if(!O){e:for(var N in Z)if(N!==Y){for(var oe in Z[N])if(s(I,Z[N][oe])){O=oe;break e}}}O||(console.debug("No font coverage for U+"+I.toString(16)),O="latin"),z[J]=O,u[O]||q.has(O)||q.set(O,H("font-meta/"+O+".json").then(function(Me){u[O]=Me})),I>65535&&(J++,W=J)},W=0;W<S.length;W++)D(W);return Promise.all(q.values())}).then(function(){for(var D,W=null,J=0;J<S.length;J++){var I=S.codePointAt(J);if(W&&(y(I)||d(W).has(I)))C[J]=C[J-1];else{W=u[z[J]];var O=A[W.id];if(!O){var Z=W.typeforms,Y=p(Z,T,"sans-serif"),ae=p(Z[Y],P,"normal"),fe=m((D=Z[Y])===null||D===void 0?void 0:D[ae],M);O=A[W.id]=v+"/font-files/"+W.id+"/"+Y+"."+ae+"."+fe+".woff"}var _e=k.get(O);_e==null&&(_e=k.size,k.set(O,_e)),C[J]=_e}I>65535&&(J++,C[J]=C[J-1])}return{fontUrls:Array.from(k.keys()),chars:C}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function pg(a,e){const t=Object.create(null),r=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):r[s]?r[s].push(o):(r[s]=[o],n(s,c=>{c.src=s,t[s]=c,r[s].forEach(u=>u(c)),delete r[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(s.length),g=[];s.length||y();const _=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(E=>!E.lang||E.lang.test(l)).reverse(),c.length){let T=0;(function P(M=0){for(let v=M,k=s.length;v<k;v++){const C=s.codePointAt(v);if(T===1&&g[d[v-1]].supportsCodePoint(C)||/\s/.test(s[v]))d[v]=d[v-1],T===2&&(p[p.length-1][1]=v);else for(let A=d[v],F=c.length;A<=F;A++)if(A===F){const z=T===2?p[p.length-1]:p[p.length]=[v,v];z[1]=v,T=2}else{d[v]=A;const{src:z,unicodeRange:q}=c[A];if(!q||S(C,q)){const ee=t[z];if(!ee){i(z,()=>{P(v)});return}if(ee.supportsCodePoint(C)){let H=_.get(ee);typeof H!="number"&&(H=g.length,g.push(ee),_.set(ee,H)),d[v]=H,T=1;break}}}C>65535&&v+1<k&&(d[v+1]=d[v],v++,T===2&&(p[p.length-1][1]=v))}m()})()}else p.push([0,s.length-1]),m();function m(){if(p.length){const E=p.map(U=>s.substring(U[0],U[1]+1)).join(`
`);e.getFontsForString(E,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:U,chars:R})=>{const T=g.length;let P=0;p.forEach(v=>{for(let k=0,C=v[1]-v[0];k<=C;k++)d[v[0]+k]=R[P++]+T;P++});let M=0;U.forEach((v,k)=>{i(v,C=>{g[k+T]=C,++M===U.length&&y()})})})}else y()}function y(){o({chars:d,fonts:g})}function S(E,U){for(let R=0;R<U.length;R++){const[T,P=T]=U[R];if(T<=E&&E<=P)return!0}return!1}}}const mg=Ii({name:"FontResolver",dependencies:[pg,fg,dg],init(a,e,t){return a(e,t())}});function gg(a,e){const r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:g,lang:_,fonts:p,style:m,weight:y,preResolvedFonts:S,unicodeFontsURL:E},U){const R=({chars:T,fonts:P})=>{let M,v;const k=[];for(let C=0;C<T.length;C++)T[C]!==v?(v=T[C],k.push(M={start:C,end:C,fontObj:P[T[C]]})):M.end=C;U(k)};S?R(S):a(g,R,{lang:_,fonts:p,style:m,weight:y,unicodeFontsURL:E})}function o({text:g="",font:_,lang:p,sdfGlyphSize:m=64,fontSize:y=400,fontWeight:S=1,fontStyle:E="normal",letterSpacing:U=0,lineHeight:R="normal",maxWidth:T=1/0,direction:P,textAlign:M="left",textIndent:v=0,whiteSpace:k="normal",overflowWrap:C="normal",anchorX:A=0,anchorY:F=0,metricsOnly:z=!1,unicodeFontsURL:q,preResolvedFonts:ee=null,includeCaretPositions:H=!1,chunkedBoundsSize:X=8192,colorRanges:G=null},D){const W=h(),J={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,U=+U,T=+T,R=R||"normal",v=+v,s({text:g,lang:p,style:E,weight:S,fonts:typeof _=="string"?[{src:_}]:_,unicodeFontsURL:q,preResolvedFonts:ee},I=>{J.fontLoad=h()-W;const O=isFinite(T);let Z=null,Y=null,ae=null,fe=null,_e=null,N=null,oe=null,Me=null,Pe=0,me=0,Te=k!=="nowrap";const w=new Map,x=h();let V=v,j=0,B=new f;const Q=[B];I.forEach(se=>{const{fontObj:he}=se,{ascender:ve,descender:ge,unitsPerEm:xe,lineGap:Le,capHeight:be,xHeight:Re}=he;let Se=w.get(he);if(!Se){const le=y/xe,ye=R==="normal"?(ve-ge+Le)*le:R*y,Ne=(ye-(ve-ge)*le)/2,Oe=Math.min(ye,(ve-ge)*le),De=(ve+ge)/2*le+Oe/2;Se={index:w.size,src:he.src,fontObj:he,fontSizeMult:le,unitsPerEm:xe,ascender:ve*le,descender:ge*le,capHeight:be*le,xHeight:Re*le,lineHeight:ye,baseline:-Ne-ve*le,caretTop:De,caretBottom:De-Oe},w.set(he,Se)}const{fontSizeMult:Ie}=Se,Ee=g.slice(se.start,se.end+1);let L,de;he.forEachGlyph(Ee,y,U,(le,ye,Ne,Oe)=>{ye+=j,Oe+=se.start,L=ye,de=le;const De=g.charAt(Oe),Ve=le.advanceWidth*Ie,We=B.count;let Ue;if("isEmpty"in le||(le.isWhitespace=!!De&&new RegExp(n).test(De),le.canBreakAfter=!!De&&i.test(De),le.isEmpty=le.xMin===le.xMax||le.yMin===le.yMax||r.test(De)),!le.isWhitespace&&!le.isEmpty&&me++,Te&&O&&!le.isWhitespace&&ye+Ve+V>T&&We){if(B.glyphAt(We-1).glyphObj.canBreakAfter)Ue=new f,V=-ye;else for(let et=We;et--;)if(et===0&&C==="break-word"){Ue=new f,V=-ye;break}else if(B.glyphAt(et).glyphObj.canBreakAfter){Ue=B.splitAt(et+1);const nt=Ue.glyphAt(0).x;V-=nt;for(let it=Ue.count;it--;)Ue.glyphAt(it).x-=nt;break}Ue&&(B.isSoftWrapped=!0,B=Ue,Q.push(B),Pe=T)}let je=B.glyphAt(B.count);je.glyphObj=le,je.x=ye+V,je.y=Ne,je.width=Ve,je.charIndex=Oe,je.fontData=Se,De===`
`&&(B=new f,Q.push(B),V=-(ye+Ve+U*y)+v)}),j=L+de.advanceWidth*Ie+U*y});let ce=0;Q.forEach(se=>{let he=!0;for(let ve=se.count;ve--;){const ge=se.glyphAt(ve);he&&!ge.glyphObj.isWhitespace&&(se.width=ge.x+ge.width,se.width>Pe&&(Pe=se.width),he=!1);let{lineHeight:xe,capHeight:Le,xHeight:be,baseline:Re}=ge.fontData;xe>se.lineHeight&&(se.lineHeight=xe);const Se=Re-se.baseline;Se<0&&(se.baseline+=Se,se.cap+=Se,se.ex+=Se),se.cap=Math.max(se.cap,se.baseline+Le),se.ex=Math.max(se.ex,se.baseline+be)}se.baseline-=ce,se.cap-=ce,se.ex-=ce,ce+=se.lineHeight});let $=0,ue=0;if(A&&(typeof A=="number"?$=-A:typeof A=="string"&&($=-Pe*(A==="left"?0:A==="center"?.5:A==="right"?1:c(A)))),F&&(typeof F=="number"?ue=-F:typeof F=="string"&&(ue=F==="top"?0:F==="top-baseline"?-Q[0].baseline:F==="top-cap"?-Q[0].cap:F==="top-ex"?-Q[0].ex:F==="middle"?ce/2:F==="bottom"?ce:F==="bottom-baseline"?-Q[Q.length-1].baseline:c(F)*ce)),!z){const se=e.getEmbeddingLevels(g,P);Z=new Uint16Array(me),Y=new Uint8Array(me),ae=new Float32Array(me*2),fe={},oe=[1/0,1/0,-1/0,-1/0],Me=[],H&&(N=new Float32Array(g.length*4)),G&&(_e=new Uint8Array(me*3));let he=0,ve=-1,ge=-1,xe,Le;if(Q.forEach((be,Re)=>{let{count:Se,width:Ie}=be;if(Se>0){let Ee=0;for(let Oe=Se;Oe--&&be.glyphAt(Oe).glyphObj.isWhitespace;)Ee++;let L=0,de=0;if(M==="center")L=(Pe-Ie)/2;else if(M==="right")L=Pe-Ie;else if(M==="justify"&&be.isSoftWrapped){let Oe=0;for(let De=Se-Ee;De--;)be.glyphAt(De).glyphObj.isWhitespace&&Oe++;de=(Pe-Ie)/Oe}if(de||L){let Oe=0;for(let De=0;De<Se;De++){let Ve=be.glyphAt(De);const We=Ve.glyphObj;Ve.x+=L+Oe,de!==0&&We.isWhitespace&&De<Se-Ee&&(Oe+=de,Ve.width+=de)}}const le=e.getReorderSegments(g,se,be.glyphAt(0).charIndex,be.glyphAt(be.count-1).charIndex);for(let Oe=0;Oe<le.length;Oe++){const[De,Ve]=le[Oe];let We=1/0,Ue=-1/0;for(let je=0;je<Se;je++)if(be.glyphAt(je).charIndex>=De){let et=je,nt=je;for(;nt<Se;nt++){let it=be.glyphAt(nt);if(it.charIndex>Ve)break;nt<Se-Ee&&(We=Math.min(We,it.x),Ue=Math.max(Ue,it.x+it.width))}for(let it=et;it<nt;it++){const Et=be.glyphAt(it);Et.x=Ue-(Et.x+Et.width-We)}break}}let ye;const Ne=Oe=>ye=Oe;for(let Oe=0;Oe<Se;Oe++){const De=be.glyphAt(Oe);ye=De.glyphObj;const Ve=ye.index,We=se.levels[De.charIndex]&1;if(We){const Ue=e.getMirroredCharacter(g[De.charIndex]);Ue&&De.fontData.fontObj.forEachGlyph(Ue,0,0,Ne)}if(H){const{charIndex:Ue,fontData:je}=De,et=De.x+$,nt=De.x+De.width+$;N[Ue*4]=We?nt:et,N[Ue*4+1]=We?et:nt,N[Ue*4+2]=be.baseline+je.caretBottom+ue,N[Ue*4+3]=be.baseline+je.caretTop+ue;const it=Ue-ve;it>1&&u(N,ve,it),ve=Ue}if(G){const{charIndex:Ue}=De;for(;Ue>ge;)ge++,G.hasOwnProperty(ge)&&(Le=G[ge])}if(!ye.isWhitespace&&!ye.isEmpty){const Ue=he++,{fontSizeMult:je,src:et,index:nt}=De.fontData,it=fe[et]||(fe[et]={});it[Ve]||(it[Ve]={path:ye.path,pathBounds:[ye.xMin,ye.yMin,ye.xMax,ye.yMax]});const Et=De.x+$,Jt=De.y+be.baseline+ue;ae[Ue*2]=Et,ae[Ue*2+1]=Jt;const Tt=Et+ye.xMin*je,Vt=Jt+ye.yMin*je,Nt=Et+ye.xMax*je,Ot=Jt+ye.yMax*je;Tt<oe[0]&&(oe[0]=Tt),Vt<oe[1]&&(oe[1]=Vt),Nt>oe[2]&&(oe[2]=Nt),Ot>oe[3]&&(oe[3]=Ot),Ue%X===0&&(xe={start:Ue,end:Ue,rect:[1/0,1/0,-1/0,-1/0]},Me.push(xe)),xe.end++;const ht=xe.rect;if(Tt<ht[0]&&(ht[0]=Tt),Vt<ht[1]&&(ht[1]=Vt),Nt>ht[2]&&(ht[2]=Nt),Ot>ht[3]&&(ht[3]=Ot),Z[Ue]=Ve,Y[Ue]=nt,G){const rn=Ue*3;_e[rn]=Le>>16&255,_e[rn+1]=Le>>8&255,_e[rn+2]=Le&255}}}}}),N){const be=g.length-ve;be>1&&u(N,ve,be)}}const we=[];w.forEach(({index:se,src:he,unitsPerEm:ve,ascender:ge,descender:xe,lineHeight:Le,capHeight:be,xHeight:Re})=>{we[se]={src:he,unitsPerEm:ve,ascender:ge,descender:xe,lineHeight:Le,capHeight:be,xHeight:Re}}),J.typesetting=h()-x,D({glyphIds:Z,glyphFontIndices:Y,glyphPositions:ae,glyphData:fe,fontData:we,caretPositions:N,glyphColors:_e,chunkedBounds:Me,fontSize:y,topBaseline:ue+Q[0].baseline,blockBounds:[$,ue-ce,$+Pe,ue],visibleBounds:oe,timings:J})})}function l(g,_){o({...g,metricsOnly:!0},p=>{const[m,y,S,E]=p.blockBounds;_({width:S-m,height:E-y})})}function c(g){let _=g.match(/^([\d.]+)%$/),p=_?parseFloat(_[1]):NaN;return isNaN(p)?0:p/100}function u(g,_,p){const m=g[_*4],y=g[_*4+1],S=g[_*4+2],E=g[_*4+3],U=(y-m)/p;for(let R=0;R<p;R++){const T=(_+R)*4;g[T]=m+U*R,g[T+1]=m+U*(R+1),g[T+2]=S,g[T+3]=E}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(g){let _=f.flyweight;return _.data=this.data,_.index=g,_},splitAt(g){let _=new f;return _.data=this.data.splice(g*d.length),_}},f.flyweight=d.reduce((g,_,p,m)=>(Object.defineProperty(g,_,{get(){return this.data[this.index*d.length+p]},set(y){this.data[this.index*d.length+p]=y}}),g),{data:null,index:0}),{typeset:o,measure:l}}const Kn=()=>(self.performance||Date).now(),la=uc();let gl;function _g(a,e,t,r,n,i,s,o,l,c,u=!0){return u?xg(a,e,t,r,n,i,s,o,l,c).then(null,h=>(gl||(console.warn("WebGL SDF generation failed, falling back to JS",h),gl=!0),vl(a,e,t,r,n,i,s,o,l,c))):vl(a,e,t,r,n,i,s,o,l,c)}const Xr=[],vg=5;let gs=0;function fc(){const a=Kn();for(;Xr.length&&Kn()-a<vg;)Xr.shift()();gs=Xr.length?setTimeout(fc,0):0}const xg=(...a)=>new Promise((e,t)=>{Xr.push(()=>{const r=Kn();try{la.webgl.generateIntoCanvas(...a),e({timing:Kn()-r})}catch(n){t(n)}}),gs||(gs=setTimeout(fc,0))}),Sg=4,Mg=2e3,_l={};let yg=0;function vl(a,e,t,r,n,i,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+yg++%Sg;let h=_l[u];return h||(h=_l[u]={workerModule:Ii({name:u,workerId:u,dependencies:[uc,Kn],init(f,d){const g=f().javascript.generate;return function(..._){const p=d();return{textureData:g(..._),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(a,e,t,r,n,i).then(({textureData:f,timing:d})=>{const g=Kn(),_=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)_[p*4+c]=f[p];return la.webglUtils.renderImageData(s,_,o,l,a,e,1<<3-c),d+=Kn()-g,--h.requests===0&&(h.idleTimer=setTimeout(()=>{$m(u)},Mg)),{timing:d}})}function Eg(a){a._warm||(la.webgl.isSupported(a),a._warm=!0)}const Tg=la.webglUtils.resizeWebGLCanvasWithoutClearing,Mi={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},bg=new Ke;function Si(){return(self.performance||Date).now()}const xl=Object.create(null);function Ag(a,e){a=Rg({},a);const t=Si(),{defaultFontURL:r}=Mi,n=[];if(r&&n.push({label:"default",src:Sl(r)}),a.font&&n.push({label:"user",src:Sl(a.font)}),a.font=n,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Mi.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||Mi.unicodeFontsURL,a.colorRanges!=null){let f={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let g=a.colorRanges[d];typeof g!="number"&&(g=bg.set(g).getHex()),f[d]=g}a.colorRanges=f}Object.freeze(a);const{textureWidth:i,sdfExponent:s}=Mi,{sdfGlyphSize:o}=a,l=i/o*4;let c=xl[o];if(!c){const f=document.createElement("canvas");f.width=i,f.height=o*256/l,c=xl[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new xt(f,void 0,void 0,void 0,It,It),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,wg(c)}const{sdfTexture:u,sdfCanvas:h}=c;Ug(a).then(f=>{const{glyphIds:d,glyphFontIndices:g,fontData:_,glyphPositions:p,fontSize:m,timings:y}=f,S=[],E=new Float32Array(d.length*4);let U=0,R=0;const T=Si(),P=_.map(A=>{let F=c.glyphsByFont.get(A.src);return F||c.glyphsByFont.set(A.src,F=new Map),F});d.forEach((A,F)=>{const z=g[F],{src:q,unitsPerEm:ee}=_[z];let H=P[z].get(A);if(!H){const{path:J,pathBounds:I}=f.glyphData[q][A],O=Math.max(I[2]-I[0],I[3]-I[1])/o*(Mi.sdfMargin*o+.5),Z=c.glyphCount++,Y=[I[0]-O,I[1]-O,I[2]+O,I[3]+O];P[z].set(A,H={path:J,atlasIndex:Z,sdfViewBox:Y}),S.push(H)}const{sdfViewBox:X}=H,G=p[R++],D=p[R++],W=m/ee;E[U++]=G+X[0]*W,E[U++]=D+X[1]*W,E[U++]=G+X[2]*W,E[U++]=D+X[3]*W,d[F]=H.atlasIndex}),y.quads=(y.quads||0)+(Si()-T);const M=Si();y.sdf={};const v=h.height,k=Math.ceil(c.glyphCount/l),C=Math.pow(2,Math.ceil(Math.log2(k*o)));C>v&&(console.info(`Increasing SDF texture size ${v}->${C}`),Tg(h,i,C),u.dispose()),Promise.all(S.map(A=>dc(A,c,a.gpuAccelerateSDF).then(({timing:F})=>{y.sdf[A.atlasIndex]=F}))).then(()=>{S.length&&!c.contextLost&&(pc(c),u.needsUpdate=!0),y.sdfTotal=Si()-M,y.total=Si()-t,e(Object.freeze({parameters:a,sdfTexture:u,sdfGlyphSize:o,sdfExponent:s,glyphBounds:E,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||Eg(h)})}function dc({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Mi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/r)*r,f=Math.floor(u/(o/r))*r,d=e%4;return _g(r,r,a,t,c,l,n,h,f,d,s)}function wg(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const r=[];a.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(dc(i,a,!0))})}),Promise.all(r).then(()=>{pc(a),a.sdfTexture.needsUpdate=!0})})}function Rg(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Br;function Sl(a){return Br||(Br=typeof document>"u"?{}:document.createElement("a")),Br.href=a,Br.href}function pc(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:r,height:n}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==r*n*4)&&(s=new Uint8Array(r*n*4),t.image={width:r,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,s)}}const Cg=Ii({name:"Typesetter",dependencies:[gg,mg,tg],init(a,e,t){return a(e,t())}}),Ug=Ii({name:"Typesetter",dependencies:[Cg],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),Ml={};function Pg(a){let e=Ml[a];if(!e){const t=new nn(1,1,a,a),r=t.clone(),n=t.attributes,i=r.attributes,s=new mn,o=n.uv.count;for(let l=0;l<o;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{s.setAttribute(l,new Un([...n[l].array,...i[l].array],n[l].itemSize))}),s.setIndex([...t.index.array,...r.index.array.map(l=>l+o)]),s.translate(.5,.5,0),e=Ml[a]=s}return e}const Lg="aTroikaGlyphBounds",yl="aTroikaGlyphIndex",Dg="aTroikaGlyphColor";class Ig extends Gm{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ia,this.boundingBox=new Pi}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===yt?t/2:0,e===Kt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Pg(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){ns(this,Lg,e,4),ns(this,yl,t,1),ns(this,Dg,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:r}=this;if(t){const{PI:n,floor:i,min:s,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,g=e[2]/f,_=i((d+u)/h)!==i((g+u)/h)?-f:s(l(d)*f,l(g)*f),p=i((d-u)/h)!==i((g-u)/h)?f:o(l(d)*f,l(g)*f),m=i((d+n)/h)!==i((g+n)/h)?f*2:o(f-c(d)*f,f-c(g)*f);r.min.set(_,e[1],t<0?-m:0),r.max.set(p,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(yl).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function ns(a,e,t,r){const n=a.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(a.setAttribute(e,new Fm(t,r)),delete a._maxInstanceCount,a.dispose()):n&&a.deleteAttribute(e)}const Fg=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Ng=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Og=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Bg=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function kg(a){const e=ms(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new qe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new lt(0,0,0,0)},uTroikaClipRect:{value:new lt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new qe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ke},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ye},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Fg,vertexTransform:Ng,fragmentDefs:Og,fragmentColorTransform:Bg,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(hc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Es=new zt({color:16777215,side:Kt,transparent:!0}),El=8421504,Tl=new ot,kr=new te,is=new te,Zi=[],Gg=new te,rs="+x+y";function bl(a){return Array.isArray(a)?a[0]:a}let mc=()=>{const a=new mt(new nn(1,1),Es);return mc=()=>a,a},gc=()=>{const a=new mt(new nn(1,1,32,1),Es);return gc=()=>a,a};const zg={type:"syncstart"},Vg={type:"synccomplete"},_c=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Hg=_c.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class _s extends mt{constructor(){const e=new Ig;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=El,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=rs,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(zg),Ag({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(Vg),e&&e()})))}onBeforeRender(e,t,r,n,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=dn}onAfterRender(e,t,r,n,i,s){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Es.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=kg(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return bl(this.material).getDepthMaterial()}get customDistanceMaterial(){return bl(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,g,_=0,p=0;if(t){let{outlineWidth:y,outlineOffsetX:S,outlineOffsetY:E,outlineBlur:U,outlineOpacity:R}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(U)||0),f=R,_=this._parsePercent(S)||0,p=this._parsePercent(E)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??El),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;r.uTroikaDistanceOffset.value=c,r.uTroikaPositionOffset.value.set(_,p),r.uTroikaBlurRadius.value=u,r.uTroikaStrokeWidth.value=h,r.uTroikaStrokeOpacity.value=d,r.uTroikaFillOpacity.value=f??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)r.uTroikaClipRect.value.fromArray(m);else{const y=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ke;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||rs;if(s!==e._orientation){let o=r.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==rs&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;kr.set(0,0,0)[u]=c==="-"?1:-1,is.set(0,0,0)[f]=h==="-"?-1:1,Tl.lookAt(Gg,kr.cross(is),is),o.setFromMatrix4(Tl)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new qe){t.copy(e);const r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new qe){return kr.copy(e),this.localPositionToTextCoords(this.worldToLocal(kr),t)}raycast(e,t){const{textRenderInfo:r,curveRadius:n}=this;if(r){const i=r.blockBounds,s=n?gc():mc(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=i[0]+c.getX(u)*(i[2]-i[0]);const f=i[1]+c.getY(u)*(i[3]-i[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Zi.length=0,s.raycast(e,Zi);for(let u=0;u<Zi.length;u++)Zi[u].object=this,t.push(Zi[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Hg.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}}_c.forEach(a=>{const e="_private_"+a;Object.defineProperty(_s.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class Al extends Di{constructor(e,t,r){super(e),this.map=t,this.top=r,this.fadeTextOutInSeconds=1e5}showStartText(){this.primaryText.text="Summon your friends to enjoy picnic!",this.dropshadowText.text="Summon your friends to enjoy picnic!",this.primaryText.sync(),this.dropshadowText.sync(),this.fadeTextOutInSeconds=7.5}showControlsText(e){this.primaryText.text=`                                   Level ${e.index+1}
                            WASD to move
Space to summon your friends towards you!`,this.dropshadowText.text=`                            WASD to move
Space to summon your friends towards you!`,this.primaryText.fontSize=.5,this.dropshadowText.fontSize=.5,this.primaryText.strokeWidth=.01,this.dropshadowText.strokeWidth=.01,this.primaryText.sync(),this.dropshadowText.sync(),this.fadeTextOutInSeconds=99999999999}showLevelFinishedText(){this.primaryText.text="Jihuu, picnic can start",this.dropshadowText.text="Jihuu, picnic can start",this.primaryText.sync(),this.dropshadowText.sync(),this.fadeTextOutInSeconds=99999999}showLevelFailedText(){this.primaryText.text="Oh no, some of us didn't make it to the picnic",this.dropshadowText.text="Oh no, some of us didn't make it to the picnic",this.primaryText.sync(),this.dropshadowText.sync(),this.fadeTextOutInSeconds=99999999}showGameFinishedText(){this.primaryText.text="We have had enough picnics now, see you next summer!",this.dropshadowText.text="We have had enough picnics now, see you next summer!",this.primaryText.sync(),this.dropshadowText.sync(),this.fadeTextOutInSeconds=99999999}setup(){this.primaryText=new _s,this.dropshadowText=new _s,this.primaryText.text="",this.primaryText.fontSize=1,this.primaryText.position.x=this.map.width/2,this.primaryText.position.y=this.top?this.map.height+2:-2,this.primaryText.position.z=0,this.primaryText.font="assets/font.ttf",this.primaryText.color="white",this.primaryText.strokeColor="black",this.primaryText.strokeWidth=.02,this.primaryText.anchorX="center",this.dropshadowText.text="",this.dropshadowText.fontSize=1,this.dropshadowText.position.x=this.map.width/2,this.dropshadowText.position.y=this.top?this.map.height+2:-2,this.dropshadowText.position.z=-.1,this.dropshadowText.font="assets/font.ttf",this.dropshadowText.color="gray",this.dropshadowText.anchorX="center",this.primaryText.sync(),this.dropshadowText.sync(),this.group.add(this.primaryText)}update(e){this.fadeTextOutInSeconds-=e.deltaTime;const t=this.fadeTextOutInSeconds<0?Vr(-this.fadeTextOutInSeconds/4,1,0):1;this.primaryText.fillOpacity=t,this.primaryText.strokeOpacity=t,this.dropshadowText.fillOpacity=t}teardown(){}}class ea extends Vm{constructor(e){super(),this.timeSinceScreenLoad=0,this.timeSinceFinish=0,this.timeSinceFail=0,this.wasLevelFinished=!1,this.wasLevelFailed=!1,this.level=e,this.entityCollection=new Hm(this.scene)}isLevelFinished(){this.entityCollection.findOne(Ki);const e=this.entityCollection.findAll(Hr),t=this.entityCollection.findOne(ul);return!!e.every(r=>$r(r.getGroup().position).distanceTo($r(t.getGroup().position))<1)}isLevelFailed(){const e=this.entityCollection.findOne(Ki);return this.entityCollection.findAll(Hr).some(r=>r.getIsFalling())||e.getIsFalling()}setup(){this.entityCollection.add(new oa(this.entityCollection,this.level.map)),this.entityCollection.add(new ul(this.entityCollection,this.level.goalLocation)),this.entityCollection.add(new Qr(this.entityCollection)),this.entityCollection.add(new Ki(this.entityCollection,this.level.playerStartLocation));for(const e of this.level.catStartLocations)this.entityCollection.add(new Hr(this.entityCollection,e));this.entityCollection.add(this.topText=new Al(this.entityCollection,this.level.map,!0)),this.entityCollection.add(this.bottomText=new Al(this.entityCollection,this.level.map,!1)),this.topText.showStartText(),this.bottomText.showControlsText(this.level)}getCamera(){return this.entityCollection.findOne(Qr).getCamera()}update(e){if(this.wasLevelFinished=this.isLevelFinished(),this.wasLevelFailed=this.isLevelFailed(),this.entityCollection.update(e),this.timeSinceScreenLoad+=e.deltaTime,this.scene.position.z=-Vr(Qa(this.timeSinceScreenLoad/4+.25,0,1),-20,0),this.isLevelFinished()){this.timeSinceFinish+=e.deltaTime;const t=this.level.index===zr.length-1;t?this.topText.showGameFinishedText():this.topText.showLevelFinishedText(),this.entityCollection.findOne(Ki).setLevelFinished(),t||(this.timeSinceFinish>3&&(this.scene.position.z=-Vr(Qa((this.timeSinceFinish-3)/2,0,1),0,40)),this.timeSinceFinish>5&&e.actions.changeScreen(new ea(zr[this.level.index+1])))}this.isLevelFailed()&&(this.timeSinceFail+=e.deltaTime,this.timeSinceFail>2&&this.topText.showLevelFailedText(),this.entityCollection.findOne(Ki).setLevelFinished(),this.timeSinceFail>4&&(this.scene.position.z=-Vr(Qa((this.timeSinceFail-4)/2,0,1),0,40)),this.timeSinceFail>6&&e.actions.changeScreen(new ea(zr[this.level.index])))}teardown(){}}class Wg{constructor(){this.previouslyPressedDownKeys=new Set,this.pressedDownKeys=new Set,window.addEventListener("keydown",e=>{this.pressedDownKeys.add(e.key.toUpperCase())}),window.addEventListener("keyup",e=>this.pressedDownKeys.delete(e.key.toUpperCase()))}isKeyDown(e){return this.pressedDownKeys.has(e)}isNewKeyDown(e){return this.pressedDownKeys.has(e)&&!this.previouslyPressedDownKeys.has(e)}isNewKeyRelease(e){return this.previouslyPressedDownKeys.has(e)&&!this.pressedDownKeys.has(e)}postUpdate(){this.previouslyPressedDownKeys=this.pressedDownKeys}}function Xg(){return new ea(zr[0])}function Yg(){const a=new oc;a.fog=new Ms("#DCF3FF",100,200);const e=Ym();a.background=new Ke("#DCF3FF");let t,r=!1;function n(c){t&&(t.teardown(),a.remove(t.getScene())),c.setup({}),a.add(c.getScene()),t=c,r=!0}n(Xg());const i=new zm,s=new Wg;let o=0;function l(){requestAnimationFrame(l);const c=i.getDelta();o+=c;const u={deltaTime:c,totalTime:o,input:s,actions:{changeScreen:n}};t.update(u),s.postUpdate(),r||e.render(a,t.getCamera()),r=!1}l()}Yg();

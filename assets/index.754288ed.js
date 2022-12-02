var df=Object.defineProperty;var mf=(e,t,n)=>t in e?df(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Oe=(e,t,n)=>(mf(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Pa(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function hn(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=se(r)?gf(r):hn(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(se(e))return e;if(Z(e))return e}}const pf=/;(?![^(]*\))/g,hf=/:([^]+)/,vf=/\/\*.*?\*\//gs;function gf(e){const t={};return e.replace(vf,"").split(pf).forEach(n=>{if(n){const r=n.split(hf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ra(e){let t="";if(se(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Ra(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yf=Pa(bf);function ul(e){return!!e||e===""}function _f(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Wt(e[r],t[r]);return n}function Wt(e,t){if(e===t)return!0;let n=Oo(e),r=Oo(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Wn(e),r=Wn(t),n||r)return e===t;if(n=j(e),r=j(t),n||r)return n&&r?_f(e,t):!1;if(n=Z(e),r=Z(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Wt(e[o],t[o]))return!1}}return String(e)===String(t)}function Ia(e,t){return e.findIndex(n=>Wt(n,t))}const lt=e=>se(e)?e:e==null?"":j(e)||Z(e)&&(e.toString===dl||!z(e.toString))?JSON.stringify(e,fl,2):String(e),fl=(e,t)=>t&&t.__v_isRef?fl(e,t.value):un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:xn(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!j(t)&&!ml(t)?String(t):t,ee={},ln=[],He=()=>{},wf=()=>!1,xf=/^on[^a-z]/,Xr=e=>xf.test(e),Na=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Ma=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ef=Object.prototype.hasOwnProperty,K=(e,t)=>Ef.call(e,t),j=Array.isArray,un=e=>ir(e)==="[object Map]",xn=e=>ir(e)==="[object Set]",Oo=e=>ir(e)==="[object Date]",z=e=>typeof e=="function",se=e=>typeof e=="string",Wn=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",cl=e=>Z(e)&&z(e.then)&&z(e.catch),dl=Object.prototype.toString,ir=e=>dl.call(e),Af=e=>ir(e).slice(8,-1),ml=e=>ir(e)==="[object Object]",$a=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tr=Pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},kf=/-(\w)/g,Ze=Jr(e=>e.replace(kf,(t,n)=>n?n.toUpperCase():"")),Cf=/\B([A-Z])/g,Xt=Jr(e=>e.replace(Cf,"-$1").toLowerCase()),Qr=Jr(e=>e.charAt(0).toUpperCase()+e.slice(1)),yi=Jr(e=>e?`on${Qr(e)}`:""),qn=(e,t)=>!Object.is(e,t),fn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Kn=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let So;const Of=()=>So||(So=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ye;class Sf{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Tf(e,t=Ye){t&&t.active&&t.effects.push(e)}const Fa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},pl=e=>(e.w&xt)>0,hl=e=>(e.n&xt)>0,Pf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=xt},Rf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];pl(i)&&!hl(i)?i.delete(e):t[n++]=i,i.w&=~xt,i.n&=~xt}t.length=n}},Xi=new WeakMap;let Pn=0,xt=1;const Ji=30;let De;const Ut=Symbol(""),Qi=Symbol("");class La{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Tf(this,r)}run(){if(!this.active)return this.fn();let t=De,n=_t;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=De,De=this,_t=!0,xt=1<<++Pn,Pn<=Ji?Pf(this):To(this),this.fn()}finally{Pn<=Ji&&Rf(this),xt=1<<--Pn,De=this.parent,_t=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(To(this),this.onStop&&this.onStop(),this.active=!1)}}function To(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _t=!0;const vl=[];function En(){vl.push(_t),_t=!1}function An(){const e=vl.pop();_t=e===void 0?!0:e}function Ie(e,t,n){if(_t&&De){let r=Xi.get(e);r||Xi.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Fa()),gl(i)}}function gl(e,t){let n=!1;Pn<=Ji?hl(e)||(e.n|=xt,n=!pl(e)):n=!e.has(De),n&&(e.add(De),De.deps.push(e))}function ut(e,t,n,r,i,a){const o=Xi.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e)){const l=Kn(r);o.forEach((u,f)=>{(f==="length"||f>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?$a(n)&&s.push(o.get("length")):(s.push(o.get(Ut)),un(e)&&s.push(o.get(Qi)));break;case"delete":j(e)||(s.push(o.get(Ut)),un(e)&&s.push(o.get(Qi)));break;case"set":un(e)&&s.push(o.get(Ut));break}if(s.length===1)s[0]&&Gi(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Gi(Fa(l))}}function Gi(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&Po(r);for(const r of n)r.computed||Po(r)}function Po(e,t){(e!==De||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const If=Pa("__proto__,__v_isRef,__isVue"),bl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wn)),Nf=ja(),Mf=ja(!1,!0),$f=ja(!0),Ro=Ff();function Ff(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let a=0,o=this.length;a<o;a++)Ie(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){En();const r=Y(this)[t].apply(this,n);return An(),r}}),e}function ja(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?Gf:El:t?xl:wl).get(r))return r;const o=j(r);if(!e&&o&&K(Ro,i))return Reflect.get(Ro,i,a);const s=Reflect.get(r,i,a);return(Wn(i)?bl.has(i):If(i))||(e||Ie(r,"get",i),t)?s:Ee(s)?o&&$a(i)?s:s.value:Z(s)?e?Al(s):Zr(s):s}}const Lf=yl(),jf=yl(!0);function yl(e=!1){return function(n,r,i,a){let o=n[r];if(vn(o)&&Ee(o)&&!Ee(i))return!1;if(!e&&(!Br(i)&&!vn(i)&&(o=Y(o),i=Y(i)),!j(n)&&Ee(o)&&!Ee(i)))return o.value=i,!0;const s=j(n)&&$a(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,i,a);return n===Y(a)&&(s?qn(i,o)&&ut(n,"set",r,i):ut(n,"add",r,i)),l}}function Df(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ut(e,"delete",t,void 0),r}function Bf(e,t){const n=Reflect.has(e,t);return(!Wn(t)||!bl.has(t))&&Ie(e,"has",t),n}function Uf(e){return Ie(e,"iterate",j(e)?"length":Ut),Reflect.ownKeys(e)}const _l={get:Nf,set:Lf,deleteProperty:Df,has:Bf,ownKeys:Uf},zf={get:$f,set(e,t){return!0},deleteProperty(e,t){return!0}},Hf=Ce({},_l,{get:Mf,set:jf}),Da=e=>e,Gr=e=>Reflect.getPrototypeOf(e);function cr(e,t,n=!1,r=!1){e=e.__v_raw;const i=Y(e),a=Y(t);n||(t!==a&&Ie(i,"get",t),Ie(i,"get",a));const{has:o}=Gr(i),s=r?Da:n?za:Yn;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function dr(e,t=!1){const n=this.__v_raw,r=Y(n),i=Y(e);return t||(e!==i&&Ie(r,"has",e),Ie(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function mr(e,t=!1){return e=e.__v_raw,!t&&Ie(Y(e),"iterate",Ut),Reflect.get(e,"size",e)}function Io(e){e=Y(e);const t=Y(this);return Gr(t).has.call(t,e)||(t.add(e),ut(t,"add",e,e)),this}function No(e,t){t=Y(t);const n=Y(this),{has:r,get:i}=Gr(n);let a=r.call(n,e);a||(e=Y(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?qn(t,o)&&ut(n,"set",e,t):ut(n,"add",e,t),this}function Mo(e){const t=Y(this),{has:n,get:r}=Gr(t);let i=n.call(t,e);i||(e=Y(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&ut(t,"delete",e,void 0),a}function $o(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&ut(e,"clear",void 0,void 0),n}function pr(e,t){return function(r,i){const a=this,o=a.__v_raw,s=Y(o),l=t?Da:e?za:Yn;return!e&&Ie(s,"iterate",Ut),o.forEach((u,f)=>r.call(i,l(u),l(f),a))}}function hr(e,t,n){return function(...r){const i=this.__v_raw,a=Y(i),o=un(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=i[e](...r),f=n?Da:t?za:Yn;return!t&&Ie(a,"iterate",l?Qi:Ut),{next(){const{value:d,done:m}=u.next();return m?{value:d,done:m}:{value:s?[f(d[0]),f(d[1])]:f(d),done:m}},[Symbol.iterator](){return this}}}}function ht(e){return function(...t){return e==="delete"?!1:this}}function Wf(){const e={get(a){return cr(this,a)},get size(){return mr(this)},has:dr,add:Io,set:No,delete:Mo,clear:$o,forEach:pr(!1,!1)},t={get(a){return cr(this,a,!1,!0)},get size(){return mr(this)},has:dr,add:Io,set:No,delete:Mo,clear:$o,forEach:pr(!1,!0)},n={get(a){return cr(this,a,!0)},get size(){return mr(this,!0)},has(a){return dr.call(this,a,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:pr(!0,!1)},r={get(a){return cr(this,a,!0,!0)},get size(){return mr(this,!0)},has(a){return dr.call(this,a,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:pr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=hr(a,!1,!1),n[a]=hr(a,!0,!1),t[a]=hr(a,!1,!0),r[a]=hr(a,!0,!0)}),[e,n,t,r]}const[qf,Kf,Yf,Vf]=Wf();function Ba(e,t){const n=t?e?Vf:Yf:e?Kf:qf;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(K(n,i)&&i in r?n:r,i,a)}const Xf={get:Ba(!1,!1)},Jf={get:Ba(!1,!0)},Qf={get:Ba(!0,!1)},wl=new WeakMap,xl=new WeakMap,El=new WeakMap,Gf=new WeakMap;function Zf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ec(e){return e.__v_skip||!Object.isExtensible(e)?0:Zf(Af(e))}function Zr(e){return vn(e)?e:Ua(e,!1,_l,Xf,wl)}function tc(e){return Ua(e,!1,Hf,Jf,xl)}function Al(e){return Ua(e,!0,zf,Qf,El)}function Ua(e,t,n,r,i){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=ec(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function cn(e){return vn(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function Br(e){return!!(e&&e.__v_isShallow)}function kl(e){return cn(e)||vn(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Cl(e){return Dr(e,"__v_skip",!0),e}const Yn=e=>Z(e)?Zr(e):e,za=e=>Z(e)?Al(e):e;function Ol(e){_t&&De&&(e=Y(e),gl(e.dep||(e.dep=Fa())))}function Sl(e,t){e=Y(e),e.dep&&Gi(e.dep)}function Ee(e){return!!(e&&e.__v_isRef===!0)}function G(e){return nc(e,!1)}function nc(e,t){return Ee(e)?e:new rc(e,t)}class rc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:Yn(t)}get value(){return Ol(this),this._value}set value(t){const n=this.__v_isShallow||Br(t)||vn(t);t=n?t:Y(t),qn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Yn(t),Sl(this))}}function ie(e){return Ee(e)?e.value:e}const ic={get:(e,t,n)=>ie(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Tl(e){return cn(e)?e:new Proxy(e,ic)}var Pl;class ac{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pl]=!1,this._dirty=!0,this.effect=new La(t,()=>{this._dirty||(this._dirty=!0,Sl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Y(this);return Ol(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Pl="__v_isReadonly";function oc(e,t,n=!1){let r,i;const a=z(e);return a?(r=e,i=He):(r=e.get,i=e.set),new ac(r,i,a||!i,n)}function wt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){ei(a,t,n)}return i}function We(e,t,n,r){if(z(e)){const a=wt(e,t,n,r);return a&&cl(a)&&a.catch(o=>{ei(o,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(We(e[a],t,n,r));return i}function ei(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=n;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){wt(l,null,10,[e,o,s]);return}}sc(e,n,i,r)}function sc(e,t,n,r=!0){console.error(e)}let Vn=!1,Zi=!1;const xe=[];let Je=0;const dn=[];let it=null,Mt=0;const Rl=Promise.resolve();let Ha=null;function ea(e){const t=Ha||Rl;return e?t.then(this?e.bind(this):e):t}function lc(e){let t=Je+1,n=xe.length;for(;t<n;){const r=t+n>>>1;Xn(xe[r])<e?t=r+1:n=r}return t}function Wa(e){(!xe.length||!xe.includes(e,Vn&&e.allowRecurse?Je+1:Je))&&(e.id==null?xe.push(e):xe.splice(lc(e.id),0,e),Il())}function Il(){!Vn&&!Zi&&(Zi=!0,Ha=Rl.then(Ml))}function uc(e){const t=xe.indexOf(e);t>Je&&xe.splice(t,1)}function fc(e){j(e)?dn.push(...e):(!it||!it.includes(e,e.allowRecurse?Mt+1:Mt))&&dn.push(e),Il()}function Fo(e,t=Vn?Je+1:0){for(;t<xe.length;t++){const n=xe[t];n&&n.pre&&(xe.splice(t,1),t--,n())}}function Nl(e){if(dn.length){const t=[...new Set(dn)];if(dn.length=0,it){it.push(...t);return}for(it=t,it.sort((n,r)=>Xn(n)-Xn(r)),Mt=0;Mt<it.length;Mt++)it[Mt]();it=null,Mt=0}}const Xn=e=>e.id==null?1/0:e.id,cc=(e,t)=>{const n=Xn(e)-Xn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ml(e){Zi=!1,Vn=!0,xe.sort(cc);const t=He;try{for(Je=0;Je<xe.length;Je++){const n=xe[Je];n&&n.active!==!1&&wt(n,null,14)}}finally{Je=0,xe.length=0,Nl(),Vn=!1,Ha=null,(xe.length||dn.length)&&Ml()}}function dc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:m}=r[f]||ee;m&&(i=n.map(v=>se(v)?v.trim():v)),d&&(i=n.map(Kn))}let s,l=r[s=yi(t)]||r[s=yi(Ze(t))];!l&&a&&(l=r[s=yi(Xt(t))]),l&&We(l,e,6,i);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,We(u,e,6,i)}}function $l(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!z(e)){const l=u=>{const f=$l(u,t,!0);f&&(s=!0,Ce(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(Z(e)&&r.set(e,null),null):(j(a)?a.forEach(l=>o[l]=null):Ce(o,a),Z(e)&&r.set(e,o),o)}function ti(e,t){return!e||!Xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Xt(t))||K(e,t))}let ye=null,ni=null;function Ur(e){const t=ye;return ye=e,ni=e&&e.type.__scopeId||null,t}function mc(e){ni=e}function pc(){ni=null}const hc=e=>Fl;function Fl(e,t=ye,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ko(-1);const a=Ur(t);let o;try{o=e(...i)}finally{Ur(a),r._d&&Ko(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _i(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[o],slots:s,attrs:l,emit:u,render:f,renderCache:d,data:m,setupState:v,ctx:C,inheritAttrs:P}=e;let B,E;const _=Ur(e);try{if(n.shapeFlag&4){const h=i||r;B=Xe(f.call(h,h,d,a,v,m,C)),E=l}else{const h=t;B=Xe(h.length>1?h(a,{attrs:l,slots:s,emit:u}):h(a,null)),E=t.props?l:vc(l)}}catch(h){Ln.length=0,ei(h,e,1),B=fe(Et)}let g=B;if(E&&P!==!1){const h=Object.keys(E),{shapeFlag:b}=g;h.length&&b&7&&(o&&h.some(Na)&&(E=gc(E,o)),g=qt(g,E))}return n.dirs&&(g=qt(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),B=g,Ur(_),B}const vc=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xr(n))&&((t||(t={}))[n]=e[n]);return t},gc=(e,t)=>{const n={};for(const r in e)(!Na(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function bc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Lo(r,o,u):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const m=f[d];if(o[m]!==r[m]&&!ti(u,m))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Lo(r,o,u):!0:!!o;return!1}function Lo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!ti(n,a))return!0}return!1}function yc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ll=e=>e.__isSuspense;function _c(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):fc(e)}function wc(e,t){if(ge){let n=ge.provides;const r=ge.parent&&ge.parent.provides;r===n&&(n=ge.provides=Object.create(r)),n[e]=t}}function Mn(e,t,n=!1){const r=ge||ye;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const vr={};function Ge(e,t,n){return jl(e,t,n)}function jl(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:o}=ee){const s=ge;let l,u=!1,f=!1;if(Ee(e)?(l=()=>e.value,u=Br(e)):cn(e)?(l=()=>e,r=!0):j(e)?(f=!0,u=e.some(g=>cn(g)||Br(g)),l=()=>e.map(g=>{if(Ee(g))return g.value;if(cn(g))return Ft(g);if(z(g))return wt(g,s,2)})):z(e)?t?l=()=>wt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),We(e,s,3,[m])}:l=He,t&&r){const g=l;l=()=>Ft(g())}let d,m=g=>{d=E.onStop=()=>{wt(g,s,4)}},v;if(Gn)if(m=He,t?n&&We(t,s,3,[l(),f?[]:void 0,m]):l(),i==="sync"){const g=gd();v=g.__watcherHandles||(g.__watcherHandles=[])}else return He;let C=f?new Array(e.length).fill(vr):vr;const P=()=>{if(!!E.active)if(t){const g=E.run();(r||u||(f?g.some((h,b)=>qn(h,C[b])):qn(g,C)))&&(d&&d(),We(t,s,3,[g,C===vr?void 0:f&&C[0]===vr?[]:C,m]),C=g)}else E.run()};P.allowRecurse=!!t;let B;i==="sync"?B=P:i==="post"?B=()=>be(P,s&&s.suspense):(P.pre=!0,s&&(P.id=s.uid),B=()=>Wa(P));const E=new La(l,B);t?n?P():C=E.run():i==="post"?be(E.run.bind(E),s&&s.suspense):E.run();const _=()=>{E.stop(),s&&s.scope&&Ma(s.scope.effects,E)};return v&&v.push(_),_}function xc(e,t,n){const r=this.proxy,i=se(e)?e.includes(".")?Dl(r,e):()=>r[e]:e.bind(r,r);let a;z(t)?a=t:(a=t.handler,n=t);const o=ge;gn(this);const s=jl(i,a.bind(r),n);return o?gn(o):zt(),s}function Dl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Ft(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))Ft(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)Ft(e[n],t);else if(xn(e)||un(e))e.forEach(n=>{Ft(n,t)});else if(ml(e))for(const n in e)Ft(e[n],t);return e}function Bl(e,t){e.shapeFlag&6&&e.component?Bl(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ri(e){return z(e)?{setup:e,name:e.name}:e}const mn=e=>!!e.type.__asyncLoader,Ul=e=>e.type.__isKeepAlive,Ec={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=fd(),r=n.ctx;if(!r.renderer)return()=>{const _=t.default&&t.default();return _&&_.length===1?_[0]:_};const i=new Map,a=new Set;let o=null;const s=n.suspense,{renderer:{p:l,m:u,um:f,o:{createElement:d}}}=r,m=d("div");r.activate=(_,g,h,b,$)=>{const S=_.component;u(_,g,h,0,s),l(S.vnode,_,g,h,S,s,b,_.slotScopeIds,$),be(()=>{S.isDeactivated=!1,S.a&&fn(S.a);const D=_.props&&_.props.onVnodeMounted;D&&$e(D,S.parent,_)},s)},r.deactivate=_=>{const g=_.component;u(_,m,null,1,s),be(()=>{g.da&&fn(g.da);const h=_.props&&_.props.onVnodeUnmounted;h&&$e(h,g.parent,_),g.isDeactivated=!0},s)};function v(_){wi(_),f(_,n,s,!0)}function C(_){i.forEach((g,h)=>{const b=la(g.type);b&&(!_||!_(b))&&P(h)})}function P(_){const g=i.get(_);!o||g.type!==o.type?v(g):o&&wi(o),i.delete(_),a.delete(_)}Ge(()=>[e.include,e.exclude],([_,g])=>{_&&C(h=>Rn(_,h)),g&&C(h=>!Rn(g,h))},{flush:"post",deep:!0});let B=null;const E=()=>{B!=null&&i.set(B,xi(n.subTree))};return qa(E),Hl(E),Wl(()=>{i.forEach(_=>{const{subTree:g,suspense:h}=n,b=xi(g);if(_.type===b.type){wi(b);const $=b.component.da;$&&be($,h);return}v(_)})}),()=>{if(B=null,!t.default)return null;const _=t.default(),g=_[0];if(_.length>1)return o=null,_;if(!Qn(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let h=xi(g);const b=h.type,$=la(mn(h)?h.type.__asyncResolved||{}:b),{include:S,exclude:D,max:q}=e;if(S&&(!$||!Rn(S,$))||D&&$&&Rn(D,$))return o=h,g;const re=h.key==null?b:h.key,le=i.get(re);return h.el&&(h=qt(h),g.shapeFlag&128&&(g.ssContent=h)),B=re,le?(h.el=le.el,h.component=le.component,h.transition&&Bl(h,h.transition),h.shapeFlag|=512,a.delete(re),a.add(re)):(a.add(re),q&&a.size>parseInt(q,10)&&P(a.values().next().value)),h.shapeFlag|=256,o=h,Ll(g.type)?g:h}}},Ac=Ec;function Rn(e,t){return j(e)?e.some(n=>Rn(n,t)):se(e)?e.split(",").includes(t):e.test?e.test(t):!1}function kc(e,t){zl(e,"a",t)}function Cc(e,t){zl(e,"da",t)}function zl(e,t,n=ge){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ii(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ul(i.parent.vnode)&&Oc(r,t,n,i),i=i.parent}}function Oc(e,t,n,r){const i=ii(t,e,r,!0);Ka(()=>{Ma(r[t],i)},n)}function wi(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function xi(e){return e.shapeFlag&128?e.ssContent:e}function ii(e,t,n=ge,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;En(),gn(n);const s=We(t,n,e,o);return zt(),An(),s});return r?i.unshift(a):i.push(a),a}}const mt=e=>(t,n=ge)=>(!Gn||e==="sp")&&ii(e,(...r)=>t(...r),n),Sc=mt("bm"),qa=mt("m"),Tc=mt("bu"),Hl=mt("u"),Wl=mt("bum"),Ka=mt("um"),Pc=mt("sp"),Rc=mt("rtg"),Ic=mt("rtc");function Nc(e,t=ge){ii("ec",e,t)}function Lt(e,t){const n=ye;if(n===null)return e;const r=si(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[o,s,l,u=ee]=t[a];o&&(z(o)&&(o={mounted:o,updated:o}),o.deep&&Ft(s),i.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:u}))}return e}function Pt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(En(),We(l,n,8,[e.el,s,e,t]),An())}}const ql="components",Mc="directives",Kl=Symbol();function Yl(e){return se(e)?Vl(ql,e,!1)||e:e||Kl}function $c(e){return Vl(Mc,e)}function Vl(e,t,n=!0,r=!1){const i=ye||ge;if(i){const a=i.type;if(e===ql){const s=la(a,!1);if(s&&(s===t||s===Ze(t)||s===Qr(Ze(t))))return a}const o=jo(i[e]||a[e],t)||jo(i.appContext[e],t);return!o&&r?a:o}}function jo(e,t){return e&&(e[t]||e[Ze(t)]||e[Qr(Ze(t))])}function ta(e,t,n,r){let i;const a=n&&n[r];if(j(e)||se(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a&&a[o])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a&&a[o])}else if(Z(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a&&a[s]));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];i[s]=t(e[u],u,s,a&&a[s])}}else i=[];return n&&(n[r]=i),i}function Fc(e,t,n={},r,i){if(ye.isCE||ye.parent&&mn(ye.parent)&&ye.parent.isCE)return t!=="default"&&(n.name=t),fe("slot",n,r&&r());let a=e[t];a&&a._c&&(a._d=!1),W();const o=a&&Xl(a(n)),s=Q(pe,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!i&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),a&&a._c&&(a._d=!0),s}function Xl(e){return e.some(t=>Qn(t)?!(t.type===Et||t.type===pe&&!Xl(t.children)):!0)?e:null}const na=e=>e?su(e)?si(e)||e.proxy:na(e.parent):null,$n=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>na(e.parent),$root:e=>na(e.root),$emit:e=>e.emit,$options:e=>Ya(e),$forceUpdate:e=>e.f||(e.f=()=>Wa(e.update)),$nextTick:e=>e.n||(e.n=ea.bind(e.proxy)),$watch:e=>xc.bind(e)}),Ei=(e,t)=>e!==ee&&!e.__isScriptSetup&&K(e,t),Lc={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(Ei(r,t))return o[t]=1,r[t];if(i!==ee&&K(i,t))return o[t]=2,i[t];if((u=e.propsOptions[0])&&K(u,t))return o[t]=3,a[t];if(n!==ee&&K(n,t))return o[t]=4,n[t];ra&&(o[t]=0)}}const f=$n[t];let d,m;if(f)return t==="$attrs"&&Ie(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ee&&K(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,K(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return Ei(i,t)?(i[t]=n,!0):r!==ee&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==ee&&K(e,o)||Ei(t,o)||(s=a[0])&&K(s,o)||K(r,o)||K($n,o)||K(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ra=!0;function jc(e){const t=Ya(e),n=e.proxy,r=e.ctx;ra=!1,t.beforeCreate&&Do(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:u,created:f,beforeMount:d,mounted:m,beforeUpdate:v,updated:C,activated:P,deactivated:B,beforeDestroy:E,beforeUnmount:_,destroyed:g,unmounted:h,render:b,renderTracked:$,renderTriggered:S,errorCaptured:D,serverPrefetch:q,expose:re,inheritAttrs:le,components:ce,directives:Ae,filters:Fe}=t;if(u&&Dc(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const X=o[ae];z(X)&&(r[ae]=X.bind(n))}if(i){const ae=i.call(n,n);Z(ae)&&(e.data=Zr(ae))}if(ra=!0,a)for(const ae in a){const X=a[ae],St=z(X)?X.bind(n,n):z(X.get)?X.get.bind(n,n):He,ur=!z(X)&&z(X.set)?X.set.bind(n):He,Tt=we({get:St,set:ur});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:qe=>Tt.value=qe})}if(s)for(const ae in s)Jl(s[ae],r,n,ae);if(l){const ae=z(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(X=>{wc(X,ae[X])})}f&&Do(f,e,"c");function de(ae,X){j(X)?X.forEach(St=>ae(St.bind(n))):X&&ae(X.bind(n))}if(de(Sc,d),de(qa,m),de(Tc,v),de(Hl,C),de(kc,P),de(Cc,B),de(Nc,D),de(Ic,$),de(Rc,S),de(Wl,_),de(Ka,h),de(Pc,q),j(re))if(re.length){const ae=e.exposed||(e.exposed={});re.forEach(X=>{Object.defineProperty(ae,X,{get:()=>n[X],set:St=>n[X]=St})})}else e.exposed||(e.exposed={});b&&e.render===He&&(e.render=b),le!=null&&(e.inheritAttrs=le),ce&&(e.components=ce),Ae&&(e.directives=Ae)}function Dc(e,t,n=He,r=!1){j(e)&&(e=ia(e));for(const i in e){const a=e[i];let o;Z(a)?"default"in a?o=Mn(a.from||i,a.default,!0):o=Mn(a.from||i):o=Mn(a),Ee(o)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[i]=o}}function Do(e,t,n){We(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Jl(e,t,n,r){const i=r.includes(".")?Dl(n,r):()=>n[r];if(se(e)){const a=t[e];z(a)&&Ge(i,a)}else if(z(e))Ge(i,e.bind(n));else if(Z(e))if(j(e))e.forEach(a=>Jl(a,t,n,r));else{const a=z(e.handler)?e.handler.bind(n):t[e.handler];z(a)&&Ge(i,a,e)}}function Ya(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(u=>zr(l,u,o,!0)),zr(l,t,o)),Z(t)&&a.set(t,l),l}function zr(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&zr(e,a,n,!0),i&&i.forEach(o=>zr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Bc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Bc={data:Bo,props:It,emits:It,methods:It,computed:It,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:It,directives:It,watch:zc,provide:Bo,inject:Uc};function Bo(e,t){return t?e?function(){return Ce(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Uc(e,t){return It(ia(e),ia(t))}function ia(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?Ce(Ce(Object.create(null),e),t):t}function zc(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const r in t)n[r]=ke(e[r],t[r]);return n}function Hc(e,t,n,r=!1){const i={},a={};Dr(a,oi,1),e.propsDefaults=Object.create(null),Ql(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:tc(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Wc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=Y(i),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let m=f[d];if(ti(e.emitsOptions,m))continue;const v=t[m];if(l)if(K(a,m))v!==a[m]&&(a[m]=v,u=!0);else{const C=Ze(m);i[C]=aa(l,s,C,v,e,!1)}else v!==a[m]&&(a[m]=v,u=!0)}}}else{Ql(e,t,i,a)&&(u=!0);let f;for(const d in s)(!t||!K(t,d)&&((f=Xt(d))===d||!K(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(i[d]=aa(l,s,d,void 0,e,!0)):delete i[d]);if(a!==s)for(const d in a)(!t||!K(t,d)&&!0)&&(delete a[d],u=!0)}u&&ut(e,"set","$attrs")}function Ql(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Tr(l))continue;const u=t[l];let f;i&&K(i,f=Ze(l))?!a||!a.includes(f)?n[f]=u:(s||(s={}))[f]=u:ti(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(a){const l=Y(n),u=s||ee;for(let f=0;f<a.length;f++){const d=a[f];n[d]=aa(i,l,d,u[d],e,!K(u,d))}}return o}function aa(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:u}=i;n in u?r=u[n]:(gn(i),r=u[n]=l.call(null,t),zt())}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function Gl(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!z(e)){const f=d=>{l=!0;const[m,v]=Gl(d,t,!0);Ce(o,m),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!a&&!l)return Z(e)&&r.set(e,ln),ln;if(j(a))for(let f=0;f<a.length;f++){const d=Ze(a[f]);Uo(d)&&(o[d]=ee)}else if(a)for(const f in a){const d=Ze(f);if(Uo(d)){const m=a[f],v=o[d]=j(m)||z(m)?{type:m}:Object.assign({},m);if(v){const C=Wo(Boolean,v.type),P=Wo(String,v.type);v[0]=C>-1,v[1]=P<0||C<P,(C>-1||K(v,"default"))&&s.push(d)}}}const u=[o,s];return Z(e)&&r.set(e,u),u}function Uo(e){return e[0]!=="$"}function zo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ho(e,t){return zo(e)===zo(t)}function Wo(e,t){return j(t)?t.findIndex(n=>Ho(n,e)):z(t)&&Ho(t,e)?0:-1}const Zl=e=>e[0]==="_"||e==="$stable",Va=e=>j(e)?e.map(Xe):[Xe(e)],qc=(e,t,n)=>{if(t._n)return t;const r=Fl((...i)=>Va(t(...i)),n);return r._c=!1,r},eu=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Zl(i))continue;const a=e[i];if(z(a))t[i]=qc(i,a,r);else if(a!=null){const o=Va(a);t[i]=()=>o}}},tu=(e,t)=>{const n=Va(t);e.slots.default=()=>n},Kc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Dr(t,"_",n)):eu(t,e.slots={})}else e.slots={},t&&tu(e,t);Dr(e.slots,oi,1)},Yc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=ee;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(Ce(i,t),!n&&s===1&&delete i._):(a=!t.$stable,eu(t,i)),o=t}else t&&(tu(e,t),o={default:1});if(a)for(const s in i)!Zl(s)&&!(s in o)&&delete i[s]};function nu(){return{app:null,config:{isNativeTag:wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vc=0;function Xc(e,t){return function(r,i=null){z(r)||(r=Object.assign({},r)),i!=null&&!Z(i)&&(i=null);const a=nu(),o=new Set;let s=!1;const l=a.app={_uid:Vc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:bd,get config(){return a.config},set config(u){},use(u,...f){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...f)):z(u)&&(o.add(u),u(l,...f))),l},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),l},component(u,f){return f?(a.components[u]=f,l):a.components[u]},directive(u,f){return f?(a.directives[u]=f,l):a.directives[u]},mount(u,f,d){if(!s){const m=fe(r,i);return m.appContext=a,f&&t?t(m,u):e(m,u,d),s=!0,l._container=u,u.__vue_app__=l,si(m.component)||m.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,f){return a.provides[u]=f,l}};return l}}function oa(e,t,n,r,i=!1){if(j(e)){e.forEach((m,v)=>oa(m,t&&(j(t)?t[v]:t),n,r,i));return}if(mn(r)&&!i)return;const a=r.shapeFlag&4?si(r.component)||r.component.proxy:r.el,o=i?null:a,{i:s,r:l}=e,u=t&&t.r,f=s.refs===ee?s.refs={}:s.refs,d=s.setupState;if(u!=null&&u!==l&&(se(u)?(f[u]=null,K(d,u)&&(d[u]=null)):Ee(u)&&(u.value=null)),z(l))wt(l,s,12,[o,f]);else{const m=se(l),v=Ee(l);if(m||v){const C=()=>{if(e.f){const P=m?K(d,l)?d[l]:f[l]:l.value;i?j(P)&&Ma(P,a):j(P)?P.includes(a)||P.push(a):m?(f[l]=[a],K(d,l)&&(d[l]=f[l])):(l.value=[a],e.k&&(f[e.k]=l.value))}else m?(f[l]=o,K(d,l)&&(d[l]=o)):v&&(l.value=o,e.k&&(f[e.k]=o))};o?(C.id=-1,be(C,n)):C()}}}const be=_c;function Jc(e){return Qc(e)}function Qc(e,t){const n=Of();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:m,setScopeId:v=He,insertStaticContent:C}=e,P=(c,p,y,x=null,w=null,O=null,R=!1,k=null,T=!!p.dynamicChildren)=>{if(c===p)return;c&&!Sn(c,p)&&(x=fr(c),qe(c,w,O,!0),c=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:A,ref:F,shapeFlag:N}=p;switch(A){case ai:B(c,p,y,x);break;case Et:E(c,p,y,x);break;case Ai:c==null&&_(p,y,x,R);break;case pe:ce(c,p,y,x,w,O,R,k,T);break;default:N&1?b(c,p,y,x,w,O,R,k,T):N&6?Ae(c,p,y,x,w,O,R,k,T):(N&64||N&128)&&A.process(c,p,y,x,w,O,R,k,T,Qt)}F!=null&&w&&oa(F,c&&c.ref,O,p||c,!p)},B=(c,p,y,x)=>{if(c==null)r(p.el=s(p.children),y,x);else{const w=p.el=c.el;p.children!==c.children&&u(w,p.children)}},E=(c,p,y,x)=>{c==null?r(p.el=l(p.children||""),y,x):p.el=c.el},_=(c,p,y,x)=>{[c.el,c.anchor]=C(c.children,p,y,x,c.el,c.anchor)},g=({el:c,anchor:p},y,x)=>{let w;for(;c&&c!==p;)w=m(c),r(c,y,x),c=w;r(p,y,x)},h=({el:c,anchor:p})=>{let y;for(;c&&c!==p;)y=m(c),i(c),c=y;i(p)},b=(c,p,y,x,w,O,R,k,T)=>{R=R||p.type==="svg",c==null?$(p,y,x,w,O,R,k,T):q(c,p,w,O,R,k,T)},$=(c,p,y,x,w,O,R,k)=>{let T,A;const{type:F,props:N,shapeFlag:L,transition:U,dirs:H}=c;if(T=c.el=o(c.type,O,N&&N.is,N),L&8?f(T,c.children):L&16&&D(c.children,T,null,x,w,O&&F!=="foreignObject",R,k),H&&Pt(c,null,x,"created"),N){for(const V in N)V!=="value"&&!Tr(V)&&a(T,V,null,N[V],O,c.children,x,w,et);"value"in N&&a(T,"value",null,N.value),(A=N.onVnodeBeforeMount)&&$e(A,x,c)}S(T,c,c.scopeId,R,x),H&&Pt(c,null,x,"beforeMount");const J=(!w||w&&!w.pendingBranch)&&U&&!U.persisted;J&&U.beforeEnter(T),r(T,p,y),((A=N&&N.onVnodeMounted)||J||H)&&be(()=>{A&&$e(A,x,c),J&&U.enter(T),H&&Pt(c,null,x,"mounted")},w)},S=(c,p,y,x,w)=>{if(y&&v(c,y),x)for(let O=0;O<x.length;O++)v(c,x[O]);if(w){let O=w.subTree;if(p===O){const R=w.vnode;S(c,R,R.scopeId,R.slotScopeIds,w.parent)}}},D=(c,p,y,x,w,O,R,k,T=0)=>{for(let A=T;A<c.length;A++){const F=c[A]=k?bt(c[A]):Xe(c[A]);P(null,F,p,y,x,w,O,R,k)}},q=(c,p,y,x,w,O,R)=>{const k=p.el=c.el;let{patchFlag:T,dynamicChildren:A,dirs:F}=p;T|=c.patchFlag&16;const N=c.props||ee,L=p.props||ee;let U;y&&Rt(y,!1),(U=L.onVnodeBeforeUpdate)&&$e(U,y,p,c),F&&Pt(p,c,y,"beforeUpdate"),y&&Rt(y,!0);const H=w&&p.type!=="foreignObject";if(A?re(c.dynamicChildren,A,k,y,x,H,O):R||X(c,p,k,null,y,x,H,O,!1),T>0){if(T&16)le(k,p,N,L,y,x,w);else if(T&2&&N.class!==L.class&&a(k,"class",null,L.class,w),T&4&&a(k,"style",N.style,L.style,w),T&8){const J=p.dynamicProps;for(let V=0;V<J.length;V++){const ue=J[V],Le=N[ue],Gt=L[ue];(Gt!==Le||ue==="value")&&a(k,ue,Le,Gt,w,c.children,y,x,et)}}T&1&&c.children!==p.children&&f(k,p.children)}else!R&&A==null&&le(k,p,N,L,y,x,w);((U=L.onVnodeUpdated)||F)&&be(()=>{U&&$e(U,y,p,c),F&&Pt(p,c,y,"updated")},x)},re=(c,p,y,x,w,O,R)=>{for(let k=0;k<p.length;k++){const T=c[k],A=p[k],F=T.el&&(T.type===pe||!Sn(T,A)||T.shapeFlag&70)?d(T.el):y;P(T,A,F,null,x,w,O,R,!0)}},le=(c,p,y,x,w,O,R)=>{if(y!==x){if(y!==ee)for(const k in y)!Tr(k)&&!(k in x)&&a(c,k,y[k],null,R,p.children,w,O,et);for(const k in x){if(Tr(k))continue;const T=x[k],A=y[k];T!==A&&k!=="value"&&a(c,k,A,T,R,p.children,w,O,et)}"value"in x&&a(c,"value",y.value,x.value)}},ce=(c,p,y,x,w,O,R,k,T)=>{const A=p.el=c?c.el:s(""),F=p.anchor=c?c.anchor:s("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:U}=p;U&&(k=k?k.concat(U):U),c==null?(r(A,y,x),r(F,y,x),D(p.children,y,F,w,O,R,k,T)):N>0&&N&64&&L&&c.dynamicChildren?(re(c.dynamicChildren,L,y,w,O,R,k),(p.key!=null||w&&p===w.subTree)&&Xa(c,p,!0)):X(c,p,y,F,w,O,R,k,T)},Ae=(c,p,y,x,w,O,R,k,T)=>{p.slotScopeIds=k,c==null?p.shapeFlag&512?w.ctx.activate(p,y,x,R,T):Fe(p,y,x,w,O,R,T):lr(c,p,T)},Fe=(c,p,y,x,w,O,R)=>{const k=c.component=ud(c,x,w);if(Ul(c)&&(k.ctx.renderer=Qt),cd(k),k.asyncDep){if(w&&w.registerDep(k,de),!c.el){const T=k.subTree=fe(Et);E(null,T,p,y)}return}de(k,c,p,y,w,O,R)},lr=(c,p,y)=>{const x=p.component=c.component;if(bc(c,p,y))if(x.asyncDep&&!x.asyncResolved){ae(x,p,y);return}else x.next=p,uc(x.update),x.update();else p.el=c.el,x.vnode=p},de=(c,p,y,x,w,O,R)=>{const k=()=>{if(c.isMounted){let{next:F,bu:N,u:L,parent:U,vnode:H}=c,J=F,V;Rt(c,!1),F?(F.el=H.el,ae(c,F,R)):F=H,N&&fn(N),(V=F.props&&F.props.onVnodeBeforeUpdate)&&$e(V,U,F,H),Rt(c,!0);const ue=_i(c),Le=c.subTree;c.subTree=ue,P(Le,ue,d(Le.el),fr(Le),c,w,O),F.el=ue.el,J===null&&yc(c,ue.el),L&&be(L,w),(V=F.props&&F.props.onVnodeUpdated)&&be(()=>$e(V,U,F,H),w)}else{let F;const{el:N,props:L}=p,{bm:U,m:H,parent:J}=c,V=mn(p);if(Rt(c,!1),U&&fn(U),!V&&(F=L&&L.onVnodeBeforeMount)&&$e(F,J,p),Rt(c,!0),N&&bi){const ue=()=>{c.subTree=_i(c),bi(N,c.subTree,c,w,null)};V?p.type.__asyncLoader().then(()=>!c.isUnmounted&&ue()):ue()}else{const ue=c.subTree=_i(c);P(null,ue,y,x,c,w,O),p.el=ue.el}if(H&&be(H,w),!V&&(F=L&&L.onVnodeMounted)){const ue=p;be(()=>$e(F,J,ue),w)}(p.shapeFlag&256||J&&mn(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&be(c.a,w),c.isMounted=!0,p=y=x=null}},T=c.effect=new La(k,()=>Wa(A),c.scope),A=c.update=()=>T.run();A.id=c.uid,Rt(c,!0),A()},ae=(c,p,y)=>{p.component=c;const x=c.vnode.props;c.vnode=p,c.next=null,Wc(c,p.props,x,y),Yc(c,p.children,y),En(),Fo(),An()},X=(c,p,y,x,w,O,R,k,T=!1)=>{const A=c&&c.children,F=c?c.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:U}=p;if(L>0){if(L&128){ur(A,N,y,x,w,O,R,k,T);return}else if(L&256){St(A,N,y,x,w,O,R,k,T);return}}U&8?(F&16&&et(A,w,O),N!==A&&f(y,N)):F&16?U&16?ur(A,N,y,x,w,O,R,k,T):et(A,w,O,!0):(F&8&&f(y,""),U&16&&D(N,y,x,w,O,R,k,T))},St=(c,p,y,x,w,O,R,k,T)=>{c=c||ln,p=p||ln;const A=c.length,F=p.length,N=Math.min(A,F);let L;for(L=0;L<N;L++){const U=p[L]=T?bt(p[L]):Xe(p[L]);P(c[L],U,y,null,w,O,R,k,T)}A>F?et(c,w,O,!0,!1,N):D(p,y,x,w,O,R,k,T,N)},ur=(c,p,y,x,w,O,R,k,T)=>{let A=0;const F=p.length;let N=c.length-1,L=F-1;for(;A<=N&&A<=L;){const U=c[A],H=p[A]=T?bt(p[A]):Xe(p[A]);if(Sn(U,H))P(U,H,y,null,w,O,R,k,T);else break;A++}for(;A<=N&&A<=L;){const U=c[N],H=p[L]=T?bt(p[L]):Xe(p[L]);if(Sn(U,H))P(U,H,y,null,w,O,R,k,T);else break;N--,L--}if(A>N){if(A<=L){const U=L+1,H=U<F?p[U].el:x;for(;A<=L;)P(null,p[A]=T?bt(p[A]):Xe(p[A]),y,H,w,O,R,k,T),A++}}else if(A>L)for(;A<=N;)qe(c[A],w,O,!0),A++;else{const U=A,H=A,J=new Map;for(A=H;A<=L;A++){const Pe=p[A]=T?bt(p[A]):Xe(p[A]);Pe.key!=null&&J.set(Pe.key,A)}let V,ue=0;const Le=L-H+1;let Gt=!1,Ao=0;const On=new Array(Le);for(A=0;A<Le;A++)On[A]=0;for(A=U;A<=N;A++){const Pe=c[A];if(ue>=Le){qe(Pe,w,O,!0);continue}let Ke;if(Pe.key!=null)Ke=J.get(Pe.key);else for(V=H;V<=L;V++)if(On[V-H]===0&&Sn(Pe,p[V])){Ke=V;break}Ke===void 0?qe(Pe,w,O,!0):(On[Ke-H]=A+1,Ke>=Ao?Ao=Ke:Gt=!0,P(Pe,p[Ke],y,null,w,O,R,k,T),ue++)}const ko=Gt?Gc(On):ln;for(V=ko.length-1,A=Le-1;A>=0;A--){const Pe=H+A,Ke=p[Pe],Co=Pe+1<F?p[Pe+1].el:x;On[A]===0?P(null,Ke,y,Co,w,O,R,k,T):Gt&&(V<0||A!==ko[V]?Tt(Ke,y,Co,2):V--)}}},Tt=(c,p,y,x,w=null)=>{const{el:O,type:R,transition:k,children:T,shapeFlag:A}=c;if(A&6){Tt(c.component.subTree,p,y,x);return}if(A&128){c.suspense.move(p,y,x);return}if(A&64){R.move(c,p,y,Qt);return}if(R===pe){r(O,p,y);for(let N=0;N<T.length;N++)Tt(T[N],p,y,x);r(c.anchor,p,y);return}if(R===Ai){g(c,p,y);return}if(x!==2&&A&1&&k)if(x===0)k.beforeEnter(O),r(O,p,y),be(()=>k.enter(O),w);else{const{leave:N,delayLeave:L,afterLeave:U}=k,H=()=>r(O,p,y),J=()=>{N(O,()=>{H(),U&&U()})};L?L(O,H,J):J()}else r(O,p,y)},qe=(c,p,y,x=!1,w=!1)=>{const{type:O,props:R,ref:k,children:T,dynamicChildren:A,shapeFlag:F,patchFlag:N,dirs:L}=c;if(k!=null&&oa(k,null,y,c,!0),F&256){p.ctx.deactivate(c);return}const U=F&1&&L,H=!mn(c);let J;if(H&&(J=R&&R.onVnodeBeforeUnmount)&&$e(J,p,c),F&6)cf(c.component,y,x);else{if(F&128){c.suspense.unmount(y,x);return}U&&Pt(c,null,p,"beforeUnmount"),F&64?c.type.remove(c,p,y,w,Qt,x):A&&(O!==pe||N>0&&N&64)?et(A,p,y,!1,!0):(O===pe&&N&384||!w&&F&16)&&et(T,p,y),x&&xo(c)}(H&&(J=R&&R.onVnodeUnmounted)||U)&&be(()=>{J&&$e(J,p,c),U&&Pt(c,null,p,"unmounted")},y)},xo=c=>{const{type:p,el:y,anchor:x,transition:w}=c;if(p===pe){ff(y,x);return}if(p===Ai){h(c);return}const O=()=>{i(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(c.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:k}=w,T=()=>R(y,O);k?k(c.el,O,T):T()}else O()},ff=(c,p)=>{let y;for(;c!==p;)y=m(c),i(c),c=y;i(p)},cf=(c,p,y)=>{const{bum:x,scope:w,update:O,subTree:R,um:k}=c;x&&fn(x),w.stop(),O&&(O.active=!1,qe(R,c,p,y)),k&&be(k,p),be(()=>{c.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},et=(c,p,y,x=!1,w=!1,O=0)=>{for(let R=O;R<c.length;R++)qe(c[R],p,y,x,w)},fr=c=>c.shapeFlag&6?fr(c.component.subTree):c.shapeFlag&128?c.suspense.next():m(c.anchor||c.el),Eo=(c,p,y)=>{c==null?p._vnode&&qe(p._vnode,null,null,!0):P(p._vnode||null,c,p,null,null,null,y),Fo(),Nl(),p._vnode=c},Qt={p:P,um:qe,m:Tt,r:xo,mt:Fe,mc:D,pc:X,pbc:re,n:fr,o:e};let gi,bi;return t&&([gi,bi]=t(Qt)),{render:Eo,hydrate:gi,createApp:Xc(Eo,gi)}}function Rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Xa(e,t,n=!1){const r=e.children,i=t.children;if(j(r)&&j(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=bt(i[a]),s.el=o.el),n||Xa(o,s)),s.type===ai&&(s.el=o.el)}}function Gc(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<u?a=s+1:o=s;u<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}const Zc=e=>e.__isTeleport,Fn=e=>e&&(e.disabled||e.disabled===""),qo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sa=(e,t)=>{const n=e&&e.to;return se(n)?t?t(n):null:n},ed={__isTeleport:!0,process(e,t,n,r,i,a,o,s,l,u){const{mc:f,pc:d,pbc:m,o:{insert:v,querySelector:C,createText:P,createComment:B}}=u,E=Fn(t.props);let{shapeFlag:_,children:g,dynamicChildren:h}=t;if(e==null){const b=t.el=P(""),$=t.anchor=P("");v(b,n,r),v($,n,r);const S=t.target=sa(t.props,C),D=t.targetAnchor=P("");S&&(v(D,S),o=o||qo(S));const q=(re,le)=>{_&16&&f(g,re,le,i,a,o,s,l)};E?q(n,$):S&&q(S,D)}else{t.el=e.el;const b=t.anchor=e.anchor,$=t.target=e.target,S=t.targetAnchor=e.targetAnchor,D=Fn(e.props),q=D?n:$,re=D?b:S;if(o=o||qo($),h?(m(e.dynamicChildren,h,q,i,a,o,s),Xa(e,t,!0)):l||d(e,t,q,re,i,a,o,s,!1),E)D||gr(t,n,b,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const le=t.target=sa(t.props,C);le&&gr(t,le,null,u,0)}else D&&gr(t,$,S,u,1)}ru(t)},remove(e,t,n,r,{um:i,o:{remove:a}},o){const{shapeFlag:s,children:l,anchor:u,targetAnchor:f,target:d,props:m}=e;if(d&&a(f),(o||!Fn(m))&&(a(u),s&16))for(let v=0;v<l.length;v++){const C=l[v];i(C,t,n,!0,!!C.dynamicChildren)}},move:gr,hydrate:td};function gr(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);const{el:o,anchor:s,shapeFlag:l,children:u,props:f}=e,d=a===2;if(d&&r(o,t,n),(!d||Fn(f))&&l&16)for(let m=0;m<u.length;m++)i(u[m],t,n,2);d&&r(s,t,n)}function td(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:l}},u){const f=t.target=sa(t.props,l);if(f){const d=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Fn(t.props))t.anchor=u(o(e),t,s(e),n,r,i,a),t.targetAnchor=d;else{t.anchor=o(e);let m=d;for(;m;)if(m=o(m),m&&m.nodeType===8&&m.data==="teleport anchor"){t.targetAnchor=m,f._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(d,t,f,n,r,i,a)}ru(t)}return t.anchor&&o(t.anchor)}const nd=ed;function ru(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const pe=Symbol(void 0),ai=Symbol(void 0),Et=Symbol(void 0),Ai=Symbol(void 0),Ln=[];let Ue=null;function W(e=!1){Ln.push(Ue=e?null:[])}function rd(){Ln.pop(),Ue=Ln[Ln.length-1]||null}let Jn=1;function Ko(e){Jn+=e}function iu(e){return e.dynamicChildren=Jn>0?Ue||ln:null,rd(),Jn>0&&Ue&&Ue.push(e),e}function at(e,t,n,r,i,a){return iu(Ve(e,t,n,r,i,a,!0))}function Q(e,t,n,r,i){return iu(fe(e,t,n,r,i,!0))}function Qn(e){return e?e.__v_isVNode===!0:!1}function Sn(e,t){return e.type===t.type&&e.key===t.key}const oi="__vInternal",au=({key:e})=>e!=null?e:null,Pr=({ref:e,ref_key:t,ref_for:n})=>e!=null?se(e)||Ee(e)||z(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function Ve(e,t=null,n=null,r=0,i=null,a=e===pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&au(t),ref:t&&Pr(t),scopeId:ni,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ye};return s?(Ja(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=se(n)?8:16),Jn>0&&!o&&Ue&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Ue.push(l),l}const fe=id;function id(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Kl)&&(e=Et),Qn(e)){const s=qt(e,t,!0);return n&&Ja(s,n),Jn>0&&!a&&Ue&&(s.shapeFlag&6?Ue[Ue.indexOf(e)]=s:Ue.push(s)),s.patchFlag|=-2,s}if(hd(e)&&(e=e.__vccOpts),t){t=ad(t);let{class:s,style:l}=t;s&&!se(s)&&(t.class=Ra(s)),Z(l)&&(kl(l)&&!j(l)&&(l=Ce({},l)),t.style=hn(l))}const o=se(e)?1:Ll(e)?128:Zc(e)?64:Z(e)?4:z(e)?2:0;return Ve(e,t,n,r,i,o,a,!0)}function ad(e){return e?kl(e)||oi in e?Ce({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:o}=e,s=t?od(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&au(s),ref:t&&t.ref?n&&i?j(i)?i.concat(Pr(t)):[i,Pr(t)]:Pr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function ou(e=" ",t=0){return fe(ai,null,e,t)}function me(e="",t=!1){return t?(W(),Q(Et,null,e)):fe(Et,null,e)}function Xe(e){return e==null||typeof e=="boolean"?fe(Et):j(e)?fe(pe,null,e.slice()):typeof e=="object"?bt(e):fe(ai,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Ja(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ja(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(oi in t)?t._ctx=ye:i===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[ou(t)]):n=8);e.children=t,e.shapeFlag|=n}function od(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ra([t.class,r.class]));else if(i==="style")t.style=hn([t.style,r.style]);else if(Xr(i)){const a=t[i],o=r[i];o&&a!==o&&!(j(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function $e(e,t,n,r=null){We(e,t,7,[n,r])}const sd=nu();let ld=0;function ud(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||sd,a={uid:ld++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Sf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gl(r,i),emitsOptions:$l(r,i),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=dc.bind(null,a),e.ce&&e.ce(a),a}let ge=null;const fd=()=>ge||ye,gn=e=>{ge=e,e.scope.on()},zt=()=>{ge&&ge.scope.off(),ge=null};function su(e){return e.vnode.shapeFlag&4}let Gn=!1;function cd(e,t=!1){Gn=t;const{props:n,children:r}=e.vnode,i=su(e);Hc(e,n,i,t),Kc(e,r);const a=i?dd(e,t):void 0;return Gn=!1,a}function dd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Cl(new Proxy(e.ctx,Lc));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?pd(e):null;gn(e),En();const a=wt(r,e,0,[e.props,i]);if(An(),zt(),cl(a)){if(a.then(zt,zt),t)return a.then(o=>{Yo(e,o,t)}).catch(o=>{ei(o,e,0)});e.asyncDep=a}else Yo(e,a,t)}else lu(e,t)}function Yo(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Tl(t)),lu(e,n)}let Vo;function lu(e,t,n){const r=e.type;if(!e.render){if(!t&&Vo&&!r.render){const i=r.template||Ya(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=Ce(Ce({isCustomElement:a,delimiters:s},o),l);r.render=Vo(i,u)}}e.render=r.render||He}gn(e),En(),jc(e),An(),zt()}function md(e){return new Proxy(e.attrs,{get(t,n){return Ie(e,"get","$attrs"),t[n]}})}function pd(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=md(e))},slots:e.slots,emit:e.emit,expose:t}}function si(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Tl(Cl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $n)return $n[n](e)},has(t,n){return n in t||n in $n}}))}function la(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function hd(e){return z(e)&&"__vccOpts"in e}const we=(e,t)=>oc(e,t,Gn);function Qa(e,t,n){const r=arguments.length;return r===2?Z(t)&&!j(t)?Qn(t)?fe(e,null,[t]):fe(e,t):fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qn(n)&&(n=[n]),fe(e,t,n))}const vd=Symbol(""),gd=()=>Mn(vd),bd="3.2.45",yd="http://www.w3.org/2000/svg",$t=typeof document<"u"?document:null,Xo=$t&&$t.createElement("template"),_d={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?$t.createElementNS(yd,e):$t.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>$t.createTextNode(e),createComment:e=>$t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Xo.innerHTML=r?`<svg>${e}</svg>`:e;const s=Xo.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function wd(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function xd(e,t,n){const r=e.style,i=se(n);if(n&&!i){for(const a in n)ua(r,a,n[a]);if(t&&!se(t))for(const a in t)n[a]==null&&ua(r,a,"")}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Jo=/\s*!important$/;function ua(e,t,n){if(j(n))n.forEach(r=>ua(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ed(e,t);Jo.test(n)?e.setProperty(Xt(r),n.replace(Jo,""),"important"):e[r]=n}}const Qo=["Webkit","Moz","ms"],ki={};function Ed(e,t){const n=ki[t];if(n)return n;let r=Ze(t);if(r!=="filter"&&r in e)return ki[t]=r;r=Qr(r);for(let i=0;i<Qo.length;i++){const a=Qo[i]+r;if(a in e)return ki[t]=a}return t}const Go="http://www.w3.org/1999/xlink";function Ad(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Go,t.slice(6,t.length)):e.setAttributeNS(Go,t,n);else{const a=yf(t);n==null||a&&!ul(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function kd(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ul(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function st(e,t,n,r){e.addEventListener(t,n,r)}function Cd(e,t,n,r){e.removeEventListener(t,n,r)}function Od(e,t,n,r,i=null){const a=e._vei||(e._vei={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Sd(t);if(r){const u=a[t]=Rd(r,i);st(e,s,u,l)}else o&&(Cd(e,s,o,l),a[t]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function Sd(e){let t;if(Zo.test(e)){t={};let r;for(;r=e.match(Zo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let Ci=0;const Td=Promise.resolve(),Pd=()=>Ci||(Td.then(()=>Ci=0),Ci=Date.now());function Rd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;We(Id(r,n.value),t,5,[r])};return n.value=e,n.attached=Pd(),n}function Id(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const es=/^on[a-z]/,Nd=(e,t,n,r,i=!1,a,o,s,l)=>{t==="class"?wd(e,r,i):t==="style"?xd(e,n,r):Xr(t)?Na(t)||Od(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Md(e,t,r,i))?kd(e,t,r,a,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ad(e,t,r,i))};function Md(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&es.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||es.test(t)&&se(n)?!1:t in e}const At=e=>{const t=e.props["onUpdate:modelValue"]||!1;return j(t)?n=>fn(t,n):t};function $d(e){e.target.composing=!0}function ts(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ns={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=At(i);const a=r||i.props&&i.props.type==="number";st(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),a&&(s=Kn(s)),e._assign(s)}),n&&st(e,"change",()=>{e.value=e.value.trim()}),t||(st(e,"compositionstart",$d),st(e,"compositionend",ts),st(e,"change",ts))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},a){if(e._assign=At(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Kn(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},Fd={deep:!0,created(e,t,n){e._assign=At(n),st(e,"change",()=>{const r=e._modelValue,i=bn(e),a=e.checked,o=e._assign;if(j(r)){const s=Ia(r,i),l=s!==-1;if(a&&!l)o(r.concat(i));else if(!a&&l){const u=[...r];u.splice(s,1),o(u)}}else if(xn(r)){const s=new Set(r);a?s.add(i):s.delete(i),o(s)}else o(uu(e,a))})},mounted:rs,beforeUpdate(e,t,n){e._assign=At(n),rs(e,t,n)}};function rs(e,{value:t,oldValue:n},r){e._modelValue=t,j(t)?e.checked=Ia(t,r.props.value)>-1:xn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Wt(t,uu(e,!0)))}const Ld={created(e,{value:t},n){e.checked=Wt(t,n.props.value),e._assign=At(n),st(e,"change",()=>{e._assign(bn(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=At(r),t!==n&&(e.checked=Wt(t,r.props.value))}},jd={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const i=xn(t);st(e,"change",()=>{const a=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Kn(bn(o)):bn(o));e._assign(e.multiple?i?new Set(a):a:a[0])}),e._assign=At(r)},mounted(e,{value:t}){is(e,t)},beforeUpdate(e,t,n){e._assign=At(n)},updated(e,{value:t}){is(e,t)}};function is(e,t){const n=e.multiple;if(!(n&&!j(t)&&!xn(t))){for(let r=0,i=e.options.length;r<i;r++){const a=e.options[r],o=bn(a);if(n)j(t)?a.selected=Ia(t,o)>-1:a.selected=t.has(o);else if(Wt(bn(a),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function bn(e){return"_value"in e?e._value:e.value}function uu(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Bv={created(e,t,n){br(e,t,n,null,"created")},mounted(e,t,n){br(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){br(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){br(e,t,n,r,"updated")}};function Dd(e,t){switch(e){case"SELECT":return jd;case"TEXTAREA":return ns;default:switch(t){case"checkbox":return Fd;case"radio":return Ld;default:return ns}}}function br(e,t,n,r,i){const o=Dd(e.tagName,n.props&&n.props.type)[i];o&&o(e,t,n,r)}const Bd=["ctrl","shift","alt","meta"],Ud={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Bd.some(n=>e[`${n}Key`]&&!t.includes(n))},ot=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const a=Ud[t[i]];if(a&&a(n,t))return}return e(n,...r)},zd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Nt=(e,t)=>n=>{if(!("key"in n))return;const r=Xt(n.key);if(t.some(i=>i===r||zd[i]===r))return e(n)},rn={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Tn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Tn(e,!0),r.enter(e)):r.leave(e,()=>{Tn(e,!1)}):Tn(e,t))},beforeUnmount(e,{value:t}){Tn(e,t)}};function Tn(e,t){e.style.display=t?e._vod:"none"}const Hd=Ce({patchProp:Nd},_d);let as;function fu(){return as||(as=Jc(Hd))}const Wd=(...e)=>{fu().render(...e)},cu=(...e)=>{const t=fu().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=qd(r);if(!i)return;const a=t._component;!z(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function qd(e){return se(e)?document.querySelector(e):e}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function os(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(f){try{u(r.next(f))}catch(d){o(d)}}function l(f){try{u(r.throw(f))}catch(d){o(d)}}function u(f){f.done?a(f.value):i(f.value).then(s,l)}u((r=r.apply(e,t||[])).next())})}function Kd(e,t,n){let r=document.createElement(e);return r.setAttribute("class",t),n&&(r.innerText=n),r}const du=function(e){let t=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?t[n]=du(e[n]):t[n]=e[n]);return t};var Ht=ri({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},setup(e){const t=G(0),n=G(0),r=G(!1),i=G(0),a=G(0),o=G(!1),s=G(null),l=G([]),u=we(()=>e.menuList.some(g=>g.children&&g.children.length>0)),f=G(10),d=G();Ge(o,g=>os(this,void 0,void 0,function*(){var h,b;if(g){yield ea();let $=d.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(D=>{$.style.setProperty(`--menu-${D}`,e.menuWrapperCss&&e.menuWrapperCss[D])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(D=>{$.style.setProperty(`--menu-item-${D}`,e.menuItemCss&&e.menuItemCss[D])});let S=(b=(h=e.menuItemCss)===null||h===void 0?void 0:h.arrowSize)===null||b===void 0?void 0:b.match(/\d+/);S?f.value=~~S[0]||10:f.value=10,$.style.setProperty("--menu-item-arrowRealSize",f.value/2+"px")}}));const m=(g,h)=>{g.disabled||(g.fn&&typeof g.fn=="function"&&g.fn(e.params,s.value,e.el,h),o.value=!1)},v=(g,h)=>{g.disabled||(g.fn&&typeof g.fn=="function"&&!g.disabled&&(g.fn(e.params,s.value,e.el,h),r.value=!1),o.value=!1)},C=(g,h)=>{if(h.children&&!h.disabled){r.value=!0;const b=g.currentTarget;if(!b)return;const{offsetWidth:$}=b,S=b.querySelector(".__menu__sub__wrapper");if(!S)return;const{offsetWidth:D,offsetHeight:q}=S,{innerWidth:re,innerHeight:le}=window,{top:ce,left:Ae}=b.getBoundingClientRect();Ae+$+D>re-5?t.value=Ae-D+5:t.value=Ae+$,ce+q>le-5?n.value=le-q:n.value=ce+5}},P=(g,h,b,$)=>g.map(S=>(S.children&&(S.children=P(S.children,h,b,$)),S.label&&typeof S.label=="function"&&(S.label=S.label($,h,b)),S.tips&&typeof S.tips=="function"&&(S.tips=S.tips($,h,b)),S.icon&&typeof S.icon=="function"&&(S.icon=S.icon($,h,b)),S.hidden&&typeof S.hidden=="function"&&(S.hidden=S.hidden($,h,b)),S.disabled&&typeof S.disabled=="function"&&(S.disabled=S.disabled($,h,b)),S)),B=(g=0,h=0)=>os(this,void 0,void 0,function*(){if(s.value=document.elementFromPoint(g-1,h-1),e.menuHiddenFn?o.value=!e.menuHiddenFn(e.params,s.value,e.el):o.value=!0,!o.value)return;l.value=du(e.menuList),l.value=P(l.value,s.value,e.el,e.params),yield ea();const{innerWidth:b,innerHeight:$}=window,D=d.value.offsetHeight,q=e.menuWidth||200;a.value=g+q+1>b?b-q-5:g+1,i.value=h+D+1>$?$-D-5:h+1}),E=()=>{o.value=!1},_=g=>{d.value&&!d.value.contains(g.currentTarget)&&(o.value=!1,document.oncontextmenu=null)};return Ge(()=>e.injectCloseListener,g=>{g?document.addEventListener("mousedown",_):document.removeEventListener("mousedown",_)},{immediate:!0}),Ka(()=>{document.removeEventListener("mousedown",_)}),{subLeft:t,subTop:n,hoverFlag:r,menuTop:i,menuLeft:a,showMenu:o,clickDomEl:s,calcMenuList:l,arrowSize:f,hasSubMenu:u,MenuWrapper:d,handleMenuItemClick:m,handleSubMenuItemClick:v,handleMenuMouseEnter:C,show:B,close:E}}});const Yd=hc();mc("data-v-3d21bc0a");const Vd={key:0,class:"__menu__item-icon"},Xd={class:"__menu__item-label"},Jd={class:"__menu__item-tips"},Qd={class:"__menu__item-arrow-after"},Gd={class:"__menu__sub__item-label"},Zd={class:"__menu__sub__item-tips"};pc();const em=Yd((e,t,n,r,i,a)=>(W(),Q(nd,{to:"body",disabled:!e.appendToBody},[e.showMenu?(W(),Q("div",{key:0,ref:"MenuWrapper",class:["__menu__wrapper",e.customClass],style:{width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`}},[(W(!0),Q(pe,null,ta(e.calcMenuList,(o,s)=>(W(),Q(pe,null,[!o.hidden&&!o.line?(W(),Q("div",{key:s,class:["__menu__item",o.disabled&&"disabled",o.customClass],onMousedown:ot(l=>e.handleMenuItemClick(o,l),["stop"]),onMouseenter:l=>e.handleMenuMouseEnter(l,o)},[e.hasIcon?(W(),Q("div",Vd,[e.iconType==="font-icon"?Lt((W(),Q("i",{key:0,class:o.icon},null,2)),[[rn,o.icon]]):e.iconType==="svg-icon"?Lt((W(),Q("div",{key:1,class:"__menu__item-icon-svg",innerHTML:o.icon},null,8,["innerHTML"])),[[rn,o.icon]]):e.iconType==="vnode-icon"?(W(),Q(Yl(o.icon),{key:2})):me("v-if",!0)])):me("v-if",!0),fe("span",Xd,lt(o.label),1),fe("span",Jd,lt(o.tips||""),1),e.hasSubMenu?(W(),Q("span",{key:1,class:["__menu__item-arrow",{show:e.hasSubMenu&&o.children}],style:{width:e.arrowSize+"px",height:e.arrowSize+"px"}},[Lt(fe("span",Qd,null,512),[[rn,e.hasSubMenu&&o.children]])],6)):me("v-if",!0),o.children&&o.children.length>0?Lt((W(),Q("div",{key:2,class:"__menu__sub__wrapper",style:{top:`${e.subTop}px`,left:`${e.subLeft}px`}},[(W(!0),Q(pe,null,ta(o.children,(l,u)=>(W(),Q(pe,null,[!l.hidden&&!l.line?(W(),Q("div",{key:u,class:["__menu__sub__item",l.disabled&&"disabled",l.customClass],onMousedown:ot(f=>e.handleSubMenuItemClick(l,f),["stop"])},[fe("span",Gd,lt(l.label),1),fe("span",Zd,lt(l.tips||""),1)],42,["onMousedown"])):me("v-if",!0),l.line?(W(),Q("div",{key:u,class:"__menu__line"})):me("v-if",!0)],64))),256))],4)),[[rn,e.hoverFlag]]):me("v-if",!0)],42,["onMousedown","onMouseenter"])):me("v-if",!0),!o.hidden&&o.line?(W(),Q("div",{key:s,class:"__menu__line"})):me("v-if",!0)],64))),256))],6)):me("v-if",!0)],8,["disabled"])));function tm(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var nm=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;tm(nm);Ht.render=em;Ht.__scopeId="data-v-3d21bc0a";Ht.__file="packages/mouse-menu/mouse-menu.vue";Ht.install=e=>{e.component(Ht.name,Ht)};function ss(e){var t;const n="__mouse__menu__container";let r;document.querySelector(`.${n}`)?r=document.querySelector(`.${n}`):r=Kd("div",n);const i=Qa(Ht,e);return Wd(i,r),document.body.appendChild(r),(t=i.component)===null||t===void 0?void 0:t.proxy}let an,yr,fa,jt;function rm(e,t,n=500){fa=r=>{an&&an.close(),r.preventDefault(),yr&&clearTimeout(yr),yr=window.setTimeout(()=>{t(r)},n)},jt=()=>{clearTimeout(yr)},e.addEventListener("touchstart",fa),e.addEventListener("touchmove",jt),e.addEventListener("touchend",jt),e.addEventListener("touchcancel",jt)}function mu(e){e.removeEventListener("touchstart",fa),e.removeEventListener("touchmove",jt),e.removeEventListener("touchend",jt),e.removeEventListener("touchcancel",jt)}let Rr,ls;const im=(e,t)=>{const{value:n}=t;if(n.menuList.length>0)Rr=r=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;r.preventDefault();const i=ss(Object.assign({el:e},n)),{x:a,y:o}=r;i.show(a,o)},e.removeEventListener("contextmenu",Rr),e.addEventListener("contextmenu",Rr),n.useLongPressInMobile&&"ontouchstart"in window&&(ls=r=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;r.preventDefault(),an=ss(Object.assign({el:e},n));const{touches:i}=r,{clientX:a,clientY:o}=i[0];an.show(a,o),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>an.close(),e.onmousedown=()=>an.close()},500)},mu(e),rm(e,ls,n.longPressDuration||500));else throw new Error("At least set one menu list!")},am=e=>{e.removeEventListener("contextmenu",Rr),"touchstart"in window&&mu(e)},om={mounted:im,unmounted:am};var Uv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pu={exports:{}},Ga={exports:{}},hu=function(t,n){return function(){for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];return t.apply(n,i)}},lm=hu,Za=Object.prototype.toString,eo=function(e){return function(t){var n=Za.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function Jt(e){return e=e.toLowerCase(),function(n){return eo(n)===e}}function to(e){return Array.isArray(e)}function Hr(e){return typeof e>"u"}function um(e){return e!==null&&!Hr(e)&&e.constructor!==null&&!Hr(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var vu=Jt("ArrayBuffer");function fm(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&vu(e.buffer),t}function cm(e){return typeof e=="string"}function dm(e){return typeof e=="number"}function gu(e){return e!==null&&typeof e=="object"}function Ir(e){if(eo(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var mm=Jt("Date"),pm=Jt("File"),hm=Jt("Blob"),vm=Jt("FileList");function no(e){return Za.call(e)==="[object Function]"}function gm(e){return gu(e)&&no(e.pipe)}function bm(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Za.call(e)===t||no(e.toString)&&e.toString()===t)}var ym=Jt("URLSearchParams");function _m(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function wm(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ro(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),to(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function ca(){var e={};function t(i,a){Ir(e[a])&&Ir(i)?e[a]=ca(e[a],i):Ir(i)?e[a]=ca({},i):to(i)?e[a]=i.slice():e[a]=i}for(var n=0,r=arguments.length;n<r;n++)ro(arguments[n],t);return e}function xm(e,t,n){return ro(t,function(i,a){n&&typeof i=="function"?e[a]=lm(i,n):e[a]=i}),e}function Em(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Am(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function km(e,t,n){var r,i,a,o={};t=t||{};do{for(r=Object.getOwnPropertyNames(e),i=r.length;i-- >0;)a=r[i],o[a]||(t[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function Cm(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return r!==-1&&r===n}function Om(e){if(!e)return null;var t=e.length;if(Hr(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var Sm=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),_e={isArray:to,isArrayBuffer:vu,isBuffer:um,isFormData:bm,isArrayBufferView:fm,isString:cm,isNumber:dm,isObject:gu,isPlainObject:Ir,isUndefined:Hr,isDate:mm,isFile:pm,isBlob:hm,isFunction:no,isStream:gm,isURLSearchParams:ym,isStandardBrowserEnv:wm,forEach:ro,merge:ca,extend:xm,trim:_m,stripBOM:Em,inherits:Am,toFlatObject:km,kindOf:eo,kindOfTest:Jt,endsWith:Cm,toArray:Om,isTypedArray:Sm,isFileList:vm},Zt=_e;function us(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var bu=function(t,n,r){if(!n)return t;var i;if(r)i=r(n);else if(Zt.isURLSearchParams(n))i=n.toString();else{var a=[];Zt.forEach(n,function(l,u){l===null||typeof l>"u"||(Zt.isArray(l)?u=u+"[]":l=[l],Zt.forEach(l,function(d){Zt.isDate(d)?d=d.toISOString():Zt.isObject(d)&&(d=JSON.stringify(d)),a.push(us(u)+"="+us(d))}))}),i=a.join("&")}if(i){var o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t},Tm=_e;function li(){this.handlers=[]}li.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};li.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};li.prototype.forEach=function(t){Tm.forEach(this.handlers,function(r){r!==null&&t(r)})};var Pm=li,Rm=_e,Im=function(t,n){Rm.forEach(t,function(i,a){a!==n&&a.toUpperCase()===n.toUpperCase()&&(t[n]=i,delete t[a])})},yu=_e;function yn(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}yu.inherits(yn,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var _u=yn.prototype,wu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){wu[e]={value:e}});Object.defineProperties(yn,wu);Object.defineProperty(_u,"isAxiosError",{value:!0});yn.from=function(e,t,n,r,i,a){var o=Object.create(_u);return yu.toFlatObject(e,o,function(l){return l!==Error.prototype}),yn.call(o,e.message,t,n,r,i),o.name=e.name,a&&Object.assign(o,a),o};var kn=yn,xu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},je=_e;function Nm(e,t){t=t||new FormData;var n=[];function r(a){return a===null?"":je.isDate(a)?a.toISOString():je.isArrayBuffer(a)||je.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function i(a,o){if(je.isPlainObject(a)||je.isArray(a)){if(n.indexOf(a)!==-1)throw Error("Circular reference detected in "+o);n.push(a),je.forEach(a,function(l,u){if(!je.isUndefined(l)){var f=o?o+"."+u:u,d;if(l&&!o&&typeof l=="object"){if(je.endsWith(u,"{}"))l=JSON.stringify(l);else if(je.endsWith(u,"[]")&&(d=je.toArray(l))){d.forEach(function(m){!je.isUndefined(m)&&t.append(f,r(m))});return}}i(l,f)}}),n.pop()}else t.append(o,r(a))}return i(e),t}var Eu=Nm,Oi,fs;function Mm(){if(fs)return Oi;fs=1;var e=kn;return Oi=function(n,r,i){var a=i.config.validateStatus;!i.status||!a||a(i.status)?n(i):r(new e("Request failed with status code "+i.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},Oi}var Si,cs;function $m(){if(cs)return Si;cs=1;var e=_e;return Si=e.isStandardBrowserEnv()?function(){return{write:function(r,i,a,o,s,l){var u=[];u.push(r+"="+encodeURIComponent(i)),e.isNumber(a)&&u.push("expires="+new Date(a).toGMTString()),e.isString(o)&&u.push("path="+o),e.isString(s)&&u.push("domain="+s),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Si}var Fm=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},Lm=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},jm=Fm,Dm=Lm,Au=function(t,n){return t&&!jm(n)?Dm(t,n):n},Ti,ds;function Bm(){if(ds)return Ti;ds=1;var e=_e,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Ti=function(r){var i={},a,o,s;return r&&e.forEach(r.split(`
`),function(u){if(s=u.indexOf(":"),a=e.trim(u.substr(0,s)).toLowerCase(),o=e.trim(u.substr(s+1)),a){if(i[a]&&t.indexOf(a)>=0)return;a==="set-cookie"?i[a]=(i[a]?i[a]:[]).concat([o]):i[a]=i[a]?i[a]+", "+o:o}}),i},Ti}var Pi,ms;function Um(){if(ms)return Pi;ms=1;var e=_e;return Pi=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),i;function a(o){var s=o;return n&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=a(window.location.href),function(s){var l=e.isString(s)?a(s):s;return l.protocol===i.protocol&&l.host===i.host}}():function(){return function(){return!0}}(),Pi}var Ri,ps;function ui(){if(ps)return Ri;ps=1;var e=kn,t=_e;function n(r){e.call(this,r==null?"canceled":r,e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(n,e,{__CANCEL__:!0}),Ri=n,Ri}var Ii,hs;function zm(){return hs||(hs=1,Ii=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}),Ii}var Ni,vs;function gs(){if(vs)return Ni;vs=1;var e=_e,t=Mm(),n=$m(),r=bu,i=Au,a=Bm(),o=Um(),s=xu,l=kn,u=ui(),f=zm();return Ni=function(m){return new Promise(function(C,P){var B=m.data,E=m.headers,_=m.responseType,g;function h(){m.cancelToken&&m.cancelToken.unsubscribe(g),m.signal&&m.signal.removeEventListener("abort",g)}e.isFormData(B)&&e.isStandardBrowserEnv()&&delete E["Content-Type"];var b=new XMLHttpRequest;if(m.auth){var $=m.auth.username||"",S=m.auth.password?unescape(encodeURIComponent(m.auth.password)):"";E.Authorization="Basic "+btoa($+":"+S)}var D=i(m.baseURL,m.url);b.open(m.method.toUpperCase(),r(D,m.params,m.paramsSerializer),!0),b.timeout=m.timeout;function q(){if(!!b){var ce="getAllResponseHeaders"in b?a(b.getAllResponseHeaders()):null,Ae=!_||_==="text"||_==="json"?b.responseText:b.response,Fe={data:Ae,status:b.status,statusText:b.statusText,headers:ce,config:m,request:b};t(function(de){C(de),h()},function(de){P(de),h()},Fe),b=null}}if("onloadend"in b?b.onloadend=q:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(q)},b.onabort=function(){!b||(P(new l("Request aborted",l.ECONNABORTED,m,b)),b=null)},b.onerror=function(){P(new l("Network Error",l.ERR_NETWORK,m,b,b)),b=null},b.ontimeout=function(){var Ae=m.timeout?"timeout of "+m.timeout+"ms exceeded":"timeout exceeded",Fe=m.transitional||s;m.timeoutErrorMessage&&(Ae=m.timeoutErrorMessage),P(new l(Ae,Fe.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,m,b)),b=null},e.isStandardBrowserEnv()){var re=(m.withCredentials||o(D))&&m.xsrfCookieName?n.read(m.xsrfCookieName):void 0;re&&(E[m.xsrfHeaderName]=re)}"setRequestHeader"in b&&e.forEach(E,function(Ae,Fe){typeof B>"u"&&Fe.toLowerCase()==="content-type"?delete E[Fe]:b.setRequestHeader(Fe,Ae)}),e.isUndefined(m.withCredentials)||(b.withCredentials=!!m.withCredentials),_&&_!=="json"&&(b.responseType=m.responseType),typeof m.onDownloadProgress=="function"&&b.addEventListener("progress",m.onDownloadProgress),typeof m.onUploadProgress=="function"&&b.upload&&b.upload.addEventListener("progress",m.onUploadProgress),(m.cancelToken||m.signal)&&(g=function(ce){!b||(P(!ce||ce&&ce.type?new u:ce),b.abort(),b=null)},m.cancelToken&&m.cancelToken.subscribe(g),m.signal&&(m.signal.aborted?g():m.signal.addEventListener("abort",g))),B||(B=null);var le=f(D);if(le&&["http","https","file"].indexOf(le)===-1){P(new l("Unsupported protocol "+le+":",l.ERR_BAD_REQUEST,m));return}b.send(B)})},Ni}var Mi,bs;function Hm(){return bs||(bs=1,Mi=null),Mi}var ve=_e,ys=Im,_s=kn,Wm=xu,qm=Eu,Km={"Content-Type":"application/x-www-form-urlencoded"};function ws(e,t){!ve.isUndefined(e)&&ve.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Ym(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=gs()),e}function Vm(e,t,n){if(ve.isString(e))try{return(t||JSON.parse)(e),ve.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var fi={transitional:Wm,adapter:Ym(),transformRequest:[function(t,n){if(ys(n,"Accept"),ys(n,"Content-Type"),ve.isFormData(t)||ve.isArrayBuffer(t)||ve.isBuffer(t)||ve.isStream(t)||ve.isFile(t)||ve.isBlob(t))return t;if(ve.isArrayBufferView(t))return t.buffer;if(ve.isURLSearchParams(t))return ws(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var r=ve.isObject(t),i=n&&n["Content-Type"],a;if((a=ve.isFileList(t))||r&&i==="multipart/form-data"){var o=this.env&&this.env.FormData;return qm(a?{"files[]":t}:t,o&&new o)}else if(r||i==="application/json")return ws(n,"application/json"),Vm(t);return t}],transformResponse:[function(t){var n=this.transitional||fi.transitional,r=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,a=!r&&this.responseType==="json";if(a||i&&ve.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(a)throw o.name==="SyntaxError"?_s.from(o,_s.ERR_BAD_RESPONSE,this,null,this.response):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Hm()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ve.forEach(["delete","get","head"],function(t){fi.headers[t]={}});ve.forEach(["post","put","patch"],function(t){fi.headers[t]=ve.merge(Km)});var io=fi,Xm=_e,Jm=io,Qm=function(t,n,r){var i=this||Jm;return Xm.forEach(r,function(o){t=o.call(i,t,n)}),t},$i,xs;function ku(){return xs||(xs=1,$i=function(t){return!!(t&&t.__CANCEL__)}),$i}var Es=_e,Fi=Qm,Gm=ku(),Zm=io,ep=ui();function Li(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ep}var tp=function(t){Li(t),t.headers=t.headers||{},t.data=Fi.call(t,t.data,t.headers,t.transformRequest),t.headers=Es.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),Es.forEach(["delete","get","head","post","put","patch","common"],function(i){delete t.headers[i]});var n=t.adapter||Zm.adapter;return n(t).then(function(i){return Li(t),i.data=Fi.call(t,i.data,i.headers,t.transformResponse),i},function(i){return Gm(i)||(Li(t),i&&i.response&&(i.response.data=Fi.call(t,i.response.data,i.response.headers,t.transformResponse))),Promise.reject(i)})},Re=_e,Cu=function(t,n){n=n||{};var r={};function i(f,d){return Re.isPlainObject(f)&&Re.isPlainObject(d)?Re.merge(f,d):Re.isPlainObject(d)?Re.merge({},d):Re.isArray(d)?d.slice():d}function a(f){if(Re.isUndefined(n[f])){if(!Re.isUndefined(t[f]))return i(void 0,t[f])}else return i(t[f],n[f])}function o(f){if(!Re.isUndefined(n[f]))return i(void 0,n[f])}function s(f){if(Re.isUndefined(n[f])){if(!Re.isUndefined(t[f]))return i(void 0,t[f])}else return i(void 0,n[f])}function l(f){if(f in n)return i(t[f],n[f]);if(f in t)return i(void 0,t[f])}var u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l};return Re.forEach(Object.keys(t).concat(Object.keys(n)),function(d){var m=u[d]||a,v=m(d);Re.isUndefined(v)&&m!==l||(r[d]=v)}),r},ji,As;function Ou(){return As||(As=1,ji={version:"0.27.2"}),ji}var np=Ou().version,yt=kn,ao={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){ao[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var ks={};ao.transitional=function(t,n,r){function i(a,o){return"[Axios v"+np+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return function(a,o,s){if(t===!1)throw new yt(i(o," has been removed"+(n?" in "+n:"")),yt.ERR_DEPRECATED);return n&&!ks[o]&&(ks[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,s):!0}};function rp(e,t,n){if(typeof e!="object")throw new yt("options must be an object",yt.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var a=r[i],o=t[a];if(o){var s=e[a],l=s===void 0||o(s,a,e);if(l!==!0)throw new yt("option "+a+" must be "+l,yt.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new yt("Unknown option "+a,yt.ERR_BAD_OPTION)}}var ip={assertOptions:rp,validators:ao},Su=_e,ap=bu,Cs=Pm,Os=tp,ci=Cu,op=Au,Tu=ip,en=Tu.validators;function _n(e){this.defaults=e,this.interceptors={request:new Cs,response:new Cs}}_n.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ci(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&Tu.assertOptions(r,{silentJSONParsing:en.transitional(en.boolean),forcedJSONParsing:en.transitional(en.boolean),clarifyTimeoutError:en.transitional(en.boolean)},!1);var i=[],a=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(a=a&&v.synchronous,i.unshift(v.fulfilled,v.rejected))});var o=[];this.interceptors.response.forEach(function(v){o.push(v.fulfilled,v.rejected)});var s;if(!a){var l=[Os,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(o),s=Promise.resolve(n);l.length;)s=s.then(l.shift(),l.shift());return s}for(var u=n;i.length;){var f=i.shift(),d=i.shift();try{u=f(u)}catch(m){d(m);break}}try{s=Os(u)}catch(m){return Promise.reject(m)}for(;o.length;)s=s.then(o.shift(),o.shift());return s};_n.prototype.getUri=function(t){t=ci(this.defaults,t);var n=op(t.baseURL,t.url);return ap(n,t.params,t.paramsSerializer)};Su.forEach(["delete","get","head","options"],function(t){_n.prototype[t]=function(n,r){return this.request(ci(r||{},{method:t,url:n,data:(r||{}).data}))}});Su.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,s){return this.request(ci(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}_n.prototype[t]=n(),_n.prototype[t+"Form"]=n(!0)});var sp=_n,Di,Ss;function lp(){if(Ss)return Di;Ss=1;var e=ui();function t(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var i=this;this.promise.then(function(a){if(!!i._listeners){var o,s=i._listeners.length;for(o=0;o<s;o++)i._listeners[o](a);i._listeners=null}}),this.promise.then=function(a){var o,s=new Promise(function(l){i.subscribe(l),o=l}).then(a);return s.cancel=function(){i.unsubscribe(o)},s},n(function(o){i.reason||(i.reason=new e(o),r(i.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]},t.prototype.unsubscribe=function(r){if(!!this._listeners){var i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}},t.source=function(){var r,i=new t(function(o){r=o});return{token:i,cancel:r}},Di=t,Di}var Bi,Ts;function up(){return Ts||(Ts=1,Bi=function(t){return function(r){return t.apply(null,r)}}),Bi}var Ui,Ps;function fp(){if(Ps)return Ui;Ps=1;var e=_e;return Ui=function(n){return e.isObject(n)&&n.isAxiosError===!0},Ui}var Rs=_e,cp=hu,Nr=sp,dp=Cu,mp=io;function Pu(e){var t=new Nr(e),n=cp(Nr.prototype.request,t);return Rs.extend(n,Nr.prototype,t),Rs.extend(n,t),n.create=function(i){return Pu(dp(e,i))},n}var Te=Pu(mp);Te.Axios=Nr;Te.CanceledError=ui();Te.CancelToken=lp();Te.isCancel=ku();Te.VERSION=Ou().version;Te.toFormData=Eu;Te.AxiosError=kn;Te.Cancel=Te.CanceledError;Te.all=function(t){return Promise.all(t)};Te.spread=up();Te.isAxiosError=fp();Ga.exports=Te;Ga.exports.default=Te;(function(e){e.exports=Ga.exports})(pu);const Is=sm(pu.exports),Ns={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},pp=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,hp=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/,tt=(e,t,n)=>{throw{name:"SyntaxError",message:e,at:t,text:n}};function vp(e,t,n){var B,E,_,g;const r={preferParseAsBigInt:Boolean((B=n==null?void 0:n.preferParseAsBigInt)!=null?B:!1),preferBigIntString:Boolean((E=n==null?void 0:n.preferBigIntString)!=null?E:!1),protoAction:String((_=n==null?void 0:n.protoAction)!=null?_:"error"),constructorAction:String((g=n==null?void 0:n.constructorAction)!=null?g:"error")};if(r.protoAction!="error"&&r.protoAction!="ignore"&&r.protoAction!="preserve")throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${r.protoAction}`);if(r.constructorAction!="error"&&r.constructorAction!="ignore"&&r.constructorAction!="preserve")throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${r.constructorAction}`);const i=String(e);let a=0,o=" ";const s=()=>{for(;o&&o<=" ";)l()},l=h=>(h&&h!==o&&tt(`Expected "${h}" instead of "${o}"`,o,i),o=i.charAt(a),a+=1,o),u=()=>{let h="";for(o=="-"&&(h="-",l("-"));o>="0"&&o<="9";)h+=o,l();if(o==".")for(h+=".";l()&&o>="0"&&o<="9";)h+=o;if(o=="e"||o=="E")for(h+=o,l(),(o=="-"||o=="+")&&(h+=o,l());o>="0"&&o<="9";)h+=o,l();const b=Number(h);return isFinite(b)||tt("Bad number",o,i),Number.isSafeInteger(b)?r.preferParseAsBigInt?BigInt(b):b:r.preferBigIntString?h:/[.eE]/.test(h)?b:BigInt(h)},f=()=>{let h="";if(o=='"'){let b=a;for(;l();){if(o=='"')return a-1>b&&(h+=i.substring(b,a-1)),l(),h;if(o=="\\"){if(a-1>b&&(h+=i.substring(b,a-1)),l(),o=="u"){let $=0;for(let S=0;S<4;S++){const D=parseInt(l(),16);if(!isFinite(D))break;$=$*16+D}h+=String.fromCharCode($)}else if(typeof Ns[o]=="string")h+=Ns[o];else break;b=a}}}tt("Bad string",o,i)},d=()=>{switch(o){case"t":return l("t"),l("r"),l("u"),l("e"),!0;case"f":return l("f"),l("a"),l("l"),l("s"),l("e"),!1;case"n":return l("n"),l("u"),l("l"),l("l"),null}tt(`Unexpected word '${o}'`,o,i)},m=()=>{const h=[];if(o=="["){if(l("["),s(),o=="]")return l("]"),h;for(;o;){if(h.push(C()),s(),o=="]")return l("]"),h;l(","),s()}}tt("Bad array",o,i)},v=()=>{const h={};if(o=="{"){if(l("{"),s(),o=="}")return l("}"),h;for(;o;){const b=f();if(s(),l(":"),pp.test(b)?r.protoAction=="error"?tt("Object contains forbidden prototype property",o,i):r.protoAction=="ignore"?C():h[b]=C():hp.test(b)?r.constructorAction=="error"?tt("Object contains forbidden constructor property",o,i):r.constructorAction=="ignore"?C():h[b]=C():h[b]=C(),s(),o=="}")return l("}"),h;l(","),s()}}tt("Bad object",o,i)},C=()=>{switch(s(),o){case"{":return v();case"[":return m();case'"':return f();case"-":return u();default:return o>="0"&&o<="9"?u():d()}},P=C();if(s(),o&&tt("Syntax error",o,i),typeof t=="function"){const h=(b,$)=>{const S=b[$];return S&&typeof S=="object"&&Object.keys(S).forEach(D=>{const q=h(S,D);q!==void 0?S[D]=q:delete S[D]}),t.call(b,$,S)};return h({"":P},"")}return P}const zi=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gp={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},Hi=e=>(zi.lastIndex=0,`"${zi.test(e)?e.replace(zi,n=>{var r;return(r=gp[n])!=null?r:"\\u"+n.charCodeAt(0).toString(16).padStart(4,"0")}):e}"`);function bp(e,t,n){let r="",i="";if(typeof n=="number"?i=" ".repeat(n):typeof n=="string"&&(i=n),t&&typeof t!="function"&&!(t instanceof Array))throw new Error("JSON.stringify");const a=(o,s)=>{let l,u=r,f,d=s[o];switch(typeof(d==null?void 0:d.toJSON)=="function"&&(d=d.toJSON(o)),typeof t=="function"&&(d=t.call(s,o,d)),typeof d){case"string":return Hi(d);case"number":return isFinite(d)?String(d):"null";case"boolean":case"null":case"bigint":return String(d);case"object":{if(!d)return"null";if(r+=i,f=[],d instanceof Array){l=d.length;for(let C=0;C<l;C++)f[C]=a(C,d)||"null";const v=f.length==0?"[]":r?`[
`+r+f.join(`,
`+r)+`
`+u+"]":"["+f.join(",")+"]";return r=u,v}if(t&&typeof t=="object"){l=t.length;for(let v=0;v<l;v++)if(typeof t[v]=="string"){const C=t[v],P=a(C,d);P&&f.push(Hi(C)+(r?": ":":")+P)}}else Object.keys(d).forEach(v=>{const C=a(v,d);C&&f.push(Hi(v)+(r?": ":":")+C)});const m=f.length==0?"{}":r?`{
`+r+f.join(`,
`+r)+`
`+u+"}":"{"+f.join(",")+"}";return r=u,m}}};return a("",{"":e})}const yp=(e,t)=>vp(bp(e),void 0,t),Ms=yp,Ru="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",_p=Ru.length,wp=(e=32)=>{let t="";for(let n=0;n<e;n++)t+=Ru.charAt(Math.floor(Math.random()*_p));return t},xp=wp,Ep=e=>e?"":void 0,jn=Ep,Ap=e=>e!==!1,kp=Ap,wo=class{constructor(t,n){Oe(this,"alert",wo.alert);Oe(this,"prefixDefault","./api");Oe(this,"parseURLAction",(t,n=this.prefixDefault)=>`${n}${n.endsWith("/")?"":"/"}${t}`);Oe(this,"parseResult",async t=>{if(t.success)return t.message&&this.alert&&await this.alert(t.message,t.messageTitle),t.data;throw t.message||"\u8BF7\u6C42\u4E0D\u6210\u529F"});Oe(this,"$get",async(t,n,r={})=>{var l;const i=Ms(Object.assign({params:n},r)),a=this.parseURLAction(t,i.prefix);delete i.prefix;const o=(l=i.return)!=null?l:"data-parsed";delete i.return;const s=await Is.get(a,i);return o=="response"?s:o=="raw"?s.data:this.parseResult(s.data)});Oe(this,"$post",async(t,n,r={},i=!1)=>{var u;const a=Ms(r);n instanceof FormData&&(typeof a.headers=="object"&&a.headers?a.headers["Content-Type"]="multipart/form-data":a.headers={"Content-Type":"multipart/form-data"});const o=this.parseURLAction(t,a.prefix);delete a.prefix;const s=(u=a.return)!=null?u:"data-parsed";delete a.return;const l=await Is.post(o,n,a);return s=="response"?l:s=="raw"?l.data:this.parseResult(l.data)});Oe(this,"$jump",async(t,n,r={})=>{const i=this.parseURLAction(t,r.prefix),a=new URLSearchParams;Object.entries(n).forEach(([o,s])=>a.append(o,typeof s=="object"?JSON.stringify(s):s)),window.location.href=`${i}?${a.toString()}`});t&&(this.alert=t),n&&(this.prefixDefault=n)}};let Mr=wo;Oe(Mr,"alert",(t,n)=>window.alert((n?n+`:
`:"")+t));const Kt=new Mr,zv=Kt.$get.bind(Kt);Kt.$post.bind(Kt);Kt.$jump.bind(Kt);function $s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$s(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$s(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wr(e){return Wr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wr(e)}function Cp(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fs(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Op(e,t,n){return t&&Fs(e.prototype,t),n&&Fs(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oo(e,t){return Tp(e)||Rp(e,t)||Iu(e,t)||Np()}function ar(e){return Sp(e)||Pp(e)||Iu(e)||Ip()}function Sp(e){if(Array.isArray(e))return da(e)}function Tp(e){if(Array.isArray(e))return e}function Pp(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rp(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Iu(e,t){if(!!e){if(typeof e=="string")return da(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return da(e,t)}}function da(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ip(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Np(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ls=function(){},so={},Nu={},Mu=null,$u={mark:Ls,measure:Ls};try{typeof window<"u"&&(so=window),typeof document<"u"&&(Nu=document),typeof MutationObserver<"u"&&(Mu=MutationObserver),typeof performance<"u"&&($u=performance)}catch{}var Mp=so.navigator||{},js=Mp.userAgent,Ds=js===void 0?"":js,kt=so,ne=Nu,Bs=Mu,_r=$u;kt.document;var pt=!!ne.documentElement&&!!ne.head&&typeof ne.addEventListener=="function"&&typeof ne.createElement=="function",Fu=~Ds.indexOf("MSIE")||~Ds.indexOf("Trident/"),wr,xr,Er,Ar,kr,ft="___FONT_AWESOME___",ma=16,Lu="fa",ju="svg-inline--fa",Yt="data-fa-i2svg",pa="data-fa-pseudo-element",$p="data-fa-pseudo-element-pending",lo="data-prefix",uo="data-icon",Us="fontawesome-i2svg",Fp="async",Lp=["HTML","HEAD","STYLE","SCRIPT"],Du=function(){try{return!0}catch{return!1}}(),te="classic",oe="sharp",fo=[te,oe];function or(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[te]}})}var Zn=or((wr={},he(wr,te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(wr,oe,{fa:"solid",fass:"solid","fa-solid":"solid"}),wr)),er=or((xr={},he(xr,te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(xr,oe,{solid:"fass"}),xr)),tr=or((Er={},he(Er,te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(Er,oe,{fass:"fa-solid"}),Er)),jp=or((Ar={},he(Ar,te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(Ar,oe,{"fa-solid":"fass"}),Ar)),Dp=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Bu="fa-layers-text",Bp=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Up=or((kr={},he(kr,te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(kr,oe,{900:"fass"}),kr)),Uu=[1,2,3,4,5,6,7,8,9,10],zp=Uu.concat([11,12,13,14,15,16,17,18,19,20]),Hp=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nr=new Set;Object.keys(er[te]).map(nr.add.bind(nr));Object.keys(er[oe]).map(nr.add.bind(nr));var Wp=[].concat(fo,ar(nr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Dt.GROUP,Dt.SWAP_OPACITY,Dt.PRIMARY,Dt.SECONDARY]).concat(Uu.map(function(e){return"".concat(e,"x")})).concat(zp.map(function(e){return"w-".concat(e)})),Dn=kt.FontAwesomeConfig||{};function qp(e){var t=ne.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Kp(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ne&&typeof ne.querySelector=="function"){var Yp=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yp.forEach(function(e){var t=oo(e,2),n=t[0],r=t[1],i=Kp(qp(n));i!=null&&(Dn[r]=i)})}var zu={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lu,replacementClass:ju,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dn.familyPrefix&&(Dn.cssPrefix=Dn.familyPrefix);var wn=I(I({},zu),Dn);wn.autoReplaceSvg||(wn.observeMutations=!1);var M={};Object.keys(zu).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){wn[e]=n,Bn.forEach(function(r){return r(M)})},get:function(){return wn[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){wn.cssPrefix=t,Bn.forEach(function(n){return n(M)})},get:function(){return wn.cssPrefix}});kt.FontAwesomeConfig=M;var Bn=[];function Vp(e){return Bn.push(e),function(){Bn.splice(Bn.indexOf(e),1)}}var vt=ma,Qe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xp(e){if(!(!e||!pt)){var t=ne.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ne.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return ne.head.insertBefore(t,r),e}}var Jp="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rr(){for(var e=12,t="";e-- >0;)t+=Jp[Math.random()*62|0];return t}function Cn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function co(e){return e.classList?Cn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Hu(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qp(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Hu(e[n]),'" ')},"").trim()}function di(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function mo(e){return e.size!==Qe.size||e.x!==Qe.x||e.y!==Qe.y||e.rotate!==Qe.rotate||e.flipX||e.flipY}function Gp(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Zp(e){var t=e.transform,n=e.width,r=n===void 0?ma:n,i=e.height,a=i===void 0?ma:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Fu?l+="translate(".concat(t.x/vt-r/2,"em, ").concat(t.y/vt-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/vt,"em), calc(-50% + ").concat(t.y/vt,"em)) "):l+="translate(".concat(t.x/vt,"em, ").concat(t.y/vt,"em) "),l+="scale(".concat(t.size/vt*(t.flipX?-1:1),", ").concat(t.size/vt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var eh=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Wu(){var e=Lu,t=ju,n=M.cssPrefix,r=M.replacementClass,i=eh;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var zs=!1;function Wi(){M.autoAddCss&&!zs&&(Xp(Wu()),zs=!0)}var th={mixout:function(){return{dom:{css:Wu,insertCss:Wi}}},hooks:function(){return{beforeDOMElementCreation:function(){Wi()},beforeI2svg:function(){Wi()}}}},ct=kt||{};ct[ft]||(ct[ft]={});ct[ft].styles||(ct[ft].styles={});ct[ft].hooks||(ct[ft].hooks={});ct[ft].shims||(ct[ft].shims=[]);var ze=ct[ft],qu=[],nh=function e(){ne.removeEventListener("DOMContentLoaded",e),qr=1,qu.map(function(t){return t()})},qr=!1;pt&&(qr=(ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ne.readyState),qr||ne.addEventListener("DOMContentLoaded",nh));function rh(e){!pt||(qr?setTimeout(e,0):qu.push(e))}function sr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Hu(e):"<".concat(t," ").concat(Qp(r),">").concat(a.map(sr).join(""),"</").concat(t,">")}function Hs(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ih=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},qi=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?ih(n,i):n,l,u,f;for(r===void 0?(l=1,f=t[a[0]]):(l=0,f=r);l<o;l++)u=a[l],f=s(f,t[u],u,t);return f};function ah(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ha(e){var t=ah(e);return t.length===1?t[0].toString(16):null}function oh(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ws(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function va(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ws(t);typeof ze.hooks.addPack=="function"&&!i?ze.hooks.addPack(e,Ws(t)):ze.styles[e]=I(I({},ze.styles[e]||{}),a),e==="fas"&&va("fa",t)}var Cr,Or,Sr,on=ze.styles,sh=ze.shims,lh=(Cr={},he(Cr,te,Object.values(tr[te])),he(Cr,oe,Object.values(tr[oe])),Cr),po=null,Ku={},Yu={},Vu={},Xu={},Ju={},uh=(Or={},he(Or,te,Object.keys(Zn[te])),he(Or,oe,Object.keys(Zn[oe])),Or);function fh(e){return~Wp.indexOf(e)}function ch(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!fh(i)?i:null}var Qu=function(){var t=function(a){return qi(on,function(o,s,l){return o[l]=qi(s,a,{}),o},{})};Ku=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Yu=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),Ju=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in on||M.autoFetchSvg,r=qi(sh,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Vu=r.names,Xu=r.unicodes,po=mi(M.styleDefault,{family:M.familyDefault})};Vp(function(e){po=mi(e.styleDefault,{family:M.familyDefault})});Qu();function ho(e,t){return(Ku[e]||{})[t]}function dh(e,t){return(Yu[e]||{})[t]}function Bt(e,t){return(Ju[e]||{})[t]}function Gu(e){return Vu[e]||{prefix:null,iconName:null}}function mh(e){var t=Xu[e],n=ho("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ct(){return po}var vo=function(){return{prefix:null,iconName:null,rest:[]}};function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?te:n,i=Zn[r][e],a=er[r][e]||er[r][i],o=e in ze.styles?e:null;return a||o||null}var qs=(Sr={},he(Sr,te,Object.keys(tr[te])),he(Sr,oe,Object.keys(tr[oe])),Sr);function pi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},he(t,te,"".concat(M.cssPrefix,"-").concat(te)),he(t,oe,"".concat(M.cssPrefix,"-").concat(oe)),t),o=null,s=te;(e.includes(a[te])||e.some(function(u){return qs[te].includes(u)}))&&(s=te),(e.includes(a[oe])||e.some(function(u){return qs[oe].includes(u)}))&&(s=oe);var l=e.reduce(function(u,f){var d=ch(M.cssPrefix,f);if(on[f]?(f=lh[s].includes(f)?jp[s][f]:f,o=f,u.prefix=f):uh[s].indexOf(f)>-1?(o=f,u.prefix=mi(f,{family:s})):d?u.iconName=d:f!==M.replacementClass&&f!==a[te]&&f!==a[oe]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var m=o==="fa"?Gu(u.iconName):{},v=Bt(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||v||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!on.far&&on.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},vo());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(on.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Bt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ct()||"fas"),l}var ph=function(){function e(){Cp(this,e),this.definitions={}}return Op(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=I(I({},n.definitions[s]||{}),o[s]),va(s,o[s]);var l=tr[te][s];l&&va(l,o[s]),Qu()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),e}(),Ks=[],sn={},pn={},hh=Object.keys(pn);function vh(e,t){var n=t.mixoutsTo;return Ks=e,sn={},Object.keys(pn).forEach(function(r){hh.indexOf(r)===-1&&delete pn[r]}),Ks.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Wr(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){sn[o]||(sn[o]=[]),sn[o].push(a[o])})}r.provides&&r.provides(pn)}),n}function ga(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=sn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=sn[e]||[];i.forEach(function(a){a.apply(null,n)})}function dt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return pn[e]?pn[e].apply(null,t):void 0}function ba(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ct();if(!!t)return t=Bt(n,t)||t,Hs(Zu.definitions,n,t)||Hs(ze.styles,n,t)}var Zu=new ph,gh=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Vt("noAuto")},bh={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pt?(Vt("beforeI2svg",t),dt("pseudoElements2svg",t),dt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,rh(function(){_h({autoReplaceSvgRoot:n}),Vt("watch",t)})}},yh={icon:function(t){if(t===null)return null;if(Wr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Bt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=mi(t[0]);return{prefix:r,iconName:Bt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Dp))){var i=pi(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ct(),iconName:Bt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Ct();return{prefix:a,iconName:Bt(a,t)||t}}}},Ne={noAuto:gh,config:M,dom:bh,parse:yh,library:Zu,findIconDefinition:ba,toHtml:sr},_h=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ne:n;(Object.keys(ze.styles).length>0||M.autoFetchSvg)&&pt&&M.autoReplaceSvg&&Ne.dom.i2svg({node:r})};function hi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!pt){var r=ne.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function wh(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(mo(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=di(I(I({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function xh(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:o}),children:r}]}]}function go(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,d=e.extra,m=e.watchable,v=m===void 0?!1:m,C=r.found?r:n,P=C.width,B=C.height,E=i==="fak",_=[M.replacementClass,a?"".concat(M.cssPrefix,"-").concat(a):""].filter(function(q){return d.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(d.classes).join(" "),g={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(B)})},h=E&&!~d.classes.indexOf("fa-fw")?{width:"".concat(P/B*16*.0625,"em")}:{};v&&(g.attributes[Yt]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||rr())},children:[l]}),delete g.attributes.title);var b=I(I({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:I(I({},h),d.styles)}),$=r.found&&n.found?dt("generateAbstractMask",b)||{children:[],attributes:{}}:dt("generateAbstractIcon",b)||{children:[],attributes:{}},S=$.children,D=$.attributes;return b.children=S,b.attributes=D,s?xh(b):wh(b)}function Ys(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=I(I(I({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Yt]="");var f=I({},o.styles);mo(i)&&(f.transform=Zp({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=di(f);d.length>0&&(u.style=d);var m=[];return m.push({tag:"span",attributes:u,children:[t]}),a&&m.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),m}function Eh(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=di(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ki=ze.styles;function ya(e){var t=e[0],n=e[1],r=e.slice(4),i=oo(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Ah={found:!1,width:512,height:512};function kh(e,t){!Du&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _a(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=Ct()),new Promise(function(r,i){if(dt("missingIconAbstract"),n==="fa"){var a=Gu(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Ki[t]&&Ki[t][e]){var o=Ki[t][e];return r(ya(o))}kh(e,t),r(I(I({},Ah),{},{icon:M.showMissingIcons&&e?dt("missingIconAbstract")||{}:{}}))})}var Vs=function(){},wa=M.measurePerformance&&_r&&_r.mark&&_r.measure?_r:{mark:Vs,measure:Vs},In='FA "6.2.1"',Ch=function(t){return wa.mark("".concat(In," ").concat(t," begins")),function(){return ef(t)}},ef=function(t){wa.mark("".concat(In," ").concat(t," ends")),wa.measure("".concat(In," ").concat(t),"".concat(In," ").concat(t," begins"),"".concat(In," ").concat(t," ends"))},bo={begin:Ch,end:ef},$r=function(){};function Xs(e){var t=e.getAttribute?e.getAttribute(Yt):null;return typeof t=="string"}function Oh(e){var t=e.getAttribute?e.getAttribute(lo):null,n=e.getAttribute?e.getAttribute(uo):null;return t&&n}function Sh(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Th(){if(M.autoReplaceSvg===!0)return Fr.replace;var e=Fr[M.autoReplaceSvg];return e||Fr.replace}function Ph(e){return ne.createElementNS("http://www.w3.org/2000/svg",e)}function Rh(e){return ne.createElement(e)}function tf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ph:Rh:n;if(typeof e=="string")return ne.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(tf(o,{ceFn:r}))}),i}function Ih(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(tf(i),n)}),n.getAttribute(Yt)===null&&M.keepOriginalSource){var r=ne.createComment(Ih(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~co(n).indexOf(M.replacementClass))return Fr.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return sr(s)}).join(`
`);n.setAttribute(Yt,""),n.innerHTML=o}};function Js(e){e()}function nf(e,t){var n=typeof t=="function"?t:$r;if(e.length===0)n();else{var r=Js;M.mutateApproach===Fp&&(r=kt.requestAnimationFrame||Js),r(function(){var i=Th(),a=bo.begin("mutate");e.map(i),a(),n()})}}var yo=!1;function rf(){yo=!0}function xa(){yo=!1}var Kr=null;function Qs(e){if(!!Bs&&!!M.observeMutations){var t=e.treeCallback,n=t===void 0?$r:t,r=e.nodeCallback,i=r===void 0?$r:r,a=e.pseudoElementsCallback,o=a===void 0?$r:a,s=e.observeMutationsRoot,l=s===void 0?ne:s;Kr=new Bs(function(u){if(!yo){var f=Ct();Cn(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Xs(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Xs(d.target)&&~Hp.indexOf(d.attributeName))if(d.attributeName==="class"&&Oh(d.target)){var m=pi(co(d.target)),v=m.prefix,C=m.iconName;d.target.setAttribute(lo,v||f),C&&d.target.setAttribute(uo,C)}else Sh(d.target)&&i(d.target)})}}),pt&&Kr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nh(){!Kr||Kr.disconnect()}function Mh(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function $h(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=pi(co(e));return i.prefix||(i.prefix=Ct()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=dh(i.prefix,e.innerText)||ho(i.prefix,ha(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Fh(e){var t=Cn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||rr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Lh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Qe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$h(e),r=n.iconName,i=n.prefix,a=n.rest,o=Fh(e),s=ga("parseNodeAttributes",{},e),l=t.styleParser?Mh(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Qe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var jh=ze.styles;function af(e){var t=M.autoReplaceSvg==="nest"?Gs(e,{styleParser:!1}):Gs(e);return~t.extra.classes.indexOf(Bu)?dt("generateLayersText",e,t):dt("generateSvgReplacementMutation",e,t)}var Ot=new Set;fo.map(function(e){Ot.add("fa-".concat(e))});Object.keys(Zn[te]).map(Ot.add.bind(Ot));Object.keys(Zn[oe]).map(Ot.add.bind(Ot));Ot=ar(Ot);function Zs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pt)return Promise.resolve();var n=ne.documentElement.classList,r=function(d){return n.add("".concat(Us,"-").concat(d))},i=function(d){return n.remove("".concat(Us,"-").concat(d))},a=M.autoFetchSvg?Ot:fo.map(function(f){return"fa-".concat(f)}).concat(Object.keys(jh));a.includes("fa")||a.push("fa");var o=[".".concat(Bu,":not([").concat(Yt,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(Yt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Cn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=bo.begin("onTree"),u=s.reduce(function(f,d){try{var m=af(d);m&&f.push(m)}catch(v){Du||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(m){nf(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(m){l(),d(m)})})}function Dh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;af(e).then(function(n){n&&nf([n],t)})}function Bh(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ba(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ba(i||{})),e(r,I(I({},n),{},{mask:i}))}}var Uh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Qe:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,d=n.title,m=d===void 0?null:d,v=n.titleId,C=v===void 0?null:v,P=n.classes,B=P===void 0?[]:P,E=n.attributes,_=E===void 0?{}:E,g=n.styles,h=g===void 0?{}:g;if(!!t){var b=t.prefix,$=t.iconName,S=t.icon;return hi(I({type:"icon"},t),function(){return Vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(m?_["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(C||rr()):(_["aria-hidden"]="true",_.focusable="false")),go({icons:{main:ya(S),mask:l?ya(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:$,transform:I(I({},Qe),i),symbol:o,title:m,maskId:f,titleId:C,extra:{attributes:_,styles:h,classes:B}})})}},zh={mixout:function(){return{icon:Bh(Uh)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zs,n.nodeCallback=Dh,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ne:r,a=n.callback,o=a===void 0?function(){}:a;return Zs(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,f=r.mask,d=r.maskId,m=r.extra;return new Promise(function(v,C){Promise.all([_a(i,s),f.iconName?_a(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var B=oo(P,2),E=B[0],_=B[1];v([n,go({icons:{main:E,mask:_},prefix:s,iconName:i,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:m,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=di(s);l.length>0&&(i.style=l);var u;return mo(o)&&(u=dt("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Hh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return hi({type:"layer"},function(){Vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(ar(a)).join(" ")},children:o}]})}}}},Wh={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return hi({type:"counter",content:n},function(){return Vt("beforeDOMElementCreation",{content:n,params:r}),Eh({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(ar(s))}})})}}}},qh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Qe:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,m=r.styles,v=m===void 0?{}:m;return hi({type:"text",content:n},function(){return Vt("beforeDOMElementCreation",{content:n,params:r}),Ys({content:n,transform:I(I({},Qe),a),title:s,extra:{attributes:d,styles:v,classes:["".concat(M.cssPrefix,"-layers-text")].concat(ar(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(Fu){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ys({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Kh=new RegExp('"',"ug"),el=[1105920,1112319];function Yh(e){var t=e.replace(Kh,""),n=oh(t,0),r=n>=el[0]&&n<=el[1],i=t.length===2?t[0]===t[1]:!1;return{value:ha(i?t[0]:t),isSecondary:r||i}}function tl(e,t){var n="".concat($p).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Cn(e.children),o=a.filter(function(S){return S.getAttribute(pa)===t})[0],s=kt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Bp),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),m=~["Sharp"].indexOf(l[2])?oe:te,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?er[m][l[2].toLowerCase()]:Up[m][u],C=Yh(d),P=C.value,B=C.isSecondary,E=l[0].startsWith("FontAwesome"),_=ho(v,P),g=_;if(E){var h=mh(P);h.iconName&&h.prefix&&(_=h.iconName,v=h.prefix)}if(_&&!B&&(!o||o.getAttribute(lo)!==v||o.getAttribute(uo)!==g)){e.setAttribute(n,g),o&&e.removeChild(o);var b=Lh(),$=b.extra;$.attributes[pa]=t,_a(_,v).then(function(S){var D=go(I(I({},b),{},{icons:{main:S,mask:vo()},prefix:v,iconName:g,extra:$,watchable:!0})),q=ne.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=D.map(function(re){return sr(re)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Vh(e){return Promise.all([tl(e,"::before"),tl(e,"::after")])}function Xh(e){return e.parentNode!==document.head&&!~Lp.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function nl(e){if(!!pt)return new Promise(function(t,n){var r=Cn(e.querySelectorAll("*")).filter(Xh).map(Vh),i=bo.begin("searchPseudoElements");rf(),Promise.all(r).then(function(){i(),xa(),t()}).catch(function(){i(),xa(),n()})})}var Jh={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=nl,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ne:r;M.searchPseudoElements&&nl(i)}}},rl=!1,Qh={mixout:function(){return{dom:{unwatch:function(){rf(),rl=!0}}}},hooks:function(){return{bootstrap:function(){Qs(ga("mutationObserverCallbacks",{}))},noAuto:function(){Nh()},watch:function(n){var r=n.observeMutationsRoot;rl?xa():Qs(ga("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},il=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Gh={mixout:function(){return{parse:{transform:function(n){return il(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=il(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:m};return{tag:"g",attributes:I({},v.outer),children:[{tag:"g",attributes:I({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),v.path)}]}]}}}},Yi={x:0,y:0,width:"100%",height:"100%"};function al(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zh(e){return e.tag==="g"?e.children:[e]}var ev={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?pi(i.split(" ").map(function(o){return o.trim()})):vo();return a.prefix||(a.prefix=Ct()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,f=a.icon,d=o.width,m=o.icon,v=Gp({transform:l,containerWidth:d,iconWidth:u}),C={tag:"rect",attributes:I(I({},Yi),{},{fill:"white"})},P=f.children?{children:f.children.map(al)}:{},B={tag:"g",attributes:I({},v.inner),children:[al(I({tag:f.tag,attributes:I(I({},f.attributes),v.path)},P))]},E={tag:"g",attributes:I({},v.outer),children:[B]},_="mask-".concat(s||rr()),g="clip-".concat(s||rr()),h={tag:"mask",attributes:I(I({},Yi),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,E]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:Zh(m)},h]};return r.push(b,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(_,")")},Yi)}),{children:r,attributes:i}}}},tv={provides:function(t){var n=!1;kt.matchMedia&&(n=kt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=I(I({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:I(I({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},nv={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},rv=[th,zh,Hh,Wh,qh,Jh,Qh,Gh,ev,tv,nv];vh(rv,{mixoutsTo:Ne});Ne.noAuto;var of=Ne.config;Ne.library;Ne.dom;var Yr=Ne.parse;Ne.findIconDefinition;Ne.toHtml;var iv=Ne.icon;Ne.layer;var av=Ne.text;Ne.counter;function ol(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ol(Object(n),!0).forEach(function(r){Se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ol(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vr(e){return Vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vr(e)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ov(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function sv(e,t){if(e==null)return{};var n=ov(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Ea(e){return lv(e)||uv(e)||fv(e)||cv()}function lv(e){if(Array.isArray(e))return Aa(e)}function uv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fv(e,t){if(!!e){if(typeof e=="string")return Aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Aa(e,t)}}function Aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sf={exports:{}};(function(e){(function(t){var n=function(E,_,g){if(!u(_)||d(_)||m(_)||v(_)||l(_))return _;var h,b=0,$=0;if(f(_))for(h=[],$=_.length;b<$;b++)h.push(n(E,_[b],g));else{h={};for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(h[E(S,g)]=n(E,_[S],g))}return h},r=function(E,_){_=_||{};var g=_.separator||"_",h=_.split||/(?=[A-Z])/;return E.split(h).join(g)},i=function(E){return C(E)?E:(E=E.replace(/[\-_\s]+(.)?/g,function(_,g){return g?g.toUpperCase():""}),E.substr(0,1).toLowerCase()+E.substr(1))},a=function(E){var _=i(E);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(E,_){return r(E,_).toLowerCase()},s=Object.prototype.toString,l=function(E){return typeof E=="function"},u=function(E){return E===Object(E)},f=function(E){return s.call(E)=="[object Array]"},d=function(E){return s.call(E)=="[object Date]"},m=function(E){return s.call(E)=="[object RegExp]"},v=function(E){return s.call(E)=="[object Boolean]"},C=function(E){return E=E-0,E===E},P=function(E,_){var g=_&&"process"in _?_.process:_;return typeof g!="function"?E:function(h,b){return g(h,E,b)}},B={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(E,_){return n(P(i,_),E)},decamelizeKeys:function(E,_){return n(P(o,_),E,_)},pascalizeKeys:function(E,_){return n(P(a,_),E)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=B:t.humps=B})(dv)})(sf);var mv=sf.exports,pv=["class","style"];function hv(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=mv.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function vv(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function _o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return _o(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.class=vv(f);break;case"style":l.style=hv(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=sv(n,pv);return Qa(e.tag,Be(Be(Be({},t),{},{class:i.class,style:Be(Be({},i.style),o)},i.attrs),s),r)}var lf=!1;try{lf=!0}catch{}function gv(){if(!lf&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Un(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Se({},e,t):{}}function bv(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Se(t,"fa-".concat(e.size),e.size!==null),Se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Se(t,"fa-pull-".concat(e.pull),e.pull!==null),Se(t,"fa-swap-opacity",e.swapOpacity),Se(t,"fa-bounce",e.bounce),Se(t,"fa-shake",e.shake),Se(t,"fa-beat",e.beat),Se(t,"fa-fade",e.fade),Se(t,"fa-beat-fade",e.beatFade),Se(t,"fa-flash",e.flash),Se(t,"fa-spin-pulse",e.spinPulse),Se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function sl(e){if(e&&Vr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Yr.icon)return Yr.icon(e);if(e===null)return null;if(Vr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ka=ri({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=we(function(){return sl(t.icon)}),a=we(function(){return Un("classes",bv(t))}),o=we(function(){return Un("transform",typeof t.transform=="string"?Yr.transform(t.transform):t.transform)}),s=we(function(){return Un("mask",sl(t.mask))}),l=we(function(){return iv(i.value,Be(Be(Be(Be({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ge(l,function(f){if(!f)return gv("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var u=we(function(){return l.value?_o(l.value.abstract[0],{},r):null});return function(){return u.value}}});ri({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=of.familyPrefix,a=we(function(){return["".concat(i,"-layers")].concat(Ea(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Qa("div",{class:a.value},r.default?r.default():[])}}});ri({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=of.familyPrefix,a=we(function(){return Un("classes",[].concat(Ea(t.counter?["".concat(i,"-layers-counter")]:[]),Ea(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),o=we(function(){return Un("transform",typeof t.transform=="string"?Yr.transform(t.transform):t.transform)}),s=we(function(){var u=av(t.value.toString(),Be(Be({},o.value),a.value)),f=u.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=we(function(){return _o(s.value,{},r)});return function(){return l.value}}});const vi=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},yv=["white"],_v={__name:"Click",props:{text:{type:String,default:""},white:{type:[Boolean,String],default:!1},icon:{type:[String,Array,Object],default:null},spin:{type:[Boolean],default:!1}},setup(e){return(t,n)=>(W(),at("comp-click",{white:ie(jn)(e.white)},[e.icon?(W(),Q(ie(ka),{key:0,class:"inline icon",icon:e.icon,spin:e.spin},null,8,["icon","spin"])):me("",!0),ou(lt(e.icon?" ":"")+lt(e.text),1)],8,yv))}},Vi=vi(_v,[["__scopeId","data-v-9f02317f"]]);const wv=["color"],Ca=G(null),Oa=G(null),tn=G(0),Me=G({text:null,value:null,reverse:!0}),nt=G({text:null,value:null,reverse:!0}),rt=G({text:null,value:null,reverse:!0}),Nn=G(null),Lr=G(!1),jr=G(null),xv=(e="",t="\u63D0\u793A",n=0,r={},i={},a={},o)=>(Ca.value=String(t),Oa.value=String(e),Me.value=r,nt.value=i,rt.value=a,tn.value=n,Nn.value=o,new Promise(s=>{jr.value=s,Lr.value=!0})),Sa=(e,t="\u63D0\u793A",n={text:"\u786E\u5B9A",value:!0},r,i,a=1,o)=>xv(e,t,a,n,r,i,o),Ev=async e=>{const t=cu(kv),n=document.createElement("div");n.id="alert",t.mixin({data(){return{brop:jn}}}),document.body.appendChild(n),t.mount(n)},Av={__name:"index",setup(e){const t=G(!1),n=G(0),r=G(0),i=we(()=>{var m,v;return(m=Nn.value)!=null&&m.startsWith("$")?!1:(v=Nn.value)!=null?v:!1}),a=we(()=>{var m;return(m=Nn.value)!=null&&m.startsWith("$")?Nn.value.replace("$","").toLowerCase():null}),o=G(!1),s=G(null);Ge(Lr,m=>{m&&(setTimeout(()=>{n.value=(window.innerHeight-s.value.clientHeight)/2,r.value=(window.innerWidth-s.value.clientWidth)/2,setTimeout(()=>s.value.querySelector("comp-click:last-child").focus(),0)},0),o.value=!0)});const l=(m,v=!1)=>{if(v)if(tn.value)tn.value==1?m=Me.value:tn.value==2?m=nt.value:tn.value==3&&(m=rt.value);else return;if(Ca.value=null,Oa.value=null,tn.value=0,Me.value={text:null,value:null,reverse:!0},nt.value={text:null,value:null,reverse:!0},rt.value={text:null,value:null,reverse:!0},Lr.value=!1,o.value=!1,typeof jr.value=="function")try{jr.value(m)}finally{jr.value=null}},u=m=>{m.buttons==1&&(n.value+=m.movementY,r.value+=m.movementX)},f=()=>t.value=!0,d=()=>t.value=!1;return(m,v)=>(W(),at(pe,null,[Lt(Ve("comp-mask",null,null,512),[[rn,o.value]]),Lt(Ve("comp-alert",{ref_key:"win",ref:s,style:hn({top:n.value+"px",left:r.value+"px",borderColor:ie(i)}),color:ie(a)},[Ve("p-title",{style:hn({cursor:t.value?"move":"default"}),onMousemove:u,onMousedown:f,onMouseup:d,onMouseout:d},[Ve("p-title-text",null,lt(Ca.value||"\u63D0\u793A"),1)],36),Ve("p-body",null,[Ve("p-body-content",null,lt(Oa.value||""),1),Ve("p-body-clicks",null,[rt.value&&rt.value.text?(W(),Q(ie(Vi),{key:0,tabindex:"1403",reverse:ie(jn)(rt.value.reverse),text:rt.value.text,color:ie(a),onClick:v[0]||(v[0]=C=>l(rt.value.value)),onKeydown:[v[1]||(v[1]=Nt(ot(C=>l(rt.value.value),["prevent"]),["enter","space"])),v[2]||(v[2]=Nt(ot(C=>l(Me.value.value,!0),["prevent"]),["esc"]))]},null,8,["reverse","text","color"])):me("",!0),nt.value&&nt.value.text?(W(),Q(ie(Vi),{key:1,tabindex:"1402",reverse:ie(jn)(nt.value.reverse),text:nt.value.text,color:ie(a),onClick:v[3]||(v[3]=C=>l(nt.value.value)),onKeydown:[v[4]||(v[4]=Nt(ot(C=>l(nt.value.value),["prevent"]),["enter","space"])),v[5]||(v[5]=Nt(ot(C=>l(Me.value.value,!0),["prevent"]),["esc"]))]},null,8,["reverse","text","color"])):me("",!0),Me.value&&Me.value.text?(W(),Q(ie(Vi),{key:2,tabindex:"1401",reverse:ie(jn)(Me.value.reverse),text:Me.value.text,color:ie(a),onClick:v[6]||(v[6]=C=>l(Me.value.value)),onKeydown:[v[7]||(v[7]=Nt(ot(C=>l(Me.value.value),["prevent"]),["enter","space"])),v[8]||(v[8]=Nt(ot(C=>l(Me.value.value,!0),["prevent"]),["esc"]))]},null,8,["reverse","text","color"])):me("",!0)])])],12,wv),[[rn,Lr.value]])],64))}},kv=vi(Av,[["__scopeId","data-v-c012b347"]]),Cv="modulepreload",Ov=function(e,t){return new URL(e,t).href},ll={},Sv=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=Ov(a,r),a in ll)return;ll[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let f=i.length-1;f>=0;f--){const d=i[f];if(d.href===a&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Cv,o||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),o)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},gt=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((r,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function Tv(e){const t=n=>async r=>{if(e.component(r))return n.value=r;try{const i=String(r).split("-");try{if(i.length==2)e.component(r,(await gt(Object.assign({"../nuth/code.vue":()=>Sv(()=>import("./code.62a6331d.js"),["./code.62a6331d.js","./code.1285a5ec.css"],import.meta.url)}),`../${i[0]}/${i[1]}.vue`)).default);else if(i.length==3)e.component(r,(await gt(Object.assign({}),`../${i[0]}/${i[1]}/${i[2]}.vue`)).default);else if(i.length==4)e.component(r,(await gt(Object.assign({}),`../${i[0]}/${i[1]}/${i[2]}/${i[3]}.vue`)).default);else if(i.length==5)e.component(r,(await gt(Object.assign({}),`../${i[0]}/${i[1]}/${i[2]}/${i[3]}/${i[4]}.vue`)).default);else throw TypeError(`\u6A21\u5757\u6DF1\u5EA6\u4E0D\u4E3A[2,3,4,5]: ${r}`)}catch(a){if(!a.message.startsWith("Unknown variable dynamic import"))throw Sa(`\u52A0\u8F7D\u6A21\u5757\u5931\u8D25: ${r}, ${a.message||a}`,"\u52A0\u8F7D\u6A21\u5757\u5931\u8D25"),a;if(i.length==2)e.component(r,(await gt(Object.assign({}),`../${i[0]}/${i[1]}/index.vue`)).default);else if(i.length==3)e.component(r,(await gt(Object.assign({}),`../${i[0]}/${i[1]}/${i[2]}/index.vue`)).default);else if(i.length==4)e.component(r,(await gt(Object.assign({}),`../${i[0]}/${i[1]}/${i[2]}/${i[3]}/index.vue`)).default);else if(i.length==5)e.component(r,(await gt(Object.assign({}),`../${i[0]}/${i[1]}/${i[2]}/${i[3]}/${i[4]}/index.vue`)).default);else throw TypeError(`\u6A21\u5757\u6DF1\u5EA6\u4E0D\u4E3A[2,3,4,5]: ${r}`)}n.value=r}catch(i){throw Sa(`\u52A0\u8F7D\u6A21\u5757\u5931\u8D25: ${r}, ${i.message||i}`,"\u52A0\u8F7D\u6A21\u5757\u5931\u8D25"),i}};e.provide("load-module",t)}const Pv=document.documentElement,uf=(e=Pv)=>new Proxy(Object.freeze({scope:e,new:uf,get(t){return this.scope.style.getPropertyValue(`--${t}`)},set(t,n){return this.scope.style.setProperty(`--${t}`,n)},del(t){return this.scope.style.removeProperty(`--${t}`)},setAll(t){for(const n in t)this.set(n,t[n])}}),{get(t,n){return n=="$"?t:t.get(n)},set(t,n,r){return t.set(n,r),!0},deleteProperty(t,n){return t.del(n)}}),zn=uf();class Rv{constructor(t,n,r,i={},a,o){const{typeList:s,icon:l,title:u,header:f}=i;this.id=t,this.module=n,this.typeTab=r,this.paramsTab=i,this.typeList=s!=null?s:n,this.icon=l,this.title=u,this.header=f,this.isHidden=a!=null?a:!1,this.info={},this.params=o!=null?o:{}}get typesTab(){var t,n;return(n=(t=this.typeTab)==null?void 0:t.split("|"))!=null?n:[]}}class Iv{constructor(t){Oe(this,"map",{});Oe(this,"key","");Oe(this,"params",[]);Oe(this,"histories",[]);Oe(this,"changers",{});return this.modulePre=t,Zr(this)}get now(){return this.map[this.key]}get list(){return Object.values(this.map)}add(t,n="icon-title",r={},i="",...a){const o=xp(),s=i.split("|"),l=s.includes("once"),u=s.includes("hidden"),f=s.includes("delay"),d=(l?Object.values(this.map).find(m=>m.typeList==r.typeList):void 0)||(this.map[o]=new Rv(o,t,n,r,u));return d&&!f&&this.change(d,...a),f&&(d.paramsDelay=a),d}del(t){var o;const n=this.now,r=this.map,i=Object.keys(r),a=i.indexOf(t.id);if(delete this.map[t.id],n===t){this.histories.pop();const s=this.histories.pop();s?this.change(s):this.change(r[(o=i[a+1])!=null?o:i[a-1]])}this.histories=this.histories.filter(s=>s!==t).filter((s,l,u)=>s!==u[l-1])}change(t,...n){var r;this.key!=t.id&&(this.key=t.id,this.modulePre=t.module,t.params=(r=t.paramsDelay)!=null?r:n,delete t.paramsDelay,this.histories[this.histories.length-1]!==t&&this.histories.push(t),this.emitChanged())}emitChanged(){var t;((t=this.changers[this.now.typeList])!=null?t:[]).forEach(n=>{try{n(this.now)}catch{}})}addChanger(t,n){var r;((r=this.changers[t])!=null?r:this.changers[t]=[]).push(n)}}const Nv=["now","tabindex","onClick","onKeydown"],Mv={key:2},Ta=G(null),nn=new Iv,$v={__name:"index",props:{hidden:{type:[String,Boolean],default:!1}},setup(e){const t=e,n=we(()=>kp(t.hidden));Ge(n,a=>zn.widthSidebar=zn.widthSidebar?zn.widthSidebar:a?"0rem":"7rem",{immediate:!0});const r=Mn("load-module")(Ta),i=G("");return Ge(i,r),nn.modulePre=i,(a,o)=>{const s=$c("tip");return ie(n)?me("",!0):(W(),at("comp-sidebar",{key:0,ref:"domSidebar",onContextmenu:o[0]||(o[0]=ot((...l)=>a.showMenuSidebar&&a.showMenuSidebar(...l),["self","prevent"]))},[Fc(a.$slots,"buttons-before",{},void 0,!0),(W(!0),at(pe,null,ta(ie(nn).list,(l,u)=>(W(),at(pe,{key:`tab-${l==null?void 0:l.id}`},[l.isHidden?me("",!0):Lt((W(),at("p-tab",{key:0,now:a.brop(ie(nn).now===l),tabindex:100+u,onClick:f=>ie(nn).change(l),onKeydown:Nt(f=>ie(nn).change(l),["enter","space"])},[l.typesTab.includes("icon")&&l.icon?(W(),Q(ie(ka),{key:0,icon:l.icon},null,8,["icon"])):me("",!0),l.typesTab.includes("icon-corn")&&l.icon?(W(),Q(ie(ka),{key:1,icon:l.icon,corn:""},null,8,["icon"])):me("",!0),l.typesTab.includes("title")&&l.title?(W(),at("p-title",Mv,lt(l.title),1)):me("",!0),l.typesTab.includes("header")&&l.header?(W(),at("p-header",{key:3,style:hn({backgroundImage:`url(${l.header})`})},null,4)):me("",!0)],40,Nv)),[[s,l.title,void 0,{right:!0}]])],64))),128))],544))}}},Fv=vi($v,[["__scopeId","data-v-8ae03b3e"]]);const Lv={__name:"index",setup(e){return document.title="Nuth",zn.widthScroll="0.5rem",zn.heightTopbar="0rem",qa(()=>nn.add("nuth-code","title",{title:"\u52A8\u6001\u7801"})),(t,n)=>(W(),at(pe,null,[fe(ie(Fv),{hidden:""}),Ve("p-main",null,[(W(),Q(Ac,null,[(W(),Q(Yl(ie(Ta)),{key:`module-${ie(Ta)}`}))],1024))])],64))}},jv=vi(Lv,[["__scopeId","data-v-73de9483"]]),Hn=cu(jv);Hn.provide("app",Hn);window.addEventListener("load",async()=>{await Ev(),Kt.alert=Sa,Hn.directive("menu",om),await Tv(Hn),Hn.mount("#app")});export{zv as $,Vi as C,pe as F,vi as _,at as a,jn as b,we as c,me as d,Ve as e,Lt as f,Uv as g,sm as h,qa as i,nn as j,fe as k,Nt as l,ta as m,hn as n,W as o,kp as p,ot as q,G as r,lt as t,ie as u,Bv as v,Ge as w};

// ==UserScript==
// @name         noCapcthaAi BLS Captcha Solver
// @namespace    noCapcthaAi BLS Solver
// @version      1.0.1
// @author       noCapcthaAi.com
// @description  BLS Captcha Solver by noCapcthaAi.com
// @icon         https://vitejs.dev/logo.svg
// @website      https://noCapcthaAi.com
// @downloadURL  https://raw.githubusercontent.com/noCaptchaAi/BLS-Captcha-Solver.js/refs/heads/main/bls.user.js
// @updateURL    https://raw.githubusercontent.com/noCaptchaAi/BLS-Captcha-Solver.js/refs/heads/main/bls.user.js
// @match        https://*/*
// @match        https://*.blsspainglobal.com/*
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const e=document.createElement("style");e.textContent=t,document.head.append(e)})(' *,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.visible{visibility:visible}.fixed{position:fixed}.right-1{right:.25rem}.top-\\[10\\%\\]{top:10%}.top-\\[41\\%\\]{top:41%}.top-\\[47\\%\\]{top:47%}.top-\\[49\\%\\]{top:49%}.top-\\[54\\%\\]{top:54%}.z-50{z-index:50}.z-\\[99999\\]{z-index:99999}.ml-2{margin-left:.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.block{display:block}.flex{display:flex}.h-10{height:2.5rem}.h-44{height:11rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-fit{height:-moz-fit-content;height:fit-content}.w-\\[180px\\]{width:180px}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.flex-1{flex:1 1 0%}.-translate-y-1\\/2{--tw-translate-y: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.border-zinc-900\\/10{border-color:#18181b1a}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.bg-red-800{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity))}.bg-sky-600\\/60{background-color:#0284c799}.bg-sky-900{--tw-bg-opacity: 1;background-color:rgb(12 74 110 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.pb-1{padding-bottom:.25rem}.pl-1{padding-left:.25rem}.pl-10{padding-left:2.5rem}.pl-5{padding-left:1.25rem}.pr-10{padding-right:2.5rem}.pr-2{padding-right:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.leading-tight{line-height:1.25}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.text-zinc-800{--tw-text-opacity: 1;color:rgb(39 39 42 / var(--tw-text-opacity))}.text-zinc-900{--tw-text-opacity: 1;color:rgb(24 24 27 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:border:hover{border-width:1px}.hover\\:border-red-800:hover{--tw-border-opacity: 1;border-color:rgb(153 27 27 / var(--tw-border-opacity))}.hover\\:bg-blue-700:hover{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.hover\\:bg-orange-700:hover{--tw-bg-opacity: 1;background-color:rgb(194 65 12 / var(--tw-bg-opacity))}.focus\\:border-gray-500:focus{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}.focus\\:bg-white:focus{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px} ');

(function () {
	'use strict';

	const me=(e,t)=>e===t,L={equals:me};let ie=ae;const C=1,U=2,oe={owned:null,cleanups:null,context:null,owner:null};var x=null;let W=null,h=null,b=null,S=null,z=0;function $e(e,t){const n=h,s=x,l=e.length===0,i=t===void 0?s:t,r=l?oe:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=l?e:()=>e(()=>I(()=>B(r)));x=r,h=null;try{return V(o,!0)}finally{h=n,x=s;}}function K(e,t){t=t?Object.assign({},L,t):L;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),ce(n,l));return [re.bind(n),s]}function j(e,t,n){const s=J(e,t,!1,C);N(s);}function _e(e,t,n){ie=Te;const s=J(e,t,!1,C);s.user=!0,S?S.push(s):N(s);}function R(e,t,n){n=n?Object.assign({},L,n):L;const s=J(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,N(s),re.bind(s)}function I(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t;}}function Ce(e){_e(()=>I(e));}function re(){if(this.sources&&this.state)if(this.state===C)N(this);else {const e=b;b=null,V(()=>G(this),!1),b=e;}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1]);}return this.value}function ce(e,t,n){let s=e.value;return (!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=W&&W.running;r&&W.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?b.push(i):S.push(i),i.observers&&fe(i)),r||(i.state=C);}if(b.length>1e6)throw b=[],new Error},!1)),t}function N(e){if(!e.fn)return;B(e);const t=z;Ee(e,e.value,t);}function Ee(e,t,n){let s;const l=x,i=h;h=x=e;try{s=e.fn(t);}catch(r){return e.pure&&(e.state=C,e.owned&&e.owned.forEach(B),e.owned=null),e.updatedAt=n+1,ue(r)}finally{h=i,x=l;}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ce(e,s):e.value=s,e.updatedAt=n);}function J(e,t,n,s=C,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:x,context:x?x.context:null,pure:n};return x===null||x!==oe&&(x.owned?x.owned.push(i):x.owned=[i]),i}function D(e){if(e.state===0)return;if(e.state===U)return G(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<z);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===C)N(e);else if(e.state===U){const s=b;b=null,V(()=>G(e,t[0]),!1),b=s;}}function V(e,t){if(b)return e();let n=!1;t||(b=[]),S?n=!0:S=[],z++;try{const s=e();return Ae(n),s}catch(s){n||(S=null),b=null,ue(s);}}function Ae(e){if(b&&(ae(b),b=null),e)return;const t=S;S=null,t.length&&V(()=>ie(t),!1);}function ae(e){for(let t=0;t<e.length;t++)D(e[t]);}function Te(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:D(s);}for(t=0;t<n;t++)D(e[t]);}function G(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===C?s!==t&&(!s.updatedAt||s.updatedAt<z)&&D(s):l===U&&G(s,t);}}}function fe(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=U,n.pure?b.push(n):S.push(n),n.observers&&fe(n));}}function B(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),r=n.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,n.observerSlots[s]=r);}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)B(e.tOwned[t]);delete e.tOwned;}if(e.owned){for(t=e.owned.length-1;t>=0;t--)B(e.owned[t]);e.owned=null;}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null;}e.state=0;}function ke(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ue(e,t=x){throw ke(e)}function _(e,t){return I(()=>e(t||{}))}const Oe=e=>`Stale read from <${e}>.`;function te(e){const t=e.keyed,n=R(()=>e.when,void 0,{equals:(s,l)=>t?s===l:!s==!l});return R(()=>{const s=n();if(s){const l=e.children;return typeof l=="function"&&l.length>0?I(()=>l(t?s:()=>{if(!I(n))throw Oe("Show");return e.when})):l}return e.fallback},void 0,void 0)}function Ie(e,t,n){let s=n.length,l=t.length,i=s,r=0,o=0,c=t[l-1].nextSibling,a=null;for(;r<l||o<i;){if(t[r]===n[o]){r++,o++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===r){const f=i<s?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],f);}else if(i===o)for(;r<l;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[i-1]&&n[o]===t[l-1]){const f=t[--l].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--i],f),t[l]=n[i];}else {if(!a){a=new Map;let u=o;for(;u<i;)a.set(n[u],u++);}const f=a.get(t[r]);if(f!=null)if(o<f&&f<i){let u=r,d=1,p;for(;++u<l&&u<i&&!((p=a.get(t[u]))==null||p!==f+d);)d++;if(d>f-o){const g=t[r];for(;o<f;)e.insertBefore(n[o++],g);}else e.replaceChild(n[o++],t[r++]);}else r++;else t[r++].remove();}}}const ne="_$DX_DELEGATE";function je(e,t,n,s={}){let l;return $e(i=>{l=i,t===document?e():y(t,e(),t.firstChild?null:void 0,n);},s.owner),()=>{l(),t.textContent="";}}function T(e,t,n){let s;const l=()=>{const r=document.createElement("template");return r.innerHTML=e,r.content.firstChild},i=()=>(s||(s=l())).cloneNode(!0);return i.cloneNode=i,i}function de(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Be));}}function pe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n);}function M(e,t,n,s){Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;}function y(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return F(e,t,s,n);j(l=>F(e,t(),l,n),s);}function Be(e){let t=e.target;const n=`$$${e.type}`,s=e.target,l=e.currentTarget,i=c=>Object.defineProperty(e,"target",{configurable:!0,value:c}),r=()=>{const c=t[n];if(c&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?c.call(t,a,e):c.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&i(t.host),!0},o=()=>{for(;r()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const c=e.composedPath();i(c[0]);for(let a=0;a<c.length-2&&(t=c[a],!!r());a++){if(t._$host){t=t._$host,o();break}if(t.parentNode===l)break}}else o();i(s);}function F(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(t=t.toString(),t===n))return n;if(r){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=k(e,n,s,o);}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;}else if(t==null||i==="boolean")n=k(e,n,s);else {if(i==="function")return j(()=>{let o=t();for(;typeof o=="function";)o=o();n=F(e,o,n,s);}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(H(o,t,n,l))return j(()=>n=F(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=k(e,n,s),r)return n}else c?n.length===0?se(e,o,s):Ie(e,n,o):(n&&k(e),se(e,o));n=o;}else if(t.nodeType){if(Array.isArray(n)){if(r)return n=k(e,n,s,t);k(e,n,null,t);}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t;}}return n}function H(e,t,n,s){let l=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],c=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))l=H(e,o,c)||l;else if(a==="function")if(s){for(;typeof o=="function";)o=o();l=H(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||l;}else e.push(o),l=!0;else {const f=String(o);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f));}}return l}function se(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n);}function k(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(l!==o){const c=o.parentNode===e;!i&&!r?c?e.replaceChild(l,o):e.insertBefore(l,n):c&&o.remove();}else i=!0;}}else e.insertBefore(l,n);return [l]}var v=typeof GM_getValue<"u"?GM_getValue:void 0,le=typeof GM_setValue<"u"?GM_setValue:void 0;const Ne="bls",Ve="1.0.1",Pe="module",Me={dev:"vite",build:"vite build",preview:"vite preview"},Le={autoprefixer:"^10.4.20",postcss:"^8.4.47",tailwindcss:"^3.4.14",vite:"^5.4.10","vite-plugin-bundle-obfuscator":"^1.2.1","vite-plugin-monkey":"^4.0.6","vite-plugin-solid":"^2.11.0-beta.0"},Ue={"solid-js":"^1.9.3"},q={name:Ne,private:!0,version:Ve,type:Pe,scripts:Me,devDependencies:Le,dependencies:Ue};async function Ke(){console.log("script running"),window.alert=function(c){console.log("Blocked alert: "+c);};let e=!1;function t(c){return new Promise(a=>setTimeout(a,c))}function n(c,a){const f=[...document.querySelectorAll(".col-4")].filter(p=>p.getClientRects().length);let u=0,d=null;for(let p=0;p<f.length;p++){const g=document.defaultView.getComputedStyle(f[p],null),w=g.getPropertyValue("left"),$=g.getPropertyValue("top"),m=g.getPropertyValue("z-index");w==c+"px"&&$==a+"px"&&m>u&&m!="auto"&&(u=m,d=f[p]);}return d}function s(){const c=[...document.querySelectorAll(".box-label")];let a=0,f=null;for(let u=0;u<c.length;u++){const d=document.defaultView.getComputedStyle(c[u],null).getPropertyValue("z-index");d>a&&d!=="auto"&&(a=d,f=c[u].innerText.replace(/\D/g,""));}return f}function l(c,a){if(typeof c!="string"||c.trim()===""){console.error("Invalid message provided:",c);return}const f=document.createElement("div");console.log(c,"message");const u=c.split(`
`).map(d=>d).join("");f.innerText=u,Object.assign(f.style,{position:"fixed",top:"20px",left:"50%",height:"100%",transform:"translateX(-50%)",zIndex:"2147483647",backgroundColor:"#333",color:"#fff",padding:"10px 10px",borderRadius:"5px",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.3)",fontSize:"20px",fontWeight:"bold",textAlign:"center",whiteSpace:"pre-wrap",maxWidth:"90%"}),document.body.appendChild(f),setTimeout(()=>{f.remove();},a);}async function i(c,a="solve",f="POST"){const u={method:f,headers:{"Content-Type":"application/json",apikey:v("apiKey"),softid:`BLS_USERSCRIPT_V${q.version}`}};f!=="GET"&&(u.body=JSON.stringify(c));try{const p=await(await fetch("https://pro.nocaptchaai.com/"+a,u)).json();if(console.log(p,"data"),p.error)l(p.error,25e3);else return p}catch(d){l(d,25e3);}}async function r(c,a={}){const f=["mouseover","mousedown","mouseup","click"];a.bubbles=!0,f.forEach(u=>{const d=new MouseEvent(u,a);c.dispatchEvent(d);});}async function o(){const c=[n(0,0),n(110,0),n(220,0),n(0,110),n(110,110),n(220,110),n(0,220),n(110,220),n(220,220)],a=s(),f={},u={};await t(1e3),Array.from(c).forEach((d,p)=>{const g=d==null?void 0:d.querySelector("img");g&&(u[p]=g.src.replace(/^data:image\/(png|jpeg|gif);base64,/,""),f[p]=g.src);}),v("apiKey")&&Object.keys(u).length!==0?i({id:"morocco",method:"ocr",images:u,softid:`BLS_USERSCRIPT_V${q.version}`}).then(d=>{const{solution:p}=d||{};if(p)if(console.log(p,"solution"),Array.isArray(p))p.forEach((g,w)=>{const $=f[w];g.solution===a&&r($);});else {Object.keys(p).forEach(w=>{var m;const $=(m=c[w])==null?void 0:m.querySelector("img");$&&p[w]===a&&r($);});const g=document.querySelector("#captchaForm .img-actions > div:nth-child(3)");g&&r(g);}}).catch(d=>{console.error(d,"error"),l(`Error: ${d.message||d}`,25e3);}):console.warn("API key or image data is missing.");}for(;e===!1;)if(await t(2e3),e===!1&&v("active")===!0){e=!0;try{const c=document.querySelector("#btnVerify");c&&v("autoOpen")===!0&&c.click(),await t(500),v("autoSolve")===!0&&(await o(),t(1e3));}catch(c){console.log("Error in BLS",c),e=!1;}}}var Re=T('<svg fill=currentColor stroke-width=1 xmlns=http://www.w3.org/2000/svg viewBox="0 0 512 512"height=1.5em width=1.5em style=overflow:visible;color:currentcolor;><path fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=32 d="M304 96 416 96 416 208M405.77 106.2 111.98 400.02M208 416 96 416 96 304">');function De(e){return (()=>{var t=Re();return j(()=>pe(t,"stroke",e.color||"black")),t})()}var Ge=T('<div class="flex flex-row gap-1 items-center w-fit h-fit font-bold underline">');function he(){return (()=>{var e=Ge();return y(e,_(De,{})),e})()}const O={apiKey:"",active:!0,autoOpen:!0,autoSolve:!0},Fe=[{text:"PRICING",path:"#pricing"},{text:"CONTACT",path:"contact"},{text:"FAQ",path:"faq"},{text:"TERMS",path:"terms"},{text:"API DOCS",path:"developer"}];function qe(){const[e,t]=K({apiKey:v("apiKey")||O.apiKey,active:v("active")||O.active,autoOpen:v("autoOpen")||O.autoOpen,autoSolve:v("autoSolve")||O.autoSolve}),n=(l,i)=>{t(r=>({...r,[l]:i})),console.log(l,i,"key, value"),le(l,i);},s=()=>{Object.entries(O).forEach(([l,i])=>{n(l,i);});};return Ce(()=>{Object.entries(O).forEach(([l,i])=>{v(l)||le(l,i);});}),{settings:e,updateSetting:n,resetSettings:s}}function ze(){const[e,t]=K(null),[n,s]=K(!0);return {balance:e,isOpen:n,setIsOpen:s,fetchBalance:async()=>{try{const i=await fetch("https://manage.nocaptchaai.com/balance",{headers:{"Content-Type":"application/json",apikey:v("apiKey")}});if(!i.ok)throw new Error(`Error: ${i.status} ${i.statusText}`);const r=await i.json();t(r);}catch(i){console.log("Error fetching balance:",i),alert(i,"Error fetching balance, please check your API key.");}}}}var We=T('<div class="mt-2 p-3 text-xs bg-gray-100 rounded-md"><pre>'),He=T('<div class=balance-display><div class="flex items-center justify-between cursor-pointer"><p class="text-xl text-zinc-800">Current Balance: <!>$</p><span class=text-xl>'),Je=T('<div class="fixed top-[10%] right-1 bg-white p-3 rounded shadow-lg text-left z-[99999]"><div class="flex flex-row justify-between p-2 border-b border-zinc-900/10"><div class="flex flex-col gap-1 items-start justify-left"><a href=https://nocaptchaai.com target=_blank rel="noopener noreferrer"class="text-xl hover:border hover:border-red-800 text-red-800 underline"><img src=https://nocaptchaai.com/assets/logo3-bUi5c9gN.svg alt="NoCaptcha Ai Logo"class="h-5 hover:border hover:border-red-800"></a><div class="text-2xl font-bold text-zinc-900">BLS Captcha Solver v</div></div><button class="w-fit h-fit p-1 rounded-sm"></button></div><div class="text-2xl w-full"><label class="mt-2 text-sm w-full"><input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-1 h-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pl-5"type=text placeholder="Enter API Key"></label></div><div class="mt-2 flex justify-between gap-1 flex-col flex-wrap"><div class="flex items-right gap-1 flex-row"><button class="text-sm flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">Save</button><button class="text-sm flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">Balance</button><button class="text-sm flex-1 bg-red-800 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded">Reset</button></div></div><div class="mt-2 flex gap-2 text-xs justify-center">'),Qe=T('<a target=_blank rel="noopener noreferrer"class="text-red-800 underline">');function Xe({onClick:e}){const{settings:t,updateSetting:n,resetSettings:s}=qe(),{balance:l,isOpen:i,setIsOpen:r,fetchBalance:o}=ze(),c=async()=>{await o();};return (()=>{var a=Je(),f=a.firstChild,u=f.firstChild,d=u.firstChild,p=d.nextSibling;p.firstChild;var g=u.nextSibling,w=f.nextSibling,$=w.firstChild,m=$.firstChild,Q=w.nextSibling,ge=Q.firstChild,X=ge.firstChild,Y=X.nextSibling,be=Y.nextSibling,xe=Q.nextSibling;return y(p,()=>q.version,null),M(g,"click",e),y(g,_(he,{})),m.$$input=E=>n("apiKey",E.target.value),X.$$click=c,M(Y,"click",o),M(be,"click",s),y(xe,()=>Fe.map(({text:E,path:P})=>(()=>{var A=Qe();return pe(A,"href",`https://nocaptchaai.com/${P}`),y(A,E),A})())),y(a,_(te,{get when(){return l()},get children(){var E=He(),P=E.firstChild,A=P.firstChild,ye=A.firstChild,Z=ye.nextSibling;Z.nextSibling;var ve=A.nextSibling;return P.$$click=()=>r(!i()),y(A,()=>l().Balance,Z),y(ve,()=>i()?"-":"+"),y(E,_(te,{get when(){return i()},get children(){var ee=We(),we=ee.firstChild;return y(we,()=>JSON.stringify(l(),null,2)),ee}}),null),E}}),null),j(()=>m.value=t().apiKey),a})()}de(["click","input"]);var Ye=T('<div class="fixed top-[47%] h-fit right-1 cursor-pointer transform -translate-y-1/2 bg-sky-600/60 p-2 rounded-2xl shadow-lg text-center z-50 w-[180px]"><div class="fixed top-[49%] right-1 transform -translate-y-1/2 bg-white p-3 rounded shadow-lg text-left z-50"><div class="flex flex-col gap-1 items-center justify-center"><div class="flex flex-col w-full"><div class="flex flex-row justify-between gap-2 w-full items-center pb-1"><p class=text-sm></p><button class="w-fit h-fit p-1"></button></div><p class="text-md font-bold border-b border-zinc-900/10">BLS Solver v</p><img src=https://nocaptchaai.com/assets/logo3-bUi5c9gN.svg alt="NoCaptcha Ai Logo"class="h-6 mt-1">');function Ze({onClick:e}){const t=v("apiKey"),n=t&&t.trim()!==""&&t.length>0;return (()=>{var s=Ye(),l=s.firstChild,i=l.firstChild,r=i.firstChild,o=r.firstChild,c=o.firstChild,a=c.nextSibling,f=o.nextSibling;return f.firstChild,y(c,n?"🟢 Active":"🔴 Inactive"),M(a,"click",e),y(a,_(he,{})),y(f,()=>q.version,null),s})()}de(["click"]);function et(){const[e,t]=K(!1);return v("apiKey")&&Ke(),R(()=>R(()=>!!e())()?_(Xe,{onClick:()=>t(!1)}):_(Ze,{onClick:()=>t(!0)}))}je(()=>_(et,{}),(()=>{const e=document.createElement("div");return e.style.flex="1",window!==window.top&&(e.style.display="none"),document.body.append(e),e})());

})();
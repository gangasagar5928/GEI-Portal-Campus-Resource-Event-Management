const kf=()=>{};var ku={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Of=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,m=i>>2,g=(i&3)<<4|u>>4;let y=(u&15)<<2|d>>6,R=d&63;l||(R=64,a||(y=64)),n.push(e[m],e[g],e[y],e[R])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(ml(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Of(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const g=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||g==null)throw new Mf;const y=i<<2|u>>4;if(n.push(y),d!==64){const R=u<<4&240|d>>2;if(n.push(R),g!==64){const C=d<<6&192|g;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Mf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ff=function(r){const t=ml(r);return gl.encodeByteArray(t,!0)},ks=function(r){return Ff(r).replace(/\./g,"")},Lf=function(r){try{return gl.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=()=>pl().__FIREBASE_DEFAULTS__,Uf=()=>{if(typeof process>"u"||typeof ku>"u")return;const r=ku.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},jf=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&Lf(r[1]);return t&&JSON.parse(t)},jo=()=>{try{return kf()||Bf()||Uf()||jf()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},qf=r=>{var t,e;return(e=(t=jo())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},zf=r=>{const t=qf(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},_l=()=>{var r;return(r=jo())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yl(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ks(JSON.stringify(e)),ks(JSON.stringify(a)),""].join(".")}const gr={};function Gf(){const r={prod:[],emulator:[]};for(const t of Object.keys(gr))gr[t]?r.emulator.push(t):r.prod.push(t);return r}function Hf(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let Ou=!1;function Wf(r,t){if(typeof window>"u"||typeof document>"u"||!ei(window.location.host)||gr[r]===t||gr[r]||Ou)return;gr[r]=t;function e(y){return`__firebase__banner__${y}`}const n="__firebase__banner",i=Gf().prod.length>0;function a(){const y=document.getElementById(n);y&&y.remove()}function u(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function l(y,R){y.setAttribute("width","24"),y.setAttribute("id",R),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function d(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Ou=!0,a()},y}function m(y,R){y.setAttribute("id",R),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=Hf(n),R=e("text"),C=document.getElementById(R)||document.createElement("span"),x=e("learnmore"),D=document.getElementById(x)||document.createElement("a"),z=e("preprendIcon"),j=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const B=y.element;u(B),m(D,x);const W=d();l(j,z),B.append(j,C,D,W),document.body.appendChild(B)}i?(C.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Il(){var r;const t=(r=jo())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function El(){return!Il()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tl(){return!Il()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function vl(){try{return typeof indexedDB=="object"}catch{return!1}}function Qf(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="FirebaseError";class Mn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Xf,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Yf(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Mn(s,u,n)}}function Yf(r,t){return r.replace(Jf,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Jf=/\{\$([^}]+)}/g;function br(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(Mu(i)&&Mu(a)){if(!br(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Mu(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(r){return r&&r._delegate?r._delegate:r}class Rr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new $f;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(em(t))try{this.getOrInitializeService({instanceIdentifier:ke})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=ke){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ke){return this.instances.has(t)}getOptions(t=ke){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:tm(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=ke){return this.component?this.component.multipleInstances?t:ke:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tm(r){return r===ke?void 0:r}function em(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Zf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(H||(H={}));const rm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},sm=H.INFO,im={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},om=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=im[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Al{constructor(t){this.name=t,this._logLevel=sm,this._logHandler=om,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const am=(r,t)=>t.some(e=>r instanceof e);let Fu,Lu;function um(){return Fu||(Fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cm(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,uo=new WeakMap,Rl=new WeakMap,Xi=new WeakMap,qo=new WeakMap;function lm(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(me(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&bl.set(e,r)}).catch(()=>{}),qo.set(t,r),t}function hm(r){if(uo.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});uo.set(r,t)}let co={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return uo.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Rl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return me(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function dm(r){co=r(co)}function fm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Yi(this),t,...e);return Rl.set(n,t.sort?t.sort():[t]),me(n)}:cm().includes(r)?function(...t){return r.apply(Yi(this),t),me(bl.get(this))}:function(...t){return me(r.apply(Yi(this),t))}}function mm(r){return typeof r=="function"?fm(r):(r instanceof IDBTransaction&&hm(r),am(r,um())?new Proxy(r,co):r)}function me(r){if(r instanceof IDBRequest)return lm(r);if(Xi.has(r))return Xi.get(r);const t=mm(r);return t!==r&&(Xi.set(r,t),qo.set(t,r)),t}const Yi=r=>qo.get(r);function gm(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=me(a);return n&&a.addEventListener("upgradeneeded",l=>{n(me(a.result),l.oldVersion,l.newVersion,me(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const pm=["get","getKey","getAll","getAllKeys","count"],_m=["put","add","delete","clear"],Ji=new Map;function Bu(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ji.get(t))return Ji.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=_m.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||pm.includes(e)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&l.done]))[0]};return Ji.set(t,i),i}dm(r=>({...r,get:(t,e,n)=>Bu(t,e)||r.get(t,e,n),has:(t,e)=>!!Bu(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Im(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Im(r){const t=r.getComponent();return t?.type==="VERSION"}const lo="@firebase/app",Uu="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Al("@firebase/app"),Em="@firebase/app-compat",Tm="@firebase/analytics-compat",vm="@firebase/analytics",wm="@firebase/app-check-compat",Am="@firebase/app-check",bm="@firebase/auth",Rm="@firebase/auth-compat",Sm="@firebase/database",Pm="@firebase/data-connect",Vm="@firebase/database-compat",Cm="@firebase/functions",Dm="@firebase/functions-compat",xm="@firebase/installations",Nm="@firebase/installations-compat",km="@firebase/messaging",Om="@firebase/messaging-compat",Mm="@firebase/performance",Fm="@firebase/performance-compat",Lm="@firebase/remote-config",Bm="@firebase/remote-config-compat",Um="@firebase/storage",jm="@firebase/storage-compat",qm="@firebase/firestore",zm="@firebase/ai",$m="@firebase/firestore-compat",Km="firebase",Gm="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="[DEFAULT]",Hm={[lo]:"fire-core",[Em]:"fire-core-compat",[vm]:"fire-analytics",[Tm]:"fire-analytics-compat",[Am]:"fire-app-check",[wm]:"fire-app-check-compat",[bm]:"fire-auth",[Rm]:"fire-auth-compat",[Sm]:"fire-rtdb",[Pm]:"fire-data-connect",[Vm]:"fire-rtdb-compat",[Cm]:"fire-fn",[Dm]:"fire-fn-compat",[xm]:"fire-iid",[Nm]:"fire-iid-compat",[km]:"fire-fcm",[Om]:"fire-fcm-compat",[Mm]:"fire-perf",[Fm]:"fire-perf-compat",[Lm]:"fire-rc",[Bm]:"fire-rc-compat",[Um]:"fire-gcs",[jm]:"fire-gcs-compat",[qm]:"fire-fst",[$m]:"fire-fst-compat",[zm]:"fire-vertex","fire-js":"fire-js",[Km]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map,Wm=new Map,fo=new Map;function ju(r,t){try{r.container.addComponent(t)}catch(e){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Ms(r){const t=r.name;if(fo.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;fo.set(t,r);for(const e of Sr.values())ju(e,r);for(const e of Wm.values())ju(e,r);return!0}function Sl(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Qm(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ge=new wl("app","Firebase",Xm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=Gm;function Zm(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:ho,automaticDataCollectionEnabled:!0},t),s=n.name;if(typeof s!="string"||!s)throw ge.create("bad-app-name",{appName:String(s)});if(e||(e=_l()),!e)throw ge.create("no-options");const i=Sr.get(s);if(i){if(br(e,i.options)&&br(n,i.config))return i;throw ge.create("duplicate-app",{appName:s})}const a=new nm(s);for(const l of fo.values())a.addComponent(l);const u=new Ym(e,n,a);return Sr.set(s,u),u}function tg(r=ho){const t=Sr.get(r);if(!t&&r===ho&&_l())return Zm();if(!t)throw ge.create("no-app",{appName:r});return t}function $y(){return Array.from(Sr.values())}function pn(r,t,e){var n;let s=(n=Hm[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${t}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(u.join(" "));return}Ms(new Rr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="firebase-heartbeat-database",ng=1,Pr="firebase-heartbeat-store";let Zi=null;function Pl(){return Zi||(Zi=gm(eg,ng,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Pr)}catch(e){console.warn(e)}}}}).catch(r=>{throw ge.create("idb-open",{originalErrorMessage:r.message})})),Zi}async function rg(r){try{const e=(await Pl()).transaction(Pr),n=await e.objectStore(Pr).get(Vl(r));return await e.done,n}catch(t){if(t instanceof Mn)Zt.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:t?.message});Zt.warn(e.message)}}}async function qu(r,t){try{const n=(await Pl()).transaction(Pr,"readwrite");await n.objectStore(Pr).put(t,Vl(r)),await n.done}catch(e){if(e instanceof Mn)Zt.warn(e.message);else{const n=ge.create("idb-set",{originalErrorMessage:e?.message});Zt.warn(n.message)}}}function Vl(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=1024,ig=30;class og{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ug(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ig){const a=cg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Zt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zu(),{heartbeatsToSend:n,unsentEntries:s}=ag(this._heartbeatsCache.heartbeats),i=ks(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Zt.warn(e),""}}}function zu(){return new Date().toISOString().substring(0,10)}function ag(r,t=sg){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),$u(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),$u(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class ug{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vl()?Qf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await rg(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $u(r){return ks(JSON.stringify({version:2,heartbeats:r})).length}function cg(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(r){Ms(new Rr("platform-logger",t=>new ym(t),"PRIVATE")),Ms(new Rr("heartbeat",t=>new og(t),"PRIVATE")),pn(lo,Uu,r),pn(lo,Uu,"esm2017"),pn("fire-js","")}lg("");var hg="firebase",dg="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(hg,dg,"app");var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pe,Cl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function I(){}I.prototype=p.prototype,E.D=p.prototype,E.prototype=new I,E.prototype.constructor=E,E.C=function(T,v,b){for(var _=Array(arguments.length-2),Wt=2;Wt<arguments.length;Wt++)_[Wt-2]=arguments[Wt];return p.prototype[v].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,I){I||(I=0);var T=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)T[v]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(v=0;16>v;++v)T[v]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=E.g[0],I=E.g[1],v=E.g[2];var b=E.g[3],_=p+(b^I&(v^b))+T[0]+3614090360&4294967295;p=I+(_<<7&4294967295|_>>>25),_=b+(v^p&(I^v))+T[1]+3905402710&4294967295,b=p+(_<<12&4294967295|_>>>20),_=v+(I^b&(p^I))+T[2]+606105819&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(p^v&(b^p))+T[3]+3250441966&4294967295,I=v+(_<<22&4294967295|_>>>10),_=p+(b^I&(v^b))+T[4]+4118548399&4294967295,p=I+(_<<7&4294967295|_>>>25),_=b+(v^p&(I^v))+T[5]+1200080426&4294967295,b=p+(_<<12&4294967295|_>>>20),_=v+(I^b&(p^I))+T[6]+2821735955&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(p^v&(b^p))+T[7]+4249261313&4294967295,I=v+(_<<22&4294967295|_>>>10),_=p+(b^I&(v^b))+T[8]+1770035416&4294967295,p=I+(_<<7&4294967295|_>>>25),_=b+(v^p&(I^v))+T[9]+2336552879&4294967295,b=p+(_<<12&4294967295|_>>>20),_=v+(I^b&(p^I))+T[10]+4294925233&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(p^v&(b^p))+T[11]+2304563134&4294967295,I=v+(_<<22&4294967295|_>>>10),_=p+(b^I&(v^b))+T[12]+1804603682&4294967295,p=I+(_<<7&4294967295|_>>>25),_=b+(v^p&(I^v))+T[13]+4254626195&4294967295,b=p+(_<<12&4294967295|_>>>20),_=v+(I^b&(p^I))+T[14]+2792965006&4294967295,v=b+(_<<17&4294967295|_>>>15),_=I+(p^v&(b^p))+T[15]+1236535329&4294967295,I=v+(_<<22&4294967295|_>>>10),_=p+(v^b&(I^v))+T[1]+4129170786&4294967295,p=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(p^I))+T[6]+3225465664&4294967295,b=p+(_<<9&4294967295|_>>>23),_=v+(p^I&(b^p))+T[11]+643717713&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^p&(v^b))+T[0]+3921069994&4294967295,I=v+(_<<20&4294967295|_>>>12),_=p+(v^b&(I^v))+T[5]+3593408605&4294967295,p=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(p^I))+T[10]+38016083&4294967295,b=p+(_<<9&4294967295|_>>>23),_=v+(p^I&(b^p))+T[15]+3634488961&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^p&(v^b))+T[4]+3889429448&4294967295,I=v+(_<<20&4294967295|_>>>12),_=p+(v^b&(I^v))+T[9]+568446438&4294967295,p=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(p^I))+T[14]+3275163606&4294967295,b=p+(_<<9&4294967295|_>>>23),_=v+(p^I&(b^p))+T[3]+4107603335&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^p&(v^b))+T[8]+1163531501&4294967295,I=v+(_<<20&4294967295|_>>>12),_=p+(v^b&(I^v))+T[13]+2850285829&4294967295,p=I+(_<<5&4294967295|_>>>27),_=b+(I^v&(p^I))+T[2]+4243563512&4294967295,b=p+(_<<9&4294967295|_>>>23),_=v+(p^I&(b^p))+T[7]+1735328473&4294967295,v=b+(_<<14&4294967295|_>>>18),_=I+(b^p&(v^b))+T[12]+2368359562&4294967295,I=v+(_<<20&4294967295|_>>>12),_=p+(I^v^b)+T[5]+4294588738&4294967295,p=I+(_<<4&4294967295|_>>>28),_=b+(p^I^v)+T[8]+2272392833&4294967295,b=p+(_<<11&4294967295|_>>>21),_=v+(b^p^I)+T[11]+1839030562&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^p)+T[14]+4259657740&4294967295,I=v+(_<<23&4294967295|_>>>9),_=p+(I^v^b)+T[1]+2763975236&4294967295,p=I+(_<<4&4294967295|_>>>28),_=b+(p^I^v)+T[4]+1272893353&4294967295,b=p+(_<<11&4294967295|_>>>21),_=v+(b^p^I)+T[7]+4139469664&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^p)+T[10]+3200236656&4294967295,I=v+(_<<23&4294967295|_>>>9),_=p+(I^v^b)+T[13]+681279174&4294967295,p=I+(_<<4&4294967295|_>>>28),_=b+(p^I^v)+T[0]+3936430074&4294967295,b=p+(_<<11&4294967295|_>>>21),_=v+(b^p^I)+T[3]+3572445317&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^p)+T[6]+76029189&4294967295,I=v+(_<<23&4294967295|_>>>9),_=p+(I^v^b)+T[9]+3654602809&4294967295,p=I+(_<<4&4294967295|_>>>28),_=b+(p^I^v)+T[12]+3873151461&4294967295,b=p+(_<<11&4294967295|_>>>21),_=v+(b^p^I)+T[15]+530742520&4294967295,v=b+(_<<16&4294967295|_>>>16),_=I+(v^b^p)+T[2]+3299628645&4294967295,I=v+(_<<23&4294967295|_>>>9),_=p+(v^(I|~b))+T[0]+4096336452&4294967295,p=I+(_<<6&4294967295|_>>>26),_=b+(I^(p|~v))+T[7]+1126891415&4294967295,b=p+(_<<10&4294967295|_>>>22),_=v+(p^(b|~I))+T[14]+2878612391&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~p))+T[5]+4237533241&4294967295,I=v+(_<<21&4294967295|_>>>11),_=p+(v^(I|~b))+T[12]+1700485571&4294967295,p=I+(_<<6&4294967295|_>>>26),_=b+(I^(p|~v))+T[3]+2399980690&4294967295,b=p+(_<<10&4294967295|_>>>22),_=v+(p^(b|~I))+T[10]+4293915773&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~p))+T[1]+2240044497&4294967295,I=v+(_<<21&4294967295|_>>>11),_=p+(v^(I|~b))+T[8]+1873313359&4294967295,p=I+(_<<6&4294967295|_>>>26),_=b+(I^(p|~v))+T[15]+4264355552&4294967295,b=p+(_<<10&4294967295|_>>>22),_=v+(p^(b|~I))+T[6]+2734768916&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~p))+T[13]+1309151649&4294967295,I=v+(_<<21&4294967295|_>>>11),_=p+(v^(I|~b))+T[4]+4149444226&4294967295,p=I+(_<<6&4294967295|_>>>26),_=b+(I^(p|~v))+T[11]+3174756917&4294967295,b=p+(_<<10&4294967295|_>>>22),_=v+(p^(b|~I))+T[2]+718787259&4294967295,v=b+(_<<15&4294967295|_>>>17),_=I+(b^(v|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+b&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var I=p-this.blockSize,T=this.B,v=this.h,b=0;b<p;){if(v==0)for(;b<=I;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<p;)if(T[v++]=E.charCodeAt(b++),v==this.blockSize){s(this,T),v=0;break}}else for(;b<p;)if(T[v++]=E[b++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var I=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=I&255,I/=256;for(this.u(E),E=Array(16),p=I=0;4>p;++p)for(var T=0;32>T;T+=8)E[I++]=this.g[p]>>>T&255;return E};function i(E,p){var I=u;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=p(E)}function a(E,p){this.h=p;for(var I=[],T=!0,v=E.length-1;0<=v;v--){var b=E[v]|0;T&&b==p||(I[v]=b,T=!1)}this.g=I}var u={};function l(E){return-128<=E&&128>E?i(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return D(d(-E));for(var p=[],I=1,T=0;E>=I;T++)p[T]=E/I|0,I*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(p,8)),T=g,v=0;v<E.length;v+=8){var b=Math.min(8,E.length-v),_=parseInt(E.substring(v,v+b),p);8>b?(b=d(Math.pow(p,b)),T=T.j(b).add(d(_))):(T=T.j(I),T=T.add(d(_)))}return T}var g=l(0),y=l(1),R=l(16777216);r=a.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,p=1,I=0;I<this.g.length;I++){var T=this.i(I);E+=(0<=T?T:4294967296+T)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var p=d(Math.pow(E,6)),I=this,T="";;){var v=W(I,p).g;I=z(I,v.j(p));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(E);if(I=v,C(I))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=z(this,E),x(E)?-1:C(E)?0:1};function D(E){for(var p=E.g.length,I=[],T=0;T<p;T++)I[T]=~E.g[T];return new a(I,~E.h).add(y)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0,v=0;v<=p;v++){var b=T+(this.i(v)&65535)+(E.i(v)&65535),_=(b>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=_>>>16,b&=65535,_&=65535,I[v]=_<<16|b}return new a(I,I[I.length-1]&-2147483648?-1:0)};function z(E,p){return E.add(D(p))}r.j=function(E){if(C(this)||C(E))return g;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(R)&&0>E.l(R))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,I=[],T=0;T<2*p;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var b=this.i(T)>>>16,_=this.i(T)&65535,Wt=E.i(v)>>>16,qn=E.i(v)&65535;I[2*T+2*v]+=_*qn,j(I,2*T+2*v),I[2*T+2*v+1]+=b*qn,j(I,2*T+2*v+1),I[2*T+2*v+1]+=_*Wt,j(I,2*T+2*v+1),I[2*T+2*v+2]+=b*Wt,j(I,2*T+2*v+2)}for(T=0;T<p;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=p;T<2*p;T++)I[T]=0;return new a(I,0)};function j(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function B(E,p){this.g=E,this.h=p}function W(E,p){if(C(p))throw Error("division by zero");if(C(E))return new B(g,g);if(x(E))return p=W(D(E),p),new B(D(p.g),D(p.h));if(x(p))return p=W(E,D(p)),new B(D(p.g),p.h);if(30<E.g.length){if(x(E)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var I=y,T=p;0>=T.l(E);)I=nt(I),T=nt(T);var v=Q(I,1),b=Q(T,1);for(T=Q(T,2),I=Q(I,2);!C(T);){var _=b.add(T);0>=_.l(E)&&(v=v.add(I),b=_),T=Q(T,1),I=Q(I,1)}return p=z(E,v.j(p)),new B(v,p)}for(v=g;0<=E.l(p);){for(I=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=d(I),_=b.j(p);x(_)||0<_.l(E);)I-=T,b=d(I),_=b.j(p);C(b)&&(b=y),v=v.add(b),E=z(E,_)}return new B(v,E)}r.A=function(E){return W(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)&E.i(T);return new a(I,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)|E.i(T);return new a(I,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),I=[],T=0;T<p;T++)I[T]=this.i(T)^E.i(T);return new a(I,this.h^E.h)};function nt(E){for(var p=E.g.length+1,I=[],T=0;T<p;T++)I[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(I,E.h)}function Q(E,p){var I=p>>5;p%=32;for(var T=E.g.length-I,v=[],b=0;b<T;b++)v[b]=0<p?E.i(b+I)>>>p|E.i(b+I+1)<<32-p:E.i(b+I);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Cl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,pe=a}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dl,lr,xl,vs,mo,Nl,kl,Ol;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gs=="object"&&gs];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var S=h++;return{value:c(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function y(o,c,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,y.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,S){for(var N=Array(arguments.length-2),et=2;et<arguments.length;et++)N[et-2]=arguments[et];return c.prototype[A].apply(f,N)}}function x(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const A=o.length||0,S=f.length||0;o.length=A+S;for(let N=0;N<S;N++)o[A+N]=f[N]}else o.push(f)}}class z{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var nt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Q(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function E(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let S=0;S<I.length;S++)h=I[S],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function v(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function b(o){u.setTimeout(()=>{throw o},0)}function _(){var o=Ri;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Wt{constructor(){this.h=this.g=null}add(c,h){const f=qn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var qn=new z(()=>new Jd,o=>o.reset());class Jd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let zn,$n=!1,Ri=new Wt,ka=()=>{const o=u.Promise.resolve(void 0);zn=()=>{o.then(Zd)}};var Zd=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){b(h)}var c=qn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}$n=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function It(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var tf=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o})();function Kn(o,c){if(It.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(nt){t:{try{W(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:ef[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Kn.aa.h.call(this)}}C(Kn,It);var ef={2:"touch",3:"pen",4:"mouse"};Kn.prototype.h=function(){Kn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xr="closure_listenable_"+(1e6*Math.random()|0),nf=0;function rf(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++nf,this.da=this.fa=!1}function Yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Jr(o){this.src=o,this.g={},this.h=0}Jr.prototype.add=function(o,c,h,f,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var N=Pi(o,c,f,A);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new rf(c,this.src,S,!!f,A),c.fa=h,o.push(c)),c};function Si(o,c){var h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),S;(S=0<=A)&&Array.prototype.splice.call(f,A,1),S&&(Yr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Pi(o,c,h,f){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==c&&S.capture==!!h&&S.ha==f)return A}return-1}var Vi="closure_lm_"+(1e6*Math.random()|0),Ci={};function Oa(o,c,h,f,A){if(Array.isArray(c)){for(var S=0;S<c.length;S++)Oa(o,c[S],h,f,A);return null}return h=La(h),o&&o[Xr]?o.K(c,h,d(f)?!!f.capture:!1,A):sf(o,c,h,!1,f,A)}function sf(o,c,h,f,A,S){if(!c)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,et=xi(o);if(et||(o[Vi]=et=new Jr(o)),h=et.add(c,h,f,N,S),h.proxy)return h;if(f=of(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)tf||(A=N),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(Fa(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function of(){function o(h){return c.call(o.src,o.listener,h)}const c=af;return o}function Ma(o,c,h,f,A){if(Array.isArray(c))for(var S=0;S<c.length;S++)Ma(o,c[S],h,f,A);else f=d(f)?!!f.capture:!!f,h=La(h),o&&o[Xr]?(o=o.i,c=String(c).toString(),c in o.g&&(S=o.g[c],h=Pi(S,h,f,A),-1<h&&(Yr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[c],o.h--)))):o&&(o=xi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Pi(c,h,f,A)),(h=-1<o?c[o]:null)&&Di(h))}function Di(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Xr])Si(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Fa(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=xi(c))?(Si(h,o),h.h==0&&(h.src=null,c[Vi]=null)):Yr(o)}}}function Fa(o){return o in Ci?Ci[o]:Ci[o]="on"+o}function af(o,c){if(o.da)o=!0;else{c=new Kn(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Di(o),o=h.call(f,c)}return o}function xi(o){return o=o[Vi],o instanceof Jr?o:null}var Ni="__closure_events_fn_"+(1e9*Math.random()>>>0);function La(o){return typeof o=="function"?o:(o[Ni]||(o[Ni]=function(c){return o.handleEvent(c)}),o[Ni])}function Et(){ie.call(this),this.i=new Jr(this),this.M=this,this.F=null}C(Et,ie),Et.prototype[Xr]=!0,Et.prototype.removeEventListener=function(o,c,h,f){Ma(this,o,c,h,f)};function St(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new It(c,o);else if(c instanceof It)c.target=c.target||o;else{var A=c;c=new It(f,o),T(c,A)}if(A=!0,h)for(var S=h.length-1;0<=S;S--){var N=c.g=h[S];A=Zr(N,f,!0,c)&&A}if(N=c.g=o,A=Zr(N,f,!0,c)&&A,A=Zr(N,f,!1,c)&&A,h)for(S=0;S<h.length;S++)N=c.g=h[S],A=Zr(N,f,!1,c)&&A}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Yr(h[f]);delete o.g[c],o.h--}}this.F=null},Et.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Et.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Zr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,S=0;S<c.length;++S){var N=c[S];if(N&&!N.da&&N.capture==h){var et=N.listener,_t=N.ha||N.src;N.fa&&Si(o.i,N),A=et.call(_t,f)!==!1&&A}}return A&&!f.defaultPrevented}function Ba(o,c,h){if(typeof o=="function")h&&(o=y(o,h));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ua(o){o.g=Ba(()=>{o.g=null,o.i&&(o.i=!1,Ua(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class uf extends ie{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ua(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(o){ie.call(this),this.h=o,this.g={}}C(Gn,ie);var ja=[];function qa(o){Q(o.g,function(c,h){this.g.hasOwnProperty(h)&&Di(c)},o),o.g={}}Gn.prototype.N=function(){Gn.aa.N.call(this),qa(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ki=u.JSON.stringify,cf=u.JSON.parse,lf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Oi(){}Oi.prototype.h=null;function za(o){return o.h||(o.h=o.i())}function $a(){}var Hn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){It.call(this,"d")}C(Mi,It);function Fi(){It.call(this,"c")}C(Fi,It);var Ve={},Ka=null;function ts(){return Ka=Ka||new Et}Ve.La="serverreachability";function Ga(o){It.call(this,Ve.La,o)}C(Ga,It);function Wn(o){const c=ts();St(c,new Ga(c))}Ve.STAT_EVENT="statevent";function Ha(o,c){It.call(this,Ve.STAT_EVENT,o),this.stat=c}C(Ha,It);function Pt(o){const c=ts();St(c,new Ha(c,o))}Ve.Ma="timingevent";function Wa(o,c){It.call(this,Ve.Ma,o),this.size=c}C(Wa,It);function Qn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function hf(o,c,h,f,A,S){o.info(function(){if(o.g)if(S)for(var N="",et=S.split("&"),_t=0;_t<et.length;_t++){var X=et[_t].split("=");if(1<X.length){var Tt=X[0];X=X[1];var vt=Tt.split("_");N=2<=vt.length&&vt[1]=="type"?N+(Tt+"="+X+"&"):N+(Tt+"=redacted&")}}else N=null;else N=S;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+N})}function df(o,c,h,f,A,S,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+S+" "+N})}function tn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+mf(o,h)+(f?" "+f:"")})}function ff(o,c){o.info(function(){return"TIMEOUT: "+c})}Xn.prototype.info=function(){};function mf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return ki(h)}catch{return c}}var es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Li;function ns(){}C(ns,Oi),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},Li=new ns;function oe(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xa}function Xa(){this.i=null,this.g="",this.h=!1}var Ya={},Bi={};function Ui(o,c,h){o.L=1,o.v=os(Qt(c)),o.m=h,o.P=!0,Ja(o,null)}function Ja(o,c){o.F=Date.now(),rs(o),o.A=Qt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),du(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Xa,o.g=Cu(o.j,h?c:null,!o.m),0<o.O&&(o.M=new uf(y(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(ja[0]=A.toString()),A=ja);for(var S=0;S<A.length;S++){var N=Oa(h,A[S],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Wn(),hf(o.i,o.u,o.A,o.l,o.R,o.m)}oe.prototype.ca=function(o){o=o.target;const c=this.M;c&&Xt(o)==3?c.j():this.Y(o)},oe.prototype.Y=function(o){try{if(o==this.g)t:{const vt=Xt(this.g);var c=this.g.Ba();const rn=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||Iu(this.g)))){this.J||vt!=4||c==7||(c==8||0>=rn?Wn(3):Wn(2)),ji(this);var h=this.g.Z();this.X=h;e:if(Za(this)){var f=Iu(this.g);o="";var A=f.length,S=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),Yn(this);var N="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(S&&c==A-1)});f.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,df(this.i,this.u,this.A,this.l,this.R,vt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,_t=this.g;if((et=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(et)){var X=et;break e}}X=null}if(h=X)tn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qi(this,h);else{this.o=!1,this.s=3,Pt(12),Ce(this),Yn(this);break t}}if(this.P){h=!0;let Bt;for(;!this.J&&this.C<N.length;)if(Bt=gf(this,N),Bt==Bi){vt==4&&(this.s=4,Pt(14),h=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Ya){this.s=4,Pt(15),tn(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else tn(this.i,this.l,Bt,null),qi(this,Bt);if(Za(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||N.length!=0||this.h.h||(this.s=1,Pt(16),h=!1),this.o=this.o&&h,!h)tn(this.i,this.l,N,"[Invalid Chunked Response]"),Ce(this),Yn(this);else if(0<N.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Wi(Tt),Tt.M=!0,Pt(11))}}else tn(this.i,this.l,N,null),qi(this,N);vt==4&&Ce(this),this.o&&!this.J&&(vt==4?Ru(this.j,this):(this.o=!1,rs(this)))}else xf(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Ce(this),Yn(this)}}}catch{}finally{}};function Za(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function gf(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Bi:(h=Number(c.substring(h,f)),isNaN(h)?Ya:(f+=1,f+h>c.length?Bi:(c=c.slice(f,f+h),o.C=f+h,c)))}oe.prototype.cancel=function(){this.J=!0,Ce(this)};function rs(o){o.S=Date.now()+o.I,tu(o,o.I)}function tu(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Qn(y(o.ba,o),c)}function ji(o){o.B&&(u.clearTimeout(o.B),o.B=null)}oe.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ff(this.i,this.A),this.L!=2&&(Wn(),Pt(17)),Ce(this),this.s=2,Yn(this)):tu(this,this.S-o)};function Yn(o){o.j.G==0||o.J||Ru(o.j,o)}function Ce(o){ji(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,qa(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function qi(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||zi(h.h,o))){if(!o.K&&zi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ds(h),ls(h);else break t;Hi(h),Pt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Qn(y(h.Za,h),6e3));if(1>=ru(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else xe(h,11)}else if((o.K||h.g==o)&&ds(h),!j(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let X=A[c];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Tt=X[3];Tt!=null&&(h.la=Tt,h.j.info("VER="+h.la));const vt=X[4];vt!=null&&(h.Aa=vt,h.j.info("SVER="+h.Aa));const rn=X[5];rn!=null&&typeof rn=="number"&&0<rn&&(f=1.5*rn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Bt=o.g;if(Bt){const ms=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var S=f.h;S.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&($i(S,S.h),S.h=null))}if(f.D){const Qi=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qi&&(f.ya=Qi,st(f.I,f.D,Qi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var N=o;if(f.qa=Vu(f,f.J?f.ia:null,f.W),N.K){su(f.h,N);var et=N,_t=f.L;_t&&(et.I=_t),et.B&&(ji(et),rs(et)),f.g=N}else Au(f);0<h.i.length&&hs(h)}else X[0]!="stop"&&X[0]!="close"||xe(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?xe(h,7):Gi(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Wn(4)}catch{}}var pf=class{constructor(o,c){this.g=o,this.map=c}};function eu(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ru(o){return o.h?1:o.g?o.g.size:0}function zi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function $i(o,c){o.g?o.g.add(c):o.h=c}function su(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}eu.prototype.cancel=function(){if(this.i=iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function iu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return x(o.i)}function _f(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function yf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function ou(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=yf(o),f=_f(o),A=f.length,S=0;S<A;S++)c.call(void 0,f[S],h&&h[S],o)}var au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function If(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var S=o[h].substring(0,f);A=o[h].substring(f+1)}else S=o[h];c(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function De(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof De){this.h=o.h,ss(this,o.j),this.o=o.o,this.g=o.g,is(this,o.s),this.l=o.l;var c=o.i,h=new tr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),uu(this,h),this.m=o.m}else o&&(c=String(o).match(au))?(this.h=!1,ss(this,c[1]||"",!0),this.o=Jn(c[2]||""),this.g=Jn(c[3]||"",!0),is(this,c[4]),this.l=Jn(c[5]||"",!0),uu(this,c[6]||"",!0),this.m=Jn(c[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}De.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Zn(c,cu,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Zn(c,cu,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Zn(h,h.charAt(0)=="/"?vf:Tf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Zn(h,Af)),o.join("")};function Qt(o){return new De(o)}function ss(o,c,h){o.j=h?Jn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function uu(o,c,h){c instanceof tr?(o.i=c,bf(o.i,o.h)):(h||(c=Zn(c,wf)),o.i=new tr(c,o.h))}function st(o,c,h){o.i.set(c,h)}function os(o){return st(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Jn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Zn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Ef),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ef(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var cu=/[#\/\?@]/g,Tf=/[#\?:]/g,vf=/[#\?]/g,wf=/[#\?@]/g,Af=/#/g;function tr(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ae(o){o.g||(o.g=new Map,o.h=0,o.i&&If(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=tr.prototype,r.add=function(o,c){ae(this),this.i=null,o=en(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function lu(o,c){ae(o),c=en(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function hu(o,c){return ae(o),c=en(o,c),o.g.has(c)}r.forEach=function(o,c){ae(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)},r.na=function(){ae(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=o[f];for(let S=0;S<A.length;S++)h.push(c[f])}return h},r.V=function(o){ae(this);let c=[];if(typeof o=="string")hu(this,o)&&(c=c.concat(this.g.get(en(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return ae(this),this.i=null,o=en(this,o),hu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function du(o,c,h){lu(o,c),0<h.length&&(o.i=null,o.g.set(en(o,c),x(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const S=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var A=S;N[f]!==""&&(A+="="+encodeURIComponent(String(N[f]))),o.push(A)}}return this.i=o.join("&")};function en(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function bf(o,c){c&&!o.j&&(ae(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(lu(this,f),du(this,A,h))},o)),o.j=c}function Rf(o,c){const h=new Xn;if(u.Image){const f=new Image;f.onload=R(ue,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(ue,h,"TestLoadImage: error",!1,c,f),f.onabort=R(ue,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(ue,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Sf(o,c){const h=new Xn,f=new AbortController,A=setTimeout(()=>{f.abort(),ue(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(A),S.ok?ue(h,"TestPingServer: ok",!0,c):ue(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ue(h,"TestPingServer: error",!1,c)})}function ue(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function Pf(){this.g=new lf}function Vf(o,c,h){const f=h||"";try{ou(o,function(A,S){let N=A;d(A)&&(N=ki(A)),c.push(f+S+"="+encodeURIComponent(N))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function as(o){this.l=o.Ub||null,this.j=o.eb||!1}C(as,Oi),as.prototype.g=function(){return new us(this.l,this.j)},as.prototype.i=(function(o){return function(){return o}})({});function us(o,c){Et.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(us,Et),r=us.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,nr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function fu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?er(this):nr(this),this.readyState==3&&fu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,er(this))},r.Qa=function(o){this.g&&(this.response=o,er(this))},r.ga=function(){this.g&&er(this)};function er(o){o.readyState=4,o.l=null,o.j=null,o.v=null,nr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function mu(o){let c="";return Q(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ki(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=mu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):st(o,c,h))}function at(o){Et.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(at,Et);var Cf=/^https?$/i,Df=["POST","PUT"];r=at.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Li.g(),this.v=this.o?za(this.o):za(Li),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(S){gu(this,S);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())h.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Df,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of h)this.g.setRequestHeader(S,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yu(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){gu(this,S)}};function gu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,pu(o),cs(o)}function pu(o){o.A||(o.A=!0,St(o,"complete"),St(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,St(this,"complete"),St(this,"abort"),cs(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),at.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?_u(this):this.bb())},r.bb=function(){_u(this)};function _u(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Xt(o)!=4||o.Z()!=2)){if(o.u&&Xt(o)==4)Ba(o.Ea,0,o);else if(St(o,"readystatechange"),Xt(o)==4){o.h=!1;try{const N=o.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=N===0){var A=String(o.D).match(au)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Cf.test(A?A.toLowerCase():"")}h=f}if(h)St(o,"complete"),St(o,"success");else{o.m=6;try{var S=2<Xt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",pu(o)}}finally{cs(o)}}}}function cs(o,c){if(o.g){yu(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||St(o,"ready");try{h.onreadystatechange=f}catch{}}}function yu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Xt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),cf(c)}};function Iu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xf(o){const c={};o=(o.g&&2<=Xt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(j(o[f]))continue;var h=v(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=c[A]||[];c[A]=S,S.push(h)}E(c,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Eu(o){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,o),this.cb=rr("retryDelaySeedMs",1e4,o),this.Wa=rr("forwardChannelMaxRetries",2,o),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new eu(o&&o.concurrentRequestLimit),this.Da=new Pf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Eu.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,f){Pt(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Vu(this,null,this.W),hs(this)};function Gi(o){if(Tu(o),o.G==3){var c=o.U++,h=Qt(o.I);if(st(h,"SID",o.K),st(h,"RID",c),st(h,"TYPE","terminate"),sr(o,h),c=new oe(o,o.j,c),c.L=2,c.v=os(Qt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Cu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),rs(c)}Pu(o)}function ls(o){o.g&&(Wi(o),o.g.cancel(),o.g=null)}function Tu(o){ls(o),o.u&&(u.clearTimeout(o.u),o.u=null),ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function hs(o){if(!nu(o.h)&&!o.s){o.s=!0;var c=o.Ga;zn||ka(),$n||(zn(),$n=!0),Ri.add(c,o),o.B=0}}function Nf(o,c){return ru(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Qn(y(o.Ga,o,c),Su(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new oe(this,this.j,o);let S=this.o;if(this.S&&(S?(S=p(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=wu(this,A,c),h=Qt(this.I),st(h,"RID",o),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),sr(this,h),S&&(this.O?c="headers="+encodeURIComponent(String(mu(S)))+"&"+c:this.m&&Ki(h,this.m,S)),$i(this.h,A),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",c),st(h,"SID","null"),A.T=!0,Ui(A,h,null)):Ui(A,h,c),this.G=2}}else this.G==3&&(o?vu(this,o):this.i.length==0||nu(this.h)||vu(this))};function vu(o,c){var h;c?h=c.l:h=o.U++;const f=Qt(o.I);st(f,"SID",o.K),st(f,"RID",h),st(f,"AID",o.T),sr(o,f),o.m&&o.o&&Ki(f,o.m,o.o),h=new oe(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=wu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),$i(o.h,h),Ui(h,f,c)}function sr(o,c){o.H&&Q(o.H,function(h,f){st(c,f,h)}),o.l&&ou({},function(h,f){st(c,f,h)})}function wu(o,c,h){h=Math.min(o.i.length,h);var f=o.l?y(o.l.Na,o.l,o):null;t:{var A=o.i;let S=-1;for(;;){const N=["count="+h];S==-1?0<h?(S=A[0].g,N.push("ofs="+S)):S=0:N.push("ofs="+S);let et=!0;for(let _t=0;_t<h;_t++){let X=A[_t].g;const Tt=A[_t].map;if(X-=S,0>X)S=Math.max(0,A[_t].g-100),et=!1;else try{Vf(Tt,N,"req"+X+"_")}catch{f&&f(Tt)}}if(et){f=N.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,f}function Au(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;zn||ka(),$n||(zn(),$n=!0),Ri.add(c,o),o.v=0}}function Hi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Qn(y(o.Fa,o),Su(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,bu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Qn(y(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),ls(this),bu(this))};function Wi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function bu(o){o.g=new oe(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Qt(o.qa);st(c,"RID","rpc"),st(c,"SID",o.K),st(c,"AID",o.T),st(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&st(c,"TO",o.ja),st(c,"TYPE","xmlhttp"),sr(o,c),o.m&&o.o&&Ki(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=os(Qt(c)),h.m=null,h.P=!0,Ja(h,o)}r.Za=function(){this.C!=null&&(this.C=null,ls(this),Hi(this),Pt(19))};function ds(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ru(o,c){var h=null;if(o.g==c){ds(o),Wi(o),o.g=null;var f=2}else if(zi(o.h,c))h=c.D,su(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;f=ts(),St(f,new Wa(f,h)),hs(o)}else Au(o);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Nf(o,c)||f==2&&Hi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:xe(o,5);break;case 4:xe(o,10);break;case 3:xe(o,6);break;default:xe(o,2)}}}function Su(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function xe(o,c){if(o.j.info("Error code "+c),c==2){var h=y(o.fb,o),f=o.Xa;const A=!f;f=new De(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ss(f,"https"),os(f),A?Rf(f.toString(),h):Sf(f.toString(),h)}else Pt(2);o.G=0,o.l&&o.l.sa(c),Pu(o),Tu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Pu(o){if(o.G=0,o.ka=[],o.l){const c=iu(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Vu(o,c,h){var f=h instanceof De?Qt(h):new De(h);if(f.g!="")c&&(f.g=c+"."+f.g),is(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var S=new De(null);f&&ss(S,f),c&&(S.g=c),A&&is(S,A),h&&(S.l=h),f=S}return h=o.D,c=o.ya,h&&c&&st(f,h,c),st(f,"VER",o.la),sr(o,f),f}function Cu(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new at(new as({eb:h})):new at(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Du(){}r=Du.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function fs(){}fs.prototype.g=function(o,c){return new Nt(o,c)};function Nt(o,c){Et.call(this),this.g=new Eu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!j(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!j(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new nn(this)}C(Nt,Et),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){Gi(this.g)},Nt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ki(o),o=h);c.i.push(new pf(c.Ya++,o)),c.G==3&&hs(c)},Nt.prototype.N=function(){this.g.l=null,delete this.j,Gi(this.g),delete this.g,Nt.aa.N.call(this)};function xu(o){Mi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(xu,Mi);function Nu(){Fi.call(this),this.status=1}C(Nu,Fi);function nn(o){this.g=o}C(nn,Du),nn.prototype.ua=function(){St(this.g,"a")},nn.prototype.ta=function(o){St(this.g,new xu(o))},nn.prototype.sa=function(o){St(this.g,new Nu)},nn.prototype.ra=function(){St(this.g,"b")},fs.prototype.createWebChannel=fs.prototype.g,Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,Ol=function(){return new fs},kl=function(){return ts()},Nl=Ve,mo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},es.NO_ERROR=0,es.TIMEOUT=8,es.HTTP_ERROR=6,vs=es,Qa.COMPLETE="complete",xl=Qa,$a.EventType=Hn,Hn.OPEN="a",Hn.CLOSE="b",Hn.ERROR="c",Hn.MESSAGE="d",Et.prototype.listen=Et.prototype.K,lr=$a,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,Dl=at}).apply(typeof gs<"u"?gs:typeof self<"u"?self:typeof window<"u"?window:{});const Gu="@firebase/firestore",Hu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Al("@firebase/firestore");function hn(){return Ge.logLevel}function V(r,...t){if(Ge.logLevel<=H.DEBUG){const e=t.map(zo);Ge.debug(`Firestore (${Fn}): ${r}`,...e)}}function ct(r,...t){if(Ge.logLevel<=H.ERROR){const e=t.map(zo);Ge.error(`Firestore (${Fn}): ${r}`,...e)}}function te(r,...t){if(Ge.logLevel<=H.WARN){const e=t.map(zo);Ge.warn(`Firestore (${Fn}): ${r}`,...e)}}function zo(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Ml(r,n,e)}function Ml(r,t,e){let n=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ct(n),new Error(n)}function L(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Ml(t,s,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Mn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pt.UNAUTHENTICATED)))}shutdown(){}}class mg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class gg{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new _e;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _e,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},u=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _e)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new Fl(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class pg{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _g{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new pg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qm(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){L(this.o===void 0,3512);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(L(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Wu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Ig(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function go(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return q(n,s);{const i=Ll(),a=Eg(i.encode(Qu(r,e)),i.encode(Qu(t,e)));return a!==0?a:q(n,s)}}e+=n>65535?2:1}return q(r.length,t.length)}function Qu(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Eg(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return q(r[e],t[e]);return q(r.length,t.length)}function In(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}function Bl(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="__name__";class jt{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return jt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof jt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=jt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return q(t.length,e.length)}static compareSegments(t,e){const n=jt.isNumericId(t),s=jt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?jt.extractNumericId(t).compare(jt.extractNumericId(e)):go(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return pe.fromString(t.substring(4,t.length-2))}}class Y extends jt{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const Tg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends jt{construct(t,e,n){return new ot(t,e,n)}static isValidIdentifier(t){return Tg.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xu}static keyField(){return new ot([Xu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Y.fromString(t))}static fromName(t){return new k(Y.fromString(t).popFirst(5))}static empty(){return new k(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Y(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(r,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function vg(r,t,e,n){if(t===!0&&n===!0)throw new O(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Yu(r){if(!k.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ju(r){if(k.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function jl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ko(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function ye(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ko(r);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,t){const e={typeString:r};return t&&(e.value=t),e}function zr(r,t){if(!jl(r))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const s=t[n].typeString,i="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){e=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${n}' field to equal '${i.value}'`;break}}if(e)throw new O(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=-62135596800,tc=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*tc);return new J(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Zu)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tc}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(zr(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Zu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:dt("string",J._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new J(0,0))}static max(){return new U(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=-1;class Fs{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function po(r){return r.fields.find((t=>t.kind===2))}function Oe(r){return r.fields.filter((t=>t.kind!==2))}Fs.UNKNOWN_ID=-1;class ws{constructor(t,e){this.fieldPath=t,this.kind=e}}class Vr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Vr(0,Ft.min())}}function ql(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new J(e+1,0):new J(e,n));return new Ft(s,k.empty(),t)}function zl(r){return new Ft(r.readTime,r.key,En)}class Ft{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ft(U.min(),k.empty(),En)}static max(){return new Ft(U.max(),k.empty(),En)}}function Go(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==$l)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):w.reject(e)}static resolve(t){return new w(((e,n)=>{e(t)}))}static reject(t){return new w(((e,n)=>{n(t)}))}static waitFor(t){return new w(((e,n)=>{let s=0,i=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&e()}),(l=>n(l)))})),a=!0,i===s&&e()}))}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next((s=>s?w.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,i)=>{n.push(e.call(this,s,i))})),this.waitFor(n)}static mapArray(t,e){return new w(((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next((m=>{a[d]=m,++u,u===i&&n(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new w(((n,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="SimpleDb";class ni{static open(t,e,n,s){try{return new ni(e,t.transaction(s,n))}catch(i){throw new pr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new _e,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new pr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=Ho(n.target.error);this.S.reject(new pr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(V(kt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ag(e)}}class Ie{static delete(t){return V(kt,"Removing database:",t),Fe(pl().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!vl())return!1;if(Ie.F())return!0;const t=Os(),e=Ie.M(t),n=0<e&&e<10,s=Gl(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,Ie.M(Os())===12.2&&ct("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(V(kt,"Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new pr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new O(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new O(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new pr(t,a))},s.onupgradeneeded=i=>{V(kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${a.version}`);this.B.q(a,s.transaction,i.oldVersion,this.version).next((()=>{V(kt,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(e=>{const n=e.target;this.L=n.version}),{passive:!0})),this.db.addEventListener("versionchange",(e=>{var n;e.newVersion===null&&(te('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(n=this.databaseDeletedListener)===null||n===void 0||n.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(t){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=t}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const u=ni.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next((d=>(u.v(),d))).catch((d=>(u.abort(d),w.reject(d)))).toPromise();return l.catch((()=>{})),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(V(kt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Gl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class wg{constructor(t){this.$=t,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(t){this.$=t}done(){this.U=!0}G(t){this.K=t}delete(){return Fe(this.$.delete())}}class pr extends O{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Re(r){return r.name==="IndexedDbTransactionError"}class Ag{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(V(kt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(V(kt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Fe(n)}add(t){return V(kt,"ADD",this.store.name,t,t),Fe(this.store.add(t))}get(t){return Fe(this.store.get(t)).next((e=>(e===void 0&&(e=null),V(kt,"GET",this.store.name,t,e),e)))}delete(t){return V(kt,"DELETE",this.store.name,t),Fe(this.store.delete(t))}count(){return V(kt,"COUNT",this.store.name),Fe(this.store.count())}j(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w(((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}}))}{const i=this.cursor(n),a=[];return this.J(i,((u,l)=>{a.push(l)})).next((()=>a))}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}Y(t,e){V(kt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Z=!1;const s=this.cursor(n);return this.J(s,((i,a,u)=>u.delete()))}X(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.J(s,e)}ee(t){const e=this.cursor({});return new w(((n,s)=>{e.onerror=i=>{const a=Ho(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}J(t,e){const n=[];return new w(((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new wg(u),d=e(u.primaryKey,u.value,l);if(d instanceof w){const m=d.catch((g=>(l.done(),w.reject(g))));n.push(m)}l.isDone?s():l.W===null?u.continue():u.continue(l.W)}})).next((()=>w.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Z?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Fe(r){return new w(((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=Ho(n.target.error);e(s)}}))}let ec=!1;function Ho(r){const t=Ie.M(Os());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ec||(ec=!0,setTimeout((()=>{throw n}),0)),n}}return r}const _r="IndexBackfiller";class bg{constructor(t,e){this.asyncQueue=t,this.te=e,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(t){V(_r,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{const e=await this.te.re();V(_r,`Documents written: ${e}`)}catch(e){Re(e)?V(_r,"Ignoring IndexedDB error during index backfill: ",e):await be(e)}await this.ne(6e4)}))}}class Rg{constructor(t,e){this.localStore=t,this.persistence=e}async re(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.ie(e,t)))}ie(t,e){const n=new Set;let s=e,i=!0;return w.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((a=>{if(a!==null&&!n.has(a))return V(_r,`Processing collection: ${a}`),this.se(t,a,s).next((u=>{s-=u,n.add(a)}));i=!1})))).next((()=>e-s))}se(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next((()=>this.oe(s,i))).next((u=>(V(_r,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u)))).next((()=>a.size))}))))}oe(t,e){let n=t;return e.changes.forEach(((s,i)=>{const a=zl(i);Go(a,n)>0&&(n=a)})),new Ft(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Ct.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=-1;function ri(r){return r==null}function Cr(r){return r===0&&1/r==-1/0}function Hl(r){return typeof r=="number"&&Number.isInteger(r)&&!Cr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="";function Rt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=nc(t)),t=Sg(r.get(e),t);return nc(t)}function Sg(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Ls:e+="";break;default:e+=i}}return e}function nc(r){return r+Ls+""}function zt(r){const t=r.length;if(L(t>=2,64408,{path:r}),t===2)return L(r.charAt(0)===Ls&&r.charAt(1)==="",56145,{path:r}),Y.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Ls,i);switch((a<0||a>e)&&M(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:M(61167,{path:r})}i=a+2}return new Y(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="remoteDocuments",$r="owner",sn="owner",Dr="mutationQueues",Pg="userId",Ut="mutations",rc="batchId",je="userMutationsIndex",sc=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r,t){return[r,Rt(t)]}function Wl(r,t,e){return[r,Rt(t),e]}const Vg={},Tn="documentMutations",Bs="remoteDocumentsV14",Cg=["prefixPath","collectionGroup","readTime","documentId"],bs="documentKeyIndex",Dg=["prefixPath","collectionGroup","documentId"],Ql="collectionGroupIndex",xg=["collectionGroup","readTime","prefixPath","documentId"],xr="remoteDocumentGlobal",_o="remoteDocumentGlobalKey",vn="targets",Xl="queryTargetsIndex",Ng=["canonicalId","targetId"],wn="targetDocuments",kg=["targetId","path"],Wo="documentTargetsIndex",Og=["path","targetId"],Us="targetGlobalKey",ze="targetGlobal",Nr="collectionParents",Mg=["collectionId","parent"],An="clientMetadata",Fg="clientId",si="bundles",Lg="bundleId",ii="namedQueries",Bg="name",Qo="indexConfiguration",Ug="indexId",yo="collectionGroupIndex",jg="collectionGroup",yr="indexState",qg=["indexId","uid"],Yl="sequenceNumberIndex",zg=["uid","sequenceNumber"],Ir="indexEntries",$g=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Jl="documentKeyIndex",Kg=["indexId","uid","orderedDocumentKey"],oi="documentOverlays",Gg=["userId","collectionPath","documentId"],Io="collectionPathOverlayIndex",Hg=["userId","collectionPath","largestBatchId"],Zl="collectionGroupOverlayIndex",Wg=["userId","collectionGroup","largestBatchId"],Xo="globals",Qg="name",th=[Dr,Ut,Tn,Me,vn,$r,ze,wn,An,xr,Nr,si,ii],Xg=[...th,oi],eh=[Dr,Ut,Tn,Bs,vn,$r,ze,wn,An,xr,Nr,si,ii,oi],nh=eh,Yo=[...nh,Qo,yr,Ir],Yg=Yo,rh=[...Yo,Xo],Jg=rh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Kl{constructor(t,e){super(),this.ce=t,this.currentSequenceNumber=e}}function mt(r,t){const e=F(r);return Ie.N(e.ce,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Se(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function sh(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||yt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,yt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ps(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ps(this.root,t,this.comparator,!1)}getReverseIterator(){return new ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ps(this.root,t,this.comparator,!0)}}class ps{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class yt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??yt.RED,this.left=s??yt.EMPTY,this.right=i??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new yt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return yt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new yt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oc(this.data.getIterator())}getIteratorFrom(t){return new oc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Z(this.comparator);return e.data=t,e}}class oc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function on(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new Z(ot.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return In(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ih("Invalid base64 string: "+i):i}})(t);return new lt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Zg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(r){if(L(!!r,39018),typeof r=="string"){let t=0;const e=Zg.exec(r);if(L(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ne(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="server_timestamp",ah="__type__",uh="__previous_value__",ch="__local_write_time__";function Jo(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[ah])===null||e===void 0?void 0:e.stringValue)===oh}function ai(r){const t=r.mapValue.fields[uh];return Jo(t)?ai(t):t}function kr(r){const t=ee(r.mapValue.fields[ch].timestampValue);return new J(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(t,e,n,s,i,a,u,l,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m}}const Or="(default)";class He{constructor(t,e){this.projectId=t,this.database=e||Or}static empty(){return new He("","")}get isDefaultDatabase(){return this.database===Or}isEqual(t){return t instanceof He&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo="__type__",lh="__max__",fe={mapValue:{fields:{__type__:{stringValue:lh}}}},ta="__vector__",bn="value",Rs={nullValue:"NULL_VALUE"};function Te(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Jo(r)?4:hh(r)?9007199254740991:ui(r)?10:11:M(28295,{value:r})}function Ht(r,t){if(r===t)return!0;const e=Te(r);if(e!==Te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return kr(r).isEqual(kr(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ee(s.timestampValue),u=ee(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return ne(s.bytesValue).isEqual(ne(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=it(s.doubleValue),u=it(i.doubleValue);return a===u?Cr(a)===Cr(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return In(r.arrayValue.values||[],t.arrayValue.values||[],Ht);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(ic(a)!==ic(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Ht(a[l],u[l])))return!1;return!0})(r,t);default:return M(52216,{left:r})}}function Mr(r,t){return(r.values||[]).find((e=>Ht(e,t)))!==void 0}function ve(r,t){if(r===t)return 0;const e=Te(r),n=Te(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const u=it(i.integerValue||i.doubleValue),l=it(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(r,t);case 3:return ac(r.timestampValue,t.timestampValue);case 4:return ac(kr(r),kr(t));case 5:return go(r.stringValue,t.stringValue);case 6:return(function(i,a){const u=ne(i),l=ne(a);return u.compareTo(l)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=q(u[d],l[d]);if(m!==0)return m}return q(u.length,l.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const u=q(it(i.latitude),it(a.latitude));return u!==0?u:q(it(i.longitude),it(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return uc(r.arrayValue,t.arrayValue);case 10:return(function(i,a){var u,l,d,m;const g=i.fields||{},y=a.fields||{},R=(u=g[bn])===null||u===void 0?void 0:u.arrayValue,C=(l=y[bn])===null||l===void 0?void 0:l.arrayValue,x=q(((d=R?.values)===null||d===void 0?void 0:d.length)||0,((m=C?.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:uc(R,C)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===fe.mapValue&&a===fe.mapValue)return 0;if(i===fe.mapValue)return 1;if(a===fe.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const y=go(l[g],m[g]);if(y!==0)return y;const R=ve(u[l[g]],d[m[g]]);if(R!==0)return R}return q(l.length,m.length)})(r.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function ac(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=ee(r),n=ee(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function uc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=ve(e[s],n[s]);if(i)return i}return q(e.length,n.length)}function Rn(r){return To(r)}function To(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=ee(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return ne(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return k.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=To(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${To(e.fields[a])}`;return s+"}"})(r.mapValue):M(61005,{value:r})}function Ss(r){switch(Te(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ai(r);return t?16+Ss(t):16;case 5:return 2*r.stringValue.length;case 6:return ne(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Ss(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Se(n.fields,((i,a)=>{s+=i.length+Ss(a)})),s})(r.mapValue);default:throw M(13486,{value:r})}}function ea(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function vo(r){return!!r&&"integerValue"in r}function Fr(r){return!!r&&"arrayValue"in r}function cc(r){return!!r&&"nullValue"in r}function lc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Ps(r){return!!r&&"mapValue"in r}function ui(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Zo])===null||e===void 0?void 0:e.stringValue)===ta}function Er(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Se(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Er(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Er(r.arrayValue.values[e]);return t}return Object.assign({},r)}function hh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===lh}const dh={mapValue:{fields:{[Zo]:{stringValue:ta},[bn]:{arrayValue:{}}}}};function ep(r){return"nullValue"in r?Rs:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?ea(He.empty(),k.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ui(r)?dh:{mapValue:{}}:M(35942,{value:r})}function np(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?ea(He.empty(),k.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?dh:"mapValue"in r?ui(r)?{mapValue:{}}:fe:M(61959,{value:r})}function hc(r,t){const e=ve(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function dc(r,t){const e=ve(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ps(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Er(e)}setAll(t){let e=ot.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=Er(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Ps(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Ps(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Se(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new bt(Er(this.value))}}function fh(r){const t=[];return Se(r.fields,((e,n)=>{const s=new ot([e]);if(Ps(n)){const i=fh(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ut(t,0,U.min(),U.min(),U.min(),bt.empty(),0)}static newFoundDocument(t,e,n,s){return new ut(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new ut(t,2,e,U.min(),U.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,U.min(),U.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e){this.position=t,this.inclusive=e}}function fc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=k.comparator(k.fromName(a.referenceValue),e.key):n=ve(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function mc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ht(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t,e="asc"){this.field=t,this.dir=e}}function rp(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{}class K extends mh{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new sp(t,e,n):e==="array-contains"?new ap(t,n):e==="in"?new Eh(t,n):e==="not-in"?new up(t,n):e==="array-contains-any"?new cp(t,n):new K(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new ip(t,n):new op(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ve(e,this.value)):e!==null&&Te(this.value)===Te(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends mh{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new tt(t,e)}matches(t){return Pn(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Pn(r){return r.op==="and"}function wo(r){return r.op==="or"}function na(r){return gh(r)&&Pn(r)}function gh(r){for(const t of r.filters)if(t instanceof tt)return!1;return!0}function Ao(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+Rn(r.value);if(na(r))return r.filters.map((t=>Ao(t))).join(",");{const t=r.filters.map((e=>Ao(e))).join(",");return`${r.op}(${t})`}}function ph(r,t){return r instanceof K?(function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&Ht(n.value,s.value)})(r,t):r instanceof tt?(function(n,s){return s instanceof tt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,u)=>i&&ph(a,s.filters[u])),!0):!1})(r,t):void M(19439)}function _h(r,t){const e=r.filters.concat(t);return tt.create(e,r.op)}function yh(r){return r instanceof K?(function(e){return`${e.field.canonicalString()} ${e.op} ${Rn(e.value)}`})(r):r instanceof tt?(function(e){return e.op.toString()+" {"+e.getFilters().map(yh).join(" ,")+"}"})(r):"Filter"}class sp extends K{constructor(t,e,n){super(t,e,n),this.key=k.fromName(n.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class ip extends K{constructor(t,e){super(t,"in",e),this.keys=Ih("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class op extends K{constructor(t,e){super(t,"not-in",e),this.keys=Ih("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ih(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>k.fromName(n.referenceValue)))}class ap extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Fr(e)&&Mr(e.arrayValue,this.value)}}class Eh extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Mr(this.value.arrayValue,e)}}class up extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if(Mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Mr(this.value.arrayValue,e)}}class cp extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Fr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>Mr(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Pe=null}}function bo(r,t=null,e=[],n=[],s=null,i=null,a=null){return new lp(r,t,e,n,s,i,a)}function We(r){const t=F(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>Ao(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),ri(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Rn(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Rn(n))).join(",")),t.Pe=e}return t.Pe}function Kr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!rp(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ph(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!mc(r.startAt,t.startAt)&&mc(r.endAt,t.endAt)}function qs(r){return k.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function zs(r,t){return r.filters.filter((e=>e instanceof K&&e.field.isEqual(t)))}function gc(r,t,e){let n=Rs,s=!0;for(const i of zs(r,t)){let a=Rs,u=!0;switch(i.op){case"<":case"<=":a=ep(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Rs}hc({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];hc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function pc(r,t,e){let n=fe,s=!0;for(const i of zs(r,t)){let a=fe,u=!0;switch(i.op){case">=":case">":a=np(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=fe}dc({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];dc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Th(r,t,e,n,s,i,a,u){return new ci(r,t,e,n,s,i,a,u)}function li(r){return new ci(r)}function _c(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function hp(r){return r.collectionGroup!==null}function Tr(r){const t=F(r);if(t.Te===null){t.Te=[];const e=new Set;for(const i of t.explicitOrderBy)t.Te.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Z(ot.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Te.push(new js(i,n))})),e.has(ot.keyField().canonicalString())||t.Te.push(new js(ot.keyField(),n))}return t.Te}function Mt(r){const t=F(r);return t.Ie||(t.Ie=dp(t,Tr(r))),t.Ie}function dp(r,t){if(r.limitType==="F")return bo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new js(s.field,i)}));const e=r.endAt?new Sn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Sn(r.startAt.position,r.startAt.inclusive):null;return bo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ro(r,t,e){return new ci(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function hi(r,t){return Kr(Mt(r),Mt(t))&&r.limitType===t.limitType}function vh(r){return`${We(Mt(r))}|lt:${r.limitType}`}function dn(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>yh(s))).join(", ")}]`),ri(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>Rn(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>Rn(s))).join(",")),`Target(${n})`})(Mt(r))}; limitType=${r.limitType})`}function Gr(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):k.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of Tr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,l){const d=fc(a,u,l);return a.inclusive?d<=0:d<0})(n.startAt,Tr(n),s)||n.endAt&&!(function(a,u,l){const d=fc(a,u,l);return a.inclusive?d>=0:d>0})(n.endAt,Tr(n),s))})(r,t)}function wh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ah(r){return(t,e)=>{let n=!1;for(const s of Tr(r)){const i=fp(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function fp(r,t,e){const n=r.field.isKeyField()?k.comparator(t.key,e.key):(function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?ve(l,d):M(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return sh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new rt(k.comparator);function Ot(){return mp}const bh=new rt(k.comparator);function hr(...r){let t=bh;for(const e of r)t=t.insert(e.key,e);return t}function Rh(r){let t=bh;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function $t(){return vr()}function Sh(){return vr()}function vr(){return new re((r=>r.toString()),((r,t)=>r.isEqual(t)))}const gp=new rt(k.comparator),pp=new Z(k.comparator);function $(...r){let t=pp;for(const e of r)t=t.add(e);return t}const _p=new Z(q);function ra(){return _p}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function Ph(r){return{integerValue:""+r}}function yp(r,t){return Hl(t)?Ph(t):sa(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this._=void 0}}function Ip(r,t,e){return r instanceof Lr?(function(s,i){const a={fields:{[ah]:{stringValue:oh},[ch]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Jo(i)&&(i=ai(i)),i&&(a.fields[uh]=i),{mapValue:a}})(e,t):r instanceof Vn?Ch(r,t):r instanceof Cn?Dh(r,t):(function(s,i){const a=Vh(s,i),u=yc(a)+yc(s.Ee);return vo(a)&&vo(s.Ee)?Ph(u):sa(s.serializer,u)})(r,t)}function Ep(r,t,e){return r instanceof Vn?Ch(r,t):r instanceof Cn?Dh(r,t):e}function Vh(r,t){return r instanceof Br?(function(n){return vo(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class Lr extends di{}class Vn extends di{constructor(t){super(),this.elements=t}}function Ch(r,t){const e=xh(t);for(const n of r.elements)e.some((s=>Ht(s,n)))||e.push(n);return{arrayValue:{values:e}}}class Cn extends di{constructor(t){super(),this.elements=t}}function Dh(r,t){let e=xh(t);for(const n of r.elements)e=e.filter((s=>!Ht(s,n)));return{arrayValue:{values:e}}}class Br extends di{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function yc(r){return it(r.integerValue||r.doubleValue)}function xh(r){return Fr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,e){this.field=t,this.transform=e}}function vp(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof Vn&&s instanceof Vn||n instanceof Cn&&s instanceof Cn?In(n.elements,s.elements,Ht):n instanceof Br&&s instanceof Br?Ht(n.Ee,s.Ee):n instanceof Lr&&s instanceof Lr})(r.transform,t.transform)}class wp{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class fi{}function Nh(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ia(r.key,xt.none()):new Ln(r.key,r.data,xt.none());{const e=r.data,n=bt.empty();let s=new Z(ot.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new se(r.key,n,new Dt(s.toArray()),xt.none())}}function Ap(r,t,e){r instanceof Ln?(function(s,i,a){const u=s.value.clone(),l=Ec(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof se?(function(s,i,a){if(!Vs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Ec(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(kh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function wr(r,t,e,n){return r instanceof Ln?(function(i,a,u,l){if(!Vs(i.precondition,a))return u;const d=i.value.clone(),m=Tc(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof se?(function(i,a,u,l){if(!Vs(i.precondition,a))return u;const d=Tc(i.fieldTransforms,l,a),m=a.data;return m.setAll(kh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(r,t,e,n):(function(i,a,u){return Vs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function bp(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Vh(n.transform,s||null);i!=null&&(e===null&&(e=bt.empty()),e.set(n.field,i))}return e||null}function Ic(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&In(n,s,((i,a)=>vp(i,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Ln extends fi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends fi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kh(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function Ec(r,t,e){const n=new Map;L(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Ep(a,u,e[s]))}return n}function Tc(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Ip(i,a,t))}return n}class ia extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oh extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Ap(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=wr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=wr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Sh();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=Nh(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),$())}isEqual(t){return this.batchId===t.batchId&&In(this.mutations,t.mutations,((e,n)=>Ic(e,n)))&&In(this.baseMutations,t.baseMutations,((e,n)=>Ic(e,n)))}}class aa{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let s=(function(){return gp})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new aa(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,G;function Sp(r){switch(r){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function Mh(r){if(r===void 0)return ct("GRPC error has no .code"),P.UNKNOWN;switch(r){case ht.OK:return P.OK;case ht.CANCELLED:return P.CANCELLED;case ht.UNKNOWN:return P.UNKNOWN;case ht.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ht.INTERNAL:return P.INTERNAL;case ht.UNAVAILABLE:return P.UNAVAILABLE;case ht.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ht.NOT_FOUND:return P.NOT_FOUND;case ht.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ht.ABORTED:return P.ABORTED;case ht.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ht.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:r})}}(G=ht||(ht={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new pe([4294967295,4294967295],0);function vc(r){const t=Ll().encode(r),e=new Cl;return e.update(t),new Uint8Array(e.digest())}function wc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new pe([e,n],0),new pe([s,i],0)]}class ca{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new dr(`Invalid padding: ${e}`);if(n<0)throw new dr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new dr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new dr(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=pe.fromNumber(this.fe)}pe(t,e,n){let s=t.add(e.multiply(pe.fromNumber(n)));return s.compare(Pp)===1&&(s=new pe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=vc(t),[n,s]=wc(e);for(let i=0;i<this.hashCount;i++){const a=this.pe(n,s,i);if(!this.ye(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new ca(i,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.fe===0)return;const e=vc(t),[n,s]=wc(e);for(let i=0;i<this.hashCount;i++){const a=this.pe(n,s,i);this.we(a)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Wr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Hr(U.min(),s,new rt(q),Ot(),$())}}class Wr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Wr(n,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e,n,s){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=s}}class Fh{constructor(t,e){this.targetId=t,this.De=e}}class Lh{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Ac{constructor(){this.ve=0,this.Ce=bc(),this.Fe=lt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=$(),e=$(),n=$();return this.Ce.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:i})}})),new Wr(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=bc()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,L(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Vp{constructor(t){this.We=t,this.Ge=new Map,this.ze=Ot(),this.je=_s(),this.Je=_s(),this.He=new rt(q)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((n,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,n=t.De.count,s=this.st(e);if(s){const i=s.target;if(qs(i))if(n===0){const a=new k(i.path);this.Xe(e,a,ut.newNoDocument(a,U.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this.ot(e);if(a!==n){const u=this._t(t),l=u?this.ut(u,t,a):1;if(l!==0){this.rt(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ne(n).toUint8Array()}catch(l){if(l instanceof ih)return te("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ca(a,s,i)}catch(l){return te(l instanceof dr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,i,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((i,a)=>{const u=this.st(a);if(u){if(i.current&&qs(u.target)){const l=new k(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ut.newNoDocument(l,t))}i.Ne&&(e.set(a,i.Le()),i.ke())}}));let n=$();this.Je.forEach(((i,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(t)));const s=new Hr(t,e,this.He,this.ze,n);return this.ze=Ot(),this.je=_s(),this.Je=_s(),this.He=new rt(q),s}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Ac,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new Z(q),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new Z(q),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Ac),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function _s(){return new rt(k.comparator)}function bc(){return new rt(k.comparator)}const Cp={asc:"ASCENDING",desc:"DESCENDING"},Dp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xp={and:"AND",or:"OR"};class Np{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function So(r,t){return r.useProto3Json||ri(t)?t:{value:t}}function Dn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function kp(r,t){return Dn(r,t.toTimestamp())}function Vt(r){return L(!!r,49232),U.fromTimestamp((function(e){const n=ee(e);return new J(n.seconds,n.nanos)})(r))}function la(r,t){return Po(r,t).canonicalString()}function Po(r,t){const e=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Uh(r){const t=Y.fromString(r);return L(Qh(t),10190,{key:t.toString()}),t}function $s(r,t){return la(r.databaseId,t.path)}function $e(r,t){const e=Uh(t);if(e.get(1)!==r.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new k(zh(e))}function jh(r,t){return la(r.databaseId,t)}function qh(r){const t=Uh(r);return t.length===4?Y.emptyPath():zh(t)}function Vo(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zh(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Rc(r,t,e){return{name:$s(r,t),fields:e.value.mapValue.fields}}function Op(r,t,e){const n=$e(r,t.name),s=Vt(t.updateTime),i=t.createTime?Vt(t.createTime):U.min(),a=new bt({mapValue:{fields:t.fields}}),u=ut.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Mp(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const m=d.code===void 0?P.UNKNOWN:Mh(d.code);return new O(m,d.message||"")})(a);e=new Lh(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=$e(r,n.document.name),i=Vt(n.document.updateTime),a=n.document.createTime?Vt(n.document.createTime):U.min(),u=new bt({mapValue:{fields:n.document.fields}}),l=ut.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Cs(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=$e(r,n.document),i=n.readTime?Vt(n.readTime):U.min(),a=ut.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Cs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=$e(r,n.document),i=n.removedTargetIds||[];e=new Cs([],i,s,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Rp(s,i),u=n.targetId;e=new Fh(u,a)}}return e}function Ks(r,t){let e;if(t instanceof Ln)e={update:Rc(r,t.key,t.value)};else if(t instanceof ia)e={delete:$s(r,t.key)};else if(t instanceof se)e={update:Rc(r,t.key,t.data),updateMask:qp(t.fieldMask)};else{if(!(t instanceof Oh))return M(16599,{Rt:t.type});e={verify:$s(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,a){const u=a.transform;if(u instanceof Lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Cn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Br)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw M(20930,{transform:a.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:kp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M(27497)})(r,t.precondition)),e}function Co(r,t){const e=t.currentDocument?(function(i){return i.updateTime!==void 0?xt.updateTime(Vt(i.updateTime)):i.exists!==void 0?xt.exists(i.exists):xt.none()})(t.currentDocument):xt.none(),n=t.updateTransforms?t.updateTransforms.map((s=>(function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new Lr;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new Vn(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new Cn(m)}else"increment"in u?l=new Br(a,u.increment):M(16584,{proto:u});const d=ot.fromServerFormat(u.fieldPath);return new Tp(d,l)})(r,s))):[];if(t.update){t.update.name;const s=$e(r,t.update.name),i=new bt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=(function(l){const d=l.fieldPaths||[];return new Dt(d.map((m=>ot.fromServerFormat(m))))})(t.updateMask);return new se(s,i,a,e,n)}return new Ln(s,i,e,n)}if(t.delete){const s=$e(r,t.delete);return new ia(s,e)}if(t.verify){const s=$e(r,t.verify);return new Oh(s,e)}return M(1463,{proto:t})}function Fp(r,t){return r&&r.length>0?(L(t!==void 0,14353),r.map((e=>(function(s,i){let a=s.updateTime?Vt(s.updateTime):Vt(i);return a.isEqual(U.min())&&(a=Vt(i)),new wp(a,s.transformResults||[])})(e,t)))):[]}function $h(r,t){return{documents:[jh(r,t.path)]}}function Kh(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=jh(r,s);const i=(function(d){if(d.length!==0)return Wh(tt.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(y){return{field:fn(y.field),direction:Bp(y.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=So(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:s}}function Gh(r){let t=qh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=(function(g){const y=Hh(g);return y instanceof tt&&na(y)?y.getFilters():[y]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((y=>(function(C){return new js(mn(C.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(y)))})(e.orderBy));let u=null;e.limit&&(u=(function(g){let y;return y=typeof g=="object"?g.value:g,ri(y)?null:y})(e.limit));let l=null;e.startAt&&(l=(function(g){const y=!!g.before,R=g.values||[];return new Sn(R,y)})(e.startAt));let d=null;return e.endAt&&(d=(function(g){const y=!g.before,R=g.values||[];return new Sn(R,y)})(e.endAt)),Th(t,s,a,i,u,"F",l,d)}function Lp(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Hh(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=mn(e.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=mn(e.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=mn(e.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=mn(e.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(e){return K.create(mn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return tt.create(e.compositeFilter.filters.map((n=>Hh(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(r):M(30097,{filter:r})}function Bp(r){return Cp[r]}function Up(r){return Dp[r]}function jp(r){return xp[r]}function fn(r){return{fieldPath:r.canonicalString()}}function mn(r){return ot.fromServerFormat(r.fieldPath)}function Wh(r){return r instanceof K?(function(e){if(e.op==="=="){if(lc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NAN"}};if(cc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(lc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NAN"}};if(cc(e.value))return{unaryFilter:{field:fn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fn(e.field),op:Up(e.op),value:e.value}}})(r):r instanceof tt?(function(e){const n=e.getFilters().map((s=>Wh(s)));return n.length===1?n[0]:{compositeFilter:{op:jp(e.op),filters:n}}})(r):M(54877,{filter:r})}function qp(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e,n,s,i=U.min(),a=U.min(),u=lt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.gt=t}}function zp(r,t){let e;if(t.document)e=Op(r.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=k.fromSegments(t.noDocument.path),s=Xe(t.noDocument.readTime);e=ut.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return M(56709);{const n=k.fromSegments(t.unknownDocument.path),s=Xe(t.unknownDocument.version);e=ut.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime((function(s){const i=new J(s[0],s[1]);return U.fromTimestamp(i)})(t.readTime)),e}function Sc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Gs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=(function(i,a){return{name:$s(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Dn(i,a.version.toTimestamp()),createTime:Dn(i,a.createTime.toTimestamp())}})(r.gt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Qe(t.version)};else{if(!t.isUnknownDocument())return M(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:Qe(t.version)}}return n}function Gs(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Qe(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Xe(r){const t=new J(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function Le(r,t){const e=(t.baseMutations||[]).map((i=>Co(r.gt,i)));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map((i=>Co(r.gt,i))),s=J.fromMillis(t.localWriteTimeMs);return new oa(t.batchId,s,e,n)}function fr(r){const t=Xe(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Xe(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Mt(li(qh(i.documents[0])))})(r.query):(function(i){return Mt(Gh(i))})(r.query),new Yt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function Yh(r,t){const e=Qe(t.snapshotVersion),n=Qe(t.lastLimboFreeSnapshotVersion);let s;s=qs(t.target)?$h(r.gt,t.target):Kh(r.gt,t.target).Vt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:We(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Jh(r){const t=Gh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ro(t,t.limit,"L"):t}function to(r,t){return new ua(t.largestBatchId,Co(r.gt,t.overlayMutation))}function Pc(r,t){const e=t.path.lastSegment();return[r,Rt(t.path.popLast()),e]}function Vc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Qe(n.readTime),documentKey:Rt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{getBundleMetadata(t,e){return Cc(t).get(e).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Xe(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(t,e){return Cc(t).put((function(s){return{bundleId:s.id,createTime:Qe(Vt(s.createTime)),version:s.version}})(e))}getNamedQuery(t,e){return Dc(t).get(e).next((n=>{if(n)return(function(i){return{name:i.name,query:Jh(i.bundledQuery),readTime:Xe(i.readTime)}})(n)}))}saveNamedQuery(t,e){return Dc(t).put((function(s){return{name:s.name,readTime:Qe(Vt(s.readTime)),bundledQuery:s.bundledQuery}})(e))}}function Cc(r){return mt(r,si)}function Dc(r){return mt(r,ii)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e){this.serializer=t,this.userId=e}static yt(t,e){const n=e.uid||"";return new mi(t,n)}getOverlay(t,e){return ir(t).get(Pc(this.userId,e)).next((n=>n?to(this.serializer,n):null))}getOverlays(t,e){const n=$t();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){const s=[];return n.forEach(((i,a)=>{const u=new ua(e,a);s.push(this.wt(t,u))})),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((a=>s.add(Rt(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(ir(t).Y(Io,u))})),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=$t(),i=Rt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ir(t).j(Io,a).next((u=>{for(const l of u){const d=to(this.serializer,l);s.set(d.getKey(),d)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const i=$t();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ir(t).X({index:Zl,range:u},((l,d,m)=>{const g=to(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()})).next((()=>i))}wt(t,e){return ir(t).put((function(s,i,a){const[u,l,d]=Pc(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ks(s.gt,a.mutation)}})(this.serializer,this.userId,e))}}function ir(r){return mt(r,oi)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{St(t){return mt(t,Xo)}getSessionToken(t){return this.St(t).get("sessionToken").next((e=>{const n=e?.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING}))}setSessionToken(t,e){return this.St(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(){}bt(t,e){this.Dt(t,e),e.vt()}Dt(t,e){if("nullValue"in t)this.Ct(e,5);else if("booleanValue"in t)this.Ct(e,10),e.Ft(t.booleanValue?1:0);else if("integerValue"in t)this.Ct(e,15),e.Ft(it(t.integerValue));else if("doubleValue"in t){const n=it(t.doubleValue);isNaN(n)?this.Ct(e,13):(this.Ct(e,15),Cr(n)?e.Ft(0):e.Ft(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ct(e,20),typeof n=="string"&&(n=ee(n)),e.Mt(`${n.seconds||""}`),e.Ft(n.nanos||0)}else if("stringValue"in t)this.xt(t.stringValue,e),this.Ot(e);else if("bytesValue"in t)this.Ct(e,30),e.Nt(ne(t.bytesValue)),this.Ot(e);else if("referenceValue"in t)this.Bt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ct(e,45),e.Ft(n.latitude||0),e.Ft(n.longitude||0)}else"mapValue"in t?hh(t)?this.Ct(e,Number.MAX_SAFE_INTEGER):ui(t)?this.Lt(t.mapValue,e):(this.kt(t.mapValue,e),this.Ot(e)):"arrayValue"in t?(this.qt(t.arrayValue,e),this.Ot(e)):M(19022,{Qt:t})}xt(t,e){this.Ct(e,25),this.$t(t,e)}$t(t,e){e.Mt(t)}kt(t,e){const n=t.fields||{};this.Ct(e,55);for(const s of Object.keys(n))this.xt(s,e),this.Dt(n[s],e)}Lt(t,e){var n,s;const i=t.fields||{};this.Ct(e,53);const a=bn,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Ct(e,15),e.Ft(it(u)),this.xt(a,e),this.Dt(i[a],e)}qt(t,e){const n=t.values||[];this.Ct(e,50);for(const s of n)this.Dt(s,e)}Bt(t,e){this.Ct(e,37),k.fromName(t).path.forEach((n=>{this.Ct(e,60),this.$t(n,e)}))}Ct(t,e){t.Ft(e)}Ot(t){t.Ft(2)}}Be.Ut=new Be;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=255;function Gp(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function xc(r){const t=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=Gp(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(t/8)}class Hp{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Wt(n.value),n=e.next();this.Gt()}zt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.jt(n.value),n=e.next();this.Jt()}Ht(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Wt(n);else if(n<2048)this.Wt(960|n>>>6),this.Wt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Wt(480|n>>>12),this.Wt(128|63&n>>>6),this.Wt(128|63&n);else{const s=e.codePointAt(0);this.Wt(240|s>>>18),this.Wt(128|63&s>>>12),this.Wt(128|63&s>>>6),this.Wt(128|63&s)}}this.Gt()}Yt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.jt(n);else if(n<2048)this.jt(960|n>>>6),this.jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.jt(480|n>>>12),this.jt(128|63&n>>>6),this.jt(128|63&n);else{const s=e.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Zt(t){const e=this.Xt(t),n=xc(e);this.en(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}tn(t){const e=this.Xt(t),n=xc(e);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}nn(){this.rn(an),this.rn(255)}sn(){this._n(an),this._n(255)}reset(){this.position=0}seed(t){this.en(t.length),this.buffer.set(t,this.position),this.position+=t.length}an(){return this.buffer.slice(0,this.position)}Xt(t){const e=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Wt(t){const e=255&t;e===0?(this.rn(0),this.rn(255)):e===an?(this.rn(an),this.rn(0)):this.rn(e)}jt(t){const e=255&t;e===0?(this._n(0),this._n(255)):e===an?(this._n(an),this._n(0)):this._n(t)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(t){this.en(1),this.buffer[this.position++]=t}_n(t){this.en(1),this.buffer[this.position++]=~t}en(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Wp{constructor(t){this.un=t}Nt(t){this.un.Kt(t)}Mt(t){this.un.Ht(t)}Ft(t){this.un.Zt(t)}vt(){this.un.nn()}}class Qp{constructor(t){this.un=t}Nt(t){this.un.zt(t)}Mt(t){this.un.Yt(t)}Ft(t){this.un.tn(t)}vt(){this.un.sn()}}class or{constructor(){this.un=new Hp,this.cn=new Wp(this.un),this.ln=new Qp(this.un)}seed(t){this.un.seed(t)}hn(t){return t===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e,n,s){this.Pn=t,this.Tn=e,this.In=n,this.dn=s}En(){const t=this.dn.length,e=t===0||this.dn[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.dn,0),e!==t?n.set([0],this.dn.length):++n[n.length-1],new Ue(this.Pn,this.Tn,this.In,n)}An(t,e,n){return{indexId:this.Pn,uid:t,arrayValue:Ds(this.In),directionalValue:Ds(this.dn),orderedDocumentKey:Ds(e),documentKey:n.path.toArray()}}Rn(t,e,n){const s=this.An(t,e,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ce(r,t){let e=r.Pn-t.Pn;return e!==0?e:(e=Nc(r.In,t.In),e!==0?e:(e=Nc(r.dn,t.dn),e!==0?e:k.comparator(r.Tn,t.Tn)))}function Nc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}function Ds(r){return Tl()?(function(e){let n="";for(let s=0;s<e.length;s++)n+=String.fromCharCode(e[s]);return n})(r):r}function kc(r){return typeof r!="string"?r:(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(r)}class Oc{constructor(t){this.Vn=new Z(((e,n)=>ot.comparator(e.field,n.field))),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.mn=t.orderBy,this.fn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Vn=this.Vn.add(n):this.fn.push(n)}}get gn(){return this.Vn.size>1}pn(t){if(L(t.collectionGroup===this.collectionId,49279),this.gn)return!1;const e=po(t);if(e!==void 0&&!this.yn(e))return!1;const n=Oe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.yn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Vn.size>0){const u=this.Vn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.wn(u,l)||!this.Sn(this.mn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.mn.length||!this.Sn(this.mn[a++],u))return!1}return!0}bn(){if(this.gn)return null;let t=new Z(ot.comparator);const e=[];for(const n of this.fn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ws(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ws(n.field,0))}for(const n of this.mn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ws(n.field,n.dir==="asc"?0:1)));return new Fs(Fs.UNKNOWN_ID,this.collectionId,e,Vr.empty())}yn(t){for(const e of this.fn)if(this.wn(e,t))return!0;return!1}wn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}Sn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(r){var t,e;if(L(r instanceof K||r instanceof tt,20012),r instanceof K){if(r instanceof Eh){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map((i=>K.create(r.field,"==",i))))||[];return tt.create(s,"or")}return r}const n=r.filters.map((s=>Zh(s)));return tt.create(n,r.op)}function Xp(r){if(r.getFilters().length===0)return[];const t=No(Zh(r));return L(td(t),7391),Do(t)||xo(t)?[t]:t.getFilters()}function Do(r){return r instanceof K}function xo(r){return r instanceof tt&&na(r)}function td(r){return Do(r)||xo(r)||(function(e){if(e instanceof tt&&wo(e)){for(const n of e.getFilters())if(!Do(n)&&!xo(n))return!1;return!0}return!1})(r)}function No(r){if(L(r instanceof K||r instanceof tt,34018),r instanceof K)return r;if(r.filters.length===1)return No(r.filters[0]);const t=r.filters.map((n=>No(n)));let e=tt.create(t,r.op);return e=Hs(e),td(e)?e:(L(e instanceof tt,64498),L(Pn(e),40251),L(e.filters.length>1,57927),e.filters.reduce(((n,s)=>ha(n,s))))}function ha(r,t){let e;return L(r instanceof K||r instanceof tt,38388),L(t instanceof K||t instanceof tt,25473),e=r instanceof K?t instanceof K?(function(s,i){return tt.create([s,i],"and")})(r,t):Mc(r,t):t instanceof K?Mc(t,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),Pn(s)&&Pn(i))return _h(s,i.getFilters());const a=wo(s)?s:i,u=wo(s)?i:s,l=a.filters.map((d=>ha(d,u)));return tt.create(l,"or")})(r,t),Hs(e)}function Mc(r,t){if(Pn(t))return _h(t,r.getFilters());{const e=t.filters.map((n=>ha(r,n)));return tt.create(e,"or")}}function Hs(r){if(L(r instanceof K||r instanceof tt,11850),r instanceof K)return r;const t=r.getFilters();if(t.length===1)return Hs(t[0]);if(gh(r))return r;const e=t.map((s=>Hs(s))),n=[];return e.forEach((s=>{s instanceof K?n.push(s):s instanceof tt&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:tt.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.Dn=new da}addToCollectionParentIndex(t,e){return this.Dn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Ft.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Ft.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class da{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Z(Y.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Z(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="IndexedDbIndexManager",ys=new Uint8Array(0);class Jp{constructor(t,e){this.databaseId=e,this.vn=new da,this.Cn=new re((n=>We(n)),((n,s)=>Kr(n,s))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.vn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.vn.add(e)}));const i={collectionId:n,parent:Rt(s)};return Lc(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Bl(e),""],!1,!0);return Lc(t).j(s).next((i=>{for(const a of i){if(a.collectionId!==e)break;n.push(zt(a.parent))}return n}))}addFieldIndex(t,e){const n=ar(t),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=cn(t);return i.next((u=>{a.put(Vc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))}))}return i.next()}deleteFieldIndex(t,e){const n=ar(t),s=cn(t),i=un(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}deleteAllFieldIndexes(t){const e=ar(t),n=un(t),s=cn(t);return e.Y().next((()=>n.Y())).next((()=>s.Y()))}createTargetIndexes(t,e){return w.forEach(this.Fn(e),(n=>this.getIndexType(t,n).next((s=>{if(s===0||s===1){const i=new Oc(n).bn();if(i!=null)return this.addFieldIndex(t,i)}}))))}getDocumentsMatchingTarget(t,e){const n=un(t);let s=!0;const i=new Map;return w.forEach(this.Fn(e),(a=>this.Mn(t,a).next((u=>{s&&(s=!!u),i.set(a,u)})))).next((()=>{if(s){let a=$();const u=[];return w.forEach(i,((l,d)=>{V(Fc,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((W=>`${W.fieldPath}:${W.kind}`)).join(",")}`})(l)} to execute ${We(e)}`);const m=(function(B,W){const nt=po(W);if(nt===void 0)return null;for(const Q of zs(B,nt.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null})(d,l),g=(function(B,W){const nt=new Map;for(const Q of Oe(W))for(const E of zs(B,Q.fieldPath))switch(E.op){case"==":case"in":nt.set(Q.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return nt.set(Q.fieldPath.canonicalString(),E.value),Array.from(nt.values())}return null})(d,l),y=(function(B,W){const nt=[];let Q=!0;for(const E of Oe(W)){const p=E.kind===0?gc(B,E.fieldPath,B.startAt):pc(B,E.fieldPath,B.startAt);nt.push(p.value),Q&&(Q=p.inclusive)}return new Sn(nt,Q)})(d,l),R=(function(B,W){const nt=[];let Q=!0;for(const E of Oe(W)){const p=E.kind===0?pc(B,E.fieldPath,B.endAt):gc(B,E.fieldPath,B.endAt);nt.push(p.value),Q&&(Q=p.inclusive)}return new Sn(nt,Q)})(d,l),C=this.xn(l,d,y),x=this.xn(l,d,R),D=this.On(l,d,g),z=this.Nn(l.indexId,m,C,y.inclusive,x,R.inclusive,D);return w.forEach(z,(j=>n.H(j,e.limit).next((B=>{B.forEach((W=>{const nt=k.fromSegments(W.documentKey);a.has(nt)||(a=a.add(nt),u.push(nt))}))}))))})).next((()=>u))}return w.resolve(null)}))}Fn(t){let e=this.Cn.get(t);return e||(t.filters.length===0?e=[t]:e=Xp(tt.create(t.filters,"and")).map((n=>bo(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt))),this.Cn.set(t,e),e)}Nn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let g=0;g<l;++g){const y=e?this.Bn(e[g/d]):ys,R=this.Ln(t,y,n[g%d],s),C=this.kn(t,y,i[g%d],a),x=u.map((D=>this.Ln(t,y,D,!0)));m.push(...this.createRange(R,C,x))}return m}Ln(t,e,n,s){const i=new Ue(t,k.empty(),e,n);return s?i:i.En()}kn(t,e,n,s){const i=new Ue(t,k.empty(),e,n);return s?i.En():i}Mn(t,e){const n=new Oc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((i=>{let a=null;for(const u of i)n.pn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(t,e){let n=2;const s=this.Fn(e);return w.forEach(s,(i=>this.Mn(t,i).next((a=>{a?n!==0&&a.fields.length<(function(l){let d=new Z(ot.comparator),m=!1;for(const g of l.filters)for(const y of g.getFlattenedFilters())y.field.isKeyField()||(y.op==="array-contains"||y.op==="array-contains-any"?m=!0:d=d.add(y.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(e)&&s.length>1&&n===2?1:n))}qn(t,e){const n=new or;for(const s of Oe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.hn(s.kind);Be.Ut.bt(i,a)}return n.an()}Bn(t){const e=new or;return Be.Ut.bt(t,e.hn(0)),e.an()}Qn(t,e){const n=new or;return Be.Ut.bt(ea(this.databaseId,e),n.hn((function(i){const a=Oe(i);return a.length===0?0:a[a.length-1].kind})(t))),n.an()}On(t,e,n){if(n===null)return[];let s=[];s.push(new or);let i=0;for(const a of Oe(t)){const u=n[i++];for(const l of s)if(this.$n(e,a.fieldPath)&&Fr(u))s=this.Un(s,a,u);else{const d=l.hn(a.kind);Be.Ut.bt(u,d)}}return this.Kn(s)}xn(t,e,n){return this.On(t,e,n.position)}Kn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].an();return e}Un(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new or;l.seed(u.an()),Be.Ut.bt(a,l.hn(e.kind)),i.push(l)}return i}$n(t,e){return!!t.filters.find((n=>n instanceof K&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(t,e){const n=ar(t),s=cn(t);return(e?n.j(yo,IDBKeyRange.bound(e,e)):n.j()).next((i=>{const a=[];return w.forEach(i,(u=>s.get([u.indexId,this.uid]).next((l=>{a.push((function(m,g){const y=g?new Vr(g.sequenceNumber,new Ft(Xe(g.readTime),new k(zt(g.documentKey)),g.largestBatchId)):Vr.empty(),R=m.fields.map((([C,x])=>new ws(ot.fromServerFormat(C),x)));return new Fs(m.indexId,m.collectionGroup,R,y)})(u,l))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((e=>e.length===0?null:(e.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=ar(t),i=cn(t);return this.Wn(t).next((a=>s.j(yo,IDBKeyRange.bound(e,e)).next((u=>w.forEach(u,(l=>i.put(Vc(l.indexId,this.uid,a,n))))))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,((s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),w.forEach(u,(l=>this.Gn(t,s,l).next((d=>{const m=this.zn(i,l);return d.isEqual(m)?w.resolve():this.jn(t,i,l,d,m)})))))))}))}Jn(t,e,n,s){return un(t).put(s.An(this.uid,this.Qn(n,e.key),e.key))}Hn(t,e,n,s){return un(t).delete(s.Rn(this.uid,this.Qn(n,e.key),e.key))}Gn(t,e,n){const s=un(t);let i=new Z(ce);return s.X({index:Jl,range:IDBKeyRange.only([n.indexId,this.uid,Ds(this.Qn(n,e))])},((a,u)=>{i=i.add(new Ue(n.indexId,e,kc(u.arrayValue),kc(u.directionalValue)))})).next((()=>i))}zn(t,e){let n=new Z(ce);const s=this.qn(e,t);if(s==null)return n;const i=po(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Fr(a))for(const u of a.arrayValue.values||[])n=n.add(new Ue(e.indexId,t.key,this.Bn(u),s))}else n=n.add(new Ue(e.indexId,t.key,ys,s));return n}jn(t,e,n,s,i){V(Fc,"Updating index entries for document '%s'",e.key);const a=[];return(function(l,d,m,g,y){const R=l.getIterator(),C=d.getIterator();let x=on(R),D=on(C);for(;x||D;){let z=!1,j=!1;if(x&&D){const B=m(x,D);B<0?j=!0:B>0&&(z=!0)}else x!=null?j=!0:z=!0;z?(g(D),D=on(C)):j?(y(x),x=on(R)):(x=on(R),D=on(C))}})(s,i,ce,(u=>{a.push(this.Jn(t,e,n,u))}),(u=>{a.push(this.Hn(t,e,n,u))})),w.waitFor(a)}Wn(t){let e=1;return cn(t).X({index:Yl,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),e=s.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((a,u)=>ce(a,u))).filter(((a,u,l)=>!u||ce(a,l[u-1])!==0));const s=[];s.push(t);for(const a of n){const u=ce(a,t),l=ce(a,e);if(u===0)s[0]=t.En();else if(u>0&&l<0)s.push(a),s.push(a.En());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Yn(s[a],s[a+1]))return[];const u=s[a].Rn(this.uid,ys,k.empty()),l=s[a+1].Rn(this.uid,ys,k.empty());i.push(IDBKeyRange.bound(u,l))}return i}Yn(t,e){return ce(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Bc)}getMinOffset(t,e){return w.mapArray(this.Fn(e),(n=>this.Mn(t,n).next((s=>s||M(44426))))).next(Bc)}}function Lc(r){return mt(r,Nr)}function un(r){return mt(r,Ir)}function ar(r){return mt(r,Qo)}function cn(r){return mt(r,yr)}function Bc(r){L(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Go(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ft(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ed=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(r,t,e){const n=r.store(Ut),s=r.store(Tn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.X({range:a},((m,g,y)=>(u++,y.delete())));i.push(l.next((()=>{L(u===1,47070,{batchId:e.batchId})})));const d=[];for(const m of e.mutations){const g=Wl(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return w.waitFor(i).next((()=>d))}function Ws(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw M(14731);t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(ed,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);class gi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Zn={}}static yt(t,e,n,s){L(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new gi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return le(t).X({index:je,range:n},((s,i,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const i=gn(t),a=le(t);return a.add({}).next((u=>{L(typeof u=="number",49019);const l=new oa(u,e,n,s),d=(function(R,C,x){const D=x.baseMutations.map((j=>Ks(R.gt,j))),z=x.mutations.map((j=>Ks(R.gt,j)));return{userId:C,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:D,mutations:z}})(this.serializer,this.userId,l),m=[];let g=new Z(((y,R)=>q(y.canonicalString(),R.canonicalString())));for(const y of s){const R=Wl(this.userId,y.key.path,u);g=g.add(y.key.path.popLast()),m.push(a.put(d)),m.push(i.put(R,Vg))}return g.forEach((y=>{m.push(this.indexManager.addToCollectionParentIndex(t,y))})),t.addOnCommittedListener((()=>{this.Zn[u]=l.keys()})),w.waitFor(m).next((()=>l))}))}lookupMutationBatch(t,e){return le(t).get(e).next((n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Le(this.serializer,n)):null))}Xn(t,e){return this.Zn[e]?w.resolve(this.Zn[e]):this.lookupMutationBatch(t,e).next((n=>{if(n){const s=n.keys();return this.Zn[e]=s,s}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return le(t).X({index:je,range:s},((a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{er:n}),i=Le(this.serializer,u)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=qe;return le(t).X({index:je,range:e,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,qe],[this.userId,Number.POSITIVE_INFINITY]);return le(t).j(je,e).next((n=>n.map((s=>Le(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=As(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return gn(t).X({range:s},((a,u,l)=>{const[d,m,g]=a,y=zt(m);if(d===this.userId&&e.path.isEqual(y))return le(t).get(g).next((R=>{if(!R)throw M(61480,{tr:a,batchId:g});L(R.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:R.userId,batchId:g}),i.push(Le(this.serializer,R))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(q);const s=[];return e.forEach((i=>{const a=As(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=gn(t).X({range:u},((d,m,g)=>{const[y,R,C]=d,x=zt(R);y===this.userId&&i.path.isEqual(x)?n=n.add(C):g.done()}));s.push(l)})),w.waitFor(s).next((()=>this.nr(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=As(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new Z(q);return gn(t).X({range:a},((l,d,m)=>{const[g,y,R]=l,C=zt(y);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(R)):m.done()})).next((()=>this.nr(t,u)))}nr(t,e){const n=[],s=[];return e.forEach((i=>{s.push(le(t).get(i).next((a=>{if(a===null)throw M(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Le(this.serializer,a))})))})),w.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return nd(t.ce,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.rr(e.batchId)})),w.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))))}rr(t){delete this.Zn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return gn(t).X({range:n},((i,a,u)=>{if(i[0]===this.userId){const l=zt(i[1]);s.push(l)}else u.done()})).next((()=>{L(s.length===0,56720,{ir:s.map((i=>i.canonicalString()))})}))}))}containsKey(t,e){return rd(t,this.userId,e)}sr(t){return sd(t).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:qe,lastStreamToken:""}))}}function rd(r,t,e){const n=As(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return gn(r).X({range:i,Z:!0},((u,l,d)=>{const[m,g,y]=u;m===t&&g===s&&(a=!0),d.done()})).next((()=>a))}function le(r){return mt(r,Ut)}function gn(r){return mt(r,Tn)}function sd(r){return mt(r,Dr)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Ye(0)}static ur(){return new Ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.cr(t).next((e=>{const n=new Ye(e.highestTargetId);return e.highestTargetId=n.next(),this.lr(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.cr(t).next((e=>U.fromTimestamp(new J(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.cr(t).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.cr(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.lr(t,s))))}addTargetData(t,e){return this.hr(t,e).next((()=>this.cr(t).next((n=>(n.targetCount+=1,this.Pr(e,n),this.lr(t,n))))))}updateTargetData(t,e){return this.hr(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>ln(t).delete(e.targetId))).next((()=>this.cr(t))).next((n=>(L(n.targetCount>0,8065),n.targetCount-=1,this.lr(t,n))))}removeTargets(t,e,n){let s=0;const i=[];return ln(t).X(((a,u)=>{const l=fr(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))})).next((()=>w.waitFor(i))).next((()=>s))}forEachTarget(t,e){return ln(t).X(((n,s)=>{const i=fr(s);e(i)}))}cr(t){return jc(t).get(Us).next((e=>(L(e!==null,2888),e)))}lr(t,e){return jc(t).put(Us,e)}hr(t,e){return ln(t).put(Yh(this.serializer,e))}Pr(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.cr(t).next((e=>e.targetCount))}getTargetData(t,e){const n=We(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return ln(t).X({range:s,index:Xl},((a,u,l)=>{const d=fr(u);Kr(e,d.target)&&(i=d,l.done())})).next((()=>i))}addMatchingKeys(t,e,n){const s=[],i=de(t);return e.forEach((a=>{const u=Rt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))})),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=de(t);return w.forEach(e,(i=>{const a=Rt(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])}))}removeMatchingKeysForTargetId(t,e){const n=de(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=de(t);let i=$();return s.X({range:n,Z:!0},((a,u,l)=>{const d=zt(a[1]),m=new k(d);i=i.add(m)})).next((()=>i))}containsKey(t,e){const n=Rt(e.path),s=IDBKeyRange.bound([n],[Bl(n)],!1,!0);let i=0;return de(t).X({index:Wo,Z:!0,range:s},(([a,u],l,d)=>{a!==0&&(i++,d.done())})).next((()=>i>0))}Et(t,e){return ln(t).get(e).next((n=>n?fr(n):null))}}function ln(r){return mt(r,vn)}function jc(r){return mt(r,ze)}function de(r){return mt(r,wn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="LruGarbageCollector",id=1048576;function zc([r,t],[e,n]){const s=q(r,e);return s===0?q(t,n):s}class t_{constructor(t){this.Tr=t,this.buffer=new Z(zc),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();zc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class od{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){V(qc,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Re(e)?V(qc,"Ignoring IndexedDB error during garbage collection: ",e):await be(e)}await this.Rr(3e5)}))}}class e_{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Ct.ue);const n=new t_(e);return this.Vr.forEachTarget(t,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Uc)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uc):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(n=g,u=Date.now(),this.removeTargets(t,n,e)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n)))).next((g=>(d=Date.now(),hn()<=H.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function ad(r,t){return new e_(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(t,e){this.db=t,this.garbageCollector=ad(this,e)}mr(t){const e=this.yr(t);return this.db.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}gr(t,e){return this.wr(t,((n,s)=>e(s)))}addReference(t,e,n){return Is(t,n)}removeReference(t,e,n){return Is(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Is(t,e)}Sr(t,e){return(function(s,i){let a=!1;return sd(s).ee((u=>rd(s,u,i).next((l=>(l&&(a=!0),w.resolve(!l)))))).next((()=>a))})(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.wr(t,((a,u)=>{if(u<=e){const l=this.Sr(t,a).next((d=>{if(!d)return i++,n.getEntry(t,a).next((()=>(n.removeEntry(a,U.min()),de(t).delete((function(g){return[0,Rt(g.path)]})(a)))))}));s.push(l)}})).next((()=>w.waitFor(s))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Is(t,e)}wr(t,e){const n=de(t);let s,i=Ct.ue;return n.X({index:Wo},(([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Ct.ue&&e(new k(zt(s)),i),i=d,s=l):i=Ct.ue})).next((()=>{i!==Ct.ue&&e(new k(zt(s)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Is(r,t){return de(r).put((function(n,s){return{targetId:0,path:Rt(n.path),sequenceNumber:s}})(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.changes=new re((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Ne(t).put(n)}removeEntry(t,e,n){return Ne(t).delete((function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Gs(a),u[u.length-1]]})(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.br(t,n))))}getEntry(t,e){let n=ut.newInvalidDocument(e);return Ne(t).X({index:bs,range:IDBKeyRange.only(ur(e))},((s,i)=>{n=this.Dr(e,i)})).next((()=>n))}vr(t,e){let n={size:0,document:ut.newInvalidDocument(e)};return Ne(t).X({index:bs,range:IDBKeyRange.only(ur(e))},((s,i)=>{n={document:this.Dr(e,i),size:Ws(i)}})).next((()=>n))}getEntries(t,e){let n=Ot();return this.Cr(t,e,((s,i)=>{const a=this.Dr(s,i);n=n.insert(s,a)})).next((()=>n))}Fr(t,e){let n=Ot(),s=new rt(k.comparator);return this.Cr(t,e,((i,a)=>{const u=this.Dr(i,a);n=n.insert(i,u),s=s.insert(i,Ws(a))})).next((()=>({documents:n,Mr:s})))}Cr(t,e,n){if(e.isEmpty())return w.resolve();let s=new Z(Gc);e.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(ur(s.first()),ur(s.last())),a=s.getIterator();let u=a.getNext();return Ne(t).X({index:bs,range:i},((l,d,m)=>{const g=k.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Gc(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.G(ur(u)):m.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Gs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ne(t).j(IDBKeyRange.bound(u,l,!0)).next((d=>{i?.incrementDocumentReadCount(d.length);let m=Ot();for(const g of d){const y=this.Dr(k.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);y.isFoundDocument()&&(Gr(e,y)||s.has(y.key))&&(m=m.insert(y.key,y))}return m}))}getAllFromCollectionGroup(t,e,n,s){let i=Ot();const a=Kc(e,n),u=Kc(e,Ft.max());return Ne(t).X({index:Ql,range:IDBKeyRange.bound(a,u,!0)},((l,d,m)=>{const g=this.Dr(k.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()})).next((()=>i))}newChangeBuffer(t){return new s_(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((e=>e.byteSize))}getMetadata(t){return $c(t).get(_o).next((e=>(L(!!e,20021),e)))}br(t,e){return $c(t).put(_o,e)}Dr(t,e){if(e){const n=zp(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return ut.newInvalidDocument(t)}}function cd(r){return new r_(r)}class s_ extends ud{constructor(t,e){super(),this.Or=t,this.trackRemovals=e,this.Nr=new re((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(t){const e=[];let n=0,s=new Z(((i,a)=>q(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const u=this.Nr.get(i);if(e.push(this.Or.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Sc(this.Or.serializer,a);s=s.add(i.path.popLast());const d=Ws(l);n+=d-u.size,e.push(this.Or.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Sc(this.Or.serializer,a.convertToNoDocument(U.min()));e.push(this.Or.addEntry(t,i,l))}})),s.forEach((i=>{e.push(this.Or.indexManager.addToCollectionParentIndex(t,i))})),e.push(this.Or.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.Or.vr(t,e).next((n=>(this.Nr.set(e,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(t,e){return this.Or.Fr(t,e).next((({documents:n,Mr:s})=>(s.forEach(((i,a)=>{this.Nr.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function $c(r){return mt(r,xr)}function Ne(r){return mt(r,Bs)}function ur(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Kc(r,t){const e=t.documentKey.path.toArray();return[r,Gs(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Gc(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=q(e[i],n[i]),s)return s;return s=q(e.length,n.length),s||(s=q(e[e.length-2],n[n.length-2]),s||q(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&wr(n.mutation,s,Dt.empty(),J.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,$()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=$()){const s=$t();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let a=hr();return i.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=$t();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,$())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let i=Ot();const a=vr(),u=(function(){return vr()})();return e.forEach(((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof se)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),wr(m.mutation,d,m.mutation.getFieldMask(),J.now())):a.set(d.key,Dt.empty())})),this.recalculateAndSaveOverlays(t,i).next((l=>(l.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var g;return u.set(d,new i_(m,(g=a.get(d))!==null&&g!==void 0?g:null))})),u)))}recalculateAndSaveOverlays(t,e){const n=vr();let s=new rt(((a,u)=>a-u)),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||Dt.empty();m=u.applyToLocalView(d,m),n.set(l,m);const g=(s.get(u.batchId)||$()).add(l);s=s.insert(u.batchId,g)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,g=Sh();m.forEach((y=>{if(!i.has(y)){const R=Nh(e.get(y),n.get(y));R!==null&&g.set(y,R),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return w.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(a){return k.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve($t());let u=En,l=i;return a.next((d=>w.forEach(d,((m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next((y=>{l=l.insert(m,y)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,l,d,$()))).next((m=>({batchId:u,changes:Rh(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next((n=>{let s=hr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=hr();return this.indexManager.getCollectionParents(t,i).next((u=>w.forEach(u,(l=>{const d=(function(g,y){return new ci(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next((m=>{m.forEach(((g,y)=>{a=a.insert(g,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((a=>{i.forEach(((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))}));let u=hr();return a.forEach(((l,d)=>{const m=i.get(l);m!==void 0&&wr(m.mutation,d,Dt.empty(),J.now()),Gr(e,d)&&(u=u.insert(l,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return w.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Vt(s.createTime)}})(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Jh(s.bundledQuery),readTime:Vt(s.readTime)}})(e)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.overlays=new rt(k.comparator),this.kr=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=$t();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.wt(t,e,i)})),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.kr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=$t(),i=e.length+1,a=new k(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new rt(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=$t(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=$t(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,m)=>u.set(d,m))),!(u.size()>=s)););return w.resolve(u)}wt(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(n.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new ua(e,n));let i=this.kr.get(e);i===void 0&&(i=$(),this.kr.set(e,i)),this.kr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this.qr=new Z(gt.Qr),this.$r=new Z(gt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new gt(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new gt(t,e))}Gr(t,e){t.forEach((n=>this.removeReference(n,e)))}zr(t){const e=new k(new Y([])),n=new gt(e,t),s=new gt(e,t+1),i=[];return this.$r.forEachInRange([n,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new k(new Y([])),n=new gt(e,t),s=new gt(e,t+1);let i=$();return this.$r.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new gt(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class gt{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return k.comparator(t.key,e.key)||q(t.Hr,e.Hr)}static Ur(t,e){return q(t.Hr,e.Hr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new Z(gt.Qr)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new oa(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new gt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Xr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?qe:this.er-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gt(e,0),s=new gt(e,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([n,s],(a=>{const u=this.Zr(a.Hr);i.push(u)})),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(q);return e.forEach((s=>{const i=new gt(s,0),a=new gt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(u=>{n=n.add(u.Hr)}))})),w.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;k.isDocumentKey(i)||(i=i.child(""));const a=new gt(new k(i),0);let u=new Z(q);return this.Yr.forEachWhile((l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Hr)),!0)}),a),w.resolve(this.ei(u))}ei(t){const e=[];return t.forEach((n=>{const s=this.Zr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){L(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return w.forEach(e.mutations,(s=>{const i=new gt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=n}))}rr(t){}containsKey(t,e){const n=new gt(e,0),s=this.Yr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t){this.ni=t,this.docs=(function(){return new rt(k.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let n=Ot();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))})),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Ot();const a=e.path,u=new k(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Go(zl(m),n)<=0||(s.has(m.key)||Gr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){M(9500)}ri(t,e){return w.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new h_(this)}getSize(t){return w.resolve(this.size)}}class h_ extends ud{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(n)})),w.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(t){this.persistence=t,this.ii=new re((e=>We(e)),Kr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.si=0,this.oi=new fa,this.targetCount=0,this._i=Ye.ar()}forEachTarget(t,e){return this.ii.forEach(((n,s)=>e(s))),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),w.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Ye(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.hr(e),w.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.ii.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),w.waitFor(i).next((()=>s))}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.ai={},this.overlays={},this.ui=new Ct(0),this.ci=!1,this.ci=!0,this.li=new u_,this.referenceDelegate=t(this),this.hi=new d_(this),this.indexManager=new Yp,this.remoteDocumentCache=(function(s){return new l_(s)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new Xh(e),this.Ti=new o_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new a_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new c_(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const s=new f_(this.ui.next());return this.referenceDelegate.Ii(),n(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(t,e){return w.or(Object.values(this.ai).map((n=>()=>n.containsKey(t,e))))}}class f_ extends Kl{constructor(t){super(),this.currentSequenceNumber=t}}class pi{constructor(t){this.persistence=t,this.Ai=new fa,this.Ri=null}static Vi(t){return new pi(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),w.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.mi,(n=>{const s=k.fromPath(n);return this.fi(t,s).next((i=>{i||e.removeEntry(s,U.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return w.or([()=>w.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Qs{constructor(t,e){this.persistence=t,this.gi=new re((n=>Rt(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=ad(this,e)}static Vi(t,e){return new Qs(t,e)}Ii(){}di(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}gr(t,e){return w.forEach(this.gi,((n,s)=>this.Sr(t,n,s).next((i=>i?w.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((u=>{u||(n++,i.removeEntry(a,U.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),w.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Ss(t.data.value)),e}Sr(t,e,n){return w.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(t){this.serializer=t}q(t,e,n,s){const i=new ni("createOrUpgrade",e);n<1&&s>=1&&((function(l){l.createObjectStore($r)})(t),(function(l){l.createObjectStore(Dr,{keyPath:Pg}),l.createObjectStore(Ut,{keyPath:rc,autoIncrement:!0}).createIndex(je,sc,{unique:!0}),l.createObjectStore(Tn)})(t),Hc(t),(function(l){l.createObjectStore(Me)})(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&((function(l){l.deleteObjectStore(wn),l.deleteObjectStore(vn),l.deleteObjectStore(ze)})(t),Hc(t)),a=a.next((()=>(function(l){const d=l.store(ze),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put(Us,m)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(l,d){return d.store(Ut).j().next((g=>{l.deleteObjectStore(Ut),l.createObjectStore(Ut,{keyPath:rc,autoIncrement:!0}).createIndex(je,sc,{unique:!0});const y=d.store(Ut),R=g.map((C=>y.put(C)));return w.waitFor(R)}))})(t,i)))),a=a.next((()=>{(function(l){l.createObjectStore(An,{keyPath:Fg})})(t)}))),n<5&&s>=5&&(a=a.next((()=>this.pi(i)))),n<6&&s>=6&&(a=a.next((()=>((function(l){l.createObjectStore(xr)})(t),this.yi(i))))),n<7&&s>=7&&(a=a.next((()=>this.wi(i)))),n<8&&s>=8&&(a=a.next((()=>this.Si(t,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)}))),n<10&&s>=10&&(a=a.next((()=>this.bi(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(l){l.createObjectStore(si,{keyPath:Lg})})(t),(function(l){l.createObjectStore(ii,{keyPath:Bg})})(t)}))),n<12&&s>=12&&(a=a.next((()=>{(function(l){const d=l.createObjectStore(oi,{keyPath:Gg});d.createIndex(Io,Hg,{unique:!1}),d.createIndex(Zl,Wg,{unique:!1})})(t)}))),n<13&&s>=13&&(a=a.next((()=>(function(l){const d=l.createObjectStore(Bs,{keyPath:Cg});d.createIndex(bs,Dg),d.createIndex(Ql,xg)})(t))).next((()=>this.Di(t,i))).next((()=>t.deleteObjectStore(Me)))),n<14&&s>=14&&(a=a.next((()=>this.Ci(t,i)))),n<15&&s>=15&&(a=a.next((()=>(function(l){l.createObjectStore(Qo,{keyPath:Ug,autoIncrement:!0}).createIndex(yo,jg,{unique:!1}),l.createObjectStore(yr,{keyPath:qg}).createIndex(Yl,zg,{unique:!1}),l.createObjectStore(Ir,{keyPath:$g}).createIndex(Jl,Kg,{unique:!1})})(t)))),n<16&&s>=16&&(a=a.next((()=>{e.objectStore(yr).clear()})).next((()=>{e.objectStore(Ir).clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(l){l.createObjectStore(Xo,{keyPath:Qg})})(t)}))),n<18&&s>=18&&Tl()&&(a=a.next((()=>{e.objectStore(yr).clear()})).next((()=>{e.objectStore(Ir).clear()}))),a}yi(t){let e=0;return t.store(Me).X(((n,s)=>{e+=Ws(s)})).next((()=>{const n={byteSize:e};return t.store(xr).put(_o,n)}))}pi(t){const e=t.store(Dr),n=t.store(Ut);return e.j().next((s=>w.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,qe],[i.userId,i.lastAcknowledgedBatchId]);return n.j(je,a).next((u=>w.forEach(u,(l=>{L(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=Le(this.serializer,l);return nd(t,i.userId,d).next((()=>{}))}))))}))))}wi(t){const e=t.store(wn),n=t.store(Me);return t.store(ze).get(Us).next((s=>{const i=[];return n.X(((a,u)=>{const l=new Y(a),d=(function(g){return[0,Rt(g)]})(l);i.push(e.get(d).next((m=>m?w.resolve():(g=>e.put({targetId:0,path:Rt(g),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>w.waitFor(i)))}))}Si(t,e){t.createObjectStore(Nr,{keyPath:Mg});const n=e.store(Nr),s=new da,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Rt(l)})}};return e.store(Me).X({Z:!0},((a,u)=>{const l=new Y(a);return i(l.popLast())})).next((()=>e.store(Tn).X({Z:!0},(([a,u,l],d)=>{const m=zt(u);return i(m.popLast())}))))}bi(t){const e=t.store(vn);return e.X(((n,s)=>{const i=fr(s),a=Yh(this.serializer,i);return e.put(a)}))}Di(t,e){const n=e.store(Me),s=[];return n.X(((i,a)=>{const u=e.store(Bs),l=(function(g){return g.document?new k(Y.fromString(g.document.name).popFirst(5)):g.noDocument?k.fromSegments(g.noDocument.path):g.unknownDocument?k.fromSegments(g.unknownDocument.path):M(36783)})(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))})).next((()=>w.waitFor(s)))}Ci(t,e){const n=e.store(Ut),s=cd(this.serializer),i=new ma(pi.Vi,this.serializer.gt);return n.j().next((a=>{const u=new Map;return a.forEach((l=>{var d;let m=(d=u.get(l.userId))!==null&&d!==void 0?d:$();Le(this.serializer,l).keys().forEach((g=>m=m.add(g))),u.set(l.userId,m)})),w.forEach(u,((l,d)=>{const m=new pt(d),g=mi.yt(this.serializer,m),y=i.getIndexManager(m),R=gi.yt(m,this.serializer,y,i.referenceDelegate);return new ld(s,R,g,y).recalculateAndSaveOverlaysForDocumentKeys(new Eo(e,Ct.ue),l).next()}))}))}}function Hc(r){r.createObjectStore(wn,{keyPath:kg}).createIndex(Wo,Og,{unique:!0}),r.createObjectStore(vn,{keyPath:"targetId"}).createIndex(Xl,Ng,{unique:!0}),r.createObjectStore(ze)}const he="IndexedDbPersistence",eo=18e5,no=5e3,ro="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",g_="main";class ga{constructor(t,e,n,s,i,a,u,l,d,m,g=18){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Fi=i,this.window=a,this.document=u,this.Mi=d,this.xi=m,this.Oi=g,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=y=>Promise.resolve(),!ga.C())throw new O(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new n_(this,s),this.Qi=e+g_,this.serializer=new Xh(l),this.$i=new Ie(this.Qi,this.Oi,new m_(this.serializer)),this.li=new Kp,this.hi=new Zp(this.referenceDelegate,this.serializer),this.remoteDocumentCache=cd(this.serializer),this.Ti=new $p,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,m===!1&&ct(he,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,ro);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.hi.getHighestSequenceNumber(t)))})).then((t=>{this.ui=new Ct(t,this.Mi)})).then((()=>{this.ci=!0})).catch((t=>(this.$i&&this.$i.close(),Promise.reject(t))))}ji(t){return this.qi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.$i.setDatabaseDeletedListener(t)}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>Es(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(t).next((e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(t))).next((e=>this.isPrimary&&!e?this.Yi(t).next((()=>!1)):!!e&&this.Zi(t).next((()=>!0)))))).catch((t=>{if(Re(t))return V(he,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return V(he,"Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Fi.enqueueRetryable((()=>this.qi(t))),this.isPrimary=t}))}Ji(t){return cr(t).get(sn).next((e=>w.resolve(this.Xi(e))))}es(t){return Es(t).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,eo)){this.ki=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const n=mt(e,An);return n.j().next((s=>{const i=this.rs(s,eo),a=s.filter((u=>i.indexOf(u)===-1));return w.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.Ui)for(const e of t)this.Ui.removeItem(this.ss(e.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(t){return!!t&&t.ownerId===this.clientId}Hi(t){return this.xi?w.resolve(!0):cr(t).get(sn).next((e=>{if(e!==null&&this.ns(e.leaseTimestampMs,no)&&!this._s(e.ownerId)){if(this.Xi(e)&&this.networkEnabled)return!0;if(!this.Xi(e)){if(!e.allowTabSynchronization)throw new O(P.FAILED_PRECONDITION,ro);return!1}}return!(!this.networkEnabled||!this.inForeground)||Es(t).j().next((n=>this.rs(n,no).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1}))===void 0))})).next((e=>(this.isPrimary!==e&&V(he,`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[$r,An],(t=>{const e=new Eo(t,Ct.ue);return this.Yi(e).next((()=>this.es(e)))})),this.$i.close(),this.hs()}rs(t,e){return t.filter((n=>this.ns(n.updateTimeMs,e)&&!this._s(n.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(t=>Es(t).j().next((e=>this.rs(e,eo).map((n=>n.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(t,e){return gi.yt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Jp(t,this.serializer.gt.databaseId)}getDocumentOverlayCache(t){return mi.yt(this.serializer,t)}getBundleCache(){return this.Ti}runTransaction(t,e,n){V(he,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?Jg:l===17?rh:l===16?Yg:l===15?Yo:l===14?nh:l===13?eh:l===12?Xg:l===11?th:void M(60245)})(this.Oi);let a;return this.$i.runTransaction(t,s,i,(u=>(a=new Eo(u,this.ui?this.ui.next():Ct.ue),e==="readwrite-primary"?this.Ji(a).next((l=>!!l||this.Hi(a))).next((l=>{if(!l)throw ct(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new O(P.FAILED_PRECONDITION,$l);return n(a)})).next((l=>this.Zi(a).next((()=>l)))):this.Ts(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}Ts(t){return cr(t).get(sn).next((e=>{if(e!==null&&this.ns(e.leaseTimestampMs,no)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new O(P.FAILED_PRECONDITION,ro)}))}Zi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return cr(t).put(sn,e)}static C(){return Ie.C()}Yi(t){const e=cr(t);return e.get(sn).next((n=>this.Xi(n)?(V(he,"Releasing primary lease."),e.delete(sn)):w.resolve()))}ns(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ct(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ni=()=>{this.us();const e=/(?:Version|Mobile)\/1[456]/;El()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(t){var e;try{const n=((e=this.Ui)===null||e===void 0?void 0:e.getItem(this.ss(t)))!==null;return V(he,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ct(he,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(t){ct("Failed to set zombie client id.",t)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function cr(r){return mt(r,$r)}function Es(r){return mt(r,An)}function hd(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=s}static Es(t,e){let n=$(),s=$();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pa(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return El()?8:Gl(Os())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ps(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(t,e,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new p_;return this.ws(t,e,a).next((u=>{if(i.result=u,this.Rs)return this.Ss(t,e,a,u.size)}))})).next((()=>i.result))}Ss(t,e,n,s){return n.documentReadCount<this.Vs?(hn()<=H.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",dn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),w.resolve()):(hn()<=H.DEBUG&&V("QueryEngine","Query:",dn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.fs*s?(hn()<=H.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",dn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):w.resolve())}ps(t,e){if(_c(e))return w.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ro(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const a=$(...i);return this.gs.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((l=>{const d=this.bs(e,u);return this.Ds(e,d,a,l.readTime)?this.ps(t,Ro(e,null,"F")):this.vs(t,d,e,l)}))))})))))}ys(t,e,n,s){return _c(e)||s.isEqual(U.min())?w.resolve(null):this.gs.getDocuments(t,n).next((i=>{const a=this.bs(e,i);return this.Ds(e,a,n,s)?w.resolve(null):(hn()<=H.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),dn(e)),this.vs(t,a,e,ql(s,En)).next((u=>u)))}))}bs(t,e){let n=new Z(Ah(t));return e.forEach(((s,i)=>{Gr(t,i)&&(n=n.add(i))})),n}Ds(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(t,e,n){return hn()<=H.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",dn(e)),this.gs.getDocumentsMatchingQuery(t,e,Ft.min(),n)}vs(t,e,n,s){return this.gs.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="LocalStore",__=3e8;class y_{constructor(t,e,n,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new rt(q),this.Ms=new re((i=>We(i)),Kr),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ld(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function fd(r,t,e,n){return new y_(r,t,e,n)}async function md(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.Ns(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],u=[];let l=$();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function I_(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.Os.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,m){const g=d.batch,y=g.keys();let R=w.resolve();return y.forEach((C=>{R=R.next((()=>m.getEntry(l,C))).next((x=>{const D=d.docVersions.get(C);L(D!==null,48541),x.version.compareTo(D)<0&&(g.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),m.addEntry(x)))}))})),R.next((()=>u.mutationQueue.removeMutationBatch(l,g)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let l=$();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function gd(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function E_(r,t){const e=F(r),n=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const u=[];t.targetChanges.forEach(((m,g)=>{const y=s.get(g);if(!y)return;u.push(e.hi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>e.hi.addMatchingKeys(i,m.addedDocuments,g))));let R=y.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?R=R.withResumeToken(lt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,n)),s=s.insert(g,R),(function(x,D,z){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=__?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(y,R,m)&&u.push(e.hi.updateTargetData(i,R))}));let l=Ot(),d=$();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))})),u.push(T_(i,a,t.documentUpdates).next((m=>{l=m.Ls,d=m.ks}))),!n.isEqual(U.min())){const m=e.hi.getLastRemoteSnapshotVersion(i).next((g=>e.hi.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(m)}return w.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(e.Fs=s,i)))}function T_(r,t,e){let n=$(),s=$();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let a=Ot();return e.forEach(((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(U.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):V(_a,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function v_(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=qe),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function Xs(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.hi.getTargetData(n,t).next((i=>i?(s=i,w.resolve(s)):e.hi.allocateTargetId(n).next((a=>(s=new Yt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.Fs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n}))}async function xn(r,t,e){const n=F(r),s=n.Fs.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Re(a))throw a;V(_a,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(s.target)}function ko(r,t,e){const n=F(r);let s=U.min(),i=$();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,m){const g=F(l),y=g.Ms.get(m);return y!==void 0?w.resolve(g.Fs.get(y)):g.hi.getTargetData(d,m)})(n,a,Mt(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(a,u.targetId).next((l=>{i=l}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?i:$()))).next((u=>(yd(n,wh(t),u),{documents:u,qs:i})))))}function pd(r,t){const e=F(r),n=F(e.hi),s=e.Fs.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",(i=>n.Et(i,t).next((a=>a?a.target:null))))}function _d(r,t){const e=F(r),n=e.xs.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",(s=>e.Os.getAllFromCollectionGroup(s,t,ql(n,En),Number.MAX_SAFE_INTEGER))).then((s=>(yd(e,t,s),s)))}function yd(r,t,e){let n=r.xs.get(t)||U.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.xs.set(t,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firestore_clients";function Wc(r,t){return`${Id}_${r}_${t}`}const Ed="firestore_mutations";function Qc(r,t,e){let n=`${Ed}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const Td="firestore_targets";function so(r,t){return`${Td}_${r}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="SharedClientState";class Ys{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Ks(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new O(s.error.code,s.error.message))),a?new Ys(t,e,s.state,i):(ct(qt,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Ar{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ks(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new O(n.error.code,n.error.message))),i?new Ar(t,n.state,s):(ct(qt,`Failed to parse target state for ID '${t}': ${e}`),null)}Ws(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Js{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ks(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=ra();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=Hl(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Js(t,i):(ct(qt,`Failed to parse client data for instance '${t}': ${e}`),null)}}class ya{constructor(t,e){this.clientId=t,this.onlineState=e}static Ks(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new ya(e.clientId,e.onlineState):(ct(qt,`Failed to parse online state: ${t}`),null)}}class Oo{constructor(){this.activeTargetIds=ra()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class io{constructor(t,e,n,s,i){this.window=t,this.Fi=e,this.persistenceKey=n,this.js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new rt(q),this.started=!1,this.Zs=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Wc(this.persistenceKey,this.js),this.eo=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Oo),this.no=new RegExp(`^${Id}_${a}_([^_]*)$`),this.ro=new RegExp(`^${Ed}_${a}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Td}_${a}_(\\d+)$`),this.so=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this.oo=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ps();for(const n of t){if(n===this.js)continue;const s=this.getItem(Wc(this.persistenceKey,n));if(s){const i=Js.Ks(n,s);i&&(this.Ys=this.Ys.insert(i.clientId,i))}}this._o();const e=this.storage.getItem(this.so);if(e){const n=this.ao(e);n&&this.uo(n)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.eo,JSON.stringify(t))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(t){let e=!1;return this.Ys.forEach(((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.lo(t,"pending")}updateMutationState(t,e,n){this.lo(t,e,n),this.ho(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(so(this.persistenceKey,t));if(s){const i=Ar.Ks(t,s);i&&(n=i.state)}}return e&&this.Po.Gs(t),this._o(),n}removeLocalQueryTarget(t){this.Po.zs(t),this._o()}isLocalQueryTarget(t){return this.Po.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(so(this.persistenceKey,t))}updateQueryState(t,e,n){this.To(t,e,n)}handleUserChange(t,e,n){e.forEach((s=>{this.ho(s)})),this.currentUser=t,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(t){this.Io(t)}notifyBundleLoaded(t){this.Eo(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return V(qt,"READ",t,e),e}setItem(t,e){V(qt,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){V(qt,"REMOVE",t),this.storage.removeItem(t)}Hs(t){const e=t;if(e.storageArea===this.storage){if(V(qt,"EVENT",e.key,e.newValue),e.key===this.Xs)return void ct("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable((async()=>{if(this.started){if(e.key!==null){if(this.no.test(e.key)){if(e.newValue==null){const n=this.Ao(e.key);return this.Ro(n,null)}{const n=this.Vo(e.key,e.newValue);if(n)return this.Ro(n.clientId,n)}}else if(this.ro.test(e.key)){if(e.newValue!==null){const n=this.mo(e.key,e.newValue);if(n)return this.fo(n)}}else if(this.io.test(e.key)){if(e.newValue!==null){const n=this.po(e.key,e.newValue);if(n)return this.yo(n)}}else if(e.key===this.so){if(e.newValue!==null){const n=this.ao(e.newValue);if(n)return this.uo(n)}}else if(e.key===this.eo){const n=(function(i){let a=Ct.ue;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{wo:i}),a=u}catch(u){ct(qt,"Failed to read sequence number from WebStorage",u)}return a})(e.newValue);n!==Ct.ue&&this.sequenceNumberHandler(n)}else if(e.key===this.oo){const n=this.So(e.newValue);await Promise.all(n.map((s=>this.syncEngine.bo(s))))}}}else this.Zs.push(e)}))}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(t,e,n){const s=new Ys(this.currentUser,t,e,n),i=Qc(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Ws())}ho(t){const e=Qc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Io(t){const e={clientId:this.js,onlineState:t};this.storage.setItem(this.so,JSON.stringify(e))}To(t,e,n){const s=so(this.persistenceKey,t),i=new Ar(t,e,n);this.setItem(s,i.Ws())}Eo(t){const e=JSON.stringify(Array.from(t));this.setItem(this.oo,e)}Ao(t){const e=this.no.exec(t);return e?e[1]:null}Vo(t,e){const n=this.Ao(t);return Js.Ks(n,e)}mo(t,e){const n=this.ro.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ys.Ks(new pt(i),s,e)}po(t,e){const n=this.io.exec(t),s=Number(n[1]);return Ar.Ks(s,e)}ao(t){return ya.Ks(t)}So(t){return JSON.parse(t)}async fo(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Do(t.batchId,t.state,t.error);V(qt,`Ignoring mutation for non-active user ${t.user.uid}`)}yo(t){return this.syncEngine.vo(t.targetId,t.state,t.error)}Ro(t,e){const n=e?this.Ys.insert(t,e):this.Ys.remove(t),s=this.co(this.Ys),i=this.co(n),a=[],u=[];return i.forEach((l=>{s.has(l)||a.push(l)})),s.forEach((l=>{i.has(l)||u.push(l)})),this.syncEngine.Co(a,u).then((()=>{this.Ys=n}))}uo(t){this.Ys.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}co(t){let e=ra();return t.forEach(((n,s)=>{e=e.unionWith(s.activeTargetIds)})),e}}class vd{constructor(){this.Fo=new Oo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Oo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="ConnectivityMonitor";class Yc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){V(Xc,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){V(Xc,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts=null;function Mo(){return Ts===null?Ts=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ts++,"0x"+Ts.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="RestConnection",A_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class b_{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${s}`,this.Ko=this.databaseId.database===Or?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(t,e,n,s,i){const a=Mo(),u=this.Go(t,e.toUriEncodedString());V(oo,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:d}=new URL(u),m=ei(d);return this.jo(t,u,l,n,m).then((g=>(V(oo,`Received RPC '${t}' ${a}: `,g),g)),(g=>{throw te(oo,`RPC '${t}' ${a} failed with error: `,g,"url: ",u,"request:",n),g}))}Jo(t,e,n,s,i,a){return this.Wo(t,e,n,s,i)}zo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s))}Go(t,e){const n=A_[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class S_ extends b_{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,s,i){const a=Mo();return new Promise(((u,l)=>{const d=new Dl;d.setWithCredentials(!0),d.listenOnce(xl.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case vs.NO_ERROR:const g=d.getResponseJson();V(wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),u(g);break;case vs.TIMEOUT:V(wt,`RPC '${t}' ${a} timed out`),l(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case vs.HTTP_ERROR:const y=d.getStatus();if(V(wt,`RPC '${t}' ${a} failed with status:`,y,"response text:",d.getResponseText()),y>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R?.error;if(C&&C.status&&C.message){const x=(function(z){const j=z.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN})(C.status);l(new O(x,C.message))}else l(new O(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new O(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{V(wt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);V(wt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,n,15)}))}P_(t,e,n){const s=Mo(),i=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ol(),u=kl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const m=i.join("");V(wt,`Creating RPC '${t}' stream ${s}: ${m}`,l);const g=a.createWebChannel(m,l);this.T_(g);let y=!1,R=!1;const C=new R_({Ho:D=>{R?V(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(y||(V(wt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),y=!0),V(wt,`RPC '${t}' stream ${s} sending:`,D),g.send(D))},Yo:()=>g.close()}),x=(D,z,j)=>{D.listen(z,(B=>{try{j(B)}catch(W){setTimeout((()=>{throw W}),0)}}))};return x(g,lr.EventType.OPEN,(()=>{R||(V(wt,`RPC '${t}' stream ${s} transport opened.`),C.s_())})),x(g,lr.EventType.CLOSE,(()=>{R||(R=!0,V(wt,`RPC '${t}' stream ${s} transport closed`),C.__(),this.I_(g))})),x(g,lr.EventType.ERROR,(D=>{R||(R=!0,te(wt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.__(new O(P.UNAVAILABLE,"The operation could not be completed")))})),x(g,lr.EventType.MESSAGE,(D=>{var z;if(!R){const j=D.data[0];L(!!j,16349);const B=j,W=B?.error||((z=B[0])===null||z===void 0?void 0:z.error);if(W){V(wt,`RPC '${t}' stream ${s} received error:`,W);const nt=W.status;let Q=(function(I){const T=ht[I];if(T!==void 0)return Mh(T)})(nt),E=W.message;Q===void 0&&(Q=P.INTERNAL,E="Unknown error status: "+nt+" with message "+W.message),R=!0,C.__(new O(Q,E)),g.close()}else V(wt,`RPC '${t}' stream ${s} received:`,j),C.a_(j)}})),x(u,Nl.STAT_EVENT,(D=>{D.stat===mo.PROXY?V(wt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===mo.NOPROXY&&V(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){return typeof window<"u"?window:null}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(r){return new Np(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="PersistentStream";class bd{constructor(t,e,n,s,i,a,u,l){this.Fi=t,this.w_=n,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ad(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ct(e.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.b_===e&&this.W_(n,s)}),(n=>{t((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(s)}))}))}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{n((()=>this.G_(s)))})),this.stream.onMessage((s=>{n((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return V(Jc,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(V(Jc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class P_ extends bd{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Mp(this.serializer,t),n=(function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Vt(a.readTime):U.min()})(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=Vo(this.serializer),e.addTarget=(function(i,a){let u;const l=a.target;if(u=qs(l)?{documents:$h(i,l)}:{query:Kh(i,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Bh(i,a.resumeToken);const d=So(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=Dn(i,a.snapshotVersion.toTimestamp());const d=So(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const n=Lp(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=Vo(this.serializer),e.removeTarget=t,this.k_(e)}}class V_ extends bd{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return L(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){L(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Fp(t.writeResults,t.commitTime),n=Vt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=Vo(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Ks(this.serializer,n)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{}class D_ extends C_{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(t,Po(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}Jo(t,e,n,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Jo(t,Po(e,n),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class x_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ct(e),this._a=!1):V("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="RemoteStore";class N_{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{n.enqueueAndForget((async()=>{Ze(this)&&(V(Je,"Restarting streams for network reachability change."),await(async function(l){const d=F(l);d.Ia.add(4),await Qr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await yi(d)})(this))}))})),this.Aa=new x_(n,s)}}async function yi(r){if(Ze(r))for(const t of r.da)await t(!0)}async function Qr(r){for(const t of r.da)await t(!1)}function Ii(r,t){const e=F(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Ta(e)?Ea(e):Un(e).x_()&&Ia(e,t))}function Nn(r,t){const e=F(r),n=Un(e);e.Ta.delete(t),n.x_()&&Rd(e,t),e.Ta.size===0&&(n.x_()?n.B_():Ze(e)&&e.Aa.set("Unknown"))}function Ia(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Un(r).H_(t)}function Rd(r,t){r.Ra.$e(t),Un(r).Y_(t)}function Ea(r){r.Ra=new Vp({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),Un(r).start(),r.Aa.aa()}function Ta(r){return Ze(r)&&!Un(r).M_()&&r.Ta.size>0}function Ze(r){return F(r).Ia.size===0}function Sd(r){r.Ra=void 0}async function k_(r){r.Aa.set("Online")}async function O_(r){r.Ta.forEach(((t,e)=>{Ia(r,t)}))}async function M_(r,t){Sd(r),Ta(r)?(r.Aa.la(t),Ea(r)):r.Aa.set("Unknown")}async function F_(r,t,e){if(r.Aa.set("Online"),t instanceof Lh&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))})(r,t)}catch(n){V(Je,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zs(r,n)}else if(t instanceof Cs?r.Ra.Ye(t):t instanceof Fh?r.Ra.it(t):r.Ra.et(t),!e.isEqual(U.min()))try{const n=await gd(r.localStore);e.compareTo(n)>=0&&await(function(i,a){const u=i.Ra.Pt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.Ta.get(d);m&&i.Ta.set(d,m.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const m=i.Ta.get(l);if(!m)return;i.Ta.set(l,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Rd(i,l);const g=new Yt(m.target,l,d,m.sequenceNumber);Ia(i,g)})),i.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){V(Je,"Failed to raise snapshot:",n),await Zs(r,n)}}async function Zs(r,t,e){if(!Re(t))throw t;r.Ia.add(1),await Qr(r),r.Aa.set("Offline"),e||(e=()=>gd(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{V(Je,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await yi(r)}))}function Pd(r,t){return t().catch((e=>Zs(r,e,t)))}async function Bn(r){const t=F(r),e=we(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:qe;for(;L_(t);)try{const s=await v_(t.localStore,n);if(s===null){t.Pa.length===0&&e.B_();break}n=s.batchId,B_(t,s)}catch(s){await Zs(t,s)}Vd(t)&&Cd(t)}function L_(r){return Ze(r)&&r.Pa.length<10}function B_(r,t){r.Pa.push(t);const e=we(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function Vd(r){return Ze(r)&&!we(r).M_()&&r.Pa.length>0}function Cd(r){we(r).start()}async function U_(r){we(r).na()}async function j_(r){const t=we(r);for(const e of r.Pa)t.X_(e.mutations)}async function q_(r,t,e){const n=r.Pa.shift(),s=aa.from(n,t,e);await Pd(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Bn(r)}async function z_(r,t){t&&we(r).Z_&&await(async function(n,s){if((function(a){return Sp(a)&&a!==P.ABORTED})(s.code)){const i=n.Pa.shift();we(n).N_(),await Pd(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Bn(n)}})(r,t),Vd(r)&&Cd(r)}async function Zc(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),V(Je,"RemoteStore received new credentials");const n=Ze(e);e.Ia.add(3),await Qr(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await yi(e)}async function Fo(r,t){const e=F(r);t?(e.Ia.delete(2),await yi(e)):t||(e.Ia.add(2),await Qr(e),e.Aa.set("Unknown"))}function Un(r){return r.Va||(r.Va=(function(e,n,s){const i=F(e);return i.ia(),new P_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:k_.bind(null,r),e_:O_.bind(null,r),n_:M_.bind(null,r),J_:F_.bind(null,r)}),r.da.push((async t=>{t?(r.Va.N_(),Ta(r)?Ea(r):r.Aa.set("Unknown")):(await r.Va.stop(),Sd(r))}))),r.Va}function we(r){return r.ma||(r.ma=(function(e,n,s){const i=F(e);return i.ia(),new V_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:U_.bind(null,r),n_:z_.bind(null,r),ea:j_.bind(null,r),ta:q_.bind(null,r)}),r.da.push((async t=>{t?(r.ma.N_(),await Bn(r)):(await r.ma.stop(),r.Pa.length>0&&(V(Je,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new _e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new va(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wa(r,t){if(ct("AsyncQueue",`${t}: ${r}`),Re(r))return new O(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{static emptySet(t){return new _n(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||k.comparator(e.key,n.key):(e,n)=>k.comparator(e.key,n.key),this.keyedMap=hr(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new _n;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.fa=new rt(k.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class kn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new kn(t,e,_n.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class K_{constructor(){this.queries=el(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const s=F(e),i=s.queries;s.queries=el(),i.forEach(((a,u)=>{for(const l of u.wa)l.onError(n)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function el(){return new re((r=>vh(r)),hi)}async function G_(r,t){const e=F(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.Sa()&&t.ba()&&(n=2):(i=new $_,n=t.ba()?0:1);try{switch(n){case 0:i.ya=await e.onListen(s,!0);break;case 1:i.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=wa(a,`Initialization of query '${dn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.wa.push(t),t.va(e.onlineState),i.ya&&t.Ca(i.ya)&&Aa(e)}async function H_(r,t){const e=F(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.wa.indexOf(t);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=t.ba()?0:1:!i.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function W_(r,t){const e=F(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.wa)u.Ca(s)&&(n=!0);a.ya=s}}n&&Aa(e)}function Q_(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const i of s.wa)i.onError(e);n.queries.delete(t)}function Aa(r){r.Da.forEach((t=>{t.next()}))}var Lo,nl;(nl=Lo||(Lo={})).Fa="default",nl.Cache="cache";class X_{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new kn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=kn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Lo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t){this.key=t}}class xd{constructor(t){this.key=t}}class Y_{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=$(),this.mutatedKeys=$(),this.Xa=Ah(t),this.eu=new _n(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new tl,s=e?e.eu:this.eu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,g)=>{const y=s.get(m),R=Gr(this.query,g)?g:null,C=!!y&&this.mutatedKeys.has(y.key),x=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let D=!1;y&&R?y.data.isEqual(R.data)?C!==x&&(n.track({type:3,doc:R}),D=!0):this.iu(y,R)||(n.track({type:2,doc:R}),D=!0,(l&&this.Xa(R,l)>0||d&&this.Xa(R,d)<0)&&(u=!0)):!y&&R?(n.track({type:0,doc:R}),D=!0):y&&!R&&(n.track({type:1,doc:y}),D=!0,(l||d)&&(u=!0)),D&&(R?(a=a.add(R),i=x?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{eu:a,ru:n,Ds:u,mutatedKeys:i}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((m,g)=>(function(R,C){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:D})}};return x(R)-x(C)})(m.type,g.type)||this.Xa(m.doc,g.doc))),this.su(n),s=s!=null&&s;const u=e&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new kn(this.query,t.eu,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new tl,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=$(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const e=[];return t.forEach((n=>{this.Za.has(n)||e.push(new xd(n))})),this.Za.forEach((n=>{t.has(n)||e.push(new Dd(n))})),e}uu(t){this.Ha=t.qs,this.Za=$();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return kn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const jn="SyncEngine";class J_{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Z_{constructor(t){this.key=t,this.lu=!1}}class ty{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new re((u=>vh(u)),hi),this.Tu=new Map,this.Iu=new Set,this.du=new rt(k.comparator),this.Eu=new Map,this.Au=new fa,this.Ru={},this.Vu=new Map,this.mu=Ye.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ey(r,t,e=!0){const n=Ei(r);let s;const i=n.Pu.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Nd(n,t,e,!0),s}async function ny(r,t){const e=Ei(r);await Nd(e,t,!0,!1)}async function Nd(r,t,e,n){const s=await Xs(r.localStore,Mt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await ba(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Ii(r.remoteStore,s),u}async function ba(r,t,e,n,s){r.gu=(g,y,R)=>(async function(x,D,z,j){let B=D.view.nu(z);B.Ds&&(B=await ko(x.localStore,D.query,!1).then((({documents:E})=>D.view.nu(E,B))));const W=j&&j.targetChanges.get(D.targetId),nt=j&&j.targetMismatches.get(D.targetId)!=null,Q=D.view.applyChanges(B,x.isPrimaryClient,W,nt);return Bo(x,D.targetId,Q._u),Q.snapshot})(r,g,y,R);const i=await ko(r.localStore,t,!0),a=new Y_(t,i.qs),u=a.nu(i.documents),l=Wr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);Bo(r,e,d._u);const m=new J_(t,e,a);return r.Pu.set(t,m),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),d.snapshot}async function ry(r,t,e){const n=F(r),s=n.Pu.get(t),i=n.Tu.get(s.targetId);if(i.length>1)return n.Tu.set(s.targetId,i.filter((a=>!hi(a,t)))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xn(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Nn(n.remoteStore,s.targetId),On(n,s.targetId)})).catch(be)):(On(n,s.targetId),await xn(n.localStore,s.targetId,!0))}async function sy(r,t){const e=F(r),n=e.Pu.get(t),s=e.Tu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Nn(e.remoteStore,n.targetId))}async function iy(r,t,e){const n=Va(r);try{const s=await(function(a,u){const l=F(a),d=J.now(),m=u.reduce(((R,C)=>R.add(C.key)),$());let g,y;return l.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let C=Ot(),x=$();return l.Os.getEntries(R,m).next((D=>{C=D,C.forEach(((z,j)=>{j.isValidDocument()||(x=x.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(R,C))).next((D=>{g=D;const z=[];for(const j of u){const B=bp(j,g.get(j.key).overlayedDocument);B!=null&&z.push(new se(j.key,B,fh(B.value.mapValue),xt.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,z,u)})).next((D=>{y=D;const z=D.applyToLocalDocumentSet(g,x);return l.documentOverlayCache.saveOverlays(R,D.batchId,z)}))})).then((()=>({batchId:y.batchId,changes:Rh(g)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new rt(q)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d})(n,s.batchId,e),await Pe(n,s.changes),await Bn(n.remoteStore)}catch(s){const i=wa(s,"Failed to persist write");e.reject(i)}}async function kd(r,t){const e=F(r);try{const n=await E_(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Eu.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?L(a.lu,14607):s.removedDocuments.size>0&&(L(a.lu,42227),a.lu=!1))})),await Pe(e,n,t)}catch(n){await be(n)}}function rl(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Pu.forEach(((i,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const l=F(a);l.onlineState=u;let d=!1;l.queries.forEach(((m,g)=>{for(const y of g.wa)y.va(u)&&(d=!0)})),d&&Aa(l)})(n.eventManager,t),s.length&&n.hu.J_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function oy(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Eu.get(t),i=s&&s.key;if(i){let a=new rt(k.comparator);a=a.insert(i,ut.newNoDocument(i,U.min()));const u=$().add(i),l=new Hr(U.min(),new Map,new rt(q),a,u);await kd(n,l),n.du=n.du.remove(i),n.Eu.delete(t),Pa(n)}else await xn(n.localStore,t,!1).then((()=>On(n,t,e))).catch(be)}async function ay(r,t){const e=F(r),n=t.batch.batchId;try{const s=await I_(e.localStore,t);Sa(e,n,null),Ra(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Pe(e,s)}catch(s){await be(s)}}async function uy(r,t,e){const n=F(r);try{const s=await(function(a,u){const l=F(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next((g=>(L(g!==null,37113),m=g.keys(),l.mutationQueue.removeMutationBatch(d,g)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>l.localDocuments.getDocuments(d,m)))}))})(n.localStore,t);Sa(n,t,e),Ra(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Pe(n,s)}catch(s){await be(s)}}function Ra(r,t){(r.Vu.get(t)||[]).forEach((e=>{e.resolve()})),r.Vu.delete(t)}function Sa(r,t,e){const n=F(r);let s=n.Ru[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Ru[n.currentUser.toKey()]=s}}function On(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach((n=>{r.Au.containsKey(n)||Od(r,n)}))}function Od(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Nn(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),Pa(r))}function Bo(r,t,e){for(const n of e)n instanceof Dd?(r.Au.addReference(n.key,t),cy(r,n)):n instanceof xd?(V(jn,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||Od(r,n.key)):M(19791,{yu:n})}function cy(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(V(jn,"New document in limbo: "+e),r.Iu.add(n),Pa(r))}function Pa(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new k(Y.fromString(t)),n=r.mu.next();r.Eu.set(n,new Z_(e)),r.du=r.du.insert(e,n),Ii(r.remoteStore,new Yt(Mt(li(e.path)),n,"TargetPurposeLimboResolution",Ct.ue))}}async function Pe(r,t,e){const n=F(r),s=[],i=[],a=[];n.Pu.isEmpty()||(n.Pu.forEach(((u,l)=>{a.push(n.gu(l,t,e).then((d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e?.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=pa.Es(l.targetId,d);i.push(g)}})))})),await Promise.all(a),n.hu.J_(s),await(async function(l,d){const m=F(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>w.forEach(d,(y=>w.forEach(y.Is,(R=>m.persistence.referenceDelegate.addReference(g,y.targetId,R))).next((()=>w.forEach(y.ds,(R=>m.persistence.referenceDelegate.removeReference(g,y.targetId,R)))))))))}catch(g){if(!Re(g))throw g;V(_a,"Failed to update sequence numbers: "+g)}for(const g of d){const y=g.targetId;if(!g.fromCache){const R=m.Fs.get(y),C=R.snapshotVersion,x=R.withLastLimboFreeSnapshotVersion(C);m.Fs=m.Fs.insert(y,x)}}})(n.localStore,i))}async function ly(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){V(jn,"User change. New user:",t.toKey());const n=await md(e.localStore,t);e.currentUser=t,(function(i,a){i.Vu.forEach((u=>{u.forEach((l=>{l.reject(new O(P.CANCELLED,a))}))})),i.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Pe(e,n.Bs)}}function hy(r,t){const e=F(r),n=e.Eu.get(t);if(n&&n.lu)return $().add(n.key);{let s=$();const i=e.Tu.get(t);if(!i)return s;for(const a of i){const u=e.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}async function dy(r,t){const e=F(r),n=await ko(e.localStore,t.query,!0),s=t.view.uu(n);return e.isPrimaryClient&&Bo(e,t.targetId,s._u),s}async function fy(r,t){const e=F(r);return _d(e.localStore,t).then((n=>Pe(e,n)))}async function my(r,t,e,n){const s=F(r),i=await(function(u,l){const d=F(u),m=F(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",(g=>m.Xn(g,l).next((y=>y?d.localDocuments.getDocuments(g,y):w.resolve(null)))))})(s.localStore,t);i!==null?(e==="pending"?await Bn(s.remoteStore):e==="acknowledged"||e==="rejected"?(Sa(s,t,n||null),Ra(s,t),(function(u,l){F(F(u).mutationQueue).rr(l)})(s.localStore,t)):M(6720,"Unknown batchState",{wu:e}),await Pe(s,i)):V(jn,"Cannot apply mutation batch with id: "+t)}async function gy(r,t){const e=F(r);if(Ei(e),Va(e),t===!0&&e.fu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await sl(e,n.toArray());e.fu=!0,await Fo(e.remoteStore,!0);for(const i of s)Ii(e.remoteStore,i)}else if(t===!1&&e.fu!==!1){const n=[];let s=Promise.resolve();e.Tu.forEach(((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then((()=>(On(e,a),xn(e.localStore,a,!0)))),Nn(e.remoteStore,a)})),await s,await sl(e,n),(function(a){const u=F(a);u.Eu.forEach(((l,d)=>{Nn(u.remoteStore,d)})),u.Au.jr(),u.Eu=new Map,u.du=new rt(k.comparator)})(e),e.fu=!1,await Fo(e.remoteStore,!1)}}async function sl(r,t,e){const n=F(r),s=[],i=[];for(const a of t){let u;const l=n.Tu.get(a);if(l&&l.length!==0){u=await Xs(n.localStore,Mt(l[0]));for(const d of l){const m=n.Pu.get(d),g=await dy(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await pd(n.localStore,a);u=await Xs(n.localStore,d),await ba(n,Md(d),a,!1,u.resumeToken)}s.push(u)}return n.hu.J_(i),s}function Md(r){return Th(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function py(r){return(function(e){return F(F(e).persistence).Ps()})(F(r).localStore)}async function _y(r,t,e,n){const s=F(r);if(s.fu)return void V(jn,"Ignoring unexpected query state notification.");const i=s.Tu.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await _d(s.localStore,wh(i[0])),u=Hr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",lt.EMPTY_BYTE_STRING);await Pe(s,a,u);break}case"rejected":await xn(s.localStore,t,!0),On(s,t,n);break;default:M(64155,e)}}async function yy(r,t,e){const n=Ei(r);if(n.fu){for(const s of t){if(n.Tu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){V(jn,"Adding an already active target "+s);continue}const i=await pd(n.localStore,s),a=await Xs(n.localStore,i);await ba(n,Md(i),a.targetId,!1,a.resumeToken),Ii(n.remoteStore,a)}for(const s of e)n.Tu.has(s)&&await xn(n.localStore,s,!1).then((()=>{Nn(n.remoteStore,s),On(n,s)})).catch(be)}}function Ei(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=kd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=oy.bind(null,t),t.hu.J_=W_.bind(null,t.eventManager),t.hu.pu=Q_.bind(null,t.eventManager),t}function Va(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ay.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=uy.bind(null,t),t}class Ur{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=_i(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return fd(this.persistence,new dd,t.initialUser,this.serializer)}Du(t){return new ma(pi.Vi,this.serializer)}bu(t){return new vd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ur.provider={build:()=>new Ur};class Iy extends Ur{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){L(this.persistence.referenceDelegate instanceof Qs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new od(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new ma((n=>Qs.Vi(n,e)),this.serializer)}}class Fd extends Ur{constructor(t,e,n){super(),this.Mu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Mu.initialize(this,t),await Va(this.Mu.syncEngine),await Bn(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(t){return fd(this.persistence,new dd,t.initialUser,this.serializer)}Cu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new od(n,t.asyncQueue,e)}Fu(t,e){const n=new Rg(e,this.persistence);return new bg(t.asyncQueue,n)}Du(t){const e=hd(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new ga(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,wd(),xs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(t){return new vd}}class Ey extends Fd{constructor(t,e){super(t,e,!1),this.Mu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Mu.syncEngine;this.sharedClientState instanceof io&&(this.sharedClientState.syncEngine={Do:my.bind(null,e),vo:_y.bind(null,e),Co:yy.bind(null,e),Ps:py.bind(null,e),bo:fy.bind(null,e)},await this.sharedClientState.start()),await this.persistence.ji((async n=>{await gy(this.Mu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}bu(t){const e=wd();if(!io.C(e))throw new O(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=hd(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new io(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class jr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>rl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ly.bind(null,this.syncEngine),await Fo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new K_})()}createDatastore(t){const e=_i(t.databaseInfo.databaseId),n=(function(i){return new S_(i)})(t.databaseInfo);return(function(i,a,u,l){return new D_(i,a,u,l)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,a,u){return new N_(n,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>rl(this.syncEngine,e,0)),(function(){return Yc.C()?new Yc:new w_})())}createSyncEngine(t,e){return(function(s,i,a,u,l,d,m){const g=new ty(s,i,a,u,l,d);return m&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=F(s);V(Je,"RemoteStore shutting down."),i.Ia.add(5),await Qr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}jr.provider={build:()=>new jr};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):ct("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="FirestoreClient";class vy{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=$o.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{V(Ae,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(V(Ae,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=wa(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ao(r,t){r.asyncQueue.verifyOperationInProgress(),V(Ae,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await md(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>{te("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{V("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{te("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),r._offlineComponents=t}async function il(r,t){r.asyncQueue.verifyOperationInProgress();const e=await wy(r);V(Ae,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Zc(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Zc(t.remoteStore,s))),r._onlineComponents=t}async function wy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(Ae,"Using user provided OfflineComponentProvider");try{await ao(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;te("Error using user provided cache. Falling back to memory cache: "+e),await ao(r,new Ur)}}else V(Ae,"Using default OfflineComponentProvider"),await ao(r,new Iy(void 0));return r._offlineComponents}async function Ld(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(Ae,"Using user provided OnlineComponentProvider"),await il(r,r._uninitializedComponentsProvider._online)):(V(Ae,"Using default OnlineComponentProvider"),await il(r,new jr))),r._onlineComponents}function Ay(r){return Ld(r).then((t=>t.syncEngine))}async function ol(r){const t=await Ld(r),e=t.eventManager;return e.onListen=ey.bind(null,t.syncEngine),e.onUnlisten=ry.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ny.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=sy.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firestore.googleapis.com",ul=!0;class cl{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ud,this.ssl=ul}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ul;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ed;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<id)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}vg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bd((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ti{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cl(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new fg;switch(n.type){case"firstParty":return new _g(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=al.get(e);n&&(V("ComponentProvider","Removing Datastore"),al.delete(e),n.terminate())})(this),Promise.resolve()}}function by(r,t,e,n={}){var s;r=ye(r,Ti);const i=ei(t),a=r._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:r._getEmulatorOptions()}),l=`${t}:${e}`;i&&(yl(`https://${l}`),Wf("Firestore",!0)),a.host!==Ud&&a.host!==l&&te("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:n});if(!br(d,u)&&(r._setSettings(d),n.mockUserToken)){let m,g;if(typeof n.mockUserToken=="string")m=n.mockUserToken,g=pt.MOCK_USER;else{m=Kf(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const y=n.mockUserToken.sub||n.mockUserToken.user_id;if(!y)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new pt(y)}r._authCredentials=new mg(new Fl(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new vi(this.firestore,t,this._query)}}class ft{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(zr(e,ft._jsonSchema))return new ft(t,n||null,new k(Y.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:dt("string",ft._jsonSchemaVersion),referencePath:dt("string")};class Ee extends vi{constructor(t,e,n){super(t,e,li(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new k(t))}withConverter(t){return new Ee(this.firestore,t,this._path)}}function Gy(r,t,...e){if(r=Jt(r),Ul("collection","path",t),r instanceof Ti){const n=Y.fromString(t,...e);return Ju(n),new Ee(r,null,n)}{if(!(r instanceof ft||r instanceof Ee))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Ju(n),new Ee(r.firestore,null,n)}}function Hy(r,t,...e){if(r=Jt(r),arguments.length===1&&(t=$o.newId()),Ul("doc","path",t),r instanceof Ti){const n=Y.fromString(t,...e);return Yu(n),new ft(r,null,new k(n))}{if(!(r instanceof ft||r instanceof Ee))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Yu(n),new ft(r.firestore,r instanceof Ee?r.converter:null,new k(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="AsyncQueue";class hl{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ad(this,"async_queue_retry"),this.oc=()=>{const n=xs();n&&V(ll,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=xs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=xs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new _e;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Re(t))throw t;V(ll,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((n=>{throw this.tc=n,this.nc=!1,ct("INTERNAL UNHANDLED ERROR: ",dl(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=va.createAndSchedule(this,t,e,n,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&M(47125,{hc:dl(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function dl(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class qr extends Ti{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new hl,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new hl(t),this._firestoreClient=void 0,await t}}}function Wy(r,t,e){e||(e=Or);const n=Sl(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(br(i,t))return s;throw new O(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new O(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<id)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&ei(t.host)&&yl(t.host),n.initialize({options:t,instanceIdentifier:e})}function Qy(r,t){const e=typeof r=="object"?r:tg(),n=typeof r=="string"?r:Or,s=Sl(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=zf("firestore");i&&by(s,...i)}return s}function jd(r){if(r._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ry(r),r._firestoreClient}function Ry(r){var t,e,n;const s=r._freezeSettings(),i=(function(u,l,d,m){return new tp(u,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Bd(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new vy(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(u){const l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Lt(lt.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Lt(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(zr(t,Lt._jsonSchema))return Lt.fromBase64String(t.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:dt("string",Lt._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Kt._jsonSchemaVersion}}static fromJSON(t){if(zr(t,Kt._jsonSchema))return new Kt(t.latitude,t.longitude)}}Kt._jsonSchemaVersion="firestore/geoPoint/1.0",Kt._jsonSchema={type:dt("string",Kt._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(zr(t,Gt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Gt(t.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:dt("string",Gt._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=/^__.*__$/;class Py{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ln(t,this.data,e,this.fieldTransforms)}}class qd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function zd(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class Da{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Da(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:n,mc:!1});return s.fc(t),s}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:n,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ti(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(zd(this.Ec)&&Sy.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Vy{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||_i(t)}Dc(t,e,n,s=!1){return new Da({Ec:t,methodName:e,bc:n,path:ot.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $d(r){const t=r._freezeSettings(),e=_i(r._databaseId);return new Vy(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Cy(r,t,e,n,s,i={}){const a=r.Dc(i.merge||i.mergeFields?2:0,t,e,s);xa("Data must be an object, but it was:",a,n);const u=Kd(n,a);let l,d;if(i.merge)l=new Dt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const y=Uo(t,g,e);if(!a.contains(y))throw new O(P.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Hd(m,y)||m.push(y)}l=new Dt(m),d=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,d=a.fieldTransforms;return new Py(new bt(u),l,d)}class Ai extends Ca{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ai}}function Dy(r,t,e,n){const s=r.Dc(1,t,e);xa("Data must be an object, but it was:",s,n);const i=[],a=bt.empty();Se(n,((l,d)=>{const m=Na(t,l,e);d=Jt(d);const g=s.gc(m);if(d instanceof Ai)i.push(m);else{const y=bi(d,g);y!=null&&(i.push(m),a.set(m,y))}}));const u=new Dt(i);return new qd(a,u,s.fieldTransforms)}function xy(r,t,e,n,s,i){const a=r.Dc(1,t,e),u=[Uo(t,n,e)],l=[s];if(i.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<i.length;y+=2)u.push(Uo(t,i[y])),l.push(i[y+1]);const d=[],m=bt.empty();for(let y=u.length-1;y>=0;--y)if(!Hd(d,u[y])){const R=u[y];let C=l[y];C=Jt(C);const x=a.gc(R);if(C instanceof Ai)d.push(R);else{const D=bi(C,x);D!=null&&(d.push(R),m.set(R,D))}}const g=new Dt(d);return new qd(m,g,a.fieldTransforms)}function bi(r,t){if(Gd(r=Jt(r)))return xa("Unsupported field value:",t,r),Kd(r,t);if(r instanceof Ca)return(function(n,s){if(!zd(s.Ec))throw s.wc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const u of n){let l=bi(u,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=Jt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return yp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=J.fromDate(n);return{timestampValue:Dn(s.serializer,i)}}if(n instanceof J){const i=new J(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Dn(s.serializer,i)}}if(n instanceof Kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Lt)return{bytesValue:Bh(s.serializer,n._byteString)};if(n instanceof ft){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:la(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Gt)return(function(a,u){return{mapValue:{fields:{[Zo]:{stringValue:ta},[bn]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return sa(u.serializer,d)}))}}}}}})(n,s);throw s.wc(`Unsupported field value: ${Ko(n)}`)})(r,t)}function Kd(r,t){const e={};return sh(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(r,((n,s)=>{const i=bi(s,t.Vc(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function Gd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof J||r instanceof Kt||r instanceof Lt||r instanceof ft||r instanceof Ca||r instanceof Gt)}function xa(r,t,e){if(!Gd(e)||!jl(e)){const n=Ko(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function Uo(r,t,e){if((t=Jt(t))instanceof wi)return t._internalPath;if(typeof t=="string")return Na(r,t);throw ti("Field path arguments must be of type string or ",r,!1,void 0,e)}const Ny=new RegExp("[~\\*/\\[\\]]");function Na(r,t,e){if(t.search(Ny)>=0)throw ti(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new wi(...t.split("."))._internalPath}catch{throw ti(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ti(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new O(P.INVALID_ARGUMENT,u+r+l)}function Hd(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ky(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Qd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ky extends Wd{data(){return super.data()}}function Qd(r,t){return typeof t=="string"?Na(r,t):t instanceof wi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class My{convertValue(t,e="none"){switch(Te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Se(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[bn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((a=>it(a.doubleValue)));return new Gt(i)}convertGeoPoint(t){return new Kt(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ai(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(kr(t));default:return null}}convertTimestamp(t){const e=ee(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);L(Qh(n),9688,{name:t});const s=new He(n.get(1),n.get(3)),i=new k(n.popFirst(5));return s.isEqual(e)||ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(r,t,e){let n;return n=r?r.toFirestore(t):t,n}class mr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ke extends Wd{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Qd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ke._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ke._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ke._jsonSchema={type:dt("string",Ke._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class Ns extends Ke{data(t={}){return super.data(t)}}class yn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new mr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Ns(this._firestore,this._userDataWriter,n.key,n,new mr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const l=new Ns(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const l=new Ns(s._firestore,s._userDataWriter,u.doc.key,u.doc,new mr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Ly(u.type),doc:l,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=yn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=$o.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Ly(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}yn._jsonSchemaVersion="firestore/querySnapshot/1.0",yn._jsonSchema={type:dt("string",yn._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Xd extends My{constructor(t){super(),this.firestore=t}convertBytes(t){return new Lt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,e)}}function Xy(r,t,e){r=ye(r,ft);const n=ye(r.firestore,qr),s=Fy(r.converter,t);return Yd(n,[Cy($d(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,xt.none())])}function Yy(r,t,e,...n){r=ye(r,ft);const s=ye(r.firestore,qr),i=$d(s);let a;return a=typeof(t=Jt(t))=="string"||t instanceof wi?xy(i,"updateDoc",r._key,t,e,n):Dy(i,"updateDoc",r._key,t),Yd(s,[a.toMutation(r._key,xt.exists(!0))])}function Jy(r,...t){var e,n,s;r=Jt(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||fl(t[a])||(i=t[a++]);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(fl(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,m;if(r instanceof ft)d=ye(r.firestore,qr),m=li(r._key.path),l={next:g=>{t[a]&&t[a](By(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=ye(r,vi);d=ye(g.firestore,qr),m=g._query;const y=new Xd(d);l={next:R=>{t[a]&&t[a](new yn(d,y,g,R))},error:t[a+1],complete:t[a+2]},Oy(r._query)}return(function(y,R,C,x){const D=new Ty(x),z=new X_(R,D,C);return y.asyncQueue.enqueueAndForget((async()=>G_(await ol(y),z))),()=>{D.Ou(),y.asyncQueue.enqueueAndForget((async()=>H_(await ol(y),z)))}})(jd(d),m,u,l)}function Yd(r,t){return(function(n,s){const i=new _e;return n.asyncQueue.enqueueAndForget((async()=>iy(await Ay(n),s,i))),i.promise})(jd(r),t)}function By(r,t,e){const n=e.docs.get(t._key),s=new Xd(r);return new Ke(r,s,t._key,n,new mr(e.hasPendingWrites,e.fromCache),t.converter)}class Uy{constructor(t){let e;this.kind="persistent",t?.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=zy(),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Zy(r){return new Uy(r)}class jy{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=jr.provider,this._offlineComponentProvider={build:e=>new Fd(e,t?.cacheSizeBytes,this.forceOwnership)}}}class qy{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=jr.provider,this._offlineComponentProvider={build:e=>new Ey(e,t?.cacheSizeBytes)}}}function zy(r){return new jy(void 0)}function tI(){return new qy}(function(t,e=!0){(function(s){Fn=s})(Jm),Ms(new Rr("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new qr(new gg(n.getProvider("auth-internal")),new yg(a,n.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new He(d.options.projectId,m)})(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),pn(Gu,Hu,t),pn(Gu,Hu,"esm2017")})();export{tg as a,Wy as b,tI as c,Qy as d,Gy as e,Hy as f,$y as g,Zm as i,Jy as o,Zy as p,Xy as s,Yy as u};

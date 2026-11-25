/**
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
 */const Fi=function(s){const e=[];let r=0;for(let h=0;h<s.length;h++){let u=s.charCodeAt(h);u<128?e[r++]=u:u<2048?(e[r++]=u>>6|192,e[r++]=u&63|128):(u&64512)===55296&&h+1<s.length&&(s.charCodeAt(h+1)&64512)===56320?(u=65536+((u&1023)<<10)+(s.charCodeAt(++h)&1023),e[r++]=u>>18|240,e[r++]=u>>12&63|128,e[r++]=u>>6&63|128,e[r++]=u&63|128):(e[r++]=u>>12|224,e[r++]=u>>6&63|128,e[r++]=u&63|128)}return e},jr=function(s){const e=[];let r=0,h=0;for(;r<s.length;){const u=s[r++];if(u<128)e[h++]=String.fromCharCode(u);else if(u>191&&u<224){const y=s[r++];e[h++]=String.fromCharCode((u&31)<<6|y&63)}else if(u>239&&u<365){const y=s[r++],v=s[r++],E=s[r++],A=((u&7)<<18|(y&63)<<12|(v&63)<<6|E&63)-65536;e[h++]=String.fromCharCode(55296+(A>>10)),e[h++]=String.fromCharCode(56320+(A&1023))}else{const y=s[r++],v=s[r++];e[h++]=String.fromCharCode((u&15)<<12|(y&63)<<6|v&63)}}return e.join("")},Vr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,h=[];for(let u=0;u<s.length;u+=3){const y=s[u],v=u+1<s.length,E=v?s[u+1]:0,A=u+2<s.length,S=A?s[u+2]:0,q=y>>2,G=(y&3)<<4|E>>4;let O=(E&15)<<2|S>>6,X=S&63;A||(X=64,v||(O=64)),h.push(r[q],r[G],r[O],r[X])}return h.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Fi(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):jr(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,h=[];for(let u=0;u<s.length;){const y=r[s.charAt(u++)],E=u<s.length?r[s.charAt(u)]:0;++u;const S=u<s.length?r[s.charAt(u)]:64;++u;const G=u<s.length?r[s.charAt(u)]:64;if(++u,y==null||E==null||S==null||G==null)throw new Br;const O=y<<2|E>>4;if(h.push(O),S!==64){const X=E<<4&240|S>>2;if(h.push(X),G!==64){const R=S<<6&192|G;h.push(R)}}}return h},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Br extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fr=function(s){const e=Fi(s);return Vr.encodeByteArray(e,!0)},Ui=function(s){return Fr(s).replace(/\./g,"")};function Ur(){try{return typeof indexedDB=="object"}catch{return!1}}function Hr(){return new Promise((s,e)=>{try{let r=!0;const h="validate-browser-context-for-indexeddb-analytics-module",u=self.indexedDB.open(h);u.onsuccess=()=>{u.result.close(),r||self.indexedDB.deleteDatabase(h),s(!0)},u.onupgradeneeded=()=>{r=!1},u.onerror=()=>{var y;e(((y=u.error)===null||y===void 0?void 0:y.message)||"")}}catch(r){e(r)}})}/**
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
 */const $r="FirebaseError";class Ot extends Error{constructor(e,r,h){super(r),this.code=e,this.customData=h,this.name=$r,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,r,h){this.service=e,this.serviceName=r,this.errors=h}create(e,...r){const h=r[0]||{},u=`${this.service}/${e}`,y=this.errors[e],v=y?Gr(y,h):"Error",E=`${this.serviceName}: ${v} (${u}).`;return new Ot(u,E,h)}}function Gr(s,e){return s.replace(Wr,(r,h)=>{const u=e[h];return u!=null?String(u):`<${h}?>`})}const Wr=/\{\$([^}]+)}/g;class we{constructor(e,r,h){this.name=e,this.instanceFactory=r,this.type=h,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var P;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(P||(P={}));const qr={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Xr=P.INFO,zr={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Jr=(s,e,...r)=>{if(e<s.logLevel)return;const h=new Date().toISOString(),u=zr[e];if(u)console[u](`[${h}]  ${s.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $i{constructor(e){this.name=e,this._logLevel=Xr,this._logHandler=Jr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Kr=(s,e)=>e.some(r=>s instanceof r);let fi,pi;function Yr(){return fi||(fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zr(){return pi||(pi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gi=new WeakMap,sn=new WeakMap,Wi=new WeakMap,Qe=new WeakMap,an=new WeakMap;function Qr(s){const e=new Promise((r,h)=>{const u=()=>{s.removeEventListener("success",y),s.removeEventListener("error",v)},y=()=>{r(dt(s.result)),u()},v=()=>{h(s.error),u()};s.addEventListener("success",y),s.addEventListener("error",v)});return e.then(r=>{r instanceof IDBCursor&&Gi.set(r,s)}).catch(()=>{}),an.set(e,s),e}function ts(s){if(sn.has(s))return;const e=new Promise((r,h)=>{const u=()=>{s.removeEventListener("complete",y),s.removeEventListener("error",v),s.removeEventListener("abort",v)},y=()=>{r(),u()},v=()=>{h(s.error||new DOMException("AbortError","AbortError")),u()};s.addEventListener("complete",y),s.addEventListener("error",v),s.addEventListener("abort",v)});sn.set(s,e)}let on={get(s,e,r){if(s instanceof IDBTransaction){if(e==="done")return sn.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Wi.get(s);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return dt(s[e])},set(s,e,r){return s[e]=r,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function es(s){on=s(on)}function ns(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const h=s.call(tn(this),e,...r);return Wi.set(h,e.sort?e.sort():[e]),dt(h)}:Zr().includes(s)?function(...e){return s.apply(tn(this),e),dt(Gi.get(this))}:function(...e){return dt(s.apply(tn(this),e))}}function is(s){return typeof s=="function"?ns(s):(s instanceof IDBTransaction&&ts(s),Kr(s,Yr())?new Proxy(s,on):s)}function dt(s){if(s instanceof IDBRequest)return Qr(s);if(Qe.has(s))return Qe.get(s);const e=is(s);return e!==s&&(Qe.set(s,e),an.set(e,s)),e}const tn=s=>an.get(s);function rs(s,e,{blocked:r,upgrade:h,blocking:u,terminated:y}={}){const v=indexedDB.open(s,e),E=dt(v);return h&&v.addEventListener("upgradeneeded",A=>{h(dt(v.result),A.oldVersion,A.newVersion,dt(v.transaction),A)}),r&&v.addEventListener("blocked",A=>r(A.oldVersion,A.newVersion,A)),E.then(A=>{y&&A.addEventListener("close",()=>y()),u&&A.addEventListener("versionchange",S=>u(S.oldVersion,S.newVersion,S))}).catch(()=>{}),E}const ss=["get","getKey","getAll","getAllKeys","count"],os=["put","add","delete","clear"],en=new Map;function gi(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(en.get(e))return en.get(e);const r=e.replace(/FromIndex$/,""),h=e!==r,u=os.includes(r);if(!(r in(h?IDBIndex:IDBObjectStore).prototype)||!(u||ss.includes(r)))return;const y=async function(v,...E){const A=this.transaction(v,u?"readwrite":"readonly");let S=A.store;return h&&(S=S.index(E.shift())),(await Promise.all([S[r](...E),u&&A.done]))[0]};return en.set(e,y),y}es(s=>({...s,get:(e,r,h)=>gi(e,r)||s.get(e,r,h),has:(e,r)=>!!gi(e,r)||s.has(e,r)}));/**
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
 */class hs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(as(r)){const h=r.getImmediate();return`${h.library}/${h.version}`}else return null}).filter(r=>r).join(" ")}}function as(s){const e=s.getComponent();return e?.type==="VERSION"}const hn="@firebase/app",di="0.13.2";/**
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
 */const lt=new $i("@firebase/app"),ls="@firebase/app-compat",us="@firebase/analytics-compat",cs="@firebase/analytics",fs="@firebase/app-check-compat",ps="@firebase/app-check",gs="@firebase/auth",ds="@firebase/auth-compat",ms="@firebase/database",ys="@firebase/data-connect",_s="@firebase/database-compat",vs="@firebase/functions",Es="@firebase/functions-compat",ws="@firebase/installations",As="@firebase/installations-compat",Ss="@firebase/messaging",Ts="@firebase/messaging-compat",Is="@firebase/performance",bs="@firebase/performance-compat",Ds="@firebase/remote-config",Rs="@firebase/remote-config-compat",Cs="@firebase/storage",Ps="@firebase/storage-compat",Ns="@firebase/firestore",Os="@firebase/ai",Ms="@firebase/firestore-compat",Ls="firebase",ks="11.10.0",xs={[hn]:"fire-core",[ls]:"fire-core-compat",[cs]:"fire-analytics",[us]:"fire-analytics-compat",[ps]:"fire-app-check",[fs]:"fire-app-check-compat",[gs]:"fire-auth",[ds]:"fire-auth-compat",[ms]:"fire-rtdb",[ys]:"fire-data-connect",[_s]:"fire-rtdb-compat",[vs]:"fire-fn",[Es]:"fire-fn-compat",[ws]:"fire-iid",[As]:"fire-iid-compat",[Ss]:"fire-fcm",[Ts]:"fire-fcm-compat",[Is]:"fire-perf",[bs]:"fire-perf-compat",[Ds]:"fire-rc",[Rs]:"fire-rc-compat",[Cs]:"fire-gcs",[Ps]:"fire-gcs-compat",[Ns]:"fire-fst",[Ms]:"fire-fst-compat",[Os]:"fire-vertex","fire-js":"fire-js",[Ls]:"fire-js-all"};/**
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
 */const js=new Map,Vs=new Map,mi=new Map;function yi(s,e){try{s.container.addComponent(e)}catch(r){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,r)}}function Ae(s){const e=s.name;if(mi.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,s);for(const r of js.values())yi(r,s);for(const r of Vs.values())yi(r,s);return!0}function Bs(s){return s==null?!1:s.settings!==void 0}/**
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
 */const Fs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new Hi("app","Firebase",Fs);/**
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
 */const Us=ks;function Pt(s,e,r){var h;let u=(h=xs[s])!==null&&h!==void 0?h:s;r&&(u+=`-${r}`);const y=u.match(/\s|\//),v=e.match(/\s|\//);if(y||v){const E=[`Unable to register library "${u}" with version "${e}":`];y&&E.push(`library name "${u}" contains illegal characters (whitespace or "/")`),y&&v&&E.push("and"),v&&E.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(E.join(" "));return}Ae(new we(`${u}-version`,()=>({library:u,version:e}),"VERSION"))}/**
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
 */const Hs="firebase-heartbeat-database",$s=1,Qt="firebase-heartbeat-store";let nn=null;function qi(){return nn||(nn=rs(Hs,$s,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Qt)}catch(r){console.warn(r)}}}}).catch(s=>{throw ln.create("idb-open",{originalErrorMessage:s.message})})),nn}async function Gs(s){try{const r=(await qi()).transaction(Qt),h=await r.objectStore(Qt).get(Xi(s));return await r.done,h}catch(e){if(e instanceof Ot)lt.warn(e.message);else{const r=ln.create("idb-get",{originalErrorMessage:e?.message});lt.warn(r.message)}}}async function _i(s,e){try{const h=(await qi()).transaction(Qt,"readwrite");await h.objectStore(Qt).put(e,Xi(s)),await h.done}catch(r){if(r instanceof Ot)lt.warn(r.message);else{const h=ln.create("idb-set",{originalErrorMessage:r?.message});lt.warn(h.message)}}}function Xi(s){return`${s.name}!${s.options.appId}`}/**
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
 */const Ws=1024,qs=30;class Xs{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Js(r),this._heartbeatsCachePromise=this._storage.read().then(h=>(this._heartbeatsCache=h,h))}async triggerHeartbeat(){var e,r;try{const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),y=vi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===y||this._heartbeatsCache.heartbeats.some(v=>v.date===y))return;if(this._heartbeatsCache.heartbeats.push({date:y,agent:u}),this._heartbeatsCache.heartbeats.length>qs){const v=Ks(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(v,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(h){lt.warn(h)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=vi(),{heartbeatsToSend:h,unsentEntries:u}=zs(this._heartbeatsCache.heartbeats),y=Ui(JSON.stringify({version:2,heartbeats:h}));return this._heartbeatsCache.lastSentHeartbeatDate=r,u.length>0?(this._heartbeatsCache.heartbeats=u,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),y}catch(r){return lt.warn(r),""}}}function vi(){return new Date().toISOString().substring(0,10)}function zs(s,e=Ws){const r=[];let h=s.slice();for(const u of s){const y=r.find(v=>v.agent===u.agent);if(y){if(y.dates.push(u.date),Ei(r)>e){y.dates.pop();break}}else if(r.push({agent:u.agent,dates:[u.date]}),Ei(r)>e){r.pop();break}h=h.slice(1)}return{heartbeatsToSend:r,unsentEntries:h}}class Js{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ur()?Hr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Gs(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const u=await this.read();return _i(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:u.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const u=await this.read();return _i(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:u.lastSentHeartbeatDate,heartbeats:[...u.heartbeats,...e.heartbeats]})}else return}}function Ei(s){return Ui(JSON.stringify({version:2,heartbeats:s})).length}function Ks(s){if(s.length===0)return-1;let e=0,r=s[0].date;for(let h=1;h<s.length;h++)s[h].date<r&&(r=s[h].date,e=h);return e}/**
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
 */function Ys(s){Ae(new we("platform-logger",e=>new hs(e),"PRIVATE")),Ae(new we("heartbeat",e=>new Xs(e),"PRIVATE")),Pt(hn,di,s),Pt(hn,di,"esm2017"),Pt("fire-js","")}Ys("");var Zs="firebase",Qs="11.10.0";/**
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
 */Pt(Zs,Qs,"app");var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,a){function c(){}c.prototype=a.prototype,g.D=a.prototype,g.prototype=new c,g.prototype.constructor=g,g.C=function(f,p,m){for(var l=Array(arguments.length-2),st=2;st<arguments.length;st++)l[st-2]=arguments[st];return a.prototype[p].apply(f,l)}}function r(){this.blockSize=-1}function h(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(h,r),h.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function u(g,a,c){c||(c=0);var f=Array(16);if(typeof a=="string")for(var p=0;16>p;++p)f[p]=a.charCodeAt(c++)|a.charCodeAt(c++)<<8|a.charCodeAt(c++)<<16|a.charCodeAt(c++)<<24;else for(p=0;16>p;++p)f[p]=a[c++]|a[c++]<<8|a[c++]<<16|a[c++]<<24;a=g.g[0],c=g.g[1],p=g.g[2];var m=g.g[3],l=a+(m^c&(p^m))+f[0]+3614090360&4294967295;a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[1]+3905402710&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[2]+606105819&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[3]+3250441966&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(m^c&(p^m))+f[4]+4118548399&4294967295,a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[5]+1200080426&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[6]+2821735955&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[7]+4249261313&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(m^c&(p^m))+f[8]+1770035416&4294967295,a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[9]+2336552879&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[10]+4294925233&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[11]+2304563134&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(m^c&(p^m))+f[12]+1804603682&4294967295,a=c+(l<<7&4294967295|l>>>25),l=m+(p^a&(c^p))+f[13]+4254626195&4294967295,m=a+(l<<12&4294967295|l>>>20),l=p+(c^m&(a^c))+f[14]+2792965006&4294967295,p=m+(l<<17&4294967295|l>>>15),l=c+(a^p&(m^a))+f[15]+1236535329&4294967295,c=p+(l<<22&4294967295|l>>>10),l=a+(p^m&(c^p))+f[1]+4129170786&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[6]+3225465664&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[11]+643717713&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[0]+3921069994&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(c^p))+f[5]+3593408605&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[10]+38016083&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[15]+3634488961&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[4]+3889429448&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(c^p))+f[9]+568446438&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[14]+3275163606&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[3]+4107603335&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[8]+1163531501&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(p^m&(c^p))+f[13]+2850285829&4294967295,a=c+(l<<5&4294967295|l>>>27),l=m+(c^p&(a^c))+f[2]+4243563512&4294967295,m=a+(l<<9&4294967295|l>>>23),l=p+(a^c&(m^a))+f[7]+1735328473&4294967295,p=m+(l<<14&4294967295|l>>>18),l=c+(m^a&(p^m))+f[12]+2368359562&4294967295,c=p+(l<<20&4294967295|l>>>12),l=a+(c^p^m)+f[5]+4294588738&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[8]+2272392833&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[11]+1839030562&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[14]+4259657740&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(c^p^m)+f[1]+2763975236&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[4]+1272893353&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[7]+4139469664&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[10]+3200236656&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(c^p^m)+f[13]+681279174&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[0]+3936430074&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[3]+3572445317&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[6]+76029189&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(c^p^m)+f[9]+3654602809&4294967295,a=c+(l<<4&4294967295|l>>>28),l=m+(a^c^p)+f[12]+3873151461&4294967295,m=a+(l<<11&4294967295|l>>>21),l=p+(m^a^c)+f[15]+530742520&4294967295,p=m+(l<<16&4294967295|l>>>16),l=c+(p^m^a)+f[2]+3299628645&4294967295,c=p+(l<<23&4294967295|l>>>9),l=a+(p^(c|~m))+f[0]+4096336452&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[7]+1126891415&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[14]+2878612391&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[5]+4237533241&4294967295,c=p+(l<<21&4294967295|l>>>11),l=a+(p^(c|~m))+f[12]+1700485571&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[3]+2399980690&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[10]+4293915773&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[1]+2240044497&4294967295,c=p+(l<<21&4294967295|l>>>11),l=a+(p^(c|~m))+f[8]+1873313359&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[15]+4264355552&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[6]+2734768916&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[13]+1309151649&4294967295,c=p+(l<<21&4294967295|l>>>11),l=a+(p^(c|~m))+f[4]+4149444226&4294967295,a=c+(l<<6&4294967295|l>>>26),l=m+(c^(a|~p))+f[11]+3174756917&4294967295,m=a+(l<<10&4294967295|l>>>22),l=p+(a^(m|~c))+f[2]+718787259&4294967295,p=m+(l<<15&4294967295|l>>>17),l=c+(m^(p|~a))+f[9]+3951481745&4294967295,g.g[0]=g.g[0]+a&4294967295,g.g[1]=g.g[1]+(p+(l<<21&4294967295|l>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+m&4294967295}h.prototype.u=function(g,a){a===void 0&&(a=g.length);for(var c=a-this.blockSize,f=this.B,p=this.h,m=0;m<a;){if(p==0)for(;m<=c;)u(this,g,m),m+=this.blockSize;if(typeof g=="string"){for(;m<a;)if(f[p++]=g.charCodeAt(m++),p==this.blockSize){u(this,f),p=0;break}}else for(;m<a;)if(f[p++]=g[m++],p==this.blockSize){u(this,f),p=0;break}}this.h=p,this.o+=a},h.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var a=1;a<g.length-8;++a)g[a]=0;var c=8*this.o;for(a=g.length-8;a<g.length;++a)g[a]=c&255,c/=256;for(this.u(g),g=Array(16),a=c=0;4>a;++a)for(var f=0;32>f;f+=8)g[c++]=this.g[a]>>>f&255;return g};function y(g,a){var c=E;return Object.prototype.hasOwnProperty.call(c,g)?c[g]:c[g]=a(g)}function v(g,a){this.h=a;for(var c=[],f=!0,p=g.length-1;0<=p;p--){var m=g[p]|0;f&&m==a||(c[p]=m,f=!1)}this.g=c}var E={};function A(g){return-128<=g&&128>g?y(g,function(a){return new v([a|0],0>a?-1:0)}):new v([g|0],0>g?-1:0)}function S(g){if(isNaN(g)||!isFinite(g))return G;if(0>g)return L(S(-g));for(var a=[],c=1,f=0;g>=c;f++)a[f]=g/c|0,c*=4294967296;return new v(a,0)}function q(g,a){if(g.length==0)throw Error("number format error: empty string");if(a=a||10,2>a||36<a)throw Error("radix out of range: "+a);if(g.charAt(0)=="-")return L(q(g.substring(1),a));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var c=S(Math.pow(a,8)),f=G,p=0;p<g.length;p+=8){var m=Math.min(8,g.length-p),l=parseInt(g.substring(p,p+m),a);8>m?(m=S(Math.pow(a,m)),f=f.j(m).add(S(l))):(f=f.j(c),f=f.add(S(l)))}return f}var G=A(0),O=A(1),X=A(16777216);s=v.prototype,s.m=function(){if(j(this))return-L(this).m();for(var g=0,a=1,c=0;c<this.g.length;c++){var f=this.i(c);g+=(0<=f?f:4294967296+f)*a,a*=4294967296}return g},s.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(R(this))return"0";if(j(this))return"-"+L(this).toString(g);for(var a=S(Math.pow(g,6)),c=this,f="";;){var p=ut(c,a).g;c=Tt(c,p.j(a));var m=((0<c.g.length?c.g[0]:c.h)>>>0).toString(g);if(c=p,R(c))return m+f;for(;6>m.length;)m="0"+m;f=m+f}},s.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function R(g){if(g.h!=0)return!1;for(var a=0;a<g.g.length;a++)if(g.g[a]!=0)return!1;return!0}function j(g){return g.h==-1}s.l=function(g){return g=Tt(this,g),j(g)?-1:R(g)?0:1};function L(g){for(var a=g.g.length,c=[],f=0;f<a;f++)c[f]=~g.g[f];return new v(c,~g.h).add(O)}s.abs=function(){return j(this)?L(this):this},s.add=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0,p=0;p<=a;p++){var m=f+(this.i(p)&65535)+(g.i(p)&65535),l=(m>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);f=l>>>16,m&=65535,l&=65535,c[p]=l<<16|m}return new v(c,c[c.length-1]&-2147483648?-1:0)};function Tt(g,a){return g.add(L(a))}s.j=function(g){if(R(this)||R(g))return G;if(j(this))return j(g)?L(this).j(L(g)):L(L(this).j(g));if(j(g))return L(this.j(L(g)));if(0>this.l(X)&&0>g.l(X))return S(this.m()*g.m());for(var a=this.g.length+g.g.length,c=[],f=0;f<2*a;f++)c[f]=0;for(f=0;f<this.g.length;f++)for(var p=0;p<g.g.length;p++){var m=this.i(f)>>>16,l=this.i(f)&65535,st=g.i(p)>>>16,Mt=g.i(p)&65535;c[2*f+2*p]+=l*Mt,tt(c,2*f+2*p),c[2*f+2*p+1]+=m*Mt,tt(c,2*f+2*p+1),c[2*f+2*p+1]+=l*st,tt(c,2*f+2*p+1),c[2*f+2*p+2]+=m*st,tt(c,2*f+2*p+2)}for(f=0;f<a;f++)c[f]=c[2*f+1]<<16|c[2*f];for(f=a;f<2*a;f++)c[f]=0;return new v(c,0)};function tt(g,a){for(;(g[a]&65535)!=g[a];)g[a+1]+=g[a]>>>16,g[a]&=65535,a++}function z(g,a){this.g=g,this.h=a}function ut(g,a){if(R(a))throw Error("division by zero");if(R(g))return new z(G,G);if(j(g))return a=ut(L(g),a),new z(L(a.g),L(a.h));if(j(a))return a=ut(g,L(a)),new z(L(a.g),a.h);if(30<g.g.length){if(j(g)||j(a))throw Error("slowDivide_ only works with positive integers.");for(var c=O,f=a;0>=f.l(g);)c=ee(c),f=ee(f);var p=et(c,1),m=et(f,1);for(f=et(f,2),c=et(c,2);!R(f);){var l=m.add(f);0>=l.l(g)&&(p=p.add(c),m=l),f=et(f,1),c=et(c,1)}return a=Tt(g,p.j(a)),new z(p,a)}for(p=G;0<=g.l(a);){for(c=Math.max(1,Math.floor(g.m()/a.m())),f=Math.ceil(Math.log(c)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),m=S(c),l=m.j(a);j(l)||0<l.l(g);)c-=f,m=S(c),l=m.j(a);R(m)&&(m=O),p=p.add(m),g=Tt(g,l)}return new z(p,g)}s.A=function(g){return ut(this,g).h},s.and=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0;f<a;f++)c[f]=this.i(f)&g.i(f);return new v(c,this.h&g.h)},s.or=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0;f<a;f++)c[f]=this.i(f)|g.i(f);return new v(c,this.h|g.h)},s.xor=function(g){for(var a=Math.max(this.g.length,g.g.length),c=[],f=0;f<a;f++)c[f]=this.i(f)^g.i(f);return new v(c,this.h^g.h)};function ee(g){for(var a=g.g.length+1,c=[],f=0;f<a;f++)c[f]=g.i(f)<<1|g.i(f-1)>>>31;return new v(c,g.h)}function et(g,a){var c=a>>5;a%=32;for(var f=g.g.length-c,p=[],m=0;m<f;m++)p[m]=0<a?g.i(m+c)>>>a|g.i(m+c+1)<<32-a:g.i(m+c);return new v(p,g.h)}h.prototype.digest=h.prototype.v,h.prototype.reset=h.prototype.s,h.prototype.update=h.prototype.u,v.prototype.add=v.prototype.add,v.prototype.multiply=v.prototype.j,v.prototype.modulo=v.prototype.A,v.prototype.compare=v.prototype.l,v.prototype.toNumber=v.prototype.m,v.prototype.toString=v.prototype.toString,v.prototype.getBits=v.prototype.i,v.fromNumber=S,v.fromString=q,un=v}).apply(typeof wi<"u"?wi:typeof self<"u"?self:typeof window<"u"?window:{});var _e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,n,i){return t==Array.prototype||t==Object.prototype||(t[n]=i.value),t};function r(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof _e=="object"&&_e];for(var n=0;n<t.length;++n){var i=t[n];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var h=r(this);function u(t,n){if(n)t:{var i=h;t=t.split(".");for(var o=0;o<t.length-1;o++){var d=t[o];if(!(d in i))break t;i=i[d]}t=t[t.length-1],o=i[t],n=n(o),n!=o&&n!=null&&e(i,t,{configurable:!0,writable:!0,value:n})}}function y(t,n){t instanceof String&&(t+="");var i=0,o=!1,d={next:function(){if(!o&&i<t.length){var _=i++;return{value:n(_,t[_]),done:!1}}return o=!0,{done:!0,value:void 0}}};return d[Symbol.iterator]=function(){return d},d}u("Array.prototype.values",function(t){return t||function(){return y(this,function(n,i){return i})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var v=v||{},E=this||self;function A(t){var n=typeof t;return n=n!="object"?n:t?Array.isArray(t)?"array":n:"null",n=="array"||n=="object"&&typeof t.length=="number"}function S(t){var n=typeof t;return n=="object"&&t!=null||n=="function"}function q(t,n,i){return t.call.apply(t.bind,arguments)}function G(t,n,i){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var d=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(d,o),t.apply(n,d)}}return function(){return t.apply(n,arguments)}}function O(t,n,i){return O=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?q:G,O.apply(null,arguments)}function X(t,n){var i=Array.prototype.slice.call(arguments,1);return function(){var o=i.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function R(t,n){function i(){}i.prototype=n.prototype,t.aa=n.prototype,t.prototype=new i,t.prototype.constructor=t,t.Qb=function(o,d,_){for(var w=Array(arguments.length-2),C=2;C<arguments.length;C++)w[C-2]=arguments[C];return n.prototype[d].apply(o,w)}}function j(t){const n=t.length;if(0<n){const i=Array(n);for(let o=0;o<n;o++)i[o]=t[o];return i}return[]}function L(t,n){for(let i=1;i<arguments.length;i++){const o=arguments[i];if(A(o)){const d=t.length||0,_=o.length||0;t.length=d+_;for(let w=0;w<_;w++)t[d+w]=o[w]}else t.push(o)}}class Tt{constructor(n,i){this.i=n,this.j=i,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}function tt(t){return/^[\s\xa0]*$/.test(t)}function z(){var t=E.navigator;return t&&(t=t.userAgent)?t:""}function ut(t){return ut[" "](t),t}ut[" "]=function(){};var ee=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function et(t,n,i){for(const o in t)n.call(i,t[o],o,t)}function g(t,n){for(const i in t)n.call(void 0,t[i],i,t)}function a(t){const n={};for(const i in t)n[i]=t[i];return n}const c="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f(t,n){let i,o;for(let d=1;d<arguments.length;d++){o=arguments[d];for(i in o)t[i]=o[i];for(let _=0;_<c.length;_++)i=c[_],Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}}function p(t){var n=1;t=t.split(":");const i=[];for(;0<n&&t.length;)i.push(t.shift()),n--;return t.length&&i.push(t.join(":")),i}function m(t){E.setTimeout(()=>{throw t},0)}function l(){var t=De;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}class st{constructor(){this.h=this.g=null}add(n,i){const o=Mt.get();o.set(n,i),this.h?this.h.next=o:this.g=o,this.h=o}}var Mt=new Tt(()=>new tr,t=>t.reset());class tr{constructor(){this.next=this.g=this.h=null}set(n,i){this.h=n,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,kt=!1,De=new st,gn=()=>{const t=E.Promise.resolve(void 0);Lt=()=>{t.then(er)}};var er=()=>{for(var t;t=l();){try{t.h.call(t.g)}catch(i){m(i)}var n=Mt;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}kt=!1};function ct(){this.s=this.s,this.C=this.C}ct.prototype.s=!1,ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function V(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var nr=(function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const i=()=>{};E.addEventListener("test",i,n),E.removeEventListener("test",i,n)}catch{}return t})();function xt(t,n){if(V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(ee){t:{try{ut(n.nodeName);var d=!0;break t}catch{}d=!1}d||(n=null)}}else i=="mouseover"?n=t.fromElement:i=="mouseout"&&(n=t.toElement);this.relatedTarget=n,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ir[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xt.aa.h.call(this)}}R(xt,V);var ir={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),rr=0;function sr(t,n,i,o,d){this.listener=t,this.proxy=null,this.src=n,this.type=i,this.capture=!!o,this.ha=d,this.key=++rr,this.da=this.fa=!1}function ie(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function re(t){this.src=t,this.g={},this.h=0}re.prototype.add=function(t,n,i,o,d){var _=t.toString();t=this.g[_],t||(t=this.g[_]=[],this.h++);var w=Ce(t,n,o,d);return-1<w?(n=t[w],i||(n.fa=!1)):(n=new sr(n,this.src,_,!!o,d),n.fa=i,t.push(n)),n};function Re(t,n){var i=n.type;if(i in t.g){var o=t.g[i],d=Array.prototype.indexOf.call(o,n,void 0),_;(_=0<=d)&&Array.prototype.splice.call(o,d,1),_&&(ie(n),t.g[i].length==0&&(delete t.g[i],t.h--))}}function Ce(t,n,i,o){for(var d=0;d<t.length;++d){var _=t[d];if(!_.da&&_.listener==n&&_.capture==!!i&&_.ha==o)return d}return-1}var Pe="closure_lm_"+(1e6*Math.random()|0),Ne={};function dn(t,n,i,o,d){if(Array.isArray(n)){for(var _=0;_<n.length;_++)dn(t,n[_],i,o,d);return null}return i=_n(i),t&&t[ne]?t.K(n,i,S(o)?!!o.capture:!1,d):or(t,n,i,!1,o,d)}function or(t,n,i,o,d,_){if(!n)throw Error("Invalid event type");var w=S(d)?!!d.capture:!!d,C=Me(t);if(C||(t[Pe]=C=new re(t)),i=C.add(n,i,o,w,_),i.proxy)return i;if(o=hr(),i.proxy=o,o.src=t,o.listener=i,t.addEventListener)nr||(d=w),d===void 0&&(d=!1),t.addEventListener(n.toString(),o,d);else if(t.attachEvent)t.attachEvent(yn(n.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return i}function hr(){function t(i){return n.call(t.src,t.listener,i)}const n=ar;return t}function mn(t,n,i,o,d){if(Array.isArray(n))for(var _=0;_<n.length;_++)mn(t,n[_],i,o,d);else o=S(o)?!!o.capture:!!o,i=_n(i),t&&t[ne]?(t=t.i,n=String(n).toString(),n in t.g&&(_=t.g[n],i=Ce(_,i,o,d),-1<i&&(ie(_[i]),Array.prototype.splice.call(_,i,1),_.length==0&&(delete t.g[n],t.h--)))):t&&(t=Me(t))&&(n=t.g[n.toString()],t=-1,n&&(t=Ce(n,i,o,d)),(i=-1<t?n[t]:null)&&Oe(i))}function Oe(t){if(typeof t!="number"&&t&&!t.da){var n=t.src;if(n&&n[ne])Re(n.i,t);else{var i=t.type,o=t.proxy;n.removeEventListener?n.removeEventListener(i,o,t.capture):n.detachEvent?n.detachEvent(yn(i),o):n.addListener&&n.removeListener&&n.removeListener(o),(i=Me(n))?(Re(i,t),i.h==0&&(i.src=null,n[Pe]=null)):ie(t)}}}function yn(t){return t in Ne?Ne[t]:Ne[t]="on"+t}function ar(t,n){if(t.da)t=!0;else{n=new xt(n,this);var i=t.listener,o=t.ha||t.src;t.fa&&Oe(t),t=i.call(o,n)}return t}function Me(t){return t=t[Pe],t instanceof re?t:null}var Le="__closure_events_fn_"+(1e9*Math.random()>>>0);function _n(t){return typeof t=="function"?t:(t[Le]||(t[Le]=function(n){return t.handleEvent(n)}),t[Le])}function B(){ct.call(this),this.i=new re(this),this.M=this,this.F=null}R(B,ct),B.prototype[ne]=!0,B.prototype.removeEventListener=function(t,n,i,o){mn(this,t,n,i,o)};function H(t,n){var i,o=t.F;if(o)for(i=[];o;o=o.F)i.push(o);if(t=t.M,o=n.type||n,typeof n=="string")n=new V(n,t);else if(n instanceof V)n.target=n.target||t;else{var d=n;n=new V(o,t),f(n,d)}if(d=!0,i)for(var _=i.length-1;0<=_;_--){var w=n.g=i[_];d=se(w,o,!0,n)&&d}if(w=n.g=t,d=se(w,o,!0,n)&&d,d=se(w,o,!1,n)&&d,i)for(_=0;_<i.length;_++)w=n.g=i[_],d=se(w,o,!1,n)&&d}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,n;for(n in t.g){for(var i=t.g[n],o=0;o<i.length;o++)ie(i[o]);delete t.g[n],t.h--}}this.F=null},B.prototype.K=function(t,n,i,o){return this.i.add(String(t),n,!1,i,o)},B.prototype.L=function(t,n,i,o){return this.i.add(String(t),n,!0,i,o)};function se(t,n,i,o){if(n=t.i.g[String(n)],!n)return!0;n=n.concat();for(var d=!0,_=0;_<n.length;++_){var w=n[_];if(w&&!w.da&&w.capture==i){var C=w.listener,x=w.ha||w.src;w.fa&&Re(t.i,w),d=C.call(x,o)!==!1&&d}}return d&&!o.defaultPrevented}function vn(t,n,i){if(typeof t=="function")i&&(t=O(t,i));else if(t&&typeof t.handleEvent=="function")t=O(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(n)?-1:E.setTimeout(t,n||0)}function En(t){t.g=vn(()=>{t.g=null,t.i&&(t.i=!1,En(t))},t.l);const n=t.h;t.h=null,t.m.apply(null,n)}class lr extends ct{constructor(n,i){super(),this.m=n,this.l=i,this.h=null,this.i=!1,this.g=null}j(n){this.h=arguments,this.g?this.i=!0:En(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){ct.call(this),this.h=t,this.g={}}R(jt,ct);var wn=[];function An(t){et(t.g,function(n,i){this.g.hasOwnProperty(i)&&Oe(n)},t),t.g={}}jt.prototype.N=function(){jt.aa.N.call(this),An(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ke=E.JSON.stringify,ur=E.JSON.parse,cr=class{stringify(t){return E.JSON.stringify(t,void 0)}parse(t){return E.JSON.parse(t,void 0)}};function xe(){}xe.prototype.h=null;function Sn(t){return t.h||(t.h=t.i())}function fr(){}var Vt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function je(){V.call(this,"d")}R(je,V);function Ve(){V.call(this,"c")}R(Ve,V);var It={},Tn=null;function Be(){return Tn=Tn||new B}It.La="serverreachability";function In(t){V.call(this,It.La,t)}R(In,V);function Bt(t){const n=Be();H(n,new In(n))}It.STAT_EVENT="statevent";function bn(t,n){V.call(this,It.STAT_EVENT,t),this.stat=n}R(bn,V);function $(t){const n=Be();H(n,new bn(n,t))}It.Ma="timingevent";function Dn(t,n){V.call(this,It.Ma,t),this.size=n}R(Dn,V);function Ft(t,n){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},n)}function Ut(){this.g=!0}Ut.prototype.xa=function(){this.g=!1};function pr(t,n,i,o,d,_){t.info(function(){if(t.g)if(_)for(var w="",C=_.split("&"),x=0;x<C.length;x++){var I=C[x].split("=");if(1<I.length){var F=I[0];I=I[1];var U=F.split("_");w=2<=U.length&&U[1]=="type"?w+(F+"="+I+"&"):w+(F+"=redacted&")}}else w=null;else w=_;return"XMLHTTP REQ ("+o+") [attempt "+d+"]: "+n+`
`+i+`
`+w})}function gr(t,n,i,o,d,_,w){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+d+"]: "+n+`
`+i+`
`+_+" "+w})}function bt(t,n,i,o){t.info(function(){return"XMLHTTP TEXT ("+n+"): "+mr(t,i)+(o?" "+o:"")})}function dr(t,n){t.info(function(){return"TIMEOUT: "+n})}Ut.prototype.info=function(){};function mr(t,n){if(!t.g)return n;if(!n)return null;try{var i=JSON.parse(n);if(i){for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var o=i[t];if(!(2>o.length)){var d=o[1];if(Array.isArray(d)&&!(1>d.length)){var _=d[0];if(_!="noop"&&_!="stop"&&_!="close")for(var w=1;w<d.length;w++)d[w]=""}}}}return ke(i)}catch{return n}}var Fe={NO_ERROR:0,TIMEOUT:8},yr={},Ue;function oe(){}R(oe,xe),oe.prototype.g=function(){return new XMLHttpRequest},oe.prototype.i=function(){return{}},Ue=new oe;function ft(t,n,i,o){this.j=t,this.i=n,this.l=i,this.R=o||1,this.U=new jt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rn}function Rn(){this.i=null,this.g="",this.h=!1}var Cn={},He={};function $e(t,n,i){t.L=1,t.v=ue(ot(n)),t.m=i,t.P=!0,Pn(t,null)}function Pn(t,n){t.F=Date.now(),he(t),t.A=ot(t.v);var i=t.A,o=t.R;Array.isArray(o)||(o=[String(o)]),Gn(i.i,"t",o),t.C=0,i=t.j.J,t.h=new Rn,t.g=ai(t.j,i?n:null,!t.m),0<t.O&&(t.M=new lr(O(t.Y,t,t.g),t.O)),n=t.U,i=t.g,o=t.ca;var d="readystatechange";Array.isArray(d)||(d&&(wn[0]=d.toString()),d=wn);for(var _=0;_<d.length;_++){var w=dn(i,d[_],o||n.handleEvent,!1,n.h||n);if(!w)break;n.g[w.key]=w}n=t.H?a(t.H):{},t.m?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),Bt(),pr(t.i,t.u,t.A,t.l,t.R,t.m)}ft.prototype.ca=function(t){t=t.target;const n=this.M;n&&ht(t)==3?n.j():this.Y(t)},ft.prototype.Y=function(t){try{if(t==this.g)t:{const U=ht(this.g);var n=this.g.Ba();const Ct=this.g.Z();if(!(3>U)&&(U!=3||this.g&&(this.h.h||this.g.oa()||Yn(this.g)))){this.J||U!=4||n==7||(n==8||0>=Ct?Bt(3):Bt(2)),Ge(this);var i=this.g.Z();this.X=i;e:if(Nn(this)){var o=Yn(this.g);t="";var d=o.length,_=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mt(this),Ht(this);var w="";break e}this.h.i=new E.TextDecoder}for(n=0;n<d;n++)this.h.h=!0,t+=this.h.i.decode(o[n],{stream:!(_&&n==d-1)});o.length=0,this.h.g+=t,this.C=0,w=this.h.g}else w=this.g.oa();if(this.o=i==200,gr(this.i,this.u,this.A,this.l,this.R,U,i),this.o){if(this.T&&!this.K){e:{if(this.g){var C,x=this.g;if((C=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tt(C)){var I=C;break e}}I=null}if(i=I)bt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,We(this,i);else{this.o=!1,this.s=3,$(12),mt(this),Ht(this);break t}}if(this.P){i=!0;let K;for(;!this.J&&this.C<w.length;)if(K=_r(this,w),K==He){U==4&&(this.s=4,$(14),i=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}else if(K==Cn){this.s=4,$(15),bt(this.i,this.l,w,"[Invalid Chunk]"),i=!1;break}else bt(this.i,this.l,K,null),We(this,K);if(Nn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),U!=4||w.length!=0||this.h.h||(this.s=1,$(16),i=!1),this.o=this.o&&i,!i)bt(this.i,this.l,w,"[Invalid Chunked Response]"),mt(this),Ht(this);else if(0<w.length&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.ba&&!F.M&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+w.length),Ye(F),F.M=!0,$(11))}}else bt(this.i,this.l,w,null),We(this,w);U==4&&mt(this),this.o&&!this.J&&(U==4?ri(this.j,this):(this.o=!1,he(this)))}else kr(this.g),i==400&&0<w.indexOf("Unknown SID")?(this.s=3,$(12)):(this.s=0,$(13)),mt(this),Ht(this)}}}catch{}finally{}};function Nn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function _r(t,n){var i=t.C,o=n.indexOf(`
`,i);return o==-1?He:(i=Number(n.substring(i,o)),isNaN(i)?Cn:(o+=1,o+i>n.length?He:(n=n.slice(o,o+i),t.C=o+i,n)))}ft.prototype.cancel=function(){this.J=!0,mt(this)};function he(t){t.S=Date.now()+t.I,On(t,t.I)}function On(t,n){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ft(O(t.ba,t),n)}function Ge(t){t.B&&(E.clearTimeout(t.B),t.B=null)}ft.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(dr(this.i,this.A),this.L!=2&&(Bt(),$(17)),mt(this),this.s=2,Ht(this)):On(this,this.S-t)};function Ht(t){t.j.G==0||t.J||ri(t.j,t)}function mt(t){Ge(t);var n=t.M;n&&typeof n.ma=="function"&&n.ma(),t.M=null,An(t.U),t.g&&(n=t.g,t.g=null,n.abort(),n.ma())}function We(t,n){try{var i=t.j;if(i.G!=0&&(i.g==t||qe(i.h,t))){if(!t.K&&qe(i.h,t)&&i.G==3){try{var o=i.Da.g.parse(n)}catch{o=null}if(Array.isArray(o)&&o.length==3){var d=o;if(d[0]==0){t:if(!i.u){if(i.g)if(i.g.F+3e3<t.F)me(i),ge(i);else break t;Ke(i),$(18)}}else i.za=d[1],0<i.za-i.T&&37500>d[2]&&i.F&&i.v==0&&!i.C&&(i.C=Ft(O(i.Za,i),6e3));if(1>=kn(i.h)&&i.ca){try{i.ca()}catch{}i.ca=void 0}}else _t(i,11)}else if((t.K||i.g==t)&&me(i),!tt(n))for(d=i.Da.g.parse(n),n=0;n<d.length;n++){let I=d[n];if(i.T=I[0],I=I[1],i.G==2)if(I[0]=="c"){i.K=I[1],i.ia=I[2];const F=I[3];F!=null&&(i.la=F,i.j.info("VER="+i.la));const U=I[4];U!=null&&(i.Aa=U,i.j.info("SVER="+i.Aa));const Ct=I[5];Ct!=null&&typeof Ct=="number"&&0<Ct&&(o=1.5*Ct,i.L=o,i.j.info("backChannelRequestTimeoutMs_="+o)),o=i;const K=t.g;if(K){const ye=K.g?K.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ye){var _=o.h;_.g||ye.indexOf("spdy")==-1&&ye.indexOf("quic")==-1&&ye.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(Xe(_,_.h),_.h=null))}if(o.D){const Ze=K.g?K.g.getResponseHeader("X-HTTP-Session-Id"):null;Ze&&(o.ya=Ze,N(o.I,o.D,Ze))}}i.G=3,i.l&&i.l.ua(),i.ba&&(i.R=Date.now()-t.F,i.j.info("Handshake RTT: "+i.R+"ms")),o=i;var w=t;if(o.qa=hi(o,o.J?o.ia:null,o.W),w.K){xn(o.h,w);var C=w,x=o.L;x&&(C.I=x),C.B&&(Ge(C),he(C)),o.g=w}else ni(o);0<i.i.length&&de(i)}else I[0]!="stop"&&I[0]!="close"||_t(i,7);else i.G==3&&(I[0]=="stop"||I[0]=="close"?I[0]=="stop"?_t(i,7):Je(i):I[0]!="noop"&&i.l&&i.l.ta(I),i.v=0)}}Bt(4)}catch{}}var vr=class{constructor(t,n){this.g=t,this.map=n}};function Mn(t){this.l=t||10,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.chrome&&E.chrome.loadTimes&&E.chrome.loadTimes()&&E.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ln(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function kn(t){return t.h?1:t.g?t.g.size:0}function qe(t,n){return t.h?t.h==n:t.g?t.g.has(n):!1}function Xe(t,n){t.g?t.g.add(n):t.h=n}function xn(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}Mn.prototype.cancel=function(){if(this.i=jn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let n=t.i;for(const i of t.g.values())n=n.concat(i.D);return n}return j(t.i)}function Er(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(A(t)){for(var n=[],i=t.length,o=0;o<i;o++)n.push(t[o]);return n}n=[],i=0;for(o in t)n[i++]=t[o];return n}function wr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(A(t)||typeof t=="string"){var n=[];t=t.length;for(var i=0;i<t;i++)n.push(i);return n}n=[],i=0;for(const o in t)n[i++]=o;return n}}}function Vn(t,n){if(t.forEach&&typeof t.forEach=="function")t.forEach(n,void 0);else if(A(t)||typeof t=="string")Array.prototype.forEach.call(t,n,void 0);else for(var i=wr(t),o=Er(t),d=o.length,_=0;_<d;_++)n.call(void 0,o[_],i&&i[_],t)}var Bn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ar(t,n){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var o=t[i].indexOf("="),d=null;if(0<=o){var _=t[i].substring(0,o);d=t[i].substring(o+1)}else _=t[i];n(_,d?decodeURIComponent(d.replace(/\+/g," ")):"")}}}function yt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof yt){this.h=t.h,ae(this,t.j),this.o=t.o,this.g=t.g,le(this,t.s),this.l=t.l;var n=t.i,i=new Wt;i.i=n.i,n.g&&(i.g=new Map(n.g),i.h=n.h),Fn(this,i),this.m=t.m}else t&&(n=String(t).match(Bn))?(this.h=!1,ae(this,n[1]||"",!0),this.o=$t(n[2]||""),this.g=$t(n[3]||"",!0),le(this,n[4]),this.l=$t(n[5]||"",!0),Fn(this,n[6]||"",!0),this.m=$t(n[7]||"")):(this.h=!1,this.i=new Wt(null,this.h))}yt.prototype.toString=function(){var t=[],n=this.j;n&&t.push(Gt(n,Un,!0),":");var i=this.g;return(i||n=="file")&&(t.push("//"),(n=this.o)&&t.push(Gt(n,Un,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.s,i!=null&&t.push(":",String(i))),(i=this.l)&&(this.g&&i.charAt(0)!="/"&&t.push("/"),t.push(Gt(i,i.charAt(0)=="/"?Ir:Tr,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.m)&&t.push("#",Gt(i,Dr)),t.join("")};function ot(t){return new yt(t)}function ae(t,n,i){t.j=i?$t(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function le(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.s=n}else t.s=null}function Fn(t,n,i){n instanceof Wt?(t.i=n,Rr(t.i,t.h)):(i||(n=Gt(n,br)),t.i=new Wt(n,t.h))}function N(t,n,i){t.i.set(n,i)}function ue(t){return N(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $t(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gt(t,n,i){return typeof t=="string"?(t=encodeURI(t).replace(n,Sr),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Sr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Un=/[#\/\?@]/g,Tr=/[#\?:]/g,Ir=/[#\?]/g,br=/[#\?@]/g,Dr=/#/g;function Wt(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function pt(t){t.g||(t.g=new Map,t.h=0,t.i&&Ar(t.i,function(n,i){t.add(decodeURIComponent(n.replace(/\+/g," ")),i)}))}s=Wt.prototype,s.add=function(t,n){pt(this),this.i=null,t=Dt(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(n),this.h+=1,this};function Hn(t,n){pt(t),n=Dt(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function $n(t,n){return pt(t),n=Dt(t,n),t.g.has(n)}s.forEach=function(t,n){pt(this),this.g.forEach(function(i,o){i.forEach(function(d){t.call(n,d,o,this)},this)},this)},s.na=function(){pt(this);const t=Array.from(this.g.values()),n=Array.from(this.g.keys()),i=[];for(let o=0;o<n.length;o++){const d=t[o];for(let _=0;_<d.length;_++)i.push(n[o])}return i},s.V=function(t){pt(this);let n=[];if(typeof t=="string")$n(this,t)&&(n=n.concat(this.g.get(Dt(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)n=n.concat(t[i])}return n},s.set=function(t,n){return pt(this),this.i=null,t=Dt(this,t),$n(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},s.get=function(t,n){return t?(t=this.V(t),0<t.length?String(t[0]):n):n};function Gn(t,n,i){Hn(t,n),0<i.length&&(t.i=null,t.g.set(Dt(t,n),j(i)),t.h+=i.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],n=Array.from(this.g.keys());for(var i=0;i<n.length;i++){var o=n[i];const _=encodeURIComponent(String(o)),w=this.V(o);for(o=0;o<w.length;o++){var d=_;w[o]!==""&&(d+="="+encodeURIComponent(String(w[o]))),t.push(d)}}return this.i=t.join("&")};function Dt(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function Rr(t,n){n&&!t.j&&(pt(t),t.i=null,t.g.forEach(function(i,o){var d=o.toLowerCase();o!=d&&(Hn(this,o),Gn(this,d,i))},t)),t.j=n}function Cr(t,n){const i=new Ut;if(E.Image){const o=new Image;o.onload=X(gt,i,"TestLoadImage: loaded",!0,n,o),o.onerror=X(gt,i,"TestLoadImage: error",!1,n,o),o.onabort=X(gt,i,"TestLoadImage: abort",!1,n,o),o.ontimeout=X(gt,i,"TestLoadImage: timeout",!1,n,o),E.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else n(!1)}function Pr(t,n){const i=new Ut,o=new AbortController,d=setTimeout(()=>{o.abort(),gt(i,"TestPingServer: timeout",!1,n)},1e4);fetch(t,{signal:o.signal}).then(_=>{clearTimeout(d),_.ok?gt(i,"TestPingServer: ok",!0,n):gt(i,"TestPingServer: server error",!1,n)}).catch(()=>{clearTimeout(d),gt(i,"TestPingServer: error",!1,n)})}function gt(t,n,i,o,d){try{d&&(d.onload=null,d.onerror=null,d.onabort=null,d.ontimeout=null),o(i)}catch{}}function Nr(){this.g=new cr}function Or(t,n,i){const o=i||"";try{Vn(t,function(d,_){let w=d;S(d)&&(w=ke(d)),n.push(o+_+"="+encodeURIComponent(w))})}catch(d){throw n.push(o+"type="+encodeURIComponent("_badmap")),d}}function ce(t){this.l=t.Ub||null,this.j=t.eb||!1}R(ce,xe),ce.prototype.g=function(){return new fe(this.l,this.j)},ce.prototype.i=(function(t){return function(){return t}})({});function fe(t,n){B.call(this),this.D=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(fe,B),s=fe.prototype,s.open=function(t,n){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=n,this.readyState=1,Xt(this)},s.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||E).fetch(new Request(this.A,n)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qt(this)),this.readyState=0},s.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xt(this)),this.g&&(this.readyState=3,Xt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}s.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.v.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?qt(this):Xt(this),this.readyState==3&&Wn(this)}},s.Ra=function(t){this.g&&(this.response=this.responseText=t,qt(this))},s.Qa=function(t){this.g&&(this.response=t,qt(this))},s.ga=function(){this.g&&qt(this)};function qt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Xt(t)}s.setRequestHeader=function(t,n){this.u.append(t,n)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var i=n.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=n.next();return t.join(`\r
`)};function Xt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fe.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function qn(t){let n="";return et(t,function(i,o){n+=o,n+=":",n+=i,n+=`\r
`}),n}function ze(t,n,i){t:{for(o in i){var o=!1;break t}o=!0}o||(i=qn(i),typeof t=="string"?i!=null&&encodeURIComponent(String(i)):N(t,n,i))}function M(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(M,B);var Mr=/^https?$/i,Lr=["POST","PUT"];s=M.prototype,s.Ha=function(t){this.J=t},s.ea=function(t,n,i,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);n=n?n.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ue.g(),this.v=this.o?Sn(this.o):Sn(Ue),this.g.onreadystatechange=O(this.Ea,this);try{this.B=!0,this.g.open(n,String(t),!0),this.B=!1}catch(_){Xn(this,_);return}if(t=i||"",i=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var d in o)i.set(d,o[d]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const _ of o.keys())i.set(_,o.get(_));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(i.keys()).find(_=>_.toLowerCase()=="content-type"),d=E.FormData&&t instanceof E.FormData,!(0<=Array.prototype.indexOf.call(Lr,n,void 0))||o||d||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,w]of i)this.g.setRequestHeader(_,w);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kn(this),this.u=!0,this.g.send(t),this.u=!1}catch(_){Xn(this,_)}};function Xn(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.m=5,zn(t),pe(t)}function zn(t){t.A||(t.A=!0,H(t,"complete"),H(t,"error"))}s.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),pe(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pe(this,!0)),M.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Jn(this):this.bb())},s.bb=function(){Jn(this)};function Jn(t){if(t.h&&typeof v<"u"&&(!t.v[1]||ht(t)!=4||t.Z()!=2)){if(t.u&&ht(t)==4)vn(t.Ea,0,t);else if(H(t,"readystatechange"),ht(t)==4){t.h=!1;try{const w=t.Z();t:switch(w){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var i;if(!(i=n)){var o;if(o=w===0){var d=String(t.D).match(Bn)[1]||null;!d&&E.self&&E.self.location&&(d=E.self.location.protocol.slice(0,-1)),o=!Mr.test(d?d.toLowerCase():"")}i=o}if(i)H(t,"complete"),H(t,"success");else{t.m=6;try{var _=2<ht(t)?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.Z()+"]",zn(t)}}finally{pe(t)}}}}function pe(t,n){if(t.g){Kn(t);const i=t.g,o=t.v[0]?()=>{}:null;t.g=null,t.v=null,n||H(t,"ready");try{i.onreadystatechange=o}catch{}}}function Kn(t){t.I&&(E.clearTimeout(t.I),t.I=null)}s.isActive=function(){return!!this.g};function ht(t){return t.g?t.g.readyState:0}s.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(t){if(this.g){var n=this.g.responseText;return t&&n.indexOf(t)==0&&(n=n.substring(t.length)),ur(n)}};function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kr(t){const n={};t=(t.g&&2<=ht(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(tt(t[o]))continue;var i=p(t[o]);const d=i[0];if(i=i[1],typeof i!="string")continue;i=i.trim();const _=n[d]||[];n[d]=_,_.push(i)}g(n,function(o){return o.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zt(t,n,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||n}function Zn(t){this.Aa=0,this.i=[],this.j=new Ut,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zt("baseRetryDelayMs",5e3,t),this.cb=zt("retryDelaySeedMs",1e4,t),this.Wa=zt("forwardChannelMaxRetries",2,t),this.wa=zt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Mn(t&&t.concurrentRequestLimit),this.Da=new Nr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=Zn.prototype,s.la=8,s.G=1,s.connect=function(t,n,i,o){$(0),this.W=t,this.H=n||{},i&&o!==void 0&&(this.H.OSID=i,this.H.OAID=o),this.F=this.X,this.I=hi(this,null,this.W),de(this)};function Je(t){if(Qn(t),t.G==3){var n=t.U++,i=ot(t.I);if(N(i,"SID",t.K),N(i,"RID",n),N(i,"TYPE","terminate"),Jt(t,i),n=new ft(t,t.j,n),n.L=2,n.v=ue(ot(i)),i=!1,E.navigator&&E.navigator.sendBeacon)try{i=E.navigator.sendBeacon(n.v.toString(),"")}catch{}!i&&E.Image&&(new Image().src=n.v,i=!0),i||(n.g=ai(n.j,null),n.g.ea(n.v)),n.F=Date.now(),he(n)}oi(t)}function ge(t){t.g&&(Ye(t),t.g.cancel(),t.g=null)}function Qn(t){ge(t),t.u&&(E.clearTimeout(t.u),t.u=null),me(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&E.clearTimeout(t.s),t.s=null)}function de(t){if(!Ln(t.h)&&!t.s){t.s=!0;var n=t.Ga;Lt||gn(),kt||(Lt(),kt=!0),De.add(n,t),t.B=0}}function xr(t,n){return kn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=n.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Ft(O(t.Ga,t,n),si(t,t.B)),t.B++,!0)}s.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const d=new ft(this,this.j,t);let _=this.o;if(this.S&&(_?(_=a(_),f(_,this.S)):_=this.S),this.m!==null||this.O||(d.H=_,_=null),this.P)t:{for(var n=0,i=0;i<this.i.length;i++){e:{var o=this.i[i];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(n+=o,4096<n){n=i;break t}if(n===4096||i===this.i.length-1){n=i+1;break t}}n=1e3}else n=1e3;n=ei(this,d,n),i=ot(this.I),N(i,"RID",t),N(i,"CVER",22),this.D&&N(i,"X-HTTP-Session-Id",this.D),Jt(this,i),_&&(this.O?n="headers="+encodeURIComponent(String(qn(_)))+"&"+n:this.m&&ze(i,this.m,_)),Xe(this.h,d),this.Ua&&N(i,"TYPE","init"),this.P?(N(i,"$req",n),N(i,"SID","null"),d.T=!0,$e(d,i,null)):$e(d,i,n),this.G=2}}else this.G==3&&(t?ti(this,t):this.i.length==0||Ln(this.h)||ti(this))};function ti(t,n){var i;n?i=n.l:i=t.U++;const o=ot(t.I);N(o,"SID",t.K),N(o,"RID",i),N(o,"AID",t.T),Jt(t,o),t.m&&t.o&&ze(o,t.m,t.o),i=new ft(t,t.j,i,t.B+1),t.m===null&&(i.H=t.o),n&&(t.i=n.D.concat(t.i)),n=ei(t,i,1e3),i.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Xe(t.h,i),$e(i,o,n)}function Jt(t,n){t.H&&et(t.H,function(i,o){N(n,o,i)}),t.l&&Vn({},function(i,o){N(n,o,i)})}function ei(t,n,i){i=Math.min(t.i.length,i);var o=t.l?O(t.l.Na,t.l,t):null;t:{var d=t.i;let _=-1;for(;;){const w=["count="+i];_==-1?0<i?(_=d[0].g,w.push("ofs="+_)):_=0:w.push("ofs="+_);let C=!0;for(let x=0;x<i;x++){let I=d[x].g;const F=d[x].map;if(I-=_,0>I)_=Math.max(0,d[x].g-100),C=!1;else try{Or(F,w,"req"+I+"_")}catch{o&&o(F)}}if(C){o=w.join("&");break t}}}return t=t.i.splice(0,i),n.D=t,o}function ni(t){if(!t.g&&!t.u){t.Y=1;var n=t.Fa;Lt||gn(),kt||(Lt(),kt=!0),De.add(n,t),t.v=0}}function Ke(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Ft(O(t.Fa,t),si(t,t.v)),t.v++,!0)}s.Fa=function(){if(this.u=null,ii(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ft(O(this.ab,this),t)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$(10),ge(this),ii(this))};function Ye(t){t.A!=null&&(E.clearTimeout(t.A),t.A=null)}function ii(t){t.g=new ft(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var n=ot(t.qa);N(n,"RID","rpc"),N(n,"SID",t.K),N(n,"AID",t.T),N(n,"CI",t.F?"0":"1"),!t.F&&t.ja&&N(n,"TO",t.ja),N(n,"TYPE","xmlhttp"),Jt(t,n),t.m&&t.o&&ze(n,t.m,t.o),t.L&&(t.g.I=t.L);var i=t.g;t=t.ia,i.L=1,i.v=ue(ot(n)),i.m=null,i.P=!0,Pn(i,t)}s.Za=function(){this.C!=null&&(this.C=null,ge(this),Ke(this),$(19))};function me(t){t.C!=null&&(E.clearTimeout(t.C),t.C=null)}function ri(t,n){var i=null;if(t.g==n){me(t),Ye(t),t.g=null;var o=2}else if(qe(t.h,n))i=n.D,xn(t.h,n),o=1;else return;if(t.G!=0){if(n.o)if(o==1){i=n.m?n.m.length:0,n=Date.now()-n.F;var d=t.B;o=Be(),H(o,new Dn(o,i)),de(t)}else ni(t);else if(d=n.s,d==3||d==0&&0<n.X||!(o==1&&xr(t,n)||o==2&&Ke(t)))switch(i&&0<i.length&&(n=t.h,n.i=n.i.concat(i)),d){case 1:_t(t,5);break;case 4:_t(t,10);break;case 3:_t(t,6);break;default:_t(t,2)}}}function si(t,n){let i=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(i*=2),i*n}function _t(t,n){if(t.j.info("Error code "+n),n==2){var i=O(t.fb,t),o=t.Xa;const d=!o;o=new yt(o||"//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||ae(o,"https"),ue(o),d?Cr(o.toString(),i):Pr(o.toString(),i)}else $(2);t.G=0,t.l&&t.l.sa(n),oi(t),Qn(t)}s.fb=function(t){t?(this.j.info("Successfully pinged google.com"),$(2)):(this.j.info("Failed to ping google.com"),$(1))};function oi(t){if(t.G=0,t.ka=[],t.l){const n=jn(t.h);(n.length!=0||t.i.length!=0)&&(L(t.ka,n),L(t.ka,t.i),t.h.i.length=0,j(t.i),t.i.length=0),t.l.ra()}}function hi(t,n,i){var o=i instanceof yt?ot(i):new yt(i);if(o.g!="")n&&(o.g=n+"."+o.g),le(o,o.s);else{var d=E.location;o=d.protocol,n=n?n+"."+d.hostname:d.hostname,d=+d.port;var _=new yt(null);o&&ae(_,o),n&&(_.g=n),d&&le(_,d),i&&(_.l=i),o=_}return i=t.D,n=t.ya,i&&n&&N(o,i,n),N(o,"VER",t.la),Jt(t,o),o}function ai(t,n,i){if(n&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return n=t.Ca&&!t.pa?new M(new ce({eb:i})):new M(t.pa),n.Ha(t.J),n}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function li(){}s=li.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function J(t,n){B.call(this),this.g=new Zn(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.va&&(t?t["X-WebChannel-Client-Profile"]=n.va:t={"X-WebChannel-Client-Profile":n.va}),this.g.S=t,(t=n&&n.Sb)&&!tt(t)&&(this.g.m=t),this.v=n&&n.supportsCrossDomainXhr||!1,this.u=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!tt(n)&&(this.g.D=n,t=this.h,t!==null&&n in t&&(t=this.h,n in t&&delete t[n])),this.j=new Rt(this)}R(J,B),J.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},J.prototype.close=function(){Je(this.g)},J.prototype.o=function(t){var n=this.g;if(typeof t=="string"){var i={};i.__data__=t,t=i}else this.u&&(i={},i.__data__=ke(t),t=i);n.i.push(new vr(n.Ya++,t)),n.G==3&&de(n)},J.prototype.N=function(){this.g.l=null,delete this.j,Je(this.g),delete this.g,J.aa.N.call(this)};function ui(t){je.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var n=t.__sm__;if(n){t:{for(const i in n){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,n=n!==null&&t in n?n[t]:void 0),this.data=n}else this.data=t}R(ui,je);function ci(){Ve.call(this),this.status=1}R(ci,Ve);function Rt(t){this.g=t}R(Rt,li),Rt.prototype.ua=function(){H(this.g,"a")},Rt.prototype.ta=function(t){H(this.g,new ui(t))},Rt.prototype.sa=function(t){H(this.g,new ci)},Rt.prototype.ra=function(){H(this.g,"b")},J.prototype.send=J.prototype.o,J.prototype.open=J.prototype.m,J.prototype.close=J.prototype.close,Fe.NO_ERROR=0,Fe.TIMEOUT=8,Fe.HTTP_ERROR=6,yr.COMPLETE="complete",fr.EventType=Vt,Vt.OPEN="a",Vt.CLOSE="b",Vt.ERROR="c",Vt.MESSAGE="d",B.prototype.listen=B.prototype.K,M.prototype.listenOnce=M.prototype.L,M.prototype.getLastError=M.prototype.Ka,M.prototype.getLastErrorCode=M.prototype.Ba,M.prototype.getStatus=M.prototype.Z,M.prototype.getResponseJson=M.prototype.Oa,M.prototype.getResponseText=M.prototype.oa,M.prototype.send=M.prototype.ea,M.prototype.setWithCredentials=M.prototype.Ha}).apply(typeof _e<"u"?_e:typeof self<"u"?self:typeof window<"u"?window:{});const Ai="@firebase/firestore",Si="4.8.0";/**
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
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
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
 */let be="11.10.0";/**
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
 */const Se=new $i("@firebase/firestore");function Z(s,...e){if(Se.logLevel<=P.DEBUG){const r=e.map(Ji);Se.debug(`Firestore (${be}): ${s}`,...r)}}function zi(s,...e){if(Se.logLevel<=P.ERROR){const r=e.map(Ji);Se.error(`Firestore (${be}): ${s}`,...r)}}function Ji(s){if(typeof s=="string")return s;try{/**
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
*/return(function(r){return JSON.stringify(r)})(s)}catch{return s}}/**
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
 */function Te(s,e,r){let h="Unexpected state";typeof e=="string"?h=e:r=e,Ki(s,h,r)}function Ki(s,e,r){let h=`FIRESTORE (${be}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(r!==void 0)try{h+=" CONTEXT: "+JSON.stringify(r)}catch{h+=" CONTEXT: "+r}throw zi(h),new Error(h)}function Kt(s,e,r,h){let u="Unexpected state";typeof r=="string"?u=r:h=r,s||Ki(e,u,h)}/**
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
 */const b={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class D extends Ot{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yt{constructor(){this.promise=new Promise(((e,r)=>{this.resolve=e,this.reject=r}))}}/**
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
 */class to{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable((()=>r(W.UNAUTHENTICATED)))}shutdown(){}}class no{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){Kt(this.o===void 0,42304);let h=this.i;const u=A=>this.i!==h?(h=this.i,r(A)):Promise.resolve();let y=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),y.resolve(),y=new Yt,e.enqueueRetryable((()=>u(this.currentUser)))};const v=()=>{const A=y;e.enqueueRetryable((async()=>{await A.promise,await u(this.currentUser)}))},E=A=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=A,this.o&&(this.auth.addAuthTokenListener(this.o),v())};this.t.onInit((A=>E(A))),setTimeout((()=>{if(!this.auth){const A=this.t.getImmediate({optional:!0});A?E(A):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),y.resolve(),y=new Yt)}}),0),v()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then((h=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):h?(Kt(typeof h.accessToken=="string",31837,{l:h}),new to(h.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Kt(e===null||typeof e=="string",2055,{h:e}),new W(e)}}class io{constructor(e,r,h){this.P=e,this.T=r,this.I=h,this.type="FirstParty",this.user=W.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ro{constructor(e,r,h){this.P=e,this.T=r,this.I=h}getToken(){return Promise.resolve(new io(this.P,this.T,this.I))}start(e,r){e.enqueueRetryable((()=>r(W.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ti{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class so{constructor(e,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bs(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,r){Kt(this.o===void 0,3512);const h=y=>{y.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${y.error.message}`);const v=y.token!==this.m;return this.m=y.token,Z("FirebaseAppCheckTokenProvider",`Received ${v?"new":"existing"} token.`),v?r(y.token):Promise.resolve()};this.o=y=>{e.enqueueRetryable((()=>h(y)))};const u=y=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=y,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((y=>u(y))),setTimeout((()=>{if(!this.appCheck){const y=this.V.getImmediate({optional:!0});y?u(y):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ti(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((r=>r?(Kt(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new Ti(r.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function oo(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let h=0;h<s;h++)r[h]=Math.floor(256*Math.random());return r}/**
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
 */function ho(){return new TextEncoder}/**
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
 */class ao{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let h="";for(;h.length<20;){const u=oo(40);for(let y=0;y<u.length;++y)h.length<20&&u[y]<r&&(h+=e.charAt(u[y]%62))}return h}}function Q(s,e){return s<e?-1:s>e?1:0}function lo(s,e){let r=0;for(;r<s.length&&r<e.length;){const h=s.codePointAt(r),u=e.codePointAt(r);if(h!==u){if(h<128&&u<128)return Q(h,u);{const y=ho(),v=uo(y.encode(Ii(s,r)),y.encode(Ii(e,r)));return v!==0?v:Q(h,u)}}r+=h>65535?2:1}return Q(s.length,e.length)}function Ii(s,e){return s.codePointAt(e)>65535?s.substring(e,e+2):s.substring(e,e+1)}function uo(s,e){for(let r=0;r<s.length&&r<e.length;++r)if(s[r]!==e[r])return Q(s[r],e[r]);return Q(s.length,e.length)}/**
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
 */const bi="__name__";class nt{constructor(e,r,h){r===void 0?r=0:r>e.length&&Te(637,{offset:r,range:e.length}),h===void 0?h=e.length-r:h>e.length-r&&Te(1746,{length:h,range:e.length-r}),this.segments=e,this.offset=r,this.len=h}get length(){return this.len}isEqual(e){return nt.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof nt?e.forEach((h=>{r.push(h)})):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,h=this.limit();r<h;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const h=Math.min(e.length,r.length);for(let u=0;u<h;u++){const y=nt.compareSegments(e.get(u),r.get(u));if(y!==0)return y}return Q(e.length,r.length)}static compareSegments(e,r){const h=nt.isNumericId(e),u=nt.isNumericId(r);return h&&!u?-1:!h&&u?1:h&&u?nt.extractNumericId(e).compare(nt.extractNumericId(r)):lo(e,r)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return un.fromString(e.substring(4,e.length-2))}}class Y extends nt{construct(e,r,h){return new Y(e,r,h)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const h of e){if(h.indexOf("//")>=0)throw new D(b.INVALID_ARGUMENT,`Invalid segment (${h}). Paths must not contain // in them.`);r.push(...h.split("/").filter((u=>u.length>0)))}return new Y(r)}static emptyPath(){return new Y([])}}const co=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends nt{construct(e,r,h){return new vt(e,r,h)}static isValidIdentifier(e){return co.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bi}static keyField(){return new vt([bi])}static fromServerFormat(e){const r=[];let h="",u=0;const y=()=>{if(h.length===0)throw new D(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(h),h=""};let v=!1;for(;u<e.length;){const E=e[u];if(E==="\\"){if(u+1===e.length)throw new D(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const A=e[u+1];if(A!=="\\"&&A!=="."&&A!=="`")throw new D(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);h+=A,u+=2}else E==="`"?(v=!v,u++):E!=="."||v?(h+=E,u++):(y(),u++)}if(y(),v)throw new D(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(r)}static emptyPath(){return new vt([])}}/**
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
 */class Et{constructor(e){this.path=e}static fromPath(e){return new Et(Y.fromString(e))}static fromName(e){return new Et(Y.fromString(e).popFirst(5))}static empty(){return new Et(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return Y.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Et(new Y(e.slice()))}}function fo(s,e,r,h){if(e===!0&&h===!0)throw new D(b.INVALID_ARGUMENT,`${s} and ${r} cannot be used together.`)}function po(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}/**
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
 */function k(s,e){const r={typeString:s};return e&&(r.value=e),r}function te(s,e){if(!po(s))throw new D(b.INVALID_ARGUMENT,"JSON must be an object");let r;for(const h in e)if(e[h]){const u=e[h].typeString,y="value"in e[h]?{value:e[h].value}:void 0;if(!(h in s)){r=`JSON missing required field: '${h}'`;break}const v=s[h];if(u&&typeof v!==u){r=`JSON field '${h}' must be a ${u}.`;break}if(y!==void 0&&v!==y.value){r=`Expected '${h}' field to equal '${y.value}'`;break}}if(r)throw new D(b.INVALID_ARGUMENT,r);return!0}/**
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
 */const Di=-62135596800,Ri=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),h=Math.floor((e-1e3*r)*Ri);return new it(r,h)}constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new D(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new D(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<Di)throw new D(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ri}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(te(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Di;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:k("string",it._jsonSchemaVersion),seconds:k("number"),nanoseconds:k("number")};function go(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class mo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const r=(function(u){try{return atob(u)}catch(y){throw typeof DOMException<"u"&&y instanceof DOMException?new mo("Invalid base64 string: "+y):y}})(e);return new St(r)}static fromUint8Array(e){const r=(function(u){let y="";for(let v=0;v<u.length;++v)y+=String.fromCharCode(u[v]);return y})(e);return new St(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(r){return btoa(r)})(this.binaryString)}toUint8Array(){return(function(r){const h=new Uint8Array(r.length);for(let u=0;u<r.length;u++)h[u]=r.charCodeAt(u);return h})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const Ci="(default)";class Ie{constructor(e,r){this.projectId=e,this.database=r||Ci}static empty(){return new Ie("","")}get isDefaultDatabase(){return this.database===Ci}isEqual(e){return e instanceof Ie&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class yo{constructor(e,r=null,h=[],u=[],y=null,v="F",E=null,A=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=h,this.filters=u,this.limit=y,this.limitType=v,this.startAt=E,this.endAt=A,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function _o(s){return new yo(s)}/**
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
 */var Pi,T;(T=Pi||(Pi={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new un([4294967295,4294967295],0);/**
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
 */const vo=41943040;/**
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
 */const Eo=1048576;function rn(){return typeof document<"u"?document:null}/**
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
 */class wo{constructor(e,r,h=1e3,u=1.5,y=6e4){this.Fi=e,this.timerId=r,this.d_=h,this.E_=u,this.A_=y,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const r=Math.floor(this.R_+this.p_()),h=Math.max(0,Date.now()-this.m_),u=Math.max(0,r-h);u>0&&Z("ExponentialBackoff",`Backing off for ${u} ms (base delay: ${this.R_} ms, delay with jitter: ${r} ms, last attempt: ${h} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,u,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */class cn{constructor(e,r,h,u,y){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=h,this.op=u,this.removalCallback=y,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((v=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,r,h,u,y){const v=Date.now()+h,E=new cn(e,r,v,u,y);return E.start(h),E}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ni,Oi;(Oi=Ni||(Ni={})).Fa="default",Oi.Cache="cache";/**
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
 */function Ao(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const Mi=new Map;/**
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
 */const So="firestore.googleapis.com",Li=!0;class ki{constructor(e){var r,h;if(e.host===void 0){if(e.ssl!==void 0)throw new D(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=So,this.ssl=Li}else this.host=e.host,this.ssl=(r=e.ssl)!==null&&r!==void 0?r:Li;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vo;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Eo)throw new D(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fo("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ao((h=e.experimentalLongPollingOptions)!==null&&h!==void 0?h:{}),(function(y){if(y.timeoutSeconds!==void 0){if(isNaN(y.timeoutSeconds))throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (must not be NaN)`);if(y.timeoutSeconds<5)throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (minimum allowed value is 5)`);if(y.timeoutSeconds>30)throw new D(b.INVALID_ARGUMENT,`invalid long polling timeout: ${y.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(h,u){return h.timeoutSeconds===u.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class To{constructor(e,r,h,u){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=h,this._app=u,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ki({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new D(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ki(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(h){if(!h)return new eo;switch(h.type){case"firstParty":return new ro(h.sessionIndex||"0",h.iamToken||null,h.authTokenFactory||null);case"provider":return h.client;default:throw new D(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(r){const h=Mi.get(r);h&&(Z("ComponentProvider","Removing Datastore"),Mi.delete(r),h.terminate())})(this),Promise.resolve()}}/**
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
 */class fn{constructor(e,r,h){this.converter=r,this._query=h,this.type="query",this.firestore=e}withConverter(e){return new fn(this.firestore,e,this._query)}}class rt{constructor(e,r,h){this.converter=r,this._key=h,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rt(this.firestore,e,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,r,h){if(te(r,rt._jsonSchema))return new rt(e,h||null,new Et(Y.fromString(r.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:k("string",rt._jsonSchemaVersion),referencePath:k("string")};class pn extends fn{constructor(e,r,h){super(e,r,_o(h)),this._path=h,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rt(this.firestore,null,new Et(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}/**
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
 */const xi="AsyncQueue";class ji{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wo(this,"async_queue_retry"),this.oc=()=>{const h=rn();h&&Z(xi,"Visibility state changed to "+h.visibilityState),this.F_.y_()},this._c=e;const r=rn();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const r=rn();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const r=new Yt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(r.resolve,r.reject),r.promise))).then((()=>r.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!go(e))throw e;Z(xi,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const r=this._c.then((()=>(this.nc=!0,e().catch((h=>{throw this.tc=h,this.nc=!1,zi("INTERNAL UNHANDLED ERROR: ",Vi(h)),h})).then((h=>(this.nc=!1,h))))));return this._c=r,r}enqueueAfterDelay(e,r,h){this.ac(),this.sc.indexOf(e)>-1&&(r=0);const u=cn.createAndSchedule(this,e,r,h,(y=>this.lc(y)));return this.ec.push(u),u}ac(){this.tc&&Te(47125,{hc:Vi(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const r of this.ec)if(r.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((r,h)=>r.targetTimeMs-h.targetTimeMs));for(const r of this.ec)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const r=this.ec.indexOf(e);this.ec.splice(r,1)}}function Vi(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Io extends To{constructor(e,r,h,u){super(e,r,h,u),this.type="firestore",this._queue=new ji,this._persistenceKey=u?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ji(e),this._firestoreClient=void 0,await e}}}/**
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
 */class at{constructor(e){this._byteString=e}static fromBase64String(e){try{return new at(St.fromBase64String(e))}catch(r){throw new D(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new at(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:at._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(te(e,at._jsonSchema))return at.fromBase64String(e.bytes)}}at._jsonSchemaVersion="firestore/bytes/1.0",at._jsonSchema={type:k("string",at._jsonSchemaVersion),bytes:k("string")};/**
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
 */class Yi{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new D(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wt{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new D(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new D(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:wt._jsonSchemaVersion}}static fromJSON(e){if(te(e,wt._jsonSchema))return new wt(e.latitude,e.longitude)}}wt._jsonSchemaVersion="firestore/geoPoint/1.0",wt._jsonSchema={type:k("string",wt._jsonSchemaVersion),latitude:k("number"),longitude:k("number")};/**
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
 */class At{constructor(e){this._values=(e||[]).map((r=>r))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(h,u){if(h.length!==u.length)return!1;for(let y=0;y<h.length;++y)if(h[y]!==u[y])return!1;return!0})(this._values,e._values)}toJSON(){return{type:At._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(te(e,At._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((r=>typeof r=="number")))return new At(e.vectorValues);throw new D(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}At._jsonSchemaVersion="firestore/vectorValue/1.0",At._jsonSchema={type:k("string",At._jsonSchemaVersion),vectorValues:k("object")};const bo=new RegExp("[~\\*/\\[\\]]");function Do(s,e,r){if(e.search(bo)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s);try{return new Yi(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s)}}function Bi(s,e,r,h,u){let y=`Function ${e}() called with invalid data`;y+=". ";let v="";return new D(b.INVALID_ARGUMENT,y+s+v)}/**
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
 */class Zi{constructor(e,r,h,u,y){this._firestore=e,this._userDataWriter=r,this._key=h,this._document=u,this._converter=y}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ro(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(Qi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class Ro extends Zi{data(){return super.data()}}function Qi(s,e){return typeof e=="string"?Do(s,e):e instanceof Yi?e._internalPath:e._delegate._internalPath}class ve{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nt extends Zi{constructor(e,r,h,u,y,v){super(e,r,h,u,v),this._firestore=e,this._firestoreImpl=e,this.metadata=y}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new Ee(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const h=this._document.data.field(Qi("DocumentSnapshot.get",e));if(h!==null)return this._userDataWriter.convertValue(h,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,r={};return r.type=Nt._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}Nt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Nt._jsonSchema={type:k("string",Nt._jsonSchemaVersion),bundleSource:k("string","DocumentSnapshot"),bundleName:k("string"),bundle:k("string")};class Ee extends Nt{data(e={}){return super.data(e)}}class Zt{constructor(e,r,h,u){this._firestore=e,this._userDataWriter=r,this._snapshot=u,this.metadata=new ve(u.hasPendingWrites,u.fromCache),this.query=h}get docs(){const e=[];return this.forEach((r=>e.push(r))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach((h=>{e.call(r,new Ee(this._firestore,this._userDataWriter,h.key,h,new ve(this._snapshot.mutatedKeys.has(h.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new D(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=(function(u,y){if(u._snapshot.oldDocs.isEmpty()){let v=0;return u._snapshot.docChanges.map((E=>{const A=new Ee(u._firestore,u._userDataWriter,E.doc.key,E.doc,new ve(u._snapshot.mutatedKeys.has(E.doc.key),u._snapshot.fromCache),u.query.converter);return E.doc,{type:"added",doc:A,oldIndex:-1,newIndex:v++}}))}{let v=u._snapshot.oldDocs;return u._snapshot.docChanges.filter((E=>y||E.type!==3)).map((E=>{const A=new Ee(u._firestore,u._userDataWriter,E.doc.key,E.doc,new ve(u._snapshot.mutatedKeys.has(E.doc.key),u._snapshot.fromCache),u.query.converter);let S=-1,q=-1;return E.type!==0&&(S=v.indexOf(E.doc.key),v=v.delete(E.doc.key)),E.type!==1&&(v=v.add(E.doc),q=v.indexOf(E.doc.key)),{type:Co(E.type),doc:A,oldIndex:S,newIndex:q}}))}})(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ao.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],h=[],u=[];return this.docs.forEach((y=>{y._document!==null&&(r.push(y._document),h.push(this._userDataWriter.convertObjectMap(y._document.data.value.mapValue.fields,"previous")),u.push(y.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Co(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:s})}}Zt._jsonSchemaVersion="firestore/querySnapshot/1.0",Zt._jsonSchema={type:k("string",Zt._jsonSchemaVersion),bundleSource:k("string","QuerySnapshot"),bundleName:k("string"),bundle:k("string")};(function(e,r=!0){(function(u){be=u})(Us),Ae(new we("firestore",((h,{instanceIdentifier:u,options:y})=>{const v=h.getProvider("app").getImmediate(),E=new Io(new no(h.getProvider("auth-internal")),new so(v,h.getProvider("app-check-internal")),(function(S,q){if(!Object.prototype.hasOwnProperty.apply(S.options,["projectId"]))throw new D(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ie(S.options.projectId,q)})(v,u),v);return y=Object.assign({useFetchStreams:r},y),E._setSettings(y),E}),"PUBLIC").setMultipleInstances(!0)),Pt(Ai,Si,e),Pt(Ai,Si,"esm2017")})();

var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,a=!1;function c(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function u(e,t){a?(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const s=c(1,o+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;r[e]=n[s]+1;const i=s+1;n[i]=e,o=Math.max(i,o)}const s=[],i=[];let a=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(s.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);s.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<s.length&&i[t].claim_order>=s[n].claim_order;)n++;const r=n<s.length?s[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function l(e,t,n){a&&!n?u(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function m(){return p(" ")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e){return""===e?null:+e}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t){e.value=null==t?"":t}function x(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function _(e){i=e}function E(){if(!i)throw new Error("Function called outside component initialization");return i}const A=[],P=[],k=[],T=[],$=Promise.resolve();let B=!1;function U(e){k.push(e)}let j=!1;const O=new Set;function q(){if(!j){j=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];_(t),R(t.$$)}for(_(null),A.length=0;P.length;)P.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];O.has(t)||(O.add(t),t())}k.length=0}while(A.length);for(;T.length;)T.pop()();B=!1,j=!1,O.clear()}}function R(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}const S=new Set;let D;function L(e,t){e&&e.i&&(S.delete(e),e.i(t))}function M(e,t){const n=t.token={};function o(e,o,s,i){if(t.token!==n)return;t.resolved=i;let a=t.ctx;void 0!==s&&(a=a.slice(),a[s]=i);const c=e&&(t.current=e)(a);let u=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==o&&e&&(D={r:0,c:[],p:D},function(e,t,n,r){if(e&&e.o){if(S.has(e))return;S.add(e),D.c.push((()=>{S.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),D.r||r(D.c),D=D.p)})):t.block.d(1),c.c(),L(c,1),c.m(t.mount(),t.anchor),u=!0),t.block=c,t.blocks&&(t.blocks[o]=c),u&&q()}if((s=e)&&"object"==typeof s&&"function"==typeof s.then){const n=E();if(e.then((e=>{_(n),o(t.then,1,t.value,e),_(null)}),(e=>{if(_(n),o(t.catch,2,t.error,e),_(null),!t.hasCatch)throw e})),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,e),!0;t.resolved=e}var s}function I(e,t){-1===e.$$.dirty[0]&&(A.push(e),B||(B=!0,$.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function C(s,c,u,l,d,f,p=[-1]){const m=i;_(s);const y=s.$$={fragment:null,ctx:null,props:f,update:e,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:c.context||[]),callbacks:n(),dirty:p,skip_bound:!1};let b=!1;if(y.ctx=u?u(s,c.props||{},((e,t,...n)=>{const r=n.length?n[0]:t;return y.ctx&&d(y.ctx[e],y.ctx[e]=r)&&(!y.skip_bound&&y.bound[e]&&y.bound[e](r),b&&I(s,e)),t})):[],y.update(),b=!0,r(y.before_update),y.fragment=!!l&&l(y.ctx),c.target){if(c.hydrate){a=!0;const e=function(e){return Array.from(e.childNodes)}(c.target);y.fragment&&y.fragment.l(e),e.forEach(h)}else y.fragment&&y.fragment.c();c.intro&&L(s.$$.fragment),function(e,n,s,i){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=e.$$;a&&a.m(n,s),i||U((()=>{const n=c.map(t).filter(o);u?u.push(...n):r(n),e.$$.on_mount=[]})),l.forEach(U)}(s,c.target,c.anchor,c.customElement),a=!1,q()}_(m)}var F=new class{constructor(e="https://api.jikan.moe",t=3){this.setBaseURL(e,t)}getBaseURL(){return this.baseURL}setBaseURL(e,t){t&&(this.v=t),this.baseURL=new URL(`/v${this.v}`,e)}set version(e){this.v=e,this.baseURL.pathname=`/v${e}`}get version(){return this.v}},N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var H,G=(function(e,t){var n="undefined"!=typeof self?self:N,r=function(){function e(){this.fetch=!1,this.DOMException=n.DOMException}return e.prototype=n,new e}();!function(e){!function(t){var n="URLSearchParams"in e,r="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),s="FormData"in e,i="ArrayBuffer"in e;if(i)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};function u(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function l(e){return"string"!=typeof e&&(e=String(e)),e}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function p(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function m(e){var t=new FileReader,n=p(t);return t.readAsArrayBuffer(e),n}function y(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:s&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():i&&o&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=y(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(e)||c(e))?this._bodyArrayBuffer=y(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,n,r=f(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=p(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(e,t){e=u(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},d.prototype.delete=function(e){delete this.map[u(e)]},d.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},d.prototype.set=function(e,t){this.map[u(e)]=l(t)},d.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),h(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),h(e)},r&&(d.prototype[Symbol.iterator]=d.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(e,t){var n,r,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),g.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},b.call(v.prototype),b.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var _=[301,302,303,307,308];x.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function E(e,n){return new Promise((function(r,s){var i=new v(e,n);if(i.signal&&i.signal.aborted)return s(new t.DOMException("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var e,t,n={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}})),t)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;r(new x(o,n))},a.onerror=function(){s(new TypeError("Network request failed"))},a.ontimeout=function(){s(new TypeError("Network request failed"))},a.onabort=function(){s(new t.DOMException("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&o&&(a.responseType="blob"),i.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),i.signal&&(i.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",c)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}E.polyfill=!0,e.fetch||(e.fetch=E,e.Headers=d,e.Request=v,e.Response=x),t.Headers=d,t.Request=v,t.Response=x,t.fetch=E,Object.defineProperty(t,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var o=r;(t=o.fetch).default=o.fetch,t.fetch=o.fetch,t.Headers=o.Headers,t.Request=o.Request,t.Response=o.Response,e.exports=t}(H={exports:{}},H.exports),H.exports);var z=class{async send(e,t){var n=await G(this.urlBuilder(e,t)),r=await n.json();return 200!==n.status?Promise.reject(new Error(r.error)):Promise.resolve(r)}urlBuilder(e,t){var n=new URL(F.getBaseURL());return n.pathname+="/"+e.filter((e=>e)).join("/"),t&&Object.entries(t).forEach((([e,t])=>n.searchParams.append(e,t))),n.href}};var V=new class{constructor(){this.settings=F,this.request=new z}loadAnime(e,t,n){return this.request.send(["anime",e,t,n])}loadManga(e,t){return this.request.send(["manga",e,t])}loadPerson(e,t){return this.request.send(["person",e,t])}loadCharacter(e,t){return this.request.send(["character",e,t])}search(e,t,n=null,r={},o=null){return t.length<3?Promise.reject(new Error(`The given query must be of minimum 3 letters! Given query '${t}' has only ${t.length} letters.`)):(r.q=t,n&&(r.page=n),o&&(r.limit=o),this.request.send(["search",e],r))}loadSeason(e,t){return this.request.send(["season",e,t])}loadSeasonArchive(){return this.request.send(["season","archive"])}loadSeasonLater(){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["season","later"])}loadSchedule(e){return this.request.send(["schedule",e])}loadTop(e,t,n){return this.request.send(["top",e,t,n])}loadGenre(e,t,n){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["genre",e,t,n])}loadProducer(e,t){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["producer",e,t])}loadMagazine(e,t){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["magazine",e,t])}loadUser(e,t,n){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["user",e,t,n])}loadClub(e){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["club",e])}loadClubMembers(e,t){return this.settings.version<3?Promise.reject(new Error("Usable at API version 3+")):this.request.send(["club",e,"members",t])}loadMeta(e,t,n){return this.request.send(["meta","requests",e,t,n])}loadStatus(){return this.request.send(["meta","status"])}raw(e,t){return Array.isArray(e)?this.request.send(e,t):Promise.reject(new Error(`The given parameter should be an array like [anime, 1] but given was ${e}`))}};function X(e,t,n){const r=e.slice();return r[13]=t[n],r}function Y(e,t,n){const r=e.slice();return r[16]=t[n],r}function J(e){let t,n,r=e[19].message+"";return{c(){t=f("p"),n=p(r),x(t,"color","red")},m(e,r){l(e,t,r),u(t,n)},p(e,t){8&t&&r!==(r=e[19].message+"")&&v(n,r)},d(e){e&&h(t)}}}function K(e){let t,n,r,o,s,i,a,c,y,g,w,x,_,E,A,P,k,T,$,B,U,j,O,q,R,S,D,L,M,I,C,F=e[12].title+"",N=e[12].score+"",H=e[12].episodes+"",G=new Date(e[12].airing_start).toLocaleDateString()+"",z=e[12].synopsis+"",V=e[12].genres,J=[];for(let t=0;t<V.length;t+=1)J[t]=W(Y(e,V,t));let K=e[12].producers,Z=[];for(let t=0;t<K.length;t+=1)Z[t]=Q(X(e,K,t));return{c(){t=f("img"),r=m(),o=f("div"),s=p(F),i=m(),a=f("div"),c=p("⭐ "),y=p(N),g=m(),w=f("div");for(let e=0;e<J.length;e+=1)J[e].c();x=m(),_=f("div"),E=p("EP : "),A=p(H),P=m(),k=f("div"),T=p("Air Date : "),$=p(G),B=m(),U=f("div"),j=p("Studio :\n\t\t\t\t");for(let e=0;e<Z.length;e+=1)Z[e].c();O=m(),q=f("div"),R=f("a"),S=p("MAL link"),L=m(),M=f("div"),I=p("Synopsis : "),C=p(z),b(t,"class","max-h-screen-md"),t.src!==(n=e[12].image_url)&&b(t,"src",n),b(t,"alt","cover"),b(o,"class","text-3xl my-4 text-green-200"),b(a,"class","my-4 text-2xl"),b(w,"class","my-4 "),b(_,"class","my-4"),b(U,"class","my-4 "),b(R,"href",D=e[12].url),b(q,"class","text-xl text-white"),b(M,"class","mb-10")},m(e,n){l(e,t,n),l(e,r,n),l(e,o,n),u(o,s),l(e,i,n),l(e,a,n),u(a,c),u(a,y),l(e,g,n),l(e,w,n);for(let e=0;e<J.length;e+=1)J[e].m(w,null);l(e,x,n),l(e,_,n),u(_,E),u(_,A),l(e,P,n),l(e,k,n),u(k,T),u(k,$),l(e,B,n),l(e,U,n),u(U,j);for(let e=0;e<Z.length;e+=1)Z[e].m(U,null);l(e,O,n),l(e,q,n),u(q,R),u(R,S),l(e,L,n),l(e,M,n),u(M,I),u(M,C)},p(e,r){if(8&r&&t.src!==(n=e[12].image_url)&&b(t,"src",n),8&r&&F!==(F=e[12].title+"")&&v(s,F),8&r&&N!==(N=e[12].score+"")&&v(y,N),8&r){let t;for(V=e[12].genres,t=0;t<V.length;t+=1){const n=Y(e,V,t);J[t]?J[t].p(n,r):(J[t]=W(n),J[t].c(),J[t].m(w,null))}for(;t<J.length;t+=1)J[t].d(1);J.length=V.length}if(8&r&&H!==(H=e[12].episodes+"")&&v(A,H),8&r&&G!==(G=new Date(e[12].airing_start).toLocaleDateString()+"")&&v($,G),8&r){let t;for(K=e[12].producers,t=0;t<K.length;t+=1){const n=X(e,K,t);Z[t]?Z[t].p(n,r):(Z[t]=Q(n),Z[t].c(),Z[t].m(U,null))}for(;t<Z.length;t+=1)Z[t].d(1);Z.length=K.length}8&r&&D!==(D=e[12].url)&&b(R,"href",D),8&r&&z!==(z=e[12].synopsis+"")&&v(C,z)},d(e){e&&h(t),e&&h(r),e&&h(o),e&&h(i),e&&h(a),e&&h(g),e&&h(w),d(J,e),e&&h(x),e&&h(_),e&&h(P),e&&h(k),e&&h(B),e&&h(U),d(Z,e),e&&h(O),e&&h(q),e&&h(L),e&&h(M)}}}function W(e){let t,n=e[16].name+", ";return{c(){t=p(n)},m(e,n){l(e,t,n)},p(e,r){8&r&&n!==(n=e[16].name+", ")&&v(t,n)},d(e){e&&h(t)}}}function Q(e){let t,n=e[13].name+", ";return{c(){t=p(n)},m(e,n){l(e,t,n)},p(e,r){8&r&&n!==(n=e[13].name+", ")&&v(t,n)},d(e){e&&h(t)}}}function Z(t){let n;return{c(){n=f("div"),n.textContent="Loading"},m(e,t){l(e,n,t)},p:e,d(e){e&&h(n)}}}function ee(t){let n,o,s,i,a,c,d,v,_,E,A,P,k,T,$,B,U,j,O,q,R,S,D,L,I,C,F,N,H,G,z,V={ctx:t,current:null,token:null,hasCatch:!0,pending:Z,then:K,catch:J,value:12,error:19};return M(P=t[3],V),{c(){n=f("meta"),o=f("meta"),s=f("meta"),i=f("meta"),a=f("meta"),c=f("meta"),d=f("meta"),v=f("meta"),_=m(),E=f("main"),A=f("div"),V.block.c(),k=m(),T=f("div"),$=f("button"),$.textContent="Random",B=m(),U=f("div"),j=f("input"),O=p("\n\t\t\tNSFW"),q=m(),R=f("div"),S=p("Min. Rating\n\t\t\t"),D=f("input"),L=m(),I=f("div"),C=p("Min. Year\n\t\t\t"),F=f("input"),N=m(),H=f("div"),H.innerHTML='<a href="https://ko-fi.com/sleepntsheep">☕ Support me</a>',b(n,"property","og:title"),b(n,"content","My next anime"),b(o,"property","og:description"),b(o,"content","random anime picker with myanimelist api"),b(s,"property","og:image"),b(s,"content","https://raw.githubusercontent.com/sleepntsheep/timelapse/main/projects/my-next-anime_home.png"),b(i,"property","og:url"),b(i,"content","https://my-next-anime.vercel.app"),b(a,"property","twitter:title"),b(a,"content","My next anime"),b(c,"property","twitter:description"),b(c,"content","random anime picker with myanimelist api"),b(d,"property","twitter:image"),b(d,"content","https://raw.githubusercontent.com/sleepntsheep/timelapse/main/projects/my-next-anime_home.png"),b(v,"property","twitter:url"),b(v,"content","https://my-next-anime.vercel.app"),b(A,"class","text-xl p-6"),b($,"class","p-2 border-none bg-blue-800"),b(j,"class","appearance-none border-transparent w-4 h-4 bg-green-300 checked:bg-red-700 checked:border-transparent transition-all"),x(j,"transition-duration","600ms"),b(j,"type","checkbox"),b(D,"type","number"),b(D,"min","0"),b(D,"max","9"),b(D,"class","w-10 text-black p-2"),b(F,"type","number"),b(F,"class","text-black p-2 w-16"),b(H,"class","bg-blue-800 p-4 hidden sm:block"),b(T,"class","fixed bottom-0 left-0 bg-gray-900 w-screen flex flex-row gap-x-3 items-center justify-around px-4 flex-nowrap"),b(E,"class","text-white min-h-screen bg-gray-700")},m(e,r){u(document.head,n),u(document.head,o),u(document.head,s),u(document.head,i),u(document.head,a),u(document.head,c),u(document.head,d),u(document.head,v),l(e,_,r),l(e,E,r),u(E,A),V.block.m(A,V.anchor=null),V.mount=()=>A,V.anchor=null,u(E,k),u(E,T),u(T,$),u(T,B),u(T,U),u(U,j),j.checked=t[0],u(U,O),u(T,q),u(T,R),u(R,S),u(R,D),w(D,t[2]),u(T,L),u(T,I),u(I,C),u(I,F),w(F,t[1]),u(T,N),u(T,H),G||(z=[y($,"click",t[5]),y(j,"change",t[6]),y(D,"input",t[7]),y(F,"input",t[8])],G=!0)},p(e,[n]){t=e,V.ctx=t,8&n&&P!==(P=t[3])&&M(P,V)||function(e,t,n){const r=t.slice(),{resolved:o}=e;e.current===e.then&&(r[e.value]=o),e.current===e.catch&&(r[e.error]=o),e.block.p(r,n)}(V,t,n),1&n&&(j.checked=t[0]),4&n&&g(D.value)!==t[2]&&w(D,t[2]),2&n&&g(F.value)!==t[1]&&w(F,t[1])},i:e,o:e,d(e){h(n),h(o),h(s),h(i),h(a),h(c),h(d),h(v),e&&h(_),e&&h(E),V.block.d(),V.token=null,V=null,G=!1,r(z)}}}function te(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))};const o=e=>e[Math.floor(Math.random()*e.length)];let s=!1,i=2016,a=7;const c=()=>r(void 0,void 0,void 0,(function*(){let e=o(["fall","spring","winter","summer"]),t=(new Date).getFullYear(),n=Math.floor(Math.random()*(t-(i+1))+i);return yield V.loadSeason(n,e)})),u=()=>r(void 0,void 0,void 0,(function*(){for(var e=yield c(),t=0;;){var n=o(e.anime);if(n.r18===s&&n.score>=a)break;(t+=1)>=100&&(e=yield c(),t=0)}return n}));let l=u();return[s,i,a,l,u,()=>{n(3,l=u())},function(){s=this.checked,n(0,s)},function(){a=g(this.value),n(2,a)},function(){i=g(this.value),n(1,i)}]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),C(this,e,te,ee,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
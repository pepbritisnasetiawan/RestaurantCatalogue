(()=>{var e={979:()=>{class e extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n    <section class="header">\n      <div class="navbar-container">\n        <div class="logo">\n          <img src="./images/heros/logotransparent.png" alt="logo" />\n        </div>\n        <button id="hamburger" href="#">☰</button>\n      </div>\n      <nav class="navbar">\n        <ul>\n          <li><a href="/">Home</a></li>\n          <li><a href="#/like">Favorite</a></li>\n          <li><a href="https://github.com/pepbritisnasetiawan">About Us</a></li>\n        </ul>\n      </nav>\n    </section>\n    '}}customElements.define("app-bar",e)},522:()=>{class e extends HTMLElement{connectedCallback(){this.render()}render(){this.innerHTML='\n    <section class="footer">\n      <span class="footer_title">Miraaii.</span>\n\n      <span class="span-copyright">copyright 2024 @ Miraaii</span>\n\n      <div class="footer-social">\n        <a href="#"><i class="fa fa-facebook"></i></a>\n        <a href="#"><i class="fa-brands fa-instagram"></i></a>\n        <a href="#"><i class="fa-brands fa-twitter"></i></a>\n        <a href="#"><i class="fa-brands fa-tiktok"></i></a>\n      </div>\n    </section>\n    '}}customElements.define("foot-bar",e)},452:e=>{var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),s=new T(r||[]);return i(o,"_invoke",{value:A(e,n,s)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",v="suspendedYield",f="executing",p="completed",y={};function m(){}function g(){}function w(){}var b={};l(b,o,(function(){return this}));var _=Object.getPrototypeOf,E=_&&_(_(R([])));E&&E!==n&&r.call(E,o)&&(b=E);var L=w.prototype=m.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,a,o,s){var c=d(e[i],e,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return a=a?a.then(i,i):i()}})}function A(e,n,r){var i=h;return function(a,o){if(i===f)throw new Error("Generator is already running");if(i===p){if("throw"===a)throw o;return{value:t,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var c=x(s,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=f;var l=d(e,n,r);if("normal"===l.type){if(i=r.done?p:v,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=p,r.method="throw",r.arg=l.arg)}}}function x(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=d(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function R(e){if(null!=e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=w,i(L,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,l(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},S(k.prototype),l(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new k(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(L),l(L,c,"Generator"),l(L,o,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=R,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{"use strict";n(452);const e={BASE_URL:"https://restaurant-api.dicoding.dev",BASE_IMAGE_URL_LARGE:"https://restaurant-api.dicoding.dev/images/large/",DEFAULT_LANGUAGE:"en-us",DATABASE_NAME:"restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants"},t={LIST_RESTAURANT:`${e.BASE_URL}/list`,DETAIL:t=>`${e.BASE_URL}/detail/${t}`,POST_REVIEW:`${e.BASE_URL}/review`},r=class{static async restaurantList(){const e=await fetch(t.LIST_RESTAURANT);return(await e.json()).restaurants}static async detailRestaurant(e){const n=await fetch(t.DETAIL(e));return(await n.json()).restaurant}static async postReview(e){return(await fetch(t.POST_REVIEW,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}},i={parseActiveUrlWithCombiner(){const e=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(e);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner(){const e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter(e){const t=e.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:e=>(e.resource?`/${e.resource}`:"/")+(e.id?"/:id":"")+(e.verb?`/${e.verb}`:"")},a=(e,t)=>t.some((t=>e instanceof t));let o,s;const c=new WeakMap,l=new WeakMap,u=new WeakMap;let d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){d=e(d)}function v(e){return"function"==typeof e?(t=e,(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),f(this.request)}:function(...e){return f(t.apply(p(this),e))}):(e instanceof IDBTransaction&&function(e){if(c.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}(e),a(e,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,d):e);var t}function f(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(f(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)}));return u.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=v(e);return t!==e&&(l.set(e,t),u.set(t,e)),t}const p=e=>u.get(e),y=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],g=new Map;function w(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(g.get(t))return g.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=m.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!y.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,i?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&a.done]))[0]};return g.set(t,a),a}h((e=>({...e,get:(t,n,r)=>w(t,n)||e.get(t,n,r),has:(t,n)=>!!w(t,n)||e.has(t,n)})));const b=["continue","continuePrimaryKey","advance"],E={},L=new WeakMap,S=new WeakMap,k={get(e,t){if(!b.includes(t))return e[t];let n=E[t];return n||(n=E[t]=function(...e){L.set(this,S.get(this)[t](...e))}),n}};async function*A(...e){let t=this;if(t instanceof IDBCursor||(t=await t.openCursor(...e)),!t)return;const n=new Proxy(t,k);for(S.set(n,t),u.set(n,p(t));t;)yield n,t=await(L.get(n)||t.continue()),L.delete(n)}function x(e,t){return t===Symbol.asyncIterator&&a(e,[IDBIndex,IDBObjectStore,IDBCursor])||"iterate"===t&&a(e,[IDBIndex,IDBObjectStore])}h((e=>({...e,get:(t,n,r)=>x(t,n)?A:e.get(t,n,r),has:(t,n)=>x(t,n)||e.has(t,n)})));const{DATABASE_NAME:B,DATABASE_VERSION:I,OBJECT_STORE_NAME:T}=e,R=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=f(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(f(o.result),e.oldVersion,e.newVersion,f(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{a&&e.addEventListener("close",(()=>a())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}(B,I,{upgrade(e){e.createObjectStore(T,{keyPath:"id"})}}),P=async e=>(await R).get(T,e),j=async()=>(await R).getAll(T),D=async e=>(await R).put(T,e),O=async e=>(await R).delete(T,e),C=t=>`\n  <article class="restaurant-item">\n    <div class="restaurant_item_header">\n      <img alt="${t.name}" src="${t.pictureId?e.BASE_IMAGE_URL_LARGE+t.pictureId:"https://restaurant-api.dicoding.dev/images/small/fnfn8mytkpmkfw1e867"}">\n      <div class="restaurant_item_header_rating">\n          <p>⭐️<span class="restaurant_rating_score">${t.rating}</span></p>\n      </div>\n    </div>\n    <div class="restaurant_item_content">\n      <h3 class="title"><a href="/#/detail/${t.id}">${t.name}</a></h3>\n      <h3 class="city">(${t.city})</h3>\n      <p class="description">${t.description}</p>\n    </div>\n  </article>\n`,M={async init(e){let{likeButtonContainer:t,restaurant:n}=e;this._likeButtonContainer=t,this._restaurant=n,await this._renderButton()},async _renderButton(){const{id:e}=this._restaurant;await this._isRestaurantExist(e)?this._renderLiked():this._renderLike()},_isRestaurantExist:async e=>!!await P(e),_renderLike(){this._likeButtonContainer.innerHTML='\n  <button aria-label="like this movie" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",(async()=>{await D(this._restaurant),this._renderButton()}))},_renderLiked(){this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this movie" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",(async()=>{await O(this._restaurant.id),this._renderButton()}))}},W={"/":{render:async()=>'\n      <section class="hero">\n        <div class="hero-heading">\n          <h1>Miraaii</h1>\n          <p>\n            Welcome to our Western Restaurant, where we bring the authentic\n            flavors of the West to your plate!\n          </p>\n          <button>Explore</button>\n        </div>\n      </section>\n      <section class="restaurants">\n        <h2 class="heading">Explore Restaurants</h2>\n        <div id="loading-indicator" style="display: none;">\n          <div class="lds-ripple"><div></div><div></div></div>\n        </div>\n        <div id="error-message" style="display: none;"></div>\n        <div class="cards"></div>\n      </section>\n    ',async afterRender(){const e=document.getElementById("loading-indicator"),t=document.getElementById("error-message"),n=document.querySelector(".cards");e.style.display="block";try{await new Promise((e=>{setTimeout(e,1e3)})),(await r.restaurantList()).forEach((e=>{n.innerHTML+=C(e)}))}catch(e){t.style.display="block",t.textContent="Terjadi kesalahan saat memuat data."}finally{e.style.display="none"}}},"/detail/:id":{render:async()=>'\n      <div id="loading-indicator" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">\n        <div class="lds-ripple"><div></div><div></div></div>\n      </div>\n      <div id="error-message" style="display: none;"></div>\n      <div class="detail-restaurant"></div>\n      <div id="likeButtonContainer"></div>\n      <div class="postReview"></div>\n    ',async afterRender(){const t=i.parseActiveUrlWithoutCombiner(),n=document.getElementById("loading-indicator"),a=document.getElementById("error-message");try{n.style.display="block",await new Promise((e=>{setTimeout(e,1e3)}));const a=await r.detailRestaurant(t.id);n.style.display="none",document.querySelector(".detail-restaurant").innerHTML=`\n    <div class="restaurant__address">\n        <h2 class="restaurant__title">${(o=a).name}</h2>\n        <p>${o.city}</p>\n        <p>${o.address}</p>\n        <p>⭐️<span class="restaurant_rating_score">${o.rating}</span></p>\n    </div>\n    <div class="restaurant__info__container">\n        <img class="restaurant_poster" src="${e.BASE_IMAGE_URL_LARGE+o.pictureId}" alt="${o.name}" />\n        <div class="restaurant__info">\n          <div class="restaurant__menu__foods">\n            <h3>Foods</h3>\n            <ul>\n              ${o.menus.foods.slice(0,8).map((e=>`<li>${e.name}</li>`)).join("")}\n            </ul>\n          </div>\n          <div class="restaurant__menu__drinks">\n            <h3>Drinks</h3>\n            <ul>\n                ${o.menus.drinks.slice(0,8).map((e=>`<li>${e.name}</li>`)).join("")}\n            </ul>\n          </div>\n        </div>\n    </div>\n    <div class="detail__restaurant_review">\n        <h4>Reviews</h4>\n        <div class="review_content">\n            <div class="review_content_item">\n              <p>${o.customerReviews[o.customerReviews.length-1]?.review||"No reviews yet"}</p>\n            </div>\n            <div class="review_content_item">\n              <p>${o.customerReviews[o.customerReviews.length-2]?.review||"No reviews yet"}</p>\n            </div>\n            <div class="review_content_item">\n              <p>${o.customerReviews[o.customerReviews.length-3]?.review||"No reviews yet"}</p>\n            </div>\n        </div>\n    </div>\n    <div class="restaurant__overview">\n        <h3>Description:</h3>\n        <p>${o.description}</p>\n    </div>\n`,M.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),restaurant:{id:a.id,name:a.name,city:a.city,description:a.description,pictureId:a.pictureId,rating:a.rating}}),document.querySelector(".postReview").innerHTML='\n  <h3>Post Review</h3>\n  <form id="reviewForm">\n    <label for="name">Nama:</label><br>\n    <input type="text" id="name" name="name"><br>\n    <label for="review">Review:</label><br>\n    <textarea id="review" name="review"></textarea><br><br>\n    <input type="submit" value="Submit" id="submit">\n  </form>\n',document.querySelector("#submit").addEventListener("click",(e=>{e.preventDefault(),(async()=>{const e=i.parseActiveUrlWithoutCombiner(),t=document.querySelector("#name"),n=document.querySelector("#review"),a=document.querySelector("#message");if(!t.value||!n.value)return void(a.innerText="Name and review cannot be empty");const o={id:e.id,name:t.value,review:n.value};await r.postReview(o)})(),location.reload()}))}catch(e){n.style.display="none",a.style.display="block",a.textContent="Terjadi kesalahan saat memuat data."}var o}},"/like":{render:async()=>'\n      <section class="restaurants">\n        <h2 class="heading">Favourite</h2>\n        <div id="loading-indicator" style="display: none;">\n          <div class="lds-ripple"><div></div><div></div></div>\n        </div>\n        <div id="error-message" style="display: none;"></div>\n        <div class="cards"></div>\n      </section>\n    ',async afterRender(){const e=document.getElementById("loading-indicator"),t=document.getElementById("error-message"),n=document.querySelector(".cards");e.style.display="block";try{await new Promise((e=>{setTimeout(e,1e3)})),(await j()).forEach((e=>{n.innerHTML+=C(e)}))}catch(e){t.style.display="block",t.textContent="Terjadi kesalahan saat memuat data."}finally{e.style.display="none"}}}},$={init(e){let{button:t,drawer:n,content:r}=e;t.addEventListener("click",(e=>{this._toggleDrawer(e,n)})),r.addEventListener("click",(e=>{this._closeDrawer(e,n)})),n.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{this._closeDrawer(e,n)}))}))},_toggleDrawer(e,t){e.preventDefault(),e.stopPropagation(),t.classList.toggle("open"),document.body.classList.toggle("active")},_closeDrawer(e,t){e.stopPropagation(),t.classList.remove("open"),document.body.classList.remove("active")}};try{self["workbox:window:7.0.0"]&&_()}catch(N){}function N(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:7.0.0"]&&_()}catch(N){}var G=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function F(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var H=function(e,t){this.type=e,Object.assign(this,t)};function V(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function K(){}var J={type:"SKIP_WAITING"};function Y(e,t){if(!t)return e&&e.then?e.then(K):Promise.resolve()}var z=function(e){var t,n;function r(t,n){var r,i;return void 0===n&&(n={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new G,r.en=new G,r.on=new G,r.un=0,r.an=new Set,r.cn=function(){var e=r.fn,t=e.installing;r.tn>0||!F(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,e.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(e){var t=r.fn,n=e.target,i=n.state,a=n===r.vn,o={sw:n,isExternal:a,originalEvent:e};!a&&r.mn&&(o.isUpdate=!0),r.dispatchEvent(new H(i,o)),"installed"===i?r.wn=self.setTimeout((function(){"installed"===i&&t.waiting===n&&r.dispatchEvent(new H("waiting",o))}),200):"activating"===i&&(clearTimeout(r.wn),a||r.en.resolve(n))},r.dn=function(e){var t=r.hn,n=t!==navigator.serviceWorker.controller;r.dispatchEvent(new H("controlling",{isExternal:n,originalEvent:e,sw:t,isUpdate:r.mn})),n||r.on.resolve(t)},r.gn=(i=function(e){var t=e.data,n=e.ports,i=e.source;return V(r.getSW(),(function(){r.an.has(i)&&r.dispatchEvent(new H("message",{data:t,originalEvent:e,ports:n,sw:i}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(i.apply(this,e))}catch(e){return Promise.reject(e)}}),r.sn=t,r.nn=n,navigator.serviceWorker.addEventListener("message",r.gn),r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i,a=r.prototype;return a.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return Y(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),V(r.bn(),(function(e){r.fn=e,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&F(t.scriptURL,r.sn.toString())&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new H("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(e){return Promise.reject(e)}},a.update=function(){try{return this.fn?Y(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},a.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},a.messageSW=function(e){try{return V(this.getSW(),(function(t){return N(t,e)}))}catch(e){return Promise.reject(e)}},a.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&N(this.fn.waiting,J)},a.pn=function(){var e=navigator.serviceWorker.controller;return e&&F(e.scriptURL,this.sn.toString())?e:void 0},a.bn=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return V(navigator.serviceWorker.register(e.sn,e.nn),(function(t){return e.un=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(r.prototype,i),r}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.Sn(e).add(t)},t.removeEventListener=function(e,t){this.Sn(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,n=q(this.Sn(e.type));!(t=n()).done;)(0,t.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());n(979),n(522);const Q=new class{constructor(e){let{button:t,drawer:n,content:r}=e;this._button=t,this._drawer=n,this._content=r,this._initialAppShell()}_initialAppShell(){$.init({button:this._button,drawer:this._drawer,content:this._content})}async renderPage(){const e=i.parseActiveUrlWithCombiner(),t=W[e];try{this._content.innerHTML=await t.render(),await t.afterRender()}catch(e){this._content.innerHTML='<div>Error loading page. Please try again later or return to the <a href="/">main page</a>.</div>'}document.querySelector(".skip-link").addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#maincontent").focus()}))}}({button:document.querySelector("#hamburger"),drawer:document.querySelector(".navbar"),content:document.querySelector("#maincontent")});window.addEventListener("hashchange",(()=>{Q.renderPage()})),window.addEventListener("load",(()=>{Q.renderPage(),(async()=>{if(!("serviceWorker"in navigator))return void console.log("Service Worker not supported in the browser");const e=new z("./sw.bundle.js");try{await e.register(),console.log("Service worker registered")}catch(e){console.log("Failed to register service worker",e)}})()}))})()})();
//# sourceMappingURL=app.bundle.js.map
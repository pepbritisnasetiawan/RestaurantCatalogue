if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const o=e=>n(e,a),s={module:{uri:a},exports:c,require:o};i[a]=Promise.all(d.map((e=>s[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"98dc9ca5e77e095c36774ebacf5cd4d3"},{url:"app.css",revision:"eb233a17b54263dbc81602087be611d5"},{url:"app.webmanifest",revision:"853bc83c19eddc27c2e21dbde966153e"},{url:"f8c61fe1ab69452e45c6.jpg",revision:null},{url:"favicon.png",revision:"65a5684ef46caedfd4d2f9883048190f"},{url:"icons/android-chrome-512x512.png",revision:"4ac97351ac1151c1e1fd7b36d2ef04df"},{url:"icons/android-icon-144x144.png",revision:"ebf1feda1aee25ee97f15dfe588093df"},{url:"icons/android-icon-192x192.png",revision:"f2d42bfd6afd97a8e133b051f6d5bdbf"},{url:"icons/android-icon-72x72.png",revision:"d7e094decd8085cb9a4d6159ceba5d71"},{url:"icons/android-icon-96x96.png",revision:"fc4ca184c1ac489c83a6e339030994f2"},{url:"icons/apple-icon.png",revision:"f2d42bfd6afd97a8e133b051f6d5bdbf"},{url:"icons/ms-icon-150x150.png",revision:"ad6daacacda4ed6dc7839f44822152f4"},{url:"images/heros/hero-image_2.jpg",revision:"7e445eed6dea48203bf6e786c945a711"},{url:"images/heros/logotransparent.png",revision:"65a5684ef46caedfd4d2f9883048190f"},{url:"index.html",revision:"2045295dd344a40f5abbe9e81a228c20"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/07/announcement/index.html",revision:"15d495cd15f33691f542642edd689e78"},{url:"2021/12/02/2022冬季番剧（日）/index.html",revision:"1acf0a628cc974d931e362e08906abd8"},{url:"about/index.html",revision:"65c40734ed99ff207e20bea105bff101"},{url:"archives/2021/11/index.html",revision:"e68f5868042ae6fe61f4fec91e2f4924"},{url:"archives/2021/12/index.html",revision:"fe978989eb6a028cc11ae6bd68acb0b7"},{url:"archives/2021/index.html",revision:"9c5f3d2aa715359fb1b3d57e513bc844"},{url:"archives/index.html",revision:"d21a1ea70f3762803b7eb6aa6cc9e300"},{url:"artitalk/index.html",revision:"a7e4d0d8dce6540a86828bdc4a42773f"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"69924644a987e1fe1a94fae1b52e4bdf"},{url:"categories/公告/index.html",revision:"323f0801944d377805f2ec4564fb9138"},{url:"categories/番目/index.html",revision:"3476a77f18b6aa2ae37e0160775dae13"},{url:"css/custom.css",revision:"984fb6577abb839ef1cd230f28cd575b"},{url:"css/index.css",revision:"8e0693ed56824d8f58164453e83ed1ae"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"GalleryGroup/anime/20211201/index.html",revision:"fb4122bdc9786cfda1046d3d08da909f"},{url:"GalleryGroup/anime/20211202/index.html",revision:"a8d0e5df75e3fcf1880bac688cefa3ec"},{url:"GalleryGroup/index.html",revision:"db0c02d5b20f7ac2eca2844e6c54bcb7"},{url:"images/avatar.jpg",revision:"8218c5027feb96ea30c949066ec5221a"},{url:"images/favicon.jpg",revision:"deb01db066e50e77a0b0527b4e7457b5"},{url:"images/favicon.png",revision:"e7c9bf322eb8810e737ed75b86745b4a"},{url:"images/pasted-0.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"8218c5027feb96ea30c949066ec5221a"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"439eadee07b8f265a952cce9f82c5695"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"f405b8f4609fe5932dede5b0974f9515"},{url:"movies/index.html",revision:"6b9892f7ec60cdb05d9034c9146abbe5"},{url:"music/index.html",revision:"2783e60e1a0167cac017352e2bd3cb81"},{url:"tags/index.html",revision:"7d68eb61e40fcc40695cf4e4847796f5"},{url:"tags/公告/index.html",revision:"6b17ad43375b9bc7043a7b8cbd2d1254"},{url:"tags/番剧/index.html",revision:"935c8dd61a32676abeef81f981f935ad"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

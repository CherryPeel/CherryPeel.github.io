if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-65969207"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/11/07/announcement/index.html",revision:"090a0456233f13b5fbbd86ffc8e3520d"},{url:"about/index.html",revision:"4c7c73ab9c574bdc01635a90897c88a0"},{url:"archives/2021/11/index.html",revision:"654580a6865ff1c8dacbbab578ff4608"},{url:"archives/2021/index.html",revision:"7ad32e29ea9194305e9574d46df91210"},{url:"archives/index.html",revision:"a30ccb7370f881fdb92c6b53e4fd16be"},{url:"artitalk/index.html",revision:"5d893296e49b932bf1de1ca11c483427"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"acafb0269b9c7d61d3fd601b189e93f7"},{url:"categories/公告/index.html",revision:"42b336febdeb62090e3c443cd04a27d8"},{url:"css/custom.css",revision:"984fb6577abb839ef1cd230f28cd575b"},{url:"css/index.css",revision:"8e0693ed56824d8f58164453e83ed1ae"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"GalleryGroup/index.html",revision:"955fa809d09a26693f55961b3a725fa9"},{url:"GalleryGroup/wallpaper/anime/index.html",revision:"28ac03e429790e1a6859406da9de4146"},{url:"images/avatar.jpg",revision:"8218c5027feb96ea30c949066ec5221a"},{url:"images/favicon.jpg",revision:"deb01db066e50e77a0b0527b4e7457b5"},{url:"images/favicon.png",revision:"e7c9bf322eb8810e737ed75b86745b4a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.jpg",revision:"8218c5027feb96ea30c949066ec5221a"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7e08346d4e858c4c72f9578f22088860"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"222ef85aff300f9853bb2b8d30000208"},{url:"movies/index.html",revision:"86da108909beed5ec88ed4cf7d9731be"},{url:"music/index.html",revision:"b709af7806d9b5301fd43dad163f21be"},{url:"tags/index.html",revision:"9bb71e00db0cd9524255d0b74a81d1c5"},{url:"tags/公告/index.html",revision:"43b5b1148cf52ef66b547d460105679d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

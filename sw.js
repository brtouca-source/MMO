const TOUCABR_SW_MARK="MUNDO_MAGICO_PWA__@toucabr__2026";
const CACHE_NAME='mundo-magico-final-v1';
const APP_SHELL=[
 './', './index.html', './manifest.json',
 './css/style.css', './data/shop.js', './data/weapons.js', './data/skins.js',
 './data/enemies.js', './data/bosses.js', './data/stages.js', './data/dimensions.js', './js/game.js',
 './assets/icon-192.png', './assets/icon-512.png'
];
self.addEventListener('install',event=>{
 self.skipWaiting();
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).catch(()=>{}));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET')return;
 const url=new URL(req.url);
 if(url.hostname.includes('firebase')||url.hostname.includes('googleapis')||url.hostname.includes('gstatic')){
  event.respondWith(fetch(req).catch(()=>caches.match(req)));
  return;
 }
 if(req.mode==='navigate'){
  event.respondWith(fetch(req).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html',copy));return res;}).catch(()=>caches.match('./index.html')));
  return;
 }
 event.respondWith(caches.match(req,{ignoreSearch:true}).then(cached=>cached||fetch(req).then(res=>{
  const copy=res.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));return res;
 }).catch(()=>cached)));
});

self.__TOUCABR_SW_MARK__=TOUCABR_SW_MARK;

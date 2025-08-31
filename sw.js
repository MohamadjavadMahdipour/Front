const CACHE_NAME="slott-clone-cache-v1";
const urlsToCache=["/","/index.html","/style.css","/script.js","/manifest.json"];
self.addEventListener("install",e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache))); });
self.addEventListener("fetch",e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
self.addEventListener("activate",e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))); });

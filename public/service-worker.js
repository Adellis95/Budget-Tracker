const FILES_TO_CACHE = [
    "/",
    "db.js",
    "index.html",
    "index.js",
    "style.css",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install service-worker
self.addEventListener("install", function(evt) {
    evt.waitUntil(caches.open(CACHE_NAME).then(cache => {
        console.log("Files successfully pre-cached");
        return cache.addAll(FILES_TO_CACHE);
    }));
    self.skipWaiting();
});
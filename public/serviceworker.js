const CACHE_NAME = 'version 1.0';
const urlsToCache = ['index.html', 'offline.html'];
const self = this;
//Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened Cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener('fetch', (event) => {});

// Activate service worker
self.addEventListener('activate', (event) => {});

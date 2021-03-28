self.addEventListener('fetch', function(event) {
 // console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request).catch(() => 
      {return caches.match('/offline')
    });
   })
 );
});


self.addEventListener('install',e=>{
  e.waitUntil(caches.open('CACHE_NAME').then(
      function(cache){
        return cache.addAll( [
       
      'https://cdn.jsdelivr.net/npm/vue@2',
      '/offline'


        ])
      }))});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activated');
 

  self.clients.claim();
});



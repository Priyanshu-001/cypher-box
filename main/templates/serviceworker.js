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
      '/offline',
      '/static/dev.css',
     ' https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
     'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css',
     'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css',
     'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.js',
     'https://cdn.jsdelivr.net/npm/vue@2.6.12',
     'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.css.map'


        ])
      }))});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activated');
 

  self.clients.claim();
});



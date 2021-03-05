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
       '/',
       '/static/c1.css',
       '/static/c2.css',
       '/static/snippets/affine.js',
       '/static/snippets/caesar.js',
       '/static/snippets/huffman.js',
       '/static/snippets/morse.js',
       '/static/snippets/vingere.js',
       '/tool/shift_cipher',
       '/tool/affine_cipher',
       '/tool/vigenere_cipher',
       '/tool/morse_code',
       '/offline',
       '/tool/torah_code',
      ' /static/snippets/torah.js',
      'https://cdn.jsdelivr.net/npm/vue@2'


        ])
      }))});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activated');
 

  self.clients.claim();
});


// self.addEventListener('push', function(event) {
//   const promiseChain = self.registration.showNotification('Hello, World.');

//   event.waitUntil(promiseChain);
//   if (event.data) {
//     console.log('This push event has data: ', event.data.text());
//   } else {
//     console.log('This push event has no data.');
//   }
// });
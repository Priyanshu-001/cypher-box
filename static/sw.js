self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});


self.addEventListener('install',e=>{
	console.log("PIKACHU");
	e.waitUntil(caches.open('CACHE_NAME').then(
			function(cache){
				return cache.addAll( [
       '/'
        ])
			}))});
// CODELAB: Remove previous cached data from disk.
self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.

  self.clients.claim();
});


self.addEventListener('push', function(event) {
  const promiseChain = self.registration.showNotification('Hello, World.');

  event.waitUntil(promiseChain);
  if (event.data) {
    console.log('This push event has data: ', event.data.text());
  } else {
    console.log('This push event has no data.');
  }
});
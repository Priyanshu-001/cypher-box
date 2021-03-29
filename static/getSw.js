	if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js'); 
  

}
var deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  
  e.preventDefault();
  
 view.deferedPrompt = e;
 
  view.A2HS = true;
 
})
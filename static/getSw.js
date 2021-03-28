	if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js'); 
  

}
var deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  
  e.preventDefault();
  
 view.deferedPrompt = e;
 
  view.A2HS = true;
 
})
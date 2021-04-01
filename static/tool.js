

view = new Vue({

  el: '#app',
  delimiters: ['{[', ']}'],
   mounted: function(){

     this.firstPaint = false;
      if(localStorage.A2HSDone == 'true'){
        this.A2HSDone = true
       }
       else{
        localStorage.A2HSDone = false;
       }
    this.$nextTick(function(){
      this.$el.removeAttribute('hidden')

    })
    
   },
  vuetify: new Vuetify({
  theme: { dark: true },
}),
  data: () => ({
    A2HS: false,
  	A2HSDone: false,
     deferedPrompt: '',
    firstPaint: true
  }),

  methods: {
    
  	// copyIt: function(eve)
   //  { console.log(eve);
      // targetId = eve.currentTarget.id;
      // targetId = targetId.split('_')[0];
   //    console.log(targetId)
   //    let testingCodeToCopy = document.querySelector('#'+targetId)
   //        testingCodeToCopy.setAttribute('type', 'text')    
   //        testingCodeToCopy.select()

   //        try {
   //          var successful = document.execCommand('copy');
   //          var msg = successful ? 'successful' : 'unsuccessful';
            
   //        } 
   //        catch (err) {
           
   //        }

   //        /* unselect the range */
   //        testingCodeToCopy.setAttribute('type', 'hidden')
   //        window.getSelection().removeAllRanges()
   //      },
    

   //  },
   installApp: function()
    {
     
      
      this.deferedPrompt.prompt();
      this.deferedPrompt.userChoice.then((choiceResult) => {
          if(choiceResult.outcome === 'accepted' )
          {
            this.A2HSDone = true;
            localStorage.A2HSDone = this.A2HSDone;
          }
          else
          {
            console.log('Install App rejected');
          }
      })

    },
   pasteIt: async function(eve)
   {    
     targetId = eve.currentTarget.id;
      targetId = targetId.split('_')[0];
      let target = document.getElementById(targetId)
        
         
     
      
      content = await navigator.clipboard.readText();
      target.value += content
     
   },
   copyVar: async function(item){
     content = await navigator.clipboard.writeText(JSON.stringify(item));
   },
   copyIt: async function(eve)
   {

    try {
        targetId = eve.currentTarget.id;
      targetId = targetId.split('_')[0];
      let testingCodeToCopy = document.getElementById(targetId)
        
          testingCodeToCopy.select()
          testingCodeToCopy =  testingCodeToCopy.value
          console.log(testingCodeToCopy)
          content = await navigator.clipboard.writeText(testingCodeToCopy);
    
  }

   catch (err) {
    console.error('Failed to copy: ', err);
  }
   }
 },
  
  mixins: [mixin],
})
Vue.use(Vuetify)

  


  //  
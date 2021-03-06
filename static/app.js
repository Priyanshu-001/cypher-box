

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
  	items: ['Encoding', 'Traditional', 'Adhoc'],
  	filter: [],
  	search: '',
    A2HS: false,
    A2HSDone: false,
    deferedPrompt: '',
    firstPaint: true
  }),
  methods: {
  	remove: function(i)
  	{
  		this.filter.splice(i,1);
  	},
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

    }
  }
})
Vue.use(Vuetify)

  


  //  
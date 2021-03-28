view = new Vue({

  el: '#app',
  delimiters: ['{[', ']}'],
   mounted: function(){this.$nextTick(function(){
      this.$el.removeAttribute('hidden')
    })},
  vuetify: new Vuetify(),
  data: () => ({
  	items: ['Encodings', 'Traditional', 'Adhoc'],
  	filter: [],
  	search: ''
  }),
  methods: {
  	remove: function(i)
  	{
  		this.filter.splice(i,1);
  	}
  }
})
Vue.use(Vuetify)
  //  
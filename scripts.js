const {createApp} = Vue;

createApp({
  data(){
    return{
      ciao: 'ciao',
      url: 'https://api.chucknorris.io/jokes/random',
      id: '',
      text: '',
      icon:'',
      loading: true
    }
  },
  methods: {
    getChuckNorris(){
      axios.get(this.url)
        .then(res => {
          console.log(res.data)
          this.id = res.data.id
          this.text = res.data.value
          this.icon = 'img/Chuck_Norris_May_2015.jpeg'
          setTimeout(()=>{
            this.loading = false
          }, 1000)
        })
    }
  },
  mounted(){
    this.getChuckNorris()

  }

    
  
}).mount('#app')
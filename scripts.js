// import vue
const {createApp} = Vue;

// create app and mount on vue
createApp({
  // create data 
  data(){
    // create a return obj for data
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
    // create a method for use the api 
    getChuckNorris(){
      // call the api 
      axios.get(this.url)
        .then(res => {
          // valuing variables declared before 
          console.log(res.data)
          this.id = res.data.id
          this.text = res.data.value
          // TODO:use the api link to the img 
          this.icon = 'img/Chuck_Norris_May_2015.jpeg'
          // set a delay for loading end (not so useful in this case but is just for practice)
          setTimeout(()=>{
            this.loading = false
          }, 1000)
        })
    }
  },
  mounted(){
    // evocate the function when page is mounted
    this.getChuckNorris()

  }

    
  
}).mount('#app')
<template>
  <div id="app">
    <form-data v-if="form_id.length>1" :form_id="form_id" />
    
      </div>
</template>

<script>
import newform from "./components/newform.vue";
import get_url from './lib/get_url'
import FormData from './components/FormData'
const axios = require('axios');

export default {
  name: "app",
  components:{
    newform,
    FormData
  },
  async created(){
    const {data} = await axios.get(`${get_url}/form`)
    if(data.length>0){
      this.form_id = data[0]._id
    }
  },
  data(){
    return {
      form_id:''
    }
  },
  methods:{

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

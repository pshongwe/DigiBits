<template>
<div>
  Forms
</div>
</template>
<script>
import get_url from '../lib/get_url'
const axios = require('axios');
export default {
    async created(){
        const {data} = await axios.get(`${get_url}/form`)
        console.log(data)
    },
    data(){
        return {
            forms:[]
        }
    }
}
</script>

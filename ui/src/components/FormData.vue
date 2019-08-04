<template>
  <v-card tile>
    <v-app-bar flat dark prominent color="primary">
      <v-toolbar-title>{{general_form.description}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark text @click.native="save_form_data">Save</v-btn>
      </v-toolbar-items>
      <v-menu bottom right offset-y></v-menu>
    </v-app-bar>
     <gform
            :fields="dates_form.fields"
            :title="dates_form.title"
            :value="dates_form.data"
            v-model="dates_form.data"
          />
    <v-card-text>
      <uform
        :indicators="general_form.indicators"
        :name="general_form.name"
        :value="data"
        v-model="data"
      >
        <div>Hello World</div>
      </uform>
    </v-card-text>
  </v-card>
</template>

<script>
import get_url from '../lib/get_url'
const axios = require('axios');

import uform from "./uform";
import gform from "./gform"
export default {
  components: {
    uform,gform
  },
  props:['form_id'],
  data() {
    return {
      data: {},
      general_form: {},
      dates_form:{
         title: "Details of the indicator",
        data: {},
        fields: [
          { label: "Month", v_model: "month", type: "number", id: 0 },
          { label: "Year", v_model: "year", type: "number", id: 0 }
        ]
      }
    };
  },
  async created(){
    const {data} = await axios.get(`${get_url}/load_form/${this.form_id}`)
    this.general_form = data
  },
  methods: {
    save_form_data(data) {
      const data_list = [];
      for (id in this.general_form.data) {
        data_list.push({ value: this.general_form.data[id], indicator: id });
      }
    }
  }
};
</script>

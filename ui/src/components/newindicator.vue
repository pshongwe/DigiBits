<template>
  <div>
    <v-btn dark @click="show_dialog=true">+</v-btn>
    <v-dialog v-model="show_dialog" max-width="500px">
      <v-card tile>
        <v-app-bar flat dark color="primary">
          
          <v-toolbar-title>Create a new Indicator</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click.native="save_indicator">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y></v-menu>
        </v-app-bar>
        <v-card-text>
          <gform
            :fields="general_form.fields"
            :title="general_form.title"
            :value="general_form.data"
            v-model="general_form.data"
          >
            <div>Hello World</div>
          </gform>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import gform from "./gform";
import get_url from '../lib/get_url'
const axios = require('axios');

export default {
  name: "newindicator",
  props: ["dialog"],
  components: { gform },
  data() {
    return {
      service: {},
      show_dialog: false,
      //ui
      general_form: {
        title: "Details of the indicator",
        data: {},
        fields: [
          { label: "Indicator name", v_model: "name", type: "text", id: 0 },
          { label: "Indicator type", v_model: "type", type: "text", id: 0 },
          {
            label: "Indicator description",
            v_model: "description",
            type: "text",
            id: 0
          }
        ]
      }
    };
  },
  computed: {},
  created() {
    //this.get_my_service()
  },
  methods: {
    async save_indicator() {
      let indicator = {
        ...this.general_form.data
      };
      const res = await axios.post(`${get_url}/indicator`,indicator)
      console.log(res)
    }
  }
};
</script>

<style scoped>
</style>

<template>
  <div>
    <v-btn dark @click="loadIndicators">+</v-btn>
    <v-dialog v-model="show_dialog" max-width="500px">
      <v-card tile>
        <v-app-bar flat dark color="primary">
          <v-toolbar-title>Create a new Indicator</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click.native="save_form">Save</v-btn>
          </v-toolbar-items>
          <v-menu bottom right offset-y></v-menu>
        </v-app-bar>
        <v-card-text>
          <gform
            :fields="general_form.fields"
            :title="general_form.title"
            :value="general_form.data"
            v-model="general_form.data"
          ></gform>

           <v-select
                    :items="indicators"
                    @change="select_indicator"
                    label="Select"
                    class="input-group--focused"
            ></v-select>
   
          <v-chip
          v-bind:key="indicator._key"
            v-for="indicator in selected_indicators"
          >{{getIndicatorName(indicator)}}</v-chip>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import gform from "./gform";
import get_url from "../lib/get_url";
const axios = require("axios");

export default {
  name: "newform",
  props: ["dialog"],
  components: { gform },
  data() {
    return {
      indicators: [],
      selected_indicators: [],
      show_dialog: false,
      //ui
      general_form: {
        title: "Details of the form",
        data: {},
        fields: [
          { label: "Form name", v_model: "name", type: "text", id: 0 },
          { label: "Description", v_model: "description", type: "text", id: 0 }
        ]
      }
    };
  },
  computed: {},

  created() {},
  methods: {
    async loadIndicators() {
      const { data } = await axios.get(`${get_url}/indicator`);

      this.indicators = data.map(i => {
          return {...i,value:i._id,text:i.name}
      });
      this.show_dialog = true;
    },
    select_indicator(a){
        this.selected_indicators.push(a)
    },
    getIndicatorName(id){
        return this.indicators.filter(i => i._id===id)[0].name
    },
    async save_form(){
        const form = {...this.general_form.data, indicators:this.selected_indicators}
        const res = await axios.post(`${get_url}/form`,form);
        this.show_dialog = false;
    }
  }
};
</script>

<style scoped>
</style>

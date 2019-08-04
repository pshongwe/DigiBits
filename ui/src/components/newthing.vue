<template>
  <div>
    <v-btn
      relative
      dark
      top
      left
      color="pink"
      @click="show_dialog=true"
    >
      <v-icon>add</v-icon>
    </v-btn>

    <div>
      <v-dialog
        v-model="show_dialog"
        :fullscreen="fullscreen"
        max-width="500px"
      >
        <v-card tile>
          <v-toolbar card dark prominent color="indigo">
            <v-btn icon dark @click.native="show_dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>{{form.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click.native="save">Save</v-btn>
            </v-toolbar-items>
            <v-menu bottom right offset-y>
            </v-menu>
          </v-toolbar>
          <v-card-text>
            <uform :fields="form.fields" :title="form.title" :value="form.data"
                   v-model="form.data"></uform>
            <slot></slot>
          </v-card-text>
        </v-card>

      </v-dialog>

    </div>

  </div>
</template>

<script>
  import uform from './uform'

  export default {
    props: ['form','fullscreen'],
    components: {uform},
    name: "newthing",
    data() {
      return {
        show_dialog: false,
        _form:{},
        fs:false
      }
    },
    created() {

    },
    watch:{
      'form': () => {
        console.log('_form ',this._form)
        this._form = this.form
      },
      '_form':()=>console.log('_form cahnge',this._form)
    },
    methods:{
      save(){
        this.show_dialog = false;
        console.log('Save',this.form.data)
        this.$emit('save',this.form.data)
      },
      get_data(){
        return this.form.data
      },
      show_thing(thing){
        this.show_dialog = true
        this.form.data = thing
      }
    }

  }
</script>

<style scoped>

</style>

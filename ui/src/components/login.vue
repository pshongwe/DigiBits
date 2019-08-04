<template>
    <v-layout row justify-center>
        <v-dialog value="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon @click.native="dialog = false" dark>
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Login</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat v-on:click="login">Login</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-layout row wrap>
                    <v-flex xs4 >

                    </v-flex>
                    <v-flex xs4 id="login-form">
                        <div v-if="login_view">
                            <v-form >
                                <v-text-field
                                        class="login-input"
                                        label="User Name"
                                        v-model="user.email"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        class="login-input"
                                        label="Password"
                                        type="password"
                                        v-model="user.password"
                                        required
                                ></v-text-field>
                            </v-form>

                        </div>
                    </v-flex>
                    <v-flex xs4 >

                    </v-flex>

                </v-layout>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>

    export default {
        name: "login",
        //parse_class:"login",
        params:['login_dialog'],
            data () {
                return {
                    login_view:true,
                    dialog: true,
                    notifications: false,
                    sound: true,
                    has_user:true,
                    widgets: false,
                    user:{}
                }
            },
        created(){
            //db.friends.put({name:'sihle',age:29})
            console.log('Login created')
        },
        methods:{
          login(){
            console.log(this.user)
            if(this.user.email == 'admin' && this.user.password == 'hardpassword'){
                this.$emit('login',true)
            }else{
                this.$emit('login',false)
                alert('User name or password is wrong')
            }
          }
        }

    }
</script>

<style >
#login-form{
    padding-top: 20%;
}
    .input-group label{
        font-size: 25px;
    }
</style>
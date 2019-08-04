<template>
  <div></div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
// import ThingTable from "./thing-table";
//import login from './components/Login'
export default {
  //components: {ThingTable, login},
  name: "Home",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: "dashboard", title: "Dashboard", route: "dashboard" },
        { icon: "people", title: "Attendance", route: "attendance" },
        { icon: "schedule", title: "Exam Schedule", route: "exam-schedule" },
        {
          icon: "folder_open",
          title: "Attendance Report",
          route: "attendance-report"
        },
        {
          icon: "person_add",
          title: "Register Student",
          route: "register-student"
        }
      ],
      right_menu_items: [
        {
          icon: "account_circle",
          title: "user",
          items: [
            { title: "logout", icon: "directions_run", action: this.logout },
            { title: "change password" }
          ]
        }
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  },
  methods: {
    ...mapMutations(["pushStudent", "changeTitle"]),
    handle_events(event) {
      console.log("Handles event", event, this.$route.path);
    },
    title(){
        return this.$store.state.title
    },
    logout() {
      this.sign_out()
        .then(x => {
          console.log("Logedout");
          this.$router.replace("/login");
        })
        .catch(e => {
          console("Encounted error");
          alert(e);
        });
    }
  }
};
</script>

<style scoped>
</style>
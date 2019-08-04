import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    students:[],
    title:'Attendance'
}

const getters = {
    students: state => state.students,
}

const actions = {
    addStudent({commit, state}, student) {
        
        state.students.push(student)
    }
}

const mutations = {
    pushStudent(state, student) {
        console.log(state.students)
        // for(var s of state.students){
        //     console.log('in for',s)
        //     if(s.name === student.name){
        //         return
        //     }
        // }
        state.students.push(student)
    },
    changeTitle(state,title){
        state.title = title
    }
}

export default  new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})



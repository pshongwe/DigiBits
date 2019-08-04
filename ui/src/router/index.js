import VueRouter from 'vue-router'
import data from '../components/data'
import forms from '../components/forms'
import indicators from '../components/indicators'
import organisations from '../components/indicators'
import users from '../components/users'
import login from '../components/Login'
import Vue from 'vue'
import Home from '../components/Home'

// Configure routes for all Applets

Vue.use(VueRouter)
// Instantiate `router`
const router =
    new VueRouter({
        routes:[
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path:'/data',
                name:'data',
                component:data
            },
            {
                path:'/forms',
                name:'forms',
                component:forms
            },
            {
                path:'/indicators',
                name:'indicators',
                component:indicators
            },
            {
                path:'/organisations',
                name:'organisations',
                component:organisations
            },
            {
                path:'/login',
                name:'login',
                component:login
            },
            {
                path:'/users',
                name:'users',
                component:users
            }
            ]
    })

export default router
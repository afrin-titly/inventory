// import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { routes } from './router/index'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { storage } from './store/index'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(Vuex)
// createApp(App).use(router).mount('#app')
const router = new VueRouter({
    routes
})

const store = new Vuex.Store(storage)
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
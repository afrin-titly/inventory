import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { router } from './router/index'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(VueRouter)
createApp(App).use(router).mount('#app')
// const router = new VueRouter({
//     routes
// })
// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App)
// })
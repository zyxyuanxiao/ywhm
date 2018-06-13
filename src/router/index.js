import Vue from 'vue'
import vueRouter from 'vue-router'
import login from '@/login'
import home from '@/home'
Vue.use(vueRouter)
const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: home
        }
    ]
})
export default router

import Vue from 'vue'
import vueRouter from 'vue-router'
import login from '@/login'
import home from '@/home'
import career from '@/career'
import experience from '@/experience'
import internet from '@/internet'
import invest from '@/invest'
import life from '@/life'
import register from '@/register'
import index from '@/home/children/info'
Vue.use(vueRouter)
const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home/index'
        },
        {
            path: '/home',
            component: home,
            children: [
                {
                    path: 'index',
                    component: index
                },
                {
                    path: 'career',
                    component: career
                },
                {
                    path: 'experience',
                    component: experience
                },
                {
                    path: 'internet',
                    component: internet
                },
                {
                    path: 'invest',
                    component: invest
                },
                {
                    path: 'life',
                    component: life
                },
                {
                    path: 'register',
                    component: register
                },
                {
                    path: 'login',
                    component: login
                }
            ]
        }
    ]
})
export default router

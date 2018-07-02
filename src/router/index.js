import Vue from 'vue'
import vueRouter from 'vue-router'
import home from '@/home'
import career from '@/career'
import experience from '@/experience'
import internet from '@/internet'
import invest from '@/invest'
import life from '@/life'
import register from '@/register'
import index from '@/home/children/info'
import detail from '@/detail/index'
import help from '@/detail/help'
import about from '@/detail/about'
import download from '@/app/download'
import user from '@/user'
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
					path: 'detail',
					component: detail
				},
				{
					path: 'about',
					component: about
				},
				{
					path: 'help',
					component: help
				},
				{
					path: 'app',
					component: download
				},
				{
					path: 'userInfo',
					component: user
				}
			]
		}
	]
})
export default router

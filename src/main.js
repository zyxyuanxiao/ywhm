import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iView'
import axios from './lib/util'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.prototype.$ajax = axios
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});
new Vue({
    el:'#app',
    components: { App },
    template: '<App></App>', 
    router: router
})
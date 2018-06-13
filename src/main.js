import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

new Vue({
    el:'#app',
    components: { App },
    template: '<App></App>', 
    router: router
})
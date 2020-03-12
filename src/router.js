import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ListHandler from './components/ListHandler.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/listHandler',
      name: 'ListHandler',
      component: ListHandler
    }
  ]
})

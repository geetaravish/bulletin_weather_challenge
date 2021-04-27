import Vue from 'vue'
import VueRouter from 'vue-router'
import siteHeader from '../components/siteHeader.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'siteHeader',
    component: siteHeader
  }
]

const router = new VueRouter({
  routes
})

export default router

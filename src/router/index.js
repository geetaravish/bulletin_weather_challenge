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

// routes: [
//   { path: "/",  name: "siteHeader", component: Home},
//   { path: "/TODO",  name: "Cu", component: todo},
//   { path: "/Chatbot",  name: "Chatbot", component: Chatbot },
  

// ],

const router = new VueRouter({
  routes
})

export default router

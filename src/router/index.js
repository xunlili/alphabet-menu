import Vue from 'vue'
import VueRouter from 'vue-router'
const dropMenu = import('../views/dropMenu.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dropMenu',
    component: dropMenu,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

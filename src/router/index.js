import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../pages/Home/Home')
  },
  {
    path: '/boost',
    name: 'boost',
    component: ()=>import('../pages/Boost/index')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ()=>import('../pages/Contact/view')
  },
  {
    path: '/faq',
    name: 'faq',
    component: ()=>import('../pages/Contact/view')
  },
  {
    path: '/our-prices',
    name: 'prices',
    component: ()=>import('../pages/Prices/index')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

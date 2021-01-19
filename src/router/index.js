import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:
    Home,

  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Navigation',
    name: 'Navigation',
    component: () => import(/* webpackChunkName: "nav" */ '../components/Navigation.vue')
  },
  {
    path: '/Status',
    name: 'Status',
    component: () => import(/* webpackChunkName: "nav" */ '../views/Status.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "nav" */ '../views/Profile.vue')
  },
  {
    path: '/SignedProfile',
    name: 'SignedProfile',
    component: () => import(/* webpackChunkName: "nav" */ '../views/SignedProfile.vue')
  },
  {
    path: '/Meny',
    name: 'Meny',
    component: () => import(/* webpackChunkName: "nav" */ '../views/Meny.vue')
  },


]

const router = new VueRouter({
  routes
})

export default router

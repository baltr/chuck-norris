import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favourites from '../views/Favourites.vue'
import Categories from '../views/Categories.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Favourites',
    name: 'Favourites',
    component: Favourites
  },
  {
    path: '/Categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModelView from '../views/ModelView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/ModelView',
    name: 'ModelView',
    component: () => import('../views/ModelView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portraits',
      name: 'portraits',
      component: () => import('../views/PortraitsView.vue')
    },
    {
      path: '/portraits2',
      name: 'portraits2',
      component: () => import('../views/PortraitsView.vue')
    },
    {
      path: '/portraits3',
      name: 'portraits3',
      component: () => import('../views/PortraitsView.vue')
    },
    {
      path: '/portraits4',
      name: 'portraits4',
      component: () => import('../views/PortraitsView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.+)+',
      redirect: '/'
    },
    {
      path: '/index.html',
      redirect: '/'
    }
  ]
})

export default router

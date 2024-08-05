import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Aboutme from '../components/Aboutme.vue'
import Project from '../components/Project.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboute',
      name: 'about',
      component: Aboutme
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    
  ]
})

export default router

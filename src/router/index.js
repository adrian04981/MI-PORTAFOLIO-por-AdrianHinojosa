import { createRouter, createWebHistory } from 'vue-router'
import CvComponent from '../components/CvComponent.vue'
import HomeComponent from '../components/HomeComponent.vue'
import SkillsComponent from '../components/SkillsComponent.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/cv',
    name: 'CV',
    component: CvComponent
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsComponent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

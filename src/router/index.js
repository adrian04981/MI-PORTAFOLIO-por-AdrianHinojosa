import { createRouter, createWebHistory } from 'vue-router'
import ContactCard from '../components/ContactComponent.vue'
import EducationCard from '../components/EducationComponent.vue'
import ExperienciaCard from '../components/ExperienceComponent.vue'
import ProfileAndSkills from '../views/ProfileAndSkills.vue'
const routes = [
  {
    path: '/',
    name: 'ProfileAndSkills',
    component: ProfileAndSkills
  }  ,
  {
    path: '/Contact',
    name: 'contact-card',
    component: ContactCard
  },
  {
    path: '/Education',
    name: 'Education-card',
    component: EducationCard
  },
  {
    path: '/Experiencia',
    name: 'Experiencia-card',
    component: ExperienciaCard
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

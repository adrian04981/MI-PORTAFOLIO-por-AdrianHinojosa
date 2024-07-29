import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactCard from '../components/ContactComponent.vue'
import EducationCard from '../components/EducationComponent.vue'
import ExperienciaCard from '../components/ExperienceComponent.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import skillsCard from '../components/SkillsComponent.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/Header',
    name: 'Header-component',
    component: HeaderComponent
  },
  {
    path: '/skills',
    name: 'slills-card',
    component: skillsCard
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

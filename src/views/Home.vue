<template>
  <div>
    <HeaderComponent />
    <EducationComponent />
    <SkillsComponent />
    <ExperienceComponent />
    <ContactComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import EducationComponent from '../components/EducationComponent.vue'
import ExperienceComponent from '../components/ExperienceComponent.vue'
import SkillsComponent from '../components/SkillsComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  }
}
</script>

<style scoped>
/* Estilos específicos para la vista Home si es necesario */
</style>

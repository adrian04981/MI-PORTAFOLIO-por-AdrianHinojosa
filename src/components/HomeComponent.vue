<template>
  <div class="container mt-5">
    <h1>Bienvenido a mi currículum en línea</h1>
    <p>Explora mi experiencia y habilidades.</p>
    <router-link to="/cv" class="btn btn-primary me-2">Ver CV</router-link>
    <router-link to="/skills" class="btn btn-secondary">Ver Habilidades</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent'
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
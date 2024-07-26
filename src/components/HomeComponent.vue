<template>
    <div class="container mt-5">
      <h1>Bienvenido a mi currículum en línea</h1>
      <p>Explora mi experiencia y habilidades.</p>
      <router-link to="/cv" class="btn btn-primary">Ver CV</router-link>
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
  
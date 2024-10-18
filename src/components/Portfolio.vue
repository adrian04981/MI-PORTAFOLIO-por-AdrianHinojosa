<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">{{ $t('Portafolio') }}</h2>
      <div class="row">
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <div class="card mb-4">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ $t('Proyecto1') }}</p>
              <a :href="project.link" class="btn btn-success">{{ $t('ButtonviewProject') }}</a>
              <a :href="project.repository" class="btn btn-warning">{{ $t('ButtonviewRepository') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'Portfolio',
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'Grupoflk.lat',
            description: this.$t('Proyecto1'), // Descripción en función del idioma
            image: 'https://grupoflk.lat/assets/SELLO_FLK-DtN7NcBH.png', // Cambia esto a la URL de tu imagen
            link: 'https://grupoflk.lat', // Cambia esto a la URL de tu proyecto
            repository: 'https://github.com/adrian04981/FrontEnd-GrupoFLK_LAT'
          },
          // Puedes agregar más proyectos aquí con sus respectivos textos
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.2s;
    background-color: grey;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  
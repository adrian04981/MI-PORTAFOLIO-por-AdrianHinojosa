<template>
    <div class="flex items-center justify-center">
      <span class="mr-2 text-lg font-medium" :class="{ 'text-gray-700': isEnglish, 'text-gray-400': !isEnglish }">
        <img v-if="isEnglish" src="https://flagcdn.com/us.svg" alt="English" class="inline-block w-5 h-5 mr-1" />
        EN
      </span>
      <div class="relative">
        <input type="checkbox" class="sr-only" @change="toggleLanguage" />
        <div class="w-14 h-8 bg-gray-300 rounded-full cursor-pointer"></div>
        <div
          class="absolute w-6 h-6 bg-white rounded-full shadow transition-transform duration-300"
          :class="isEnglish ? 'transform translate-x-0' : 'transform translate-x-8'"
        ></div>
      </div>
      <span class="ml-2 text-lg font-medium" :class="{ 'text-gray-400': isEnglish, 'text-gray-700': !isEnglish }">
        <img v-if="!isEnglish" src="https://flagcdn.com/es.svg" alt="Español" class="inline-block w-5 h-5 mr-1" />
        ES
      </span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isEnglish: true // Estado para el idioma inicial
      };
    },
    methods: {
      toggleLanguage() {
        this.isEnglish = !this.isEnglish;
        this.changeLanguage(this.isEnglish ? 'en' : 'es'); // Cambiar el idioma
      },
      changeLanguage(lang) {
        this.$emit('change-language', lang);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  .w-5 {
    width: 20px;
    height: 20px;
  }
  </style>
  
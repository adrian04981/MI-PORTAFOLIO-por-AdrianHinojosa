<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/LOGO_Adrian Hinojosa.png" class="logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#header">{{ $t('home') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">{{ $t('skills') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#workExperience">{{ $t('workExperience') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education">{{ $t('educationTitle') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">{{ $t('contactTitle') }}</a>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="changeLanguage('en')">EN</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="changeLanguage('es')">ES</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="changeLanguage('fr')">FR</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    changeLanguage(lang) {
      this.$emit('change-language', lang);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.logo {
  max-width: auto;
  height: 50px;
  background-color: #f07059;
  padding: auto;
}

.bg-custom {
  background-color: #F22233;
}

.navbar-brand {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

.nav-link {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}

.btn-link {
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
</style>

<template>
    <section id="education" class="education py-5 bg-light animate-skills">
      <div class="container text-center">
        <h2 class="mb-4 text-success">{{ $t('educationTitle') }}</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card shadow-sm mb-4">
              <div class="card-body">
                <h5 class="card-title"><i class="fas fa-graduation-cap text-success me-2"></i>{{ $t('educationTitle') }}</h5>
                <p class="card-text">{{ $t('educationDescription') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Education',
  }
  </script>
  
  <style scoped>
  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
  
  .card-title {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
  
  .card-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
  
  .bg-light {
    background-color: #acf12b !important;
  }
  
  .text-success {
    color: #28a745 !important;
  }
  </style>
  
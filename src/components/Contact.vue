<template>
  <footer id="contact" class="contact py-5 animate-skills">
    <div class="container text-center">
      <h2 class="mb-4 text-info">{{ $t('contactTitle') }}</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-sm mb-4">
            <div class="card-body">
              <h5 class="card-title"><i class="fas fa-phone-alt text-info me-2"></i>{{ $t('contactPhone') }}</h5>
              <p class="card-text"><i class="fas fa-envelope text-info me-2"></i>Email: adrian.armando20@gmail.com</p>
              <p class="card-text"><i class="fas fa-map-marker-alt text-info me-2"></i>{{ $t('contactAddress') }}</p>
              <div class="social-links">
                <a href="https://www.instagram.com/adrianhinojosa_k/" target="_blank">
                  <i class="fab fa-instagram"></i> Instagram
                </a>
                <a href="https://www.linkedin.com/in/adrianhinojosaku/" target="_blank">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/adrian04981" target="_blank">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');

.contact {
  background-color: #D7F205;
  color: #333;
}

h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #333;
}

.card {
  background-color: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #333;
}

.card-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #333;
}

.text-info {
  color: #17a2b8 !important;
}

.social-links {
  margin-top: 20px;
}

.social-links a {
  display: inline-block;
  margin: 0 10px;
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #17a2b8;
}

.social-links i {
  margin-right: 5px;
}
</style>

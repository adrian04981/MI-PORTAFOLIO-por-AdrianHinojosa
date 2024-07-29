<template>
  <div>
    <section class="profile-card">
      <h2>{{ $t('profile') }}</h2>
      <p>{{ $t('profileText') }}</p>
    </section>
    <section class="skills py-5">
      <div class="container text-center">
        <h2>{{ $t('skills') }}</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-center">{{ $t('programmingLanguages') }}</h5>
                <ul class="list-unstyled text-center">
                  <li class="mb-2"><i class="fas fa-code text-dark"></i> C#</li>
                  <li class="mb-2"><i class="fab fa-microsoft text-primary"></i> ASP.NET</li>
                  <li class="mb-2"><i class="fab fa-python text-success"></i> Python</li>
                  <li class="mb-2"><i class="fab fa-js text-warning"></i> JavaScript</li>
                  <li class="mb-2"><i class="fab fa-html5 text-danger"></i> HTML</li>
                  <li class="mb-2"><i class="fab fa-css3-alt text-primary"></i> CSS</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-center">{{ $t('frameworks') }}</h5>
                <ul class="list-unstyled text-center">
                  <li class="mb-2"><i class="fab fa-vuejs text-success"></i> Vue.js</li>
                  <li class="mb-2"><i class="fab fa-angular text-danger"></i> AngularJS</li>
                  <li class="mb-2"><i class="fab fa-bootstrap text-purple"></i> Bootstrap</li>
                  <li class="mb-2"><i class="fab fa-react text-info"></i> React Native</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-center">{{ $t('otherSkills') }}</h5>
                <ul class="list-unstyled text-center">
                  <li class="mb-2"><i class="fas fa-file-excel text-success"></i> Excel Intermedio</li>
                  <li class="mb-2"><i class="fas fa-draw-polygon text-info"></i> ArgGis</li>
                  <li class="mb-2"><i class="fas fa-database text-warning"></i> ERWin</li>
                  <li class="mb-2"><img src="../assets/PhotoshopPNG.png" alt="Photoshop" class="icon"> Photoshop Intermedio</li>
                  <li class="mb-2"><img src="../assets/IlustratorPNG.png" alt="Illustrator" class="icon"> Illustrator</li>
                  <li class="mb-2"><i class="fas fa-chart-bar text-info"></i> Power BI</li>
                  <li class="mb-2"><i class="fas fa-project-diagram text-primary"></i> Bizagi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileAndSkills'
};
</script>

<style scoped>
.profile-card {
  background: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.profile-card h2 {
  margin-bottom: 15px;
}

.skills {
  background-color: #fff;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.card-body i, .card-body img {
  margin-right: 10px;
  font-size: 1.5rem;
}

.icon {
  width: 24px;
  height: 24px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-body ul {
  padding-left: 0;
}

.card-body li {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

@media (max-width: 767px) {
  .card-body li {
    font-size: 1rem;
  }

  .card-body i, .card-body img {
    font-size: 1.25rem;
  }
}
</style>

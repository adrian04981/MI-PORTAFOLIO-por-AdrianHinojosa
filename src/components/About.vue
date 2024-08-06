<template>
  <div class="container-fluid full-background">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card profile-card animate-profile">
            <img src="@/assets/Foto_De_Perfil.webp" class="card-img-top profile-pic" alt="Profile Picture">
          </div>
        </div>
        <div class="col-md-8">
          <div class="card profile-card animate-profile mb-4">
            <div class="card-body">
              <p class="card-text">{{ $t('profileText') }}</p>
            </div>
          </div>
          <div class="container text-center">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card shadow-sm h-100">
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
                <div class="card shadow-sm h-100">
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
                <div class="card shadow-sm h-100">
                  <div class="card-body">
                    <h5 class="card-title text-center">{{ $t('otherSkills') }}</h5>
                    <ul class="list-unstyled text-center">
                      <li class="mb-2"><i class="fas fa-file-excel text-success"></i> Excel</li>
                      <li class="mb-2"><i class="fas fa-draw-polygon text-info"></i> ArgGis</li>
                      <li class="mb-2"><i class="fas fa-database text-warning"></i> ERWin</li>
                      <li class="mb-2"><img src="@/assets/PhotoshopPNG.png" alt="Photoshop" class="icon"> Photoshop</li>
                      <li class="mb-2"><img src="@/assets/IlustratorPNG.png" alt="Illustrator" class="icon"> Illustrator</li>
                      <li class="mb-2"><i class="fas fa-chart-bar text-info"></i> Power BI</li>
                      <li class="mb-2"><i class="fas fa-project-diagram text-primary"></i> Bizagi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:900');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');

.full-background {
  background-color: #BFF205;
  padding: 20px;
}

.container {
  background-color: #BFF205;
  padding: 20px;
  border-radius: 10px;
}

.profile-card {
  background-color: #fff;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.profile-pic {
  width: 100%;
  height: auto;
  border-bottom: 5px solid #5C7373;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #020126;
}

.card-text {
  color: #020126;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}

.shadow-sm {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h5 {
  color: #020126;
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
  margin-bottom: 10px;
  font-size: 1rem;
}

@media (max-width: 767px) {
  .full-background {
    padding: 10px;
  }

  .container {
    padding: 10px;
  }

  .profile-card {
    margin-bottom: 20px;
  }

  .profile-pic {
    height: auto;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .icon {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>

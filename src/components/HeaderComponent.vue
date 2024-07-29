<template>
  <div id="app">
    <nav class="sidebar">
      <img src="./assets/LOGO_Adrian Hinojosa.png" alt="Logo">
      <ul>
        <li><router-link to="/Header" exact-active-class="active">HOME</router-link></li>
        <li><router-link to="/Education" exact-active-class="active">EDUCATION</router-link></li>
        <li><router-link to="/Experiencia" exact-active-class="active">EXPERIENCE</router-link></li>
        <li><router-link to="/skills" exact-active-class="active">SKILLS</router-link></li>
        <li><router-link to="/Contact" exact-active-class="active">CONTACT</router-link></li>
      </ul>
    </nav>
    <main class="content">
      <section class="profile-card">
        <h2>PERFIL</h2>
        <p>Estudiante de 9º semestre de Ingeniería con habilidades en programación, investigación y resolución de problemas. Busco aplicar mis conocimientos en un entorno de trabajo, aprender y crecer profesionalmente.</p>
      </section>
      <section class="skills py-5">
        <div class="container text-center">
          <h2>Habilidades</h2>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100 shadow-sm">
                <div class="card-body">
                  <h5 class="card-title text-center">Lenguajes de Programación</h5>
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
                  <h5 class="card-title text-center">Frameworks</h5>
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
                  <h5 class="card-title text-center">Otras Habilidades</h5>
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
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F2EFE6;
  margin-top: 60px;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 200px;
  background: #E3D8B8;
  padding: 20px;
}

.sidebar img {
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 20px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: #2c3e50;
  position: relative;
}

.sidebar ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: #2c3e50;
  transition: width 0.2s ease;
  -webkit-transition: width 0.2s ease;
}

.sidebar ul li a:hover::after,
.sidebar ul li a.router-link-exact-active::after {
  width: 100%;
  left: 0;
  background: #2c3e50;
}

.content {
  margin-left: 220px; /* Ajusta según el ancho del sidebar */
  padding: 20px;
  text-align: left;
}

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

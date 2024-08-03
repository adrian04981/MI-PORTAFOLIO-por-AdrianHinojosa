<template>
  <div>
    <div v-if="!entered" class="intro-container" :class="{'animate': animate}">
      <img src="./assets/LOGO_Adrian Hinojosa.png" alt="Logo" class="logo">
      <button class="enter-button" @click="enterSite">Enter</button>
    </div>
    <div v-else class="main-container">
      <div class="sidebar">
        <button @click="scrollToSection('profile')">{{ $t('profile') }}</button>
        <button @click="scrollToSection('skills')">{{ $t('skills') }}</button>
        <button @click="scrollToSection('workExperience')">{{ $t('workExperience') }}</button>
        <button @click="scrollToSection('education')">{{ $t('education') }}</button>
      </div>
      <div class="content-container">
        <div class="background animate-background"></div>
        <div class="background-about animate-background-about"></div>
        <div id="profile" class="profile-card large-card animate-profile">
          <img src="./assets/Foto_De_Perfil.webp" alt="Profile Picture" class="profile-pic">
          <h1>Adrian Armando Hinojosa Ku</h1>
          <h2>Developer</h2>
          <h3>Lima, Peru</h3>
        </div>
        <section id="profile-text" class="profile-card large-card animate-profile">
          <h2>{{ $t('profile') }}</h2>
          <p>{{ $t('profileText') }}</p>
          <div class="language-switcher">
            <button @click="changeLanguage('en')">EN</button>
            <button @click="changeLanguage('es')">ES</button>
            <button @click="changeLanguage('fr')">FR</button>
          </div>
        </section>
        <section id="skills" class="skills py-5 animate-skills">
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
                      <li class="mb-2"><img src="./assets/PhotoshopPNG.png" alt="Photoshop" class="icon"> Photoshop Intermedio</li>
                      <li class="mb-2"><img src="./assets/IlustratorPNG.png" alt="Illustrator" class="icon"> Illustrator</li>
                      <li class="mb-2"><i class="fas fa-chart-bar text-info"></i> Power BI</li>
                      <li class="mb-2"><i class="fas fa-project-diagram text-primary"></i> Bizagi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="workExperience" class="work-experience py-5 animate-skills">
          <div class="container text-center">
            <h2>{{ $t('workExperience') }}</h2>
            <p>{{ $t('assistantTitle') }}</p>
            <p>{{ $t('assistantDescription') }}</p>
          </div>
        </section>
        <section id="education" class="education py-5 animate-skills">
          <div class="container text-center">
            <h2>{{ $t('educationTitle') }}</h2>
            <p>{{ $t('educationDescription') }}</p>
          </div>
        </section>
        <section id="contact" class="contact py-5 animate-skills">
          <div class="container text-center">
            <h2>{{ $t('contactTitle') }}</h2>
            <p>{{ $t('contactPhone') }}</p>
            <p>{{ $t('contactEmail') }}</p>
            <p>{{ $t('contactAddress') }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: false,
      entered: false,
      animateWelcome: false,
      animateProfile: false,
      animateSkills: false
    };
  },
  methods: {
    enterSite() {
      this.animate = true;
      setTimeout(() => {
        this.entered = true;
        this.animateWelcome = true;
        this.animateProfile = true;
        this.animateSkills = true;
      }, 1000); // Match the animation duration
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
@keyframes wipe-out-bottom-right {
  from {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
  }
  to {
    clip-path: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%);
  }
}

@keyframes wipe-in-bottom-right {
  from {
    clip-path: polygon(0 0, 0 0, 0 0, 0 50%);
  }
  to {
    clip-path: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.intro-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  transition: clip-path 1s cubic-bezier(.25, 1, .30, 1);
}

.intro-container.animate {
  animation: 1s cubic-bezier(.25, 1, .30, 1) wipe-out-bottom-right both;
}

.main-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #343a40;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
}

.sidebar button {
  background: none;
  border: none;
  color: white;
  text-align: left;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
}

.sidebar button:hover {
  background-color: #495057;
}

.content-container {
  flex-grow: 1;
  overflow-y: auto;
  position: relative;
  padding: 20px;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #75afe9;
  z-index: -1;
  clip-path: polygon(0 0, 0 0, 0 0, 0 50%);
}

.background.animate-background {
  animation: 1s cubic-bezier(.25, 1, .30, 1) wipe-in-bottom-right both;
}

.background-about {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #44e298;
  z-index: -2;
  clip-path: polygon(0 0, 0 0, 0 0, 0 50%);
}

.background-about.animate-background-about {
  animation: 1s cubic-bezier(.25, 1, .30, 1) wipe-in-bottom-right both 1s;
}

.profile-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  opacity: 0;
  margin: 20px; /* Add margin for spacing */
}

.profile-card.animate-welcome {
  animation: 1s cubic-bezier(.25, 1, .30, 1) wipe-in-bottom-right both;
  opacity: 1;
}

.profile-card.large-card {
  width: 80%;
  margin: 20px auto;
}

.profile-card.large-card.animate-profile {
  animation: 1s ease fadeIn both;
  opacity: 1;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.language-switcher {
  margin-top: 20px;
}

.language-switcher button {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.language-switcher button:hover {
  background-color: #0056b3;
}

.skills, .work-experience, .education, .contact {
  background-color: #fff;
  width: 100%;
  opacity: 0;
  margin: 20px 0; /* Add margin for spacing */
}

.skills.animate-skills, .work-experience.animate-skills, .education.animate-skills, .contact.animate-skills {
  animation: 1s ease fadeIn both;
  opacity: 1;
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
  .main-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    overflow-x: auto;
  }

  .sidebar button {
    flex-grow: 1;
    text-align: center;
  }

  .content-container {
    padding: 10px;
  }

  .profile-card.large-card {
    width: 90%;
  }

  .skills, .work-experience, .education, .contact {
    padding: 10px;
  }

  .card-body li {
    font-size: 1rem;
  }

  .card-body i, .card-body img {
    font-size: 1.25rem;
  }
}
</style>

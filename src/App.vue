<template>
  <div>
    <div v-if="!entered" class="intro-container" :class="{'animate': animate}">
      <img src="@/assets/LOGO_Adrian Hinojosa.png" alt="Logo" class="logo">
      <button class="enter-button" @click="enterSite">Enter</button>
    </div>
    <div v-else>
      <NavbarComponent @change-language="changeLanguage"/>
      <div class="content-container background animate-main">
        <Header></Header>

        

      </div>
      <About></About>
      <WorkExperience></WorkExperience>
      <Education></Education>
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import Header from './components/Header.vue';
import About from '@/components/About.vue';
import WorkExperience from '@/components/WorkExperience.vue';
import Education from '@/components/Education.vue';
import Contact from '@/components/Contact.vue';

export default {
  components: {
    NavbarComponent,
    Header,
    About,
    WorkExperience,
    Education,
    Contact
  },
  data() {
    return {
      animate: false,
      entered: false
    };
  },
  methods: {
    enterSite() {
      this.animate = true;
      setTimeout(() => {
        this.entered = true;
      }, 1000); // Match the animation duration
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
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

.logo {
  max-width: 80%;
  height: auto;
  background-color: #5C7373;
  padding: 10px;
}

.enter-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.enter-button:hover {
  background-color: #0056b3;
}

.content-container {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #10101f;
}

.animate-main {
  animation: 1s cubic-bezier(.25, 1, .30, 1) wipe-in-bottom-right both;
}

.about-section {
  background-color: #BFF205;
  padding: 60px 0;
}


@media (max-width: 767px) {
  .content-container {
    padding: 10px;
  }

  .intro-container {
    padding: 20px;
  }

  .logo {
    width: 100%;
    height: auto;
  }

  .enter-button {
    width: 100%;
    padding: 15px;
    font-size: 1rem;
  }
}
</style>

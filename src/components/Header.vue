<template>
  <div class="container">
    <div class="text-container">
      <h1>Adrian</h1>
      <h1>Hinojosa</h1>
    </div>
    <div class="github-link">
      <a href="https://github.com/adrian04981/MI-PORTAFOLIO-por-AdrianHinojosa.git" target="_blank">
        <i class="fab fa-github"></i> GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:900');

body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  background-color: #020126;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.text-container h1 {
  margin: 0;
  font-size: 4rem;
  color: rgba(225, 225, 225, .01);
  background-image: url('@/assets/FondoGatos.webp');
  background-repeat: repeat;
  -webkit-background-clip: text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}

.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-link a {
  color: white;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.github-link a:hover {
  color: #F22233;
}

.github-link i {
  font-size: 4rem;
  margin-right: 10px;
}

@keyframes animate {
  0%, 100% {
    background-position: left top;
  }
  25% {
    background-position: right bottom;
  }
  50% {
    background-position: left bottom;
  }
  75% {
    background-position: right top;
  }
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    height: 60vh;
    width: 60vw;
  }

  .text-container h1 {
    font-size: 5rem;
  }

  .github-link i {
    font-size: 8rem;
  }
}
</style>

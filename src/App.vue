<template>
  <div id="app">
    <nav class="sidebar">
      <img src="./assets/LOGO_Adrian Hinojosa.png" alt="Logo">
      <ul>
        <li><router-link to="/Header" exact-active-class="active">HOME</router-link></li>
        <li><router-link to="/Education" exact-active-class="active">EDUCATION</router-link></li>
        <li><router-link to="/Experiencia" exact-active-class="active">EXPERIENCE</router-link></li>
        <li><router-link to="/Contact" exact-active-class="active">CONTACT</router-link></li>
      </ul>
    </nav>
    <main class="content">
      <router-view></router-view>
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

/* Agrega más estilos para personalizar el aspecto del menú y el contenido */
</style>

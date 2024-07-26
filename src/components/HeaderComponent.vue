<template>
  <div class="header bg-white shadow-sm py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="profile">
        <h1 class="name">{{ name }}</h1>
        <h2 class="title">{{ title }}</h2>
      </div>
      <div class="contact">
        <a :href="emailLink" class="btn btn-outline-primary">EMAIL ME</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      name: 'Adrian Hinojosa',
      title: 'Developer',
      email: 'mailto:adrian.armando20@gmail.com'
    }
  },
  computed: {
    emailLink() {
      return this.email;
    }
  }
}
</script>

<style scoped>
.name {
  font-size: 2rem;
  font-weight: bold;
}

.title {
  font-size: 1.5rem;
  color: #6c757d;
}
</style>

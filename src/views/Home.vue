<template>
  <div class="home">
    <home-section title="Welcome to Your Vue.js App" />
    <project-section title="Welcome to Your Vue.js App" />
    <service-section title="Welcome to Your Vue.js App" />
    <about-section title="Welcome to Your Vue.js App" />
    <contact-section title="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSection from '@/components/HomeSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'Home',
  components: {
    HomeSection,
    AboutSection,
    ProjectSection,
    ServiceSection,
    ContactSection,
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  
  section {
    height: 100vh;
  }
</style>
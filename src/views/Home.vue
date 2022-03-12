<template>
  <home-section />
  <project-section />
  <service-section />
  <about-section />
  <contact-section />
</template>

<script>
// @ is an alias to /src
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "Home",
  components: {
    HomeSection,
    AboutSection,
    ProjectSection,
    ServiceSection,
    ContactSection,
  },
};
</script>

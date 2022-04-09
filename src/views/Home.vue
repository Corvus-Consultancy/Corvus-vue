<template>
  <home-section />
  <project-section />
  <service-section />
  <about-section />
  <contact-section />
</template>

<script>
import HomeSection from "@/components/templates/HomeSection.vue";
import AboutSection from "@/components/templates/AboutSection.vue";
import ProjectSection from "@/components/templates/ProjectSection.vue";
import ServiceSection from "@/components/templates/ServiceSection.vue";
import ContactSection from "@/components/templates/ContactSection.vue";

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

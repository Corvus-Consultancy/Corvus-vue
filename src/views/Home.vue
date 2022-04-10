<template>
  <section-home />
  <section-project />
  <section-service />
  <section-about />
  <section-contact />
</template>

<script>
import SectionHome from "@/components/templates/SectionHome.vue";
import SectionAbout from "@/components/templates/SectionAbout.vue";
import SectionProject from "@/components/templates/SectionProject.vue";
import SectionService from "@/components/templates/SectionService.vue";
import SectionContact from "@/components/templates/SectionContact.vue";

export default {
  name: "Home",

  components: {
    SectionHome,
    SectionAbout,
    SectionProject,
    SectionService,
    SectionContact,
  },
};
</script>

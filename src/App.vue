<template>
  <organism-background />

  <organism-navigation />

  <router-view />
</template>

<script>
import OrganismBackground from "@/components/organisms/OrganismBackground.vue";
import OrganismNavigation from "@/components/organisms/OrganismNavigation.vue";

export default {
  name: "App",

  components: {
    OrganismBackground,
    OrganismNavigation,
  },

  mounted() {
    this.$plausible.trackPageview();
  },
};
</script>

<style lang="scss">
a,
svg,
html,
body {
  color: white;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  scroll-behavior: smooth;
}

#home,
#about,
#contact,
#services,
#projects {
  width: 80vw;
  display: flex;
  padding: 0 10vw;

  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2.8rem;
    font-weight: 400;
    margin-bottom: 6rem;
  }

  @media screen and (min-width: $screen-xl-min) {
    width: 60vw;
    padding: 0 20vw;
  }
}

html {
  font-size: 3vw;

  @media screen and (min-width: $screen-sm-min) {
    font-size: 2.5vw;
  }

  @media screen and (min-width: $screen-md-min) {
    font-size: 1.75vw;
  }

  @media screen and (min-width: $screen-xl-min) {
    font-size: 1vw;
  }
}
</style>

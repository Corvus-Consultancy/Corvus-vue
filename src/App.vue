<template>
  <div class="background"></div>

  <navigation />

  <router-view />

  <notifications />
</template>

<script>
import Navigation from "@/components/organisms/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
$screen-sm-min: 576px;
$screen-md-min: 768px;
$screen-lg-min: 992px;
$screen-xl-min: 1200px;

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

h2 {
  font-size: 2.8rem;
  font-weight: 400;
  margin-bottom: 6rem;
}

.background {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;

  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~@/assets/hero.webp");
  background-position: center;
}

#home,
#about,
#contact,
#services,
#projects {
  width: 80vw;
  min-height: 100vh;
  display: flex;
  padding: 0 10vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  color: #fff;
  width: 100%;
  margin: 1rem 0;
  height: 50px;
  border: none;
  padding: 0;
  position: relative;
  background: transparent;

  font-size: inherit;
  font-family: inherit;
  text-decoration: none;

  &:after,
  &:before {
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    background: white;
    transition: all 0.3s ease;
  }

  &:before {
    width: 2px;
    height: 50%;
  }

  &:after {
    width: 20%;
    height: 2px;
  }

  &:hover {
    &:before {
      height: 100%;
      border: #880000;
      background: #880000;
    }

    &:after {
      width: 100%;
      background: #880000;
    }
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    align-items: center;
    justify-content: center;

    &:after,
    &:before {
      top: 0;
      left: 0;
      content: "";
      position: absolute;
      background: white;
      transition: all 0.3s ease;
    }

    &:after {
      width: 20%;
      height: 2px;
    }

    &:before {
      width: 2px;
      height: 50%;
    }

    &:hover {
      &:after {
        width: 100%;
      }

      &:before {
        height: 100%;
      }
    }
  }
}

@media (min-width: 1436px) {
  .button {
    width: 30%;
  }
}

html {
  font-size: 3vw;

  @media screen and (min-width: $screen-sm-min) {
    font-size: 2.5vw;
  }

  @media screen and (min-width: $screen-md-min) {
    font-size: 2vw;
  }

  @media screen and (min-width: $screen-lg-min) {
    font-size: 1.5vw;
  }

  @media screen and (min-width: $screen-xl-min) {
    font-size: 1vw;
  }
}
</style>

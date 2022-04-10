<template>
  <div></div>
</template>

<script>
export default {
  name: "OrganismBackground",
};
</script>

<style scoped lang="scss">
div {
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
</style>

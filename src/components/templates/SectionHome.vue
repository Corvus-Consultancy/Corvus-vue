<template>
  <section>
    <h1 id="home">
      <span>Corvus</span>
      <span>Consultancy</span>
    </h1>

    <p>Creating innovative solutions for <strong>your</strong> business.</p>

    <organism-button :content="'Read more'" :reference="'#projects'" />
  </section>
</template>

<script>
import OrganismButton from "@/components/organisms/OrganismButton.vue";

export default {
  name: "HomeSection",

  components: {
    OrganismButton,
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: #fff;
  margin: 0;
  display: flex;

  font-size: 3.5rem;
  text-align: center;
  flex-direction: column;

  @media screen and (min-width: $screen-md-min) {
    font-size: 5rem;
  }

  span:first-of-type {
    font-weight: 500;
  }

  span:last-of-type {
    font-weight: 100;
  }
}

p {
  color: #fff;
  text-align: center;

  font-size: 1.5rem;
  font-weight: 300;

  strong {
    color: #880000;
  }
}
</style>

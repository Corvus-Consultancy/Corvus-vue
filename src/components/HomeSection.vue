<template>
  <section id="home">
    <h1>
      <span>Corvus</span>
      <span>Consultancy</span>
    </h1>

    <p>Creating innovative solutions for <strong>your</strong> business.</p>

    <a class="button" href="#projects">
      <span>Read more</span>
    </a>
  </section>
</template>

<script>
export default {
  name: "HomeSection",
};
</script>

<style scoped lang="scss">
$screen-sm-min: 576px;
$screen-md-min: 768px;
$screen-lg-min: 992px;
$screen-xl-min: 1200px;

h1 {
  color: #fff;
  margin: 0;
  display: flex;

  font-size: 5rem;
  text-align: center;
  flex-direction: column;

  span:first-of-type {
    font-weight: 500;
  }

  span:last-of-type {
    font-weight: 100;
  }
}

p {
  color: #fff;

  font-size: 1.5rem;
  font-weight: 300;

  strong {
    color: #880000;
  }
}
</style>

<template>
  <section id="about">
    <h2>About us</h2>

    <ul>
      <li>
        <figure>
          <img src="@/assets/about/raphael.jpg" />
          <figcaption>Raphael Kurun</figcaption>
          <span>Big Boss</span>
        </figure>
      </li>

      <li>
        <figure>
          <img src="@/assets/about/raphael.jpg" />
          <figcaption>Javier Dobarco</figcaption>
          <span>Big Boss</span>
        </figure>
      </li>

      <li>
        <figure>
          <img src="@/assets/about/raphael.jpg" />
          <figcaption>Ralfs Grauss</figcaption>
          <span>Big Boss</span>
        </figure>
      </li>

        <li>
        <figure>
          <img src="@/assets/about/raphael.jpg" />
          <figcaption>Rick Taylor</figcaption>
          <span>Big Boss</span>
        </figure>
      </li>

      <li>
        <figure>
          <img src="@/assets/about/raphael.jpg" />
          <figcaption>Benjamin Torrens</figcaption>
          <span>Big Boss</span>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style scoped lang="scss">
  ul {
    width: 80%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;


  }
  figure {
    margin: 1rem;
    padding: 1rem;

    border: 1px solid white;
    border-radius: .5rem;
    
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
</style>

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
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;

  flex-direction: row;
  list-style-type: none;
}

figure {
  margin: 1rem;
  padding: 1rem;

  font-size: 1.1rem;
  text-align: center;

  border: 1px solid white;
  border-radius: 0.5rem;

  img {
    width: 100%;
    border: 5px solid transparent;
    transition: all 0.3s ease;

    box-sizing: border-box;
    border-radius: 100%;
  }

  figcaption {
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;

    color: white;
    margin: 1rem 0;
  }

  &:hover {
    img {
      border: 5px solid #880000;
    }
  }
}
</style>

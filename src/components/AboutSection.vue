<template>
  <section id="about">
    <h2>About us</h2>

    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/raphael-kurun-776766161"
          alt="A link to Raphael Kurun's LinkedIn profile"
        >
          <figure>
            <img
              src="@/assets/about/raphael_kurun.png"
              alt="A picture of Raphael Kurun"
              title="Raphael Kurun"
            />
            <figcaption>Raphael Kurun</figcaption>
            <span>Strategy consulting</span>
          </figure>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/javierdobarco"
          alt="A link to Benjamin Torrens LinkedIn profile"
        >
          <figure>
            <img
              src="@/assets/about/benjamin_torrens.png"
              alt="A picture of Benjamin Torrens"
              title="Benjamin Torrens"
            />
            <figcaption>Benjamin Torrens</figcaption>
            <span>Marketing and branding</span>
          </figure>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/benjamin-torrens-eixeres-a24008234"
          alt="A link to Javier Dobarco LinkedIn profile"
        >
          <figure>
            <img
              src="@/assets/about/javier_dobarco.png"
              alt="A picture of Javier Dobarco"
              title="Javier Dobarco"
            />
            <figcaption>Javier Dobarco</figcaption>
            <span>Process and project management</span>
          </figure>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/rick-louis-micha%C3%ABl-taylor"
          alt="A link to Ralfs Grauss LinkedIn profile"
        >
          <figure>
            <img
              src="@/assets/about/ralfs_grauss.png"
              alt="A picture of Ralfs Grauss"
              title="Ralfs Grauss"
            />
            <figcaption>Ralfs Grauss</figcaption>
            <span>Finance and crypto investments</span>
          </figure>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/ralfs-eduards-grauss-4278b21b2"
          alt="A link to Rick Taylor LinkedIn profile"
        >
          <figure>
            <img
              src="@/assets/about/rick_taylor.png"
              alt="A picture of Rick Taylor"
              title="Rick Taylor"
            />
            <figcaption>Rick Taylor</figcaption>
            <span>IT solutions and infrastructure</span>
          </figure>
        </a>
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

<template>
  <section id="about">
    <h2>About us</h2>

    <ul>
      <li>
        <a
          @click="$plausible.trackEvent('Raphael Kurun clicked')"
          target="_blank"
          href="https://www.linkedin.com/in/raphael-kurun-776766161"
          alt="A link to Raphael Kurun's LinkedIn profile"
        >
          <article>
            <img
              src="@/assets/about/raphael_kurun.webp"
              alt="A picture of Raphael Kurun"
              title="Raphael Kurun"
            />
            <h3>Raphael Kurun</h3>
            <span>Strategy consulting</span>
          </article>
        </a>
      </li>

      <li>
        <a
          @click="$plausible.trackEvent('Benjamin Torrens clicked')"
          target="_blank"
          href="https://www.linkedin.com/in/javierdobarco"
          alt="A link to Benjamin Torrens LinkedIn profile"
        >
          <article>
            <img
              src="@/assets/about/benjamin_torrens.webp"
              alt="A picture of Benjamin Torrens"
              title="Benjamin Torrens"
            />
            <h3>Benjamin Torrens</h3>
            <span>Marketing and branding</span>
          </article>
        </a>
      </li>

      <li>
        <a
          @click="$plausible.trackEvent('Javier Dobarco clicked')"
          target="_blank"
          href="https://www.linkedin.com/in/benjamin-torrens-eixeres-a24008234"
          alt="A link to Javier Dobarco LinkedIn profile"
        >
          <article>
            <img
              src="@/assets/about/javier_dobarco.webp"
              alt="A picture of Javier Dobarco"
              title="Javier Dobarco"
            />
            <h3>Javier Dobarco</h3>
            <span>Process and project management</span>
          </article>
        </a>
      </li>

      <li>
        <a
          @click="$plausible.trackEvent('Ralfs Grauss clicked')"
          target="_blank"
          href="https://www.linkedin.com/in/rick-louis-micha%C3%ABl-taylor"
          alt="A link to Ralfs Grauss LinkedIn profile"
        >
          <article>
            <img
              src="@/assets/about/ralfs_grauss.webp"
              alt="A picture of Ralfs Grauss"
              title="Ralfs Grauss"
            />
            <h3>Ralfs Grauss</h3>
            <span>Finance and crypto investments</span>
          </article>
        </a>
      </li>

      <li>
        <a
          @click="$plausible.trackEvent('Rick Taylor clicked')"
          target="_blank"
          href="https://www.linkedin.com/in/ralfs-eduards-grauss-4278b21b2"
          alt="A link to Rick Taylor LinkedIn profile"
        >
          <article>
            <img
              src="@/assets/about/rick_taylor.webp"
              alt="A picture of Rick Taylor"
              title="Rick Taylor"
            />
            <h3>Rick Taylor</h3>
            <span>IT solutions and infrastructure</span>
          </article>
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
  margin: 0 -1rem;
  padding: 0;
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;

  li {
    width: 100%;
    padding: 1rem;

    min-height: 30%;
    box-sizing: border-box;

    @media screen and (min-width: $screen-sm-min) {
      width: 50%;
    }

    @media screen and (min-width: $screen-md-min) {
      width: 33.33%;
    }

    @media screen and (min-width: $screen-lg-min) {
      width: 20%;
    }

    article {
      margin: 0;
      height: 100%;
      border: 1px solid white;
      padding: 1rem;

      font-size: 1.1rem;
      text-align: center;
      box-sizing: border-box;
      border-radius: 0.5rem;

      img {
        width: 100%;
        border: 5px solid transparent;
        transition: all 0.3s ease;

        box-sizing: border-box;
        border-radius: 100%;
      }

      h3 {
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
  }
}
</style>

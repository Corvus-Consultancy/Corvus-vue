<template>
  <section id="projects">
    <h2>Projects</h2>

    <ul>
      <!--
        <a href="#">
          <font-awesome-icon icon="angle-left" />
        </a>
      -->

      <li>
        <article>
          <img
            src="@/assets/projects/zonneveranda.webp"
            alt="The logo of ZonneVeranda"
            title="ZonneVeranda"
            width="140"
            height="123"
          />

          <div>
            <h3>ZonneVeranda</h3>
            <p>
              ZonneVeranda reached out to us to create promotion material for an
              unexpected opportunity to present themselves at a fair. This fair
              however, was taking place within two days of us hearing about the
              project. Considering the prompt nature of the assignment, we
              allocated our time and managed to create an array of captivating
              designs within the same day.
            </p>
          </div>
        </article>

        <!--
        <a href="#">
          <font-awesome-icon icon="angle-right" />
        </a>
      --></li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ProjectSection",
};
</script>

<style scoped lang="scss">
ul {
  margin: 0 -1rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  list-style-type: none;

  svg {
    margin: 0 5rem;
    font-size: 1.5rem;
  }

  article {
    display: flex;
    text-align: center;
    flex-direction: column;

    img {
      align-self: center;
      margin-right: 0;
      margin-bottom: 3rem;
    }

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    @media screen and (min-width: $screen-sm-min) {
      text-align: left;
      flex-direction: row;

      img {
        margin-right: 3rem;
        margin-bottom: 0;
      }
    }
  }
}
</style>

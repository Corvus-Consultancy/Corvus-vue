<template>
  <section>
    <h2 id="services">Services</h2>

    <ul>
      <li>
        <figure>
          <img
            src="@/assets/services/consulting.svg"
            alt="An icon representing Strategic consulting"
            title="Strategic consulting"
            width="24"
            height="24"
          />
          <figcaption>Strategic consulting</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img
            src="@/assets/services/management.svg"
            alt="An icon representing Management of Projects & Services"
            title="Management of Projects & Services"
            width="24"
            height="24"
          />
          <figcaption>Management of Projects & Services</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img
            src="@/assets/services/crypto.svg"
            alt="An icon representing Cryptocurrency investments"
            title="Cryptocurrency investments"
            width="24"
            height="24"
          />
          <figcaption>Cryptocurrency investments</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img
            src="@/assets/services/research.svg"
            alt="An icon representing In-depth research"
            title="In-depth research"
            width="24"
            height="24"
          />
          <figcaption>In-depth research</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img
            src="@/assets/services/creation.svg"
            alt="An icon representing Creation of your original content"
            title="Creation of your original content"
            width="24"
            height="24"
          />
          <figcaption>Creation of your original content</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img
            src="@/assets/services/services.svg"
            alt="An icon representing IT services"
            title="IT services"
            width="24"
            height="24"
          />
          <figcaption>IT services</figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ServiceSection",
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

  li {
    width: 50%;
    padding: 1rem;

    min-height: 30%;
    box-sizing: border-box;

    @media screen and (min-width: $screen-sm-min) {
      width: 50%;
    }

    @media screen and (min-width: $screen-md-min) {
      width: 33.33%;
    }

    figure {
      margin: 0;
      height: 100%;
      border: 1px solid white;
      padding: 2rem;
      display: flex;
      transition: all 0.3s ease;

      box-sizing: border-box;
      flex-direction: column;

      align-items: center;
      border-radius: 0.5rem;
      justify-content: center;

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }

      figure {
        align-items: center;
      }

      img {
        width: 40%;
        height: auto;
        padding: 1rem;
      }

      figcaption {
        font-size: inherit;
        text-align: center;
        font-weight: 500;
      }
    }
  }
}
</style>

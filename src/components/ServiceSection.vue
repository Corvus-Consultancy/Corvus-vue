<template>
  <section id="services">
    <h2>Services</h2>

    <ul>
      <li>
        <figure>
          <img :src="consulting" />
          <figcaption>Strategic consulting</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img :src="management" />
          <figcaption>Management of Projects & Services</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img :src="crypto" />
          <figcaption>Cryptocurrency investments</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img :src="research" />
          <figcaption>In-depth research</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img :src="creation" />
          <figcaption>Creation of your original content</figcaption>
        </figure>
      </li>

      <li>
        <figure>
          <img :src="services" />
          <figcaption>IT services</figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
import management from "@/assets/services/management.svg";
import consulting from "@/assets/services/consulting.svg";
import creation from "@/assets/services/creation.svg";
import research from "@/assets/services/research.svg";
import services from "@/assets/services/services.svg";
import crypto from "@/assets/services/crypto.svg";

export default {
  name: "ServiceSection",

  setup() {
    return {
      management,
      consulting,
      creation,
      research,
      services,
      crypto,
    };
  },
};
</script>

<style scoped lang="scss">
$screen-sm-min: 576px;
$screen-md-min: 768px;
$screen-lg-min: 992px;
$screen-xl-min: 1200px;

ul {
  width: 100%;
  padding: 0;
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  list-style-type: none;

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
        padding: 1rem;
      }

      figcaption {
        font-size: 1.25rem;
        text-align: center;
        font-weight: 500;
      }
    }
  }
}
</style>

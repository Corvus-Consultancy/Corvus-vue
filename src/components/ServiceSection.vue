<template>
  <section id="services">
    <h2>Services</h2>

    <div class="services-row">
      <section>
        <img :src="consulting" />
        <h3>Strategic consulting</h3>
      </section>

      <section>
        <img :src="management" />
        <h3>Management of Projects & Services</h3>
      </section>

      <section>
        <img :src="crypto" />
        <h3>Cryptocurrency investments</h3>
      </section>
    </div>

    <div class="services-row">
      <section>
        <img :src="research" />
        <h3>In-depth research</h3>
      </section>

      <section>
        <img :src="creation" />
        <h3>Creation of your original content</h3>
      </section>

      <section>
        <img :src="services" />
        <h3>IT services</h3>
      </section>
    </div>
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
  .services-row {
    width: 100%;
    display: flex;
    
    section {
      width: 33.33%;
      margin: 1rem;
      border: 1px solid white;
      padding: 1rem;
      display: flex;
      transition: all .3s ease;

      flex-direction: column;
      align-items: center;
      border-radius: .5rem;
      justify-content: center;

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }

      img {
        width: 35%;
      }

      h3 {
        text-align: center;
      }
    }
  }
</style>

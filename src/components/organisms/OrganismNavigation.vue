<template>
  <header>
    <nav>
      <ol>
        <li>
          <a href="#home">
            <img
              src="@/assets/logo.svg"
              alt="The logo of Corvus Consultancy"
              title="Corvus Consultancy"
              width="205"
              height="331"
            />
          </a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#about">About us</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ol>
    </nav>

    <a
      @click="$plausible.trackEvent('Phone number clicked')"
      href="tel:0610072898"
    >
      <address>
        <font-awesome-icon icon="phone" />
        06-10072898
      </address>
    </a>
  </header>
</template>

<script>
export default {
  name: "OrganismNavigation",
};
</script>

<style scoped lang="scss">
header {
  top: 3rem;
  left: 10vw;
  right: 10vw;

  display: flex;
  position: absolute;

  align-items: center;
  justify-content: center;

  @media screen and (min-width: $screen-md-min) {
    left: 6rem;
    right: 6rem;
  }

  a {
    color: gray;
    transition: all 0.3s ease;

    font-size: 1.25rem;
    font-weight: 400;

    &:hover {
      color: #880000;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  nav {
    width: 100%;

    ol {
      gap: 4rem;
      margin: 0;
      padding: 0;
      display: flex;

      list-style: none;
      align-items: center;
      justify-content: center;

      li {
        display: none;

        &:first-of-type {
          width: 20%;
          display: block;
          margin-right: auto;

          @media screen and (min-width: $screen-sm-min) {
            width: 10%;
          }

          @media screen and (min-width: $screen-md-min) {
            width: 5%;
          }

          @media screen and (min-width: $screen-lg-min) {
            width: 4%;
          }
        }

        &:last-of-type {
          margin-right: auto;
        }

        @media screen and (min-width: $screen-md-min) {
          display: block;
        }
      }
    }
  }

  address {
    display: flex;
    align-items: center;

    svg {
      color: inherit;
      font-size: 0.8rem;
      padding-right: 0.8rem;
    }
  }
}
</style>

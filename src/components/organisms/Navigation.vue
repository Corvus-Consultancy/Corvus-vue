<template>
  <header>
    <nav>
      <ol>
        <li>
          <a href="#home">
            <img src="@/assets/logo.webp" width="180" />
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

    <address>
      <font-awesome-icon icon="phone" />
      <a href="tel:0630222522">0630222522</a>
    </address>
  </header>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped lang="scss">
header {
  top: 1rem;
  left: 6rem;
  right: 6rem;

  display: flex;
  position: absolute;

  align-items: center;
  justify-content: center;

  a {
    color: gray;
    transition: all 0.3s ease;

    font-size: 1rem;
    font-weight: 400;

    &:hover {
      color: #880000;
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
          display: block;
          margin-right: auto;
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
      font-size: 0.8rem;
      padding-right: 0.8rem;
    }
  }
}
</style>

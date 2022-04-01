<template>
  <div class="background"></div>

  <header>
    <nav>
      <ol>
        <li>
          <a href="#home">
            <img src="@/assets/logo.png" width="180" />
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

  <router-view />
</template>

<style lang="scss">
html,
body,
svg {
  color: white;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

h2 {
  font-size: 2.8rem;
  font-weight: 400;
}

.background {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;

  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("~@/assets/hero.png");
  background-position: center;
}

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

    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;

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
        &:first-of-type {
          margin-right: auto;
        }
        &:last-of-type {
          margin-right: auto;
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

#home,
#about,
#contact,
#services,
#projects {
  width: 80vw;
  height: 100vh;
  display: flex;
  padding: 0 10vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a,
button {
  color: #fff;
  width: 30%;
  height: 50px;
  border: none;
  padding: 0;
  margin: 1rem;
  position: relative;
  background: transparent;

  font-size: inherit;
  font-family: inherit;
  text-decoration: none;

  &:after,
  &:before {
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    background: white;
    transition: all 0.3s ease;
  }

  &:before {
    width: 2px;
    height: 50%;
  }

  &:after {
    width: 20%;
    height: 2px;
  }

  &:hover {
    &:before {
      height: 100%;
      border: #880000;
      background: #880000;
    }

    &:after {
      width: 100%;
      background: #880000;
    }
  }

  span {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;

    align-items: center;
    justify-content: center;

    &:after,
    &:before {
      top: 0;
      left: 0;
      content: "";
      position: absolute;
      background: white;
      transition: all 0.3s ease;
    }

    &:after {
      width: 20%;
      height: 2px;
    }

    &:before {
      width: 2px;
      height: 50%;
    }

    &:hover {
      &:after {
        width: 100%;
      }

      &:before {
        height: 100%;
      }
    }
  }
}
</style>

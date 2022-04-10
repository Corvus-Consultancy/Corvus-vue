<template>
  <a :href="reference">
    <span>{{ content }}</span>
  </a>
</template>

<script>
export default {
  name: "OrganismButton",

  props: {
    content: String,
    reference: String,
  },
};
</script>

<style scoped lang="scss">
a {
  color: #fff;
  width: 100%;
  margin: 1rem 0;
  height: 50px;
  border: none;
  padding: 0;
  position: relative;
  background: transparent;

  font-size: inherit;
  font-family: inherit;
  text-decoration: none;

  @media (min-width: $screen-md-min) {
    width: 30%;
  }

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

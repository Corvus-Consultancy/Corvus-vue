<template>
  <button type="submit">
    <span>
      <template v-if="loading">
        <organism-loader />
      </template>

      <template v-else>
        {{ content }}
      </template>
    </span>
  </button>
</template>

<script>
import OrganismLoader from "@/components/organisms/OrganismLoader.vue";

export default {
  name: "OrganismSubmit",

  props: {
    content: String,
    loading: Boolean,
  },

  components: {
    OrganismLoader,
  },
};
</script>

<style scoped lang="scss">
button {
  color: #fff;
  margin: 2rem 0rem;
  height: 50px;
  border: none;
  padding: 0;
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

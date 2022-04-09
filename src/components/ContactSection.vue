<template>
  <section id="contact">
    <h2>Contact</h2>

    <form @submit.prevent="addContact">
      <div>
        <input
          v-model="data.name"
          v-bind:class="{ invalid: error.name }"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          v-model="data.email"
          v-bind:class="{ invalid: error.email }"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          v-model="data.phone"
          v-bind:class="{ invalid: error.phone }"
          type="phone"
          name="phone"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <textarea
          v-model="data.message"
          v-bind:class="{ invalid: error.message }"
          name="message"
          placeholder="Message"
        ></textarea>
      </div>

      <div>
        <button class="button" type="submit">
          <span>

            <template v-if="loading">
              <loader />
            </template>

            <template v-else>
              Send us a message
            </template>

          </span>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import Loader from "./Loader.vue";

const DOMAIN = process.env.VUE_APP_DOMAIN;
const METHOD = process.env.VUE_APP_METHOD;
const VERSION = process.env.VUE_APP_VERSION;

export default {
  name: "ContactSection",

  data() {
    return {
      data: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      error: {
        name: false,
        email: false,
        phone: false,
        message: false,
      },
      failure: false,
      success: false,
      loading: false,
    };
  },

  watch: {
    "data.email"(value) {
      this.error.email = this.invalidEmail(value) || this.invalidVarchar(value);
    },
    "data.phone"(value) {
      this.error.phone = this.invalidVarchar(value);
    },
    "data.name"(value) {
      this.error.name = this.invalidVarchar(value);
    },
    "data.message"(value) {
      this.error.message = this.invalidVarchar(value);
    },
  },

  methods: {
    async addContact() {
      this.error.email =
        this.invalidEmail(this.data.email) ||
        this.invalidVarchar(this.data.email);

      this.error.name = this.invalidVarchar(this.data.name);
      this.error.phone = this.invalidVarchar(this.data.phone);
      this.error.message = this.invalidVarchar(this.data.message);

      if (
        this.error.name ||
        this.error.email ||
        this.error.phone ||
        this.error.message
      ) {
        return;
      }

      const body = JSON.stringify(this.data);
      const method = "POST";
      const headers = { 'Content-Type': 'application/json' };

      const response = await fetch(`${METHOD}://${DOMAIN}/${VERSION}/contact`, {
        method,
        headers,
        body,
      });

      if (response.ok) {
        this.success = true;
        this.loading = false;
      } else {
        this.failure = true;
        this.loading = false;
      }
    },

    invalidEmail(value) {
      // Copied RegExp from https://deno.land/x/validasaur@v0.15.0/src/rules/is_email.ts
      const regex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
      );

      return !regex.test(value);
    },

    invalidVarchar(value) {
      const length = value.length;

      return length < 3 || length > 255;
    },
  },

  components: {
    Loader,
  },
};
</script>

<style scoped lang="scss">
$screen-sm-min: 576px;
$screen-md-min: 768px;
$screen-lg-min: 992px;
$screen-xl-min: 1200px;

form {
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: $screen-lg-min) {
      flex-direction: row;
    }

    &:last-of-type {
      flex-direction: row;
    }
  }

  input,
  textarea {
    flex: 1;
    color: white;
    margin: 1rem;
    height: 50px;
    border: none;
    outline: none;
    padding: 5px 10px;
    background: transparent;
    transition: all 0.3s ease;

    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    border-bottom: 2px solid white;

    &:hover {
      border-color: #880000;
    }

    &:placeholder {
      font-size: 1rem;
      font-weight: 400;

      color: white;
      opacity: 0.7;
    }
  }

  textarea {
    margin: 1rem;
    height: 160px;
  }

  .invalid {
    color: #880000;
    border-color: #880000;
  }
}
</style>

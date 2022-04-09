<template>
  <section id="contact">
    <h2>Contact</h2>

    <form @submit.prevent="addContact">
      <div>
        <input
          v-model="data.name"
          :class="{ invalid: error.name }"
          :disabled="loading"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          v-model="data.email"
          :class="{ invalid: error.email }"
          :disabled="loading"
          type="text"
          name="email"
          placeholder="Your email"
        />
        <input
          v-model="data.phone"
          :class="{ invalid: error.phone }"
          :disabled="loading"
          type="phone"
          name="phone"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <textarea
          v-model="data.message"
          :class="{ invalid: error.message }"
          :disabled="loading"
          rows="4"
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

            <template v-else> Send us a message </template>
          </span>
        </button>
      </div>

      <div>
        <em v-if="success" class="success"
          >We've received your message and we'll get back to you as fast as
          possible!</em
        >

        <em v-if="failure" class="failure"
          >Something went wrong, please try to contact us through our phone
          number</em
        >
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
    "data.email" () {
      this.error.email = false;
    },
    "data.phone" () {
      this.error.phone = false;
    },
    "data.name" () {
      this.error.name = false;
    },
    "data.message" () {
      this.error.message = false;
    },
  },

  methods: {
    async addContact() {
      this.success = false;
      this.failure = false;
      
      if (this.loading) return;

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

      this.loading = true;

      const body = JSON.stringify(this.data);
      const method = "POST";
      const headers = { "Content-Type": "application/json" };

      const response = await fetch(`${METHOD}://${DOMAIN}/${VERSION}/contact`, {
        method,
        headers,
        body,
      });

      if (response.ok) {
        this.data = {
          name: "",
          email: "",
          phone: "",
          message: "",
        };
      }

      this.loading = false;
      this.success = response.ok;
      this.failure = !response.ok;
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
    resize: none;
    color: white;
    margin: .75rem 0;
    height: 50px;
    border: none;
    outline: none;
    padding: 10px 10px;
    background: transparent;
    transition: all 0.3s ease;

    box-sizing: border-box;
    font-size: inherit;
    font-family: inherit;
    border-bottom: 2px solid white;

    &:focus,
    &:hover {
      border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    }

    &:placeholder {
      font-size: 1rem;
      font-weight: 400;

      color: white;
      opacity: 0.7;
    }
  }

  textarea {
    height: 160px;
  }

  .invalid {
    border-color: #880000;
  }

  .success,
  .failure {
    margin: 1rem 0;
    padding: 0.75rem 1.25rem;
    font-style: normal;

    border: transparent solid 1px;
    border-radius: 0.25rem;
  }

  .success {
    color: #155724;
      border-color: #c3e6cb;
    background-color: #d4edda;
  }

  .failure {
    color: #721c24;
    border-color: #f5c6cb;
    background-color: #f8d7da;
  }
}
</style>

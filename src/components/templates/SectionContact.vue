<template>
  <section>
    <h2 id="contact">Contact</h2>

    <form
      name="Contact"
      action="/"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="addContact"
    >
      <div>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="Contact" />
        <input
          type="hidden"
          name="subject"
          value="Bericht ontvangen op het contactformulier van Corvus Consultancy"
        />

        <input
          v-model="data.name"
          :class="{ invalid: error.name }"
          :disabled="loading"
          type="text"
          name="name"
          maxlength="255"
          placeholder="Your name"
        />
        <input
          v-model="data.email"
          :class="{ invalid: error.email }"
          :disabled="loading"
          type="text"
          name="email"
          maxlength="255"
          placeholder="Your email"
        />
        <input
          v-model="data.phone"
          :class="{ invalid: error.phone }"
          :disabled="loading"
          type="text"
          name="phone"
          maxlength="255"
          placeholder="Your phone number"
        />
      </div>

      <textarea
        v-model="data.content"
        :class="{ invalid: error.content }"
        :disabled="loading"
        rows="4"
        name="content"
        maxlength="4096"
        placeholder="Message"
      ></textarea>

      <organism-submit :content="'Send us a message'" :loading="loading" />

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
import OrganismSubmit from "@/components/organisms/OrganismSubmit.vue";

export default {
  name: "ContactSection",

  data() {
    return {
      data: {
        name: "",
        email: "",
        phone: "",
        content: "",
      },
      error: {
        name: false,
        email: false,
        phone: false,
        content: false,
      },
      failure: false,
      success: false,
      loading: false,
    };
  },

  watch: {
    "data.email"() {
      this.error.email = false;
    },
    "data.phone"() {
      this.error.phone = false;
    },
    "data.name"() {
      this.error.name = false;
    },
    "data.content"() {
      this.error.content = false;
    },
  },

  methods: {
    async addContact(event) {
      this.success = false;
      this.failure = false;

      if (this.loading) return;

      this.error.email =
        this.invalidEmail(this.data.email) ||
        this.invalidVarchar(this.data.email);

      this.error.name = this.invalidVarchar(this.data.name);
      this.error.phone = this.invalidVarchar(this.data.phone);
      this.error.content = this.invalidLarge(this.data.content);

      if (
        this.error.name ||
        this.error.email ||
        this.error.phone ||
        this.error.content
      ) {
        return;
      }

      this.loading = true;

      this.$plausible.trackEvent("Contact form submitted");

      const formHTML = event.target;
      const formData = new FormData(formHTML);
      const formParams = new URLSearchParams(formData);
      const formParsed = formParams.toString();

      const formMethod = "POST";
      const formHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const formResponse = await fetch("/", {
        body: formParsed,
        method: formMethod,
        headers: formHeaders,
      });

      setTimeout(() => {
        this.loading = false;
        this.success = formResponse.ok;
        this.failure = !formResponse.ok;
      }, 1000);
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

    invalidLarge(value) {
      const length = value.length;

      return length < 3 || length > 4096;
    },
  },

  components: {
    OrganismSubmit,
  },
};
</script>

<style scoped lang="scss">
form {
  width: 100%;
  margin: 0 -1rem;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 -1rem;

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
    margin: 1rem 1rem;
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
    margin: 1rem 0;
    height: 160px;
  }

  .invalid {
    border-color: #880000;
  }

  .success,
  .failure {
    width: 100%;
    margin: 1rem;
    padding: 0.75rem 1.25rem;
    font-size: inherit;
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

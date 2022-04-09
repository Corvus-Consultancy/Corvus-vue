<template>
  <section id="contact">
    <h2>Contact</h2>

    <form action="/my-handling-form-page" method="post">
      <div>
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <input type="phone" name="phone" placeholder="Your phone number" />
      </div>

      <div>
        <textarea name="message" placeholder="Message"></textarea>
      </div>

      <div>
        <button class="button" type="submit">
          <span>Send us a message</span>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
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

// @media (min-width: 1436px) {
//   form {
//     div {
//       flex-direction: row;
//     }
//   }
// }
</style>

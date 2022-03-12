<template>
  <section id="home">
    <h1>
      <span>Corvus</span>
      <span>Consultancy</span>
    </h1>

    <p>Creating innovative solutions for <strong>your</strong> business.</p>

    <a href="#projects">
      <span>Read more</span>
    </a>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: #fff;
  margin: 0;
  display: flex;

  font-size: 8rem;
  text-align: center;
  flex-direction: column;

  span:first-of-type {
    font-weight: 500;
  }
  
  span:last-of-type {
    font-weight: 100;
  }
}

p {
  color: #fff;

  font-size: 1.5rem;
  font-weight: 300;

  strong {
   color: #880000; 
  }
}

a {
  width: 20%;
  color: #fff;
  height: 40px;
  position: relative;
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

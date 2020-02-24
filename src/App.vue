<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import url('./css/normalize.css');
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,500,700&display=swap');
  
  $white: #fff;
  $shadow: rgb(218, 218, 218);
  $dark: rgb(82, 82, 82);
  $neomorph-background: rgb(245, 245, 245);
  $box-shadow: 
      -5px -5px 10px 0 $white,
      5px 5px 10px 0 $shadow;
  $box-shadow-small: 
      -3px -3px 5px 0 $white,
      3px 3px 5px 0 $shadow;
  $box-shadow-big: 
      -5px -5px 10px 5px $white,
      5px 5px 10px 5px $shadow;
  $box-shadow-inset: 
      -3px -3px 10px 0 $white inset,
      3px 3px 10px 0 $shadow inset;

  body {
    font-family: 'Roboto', sans-serif;
    background-color: rgb(245, 245, 245);
    font-size: 16px;
  }

  a {
    text-decoration: none;
    transition: box-shadow .2s;
    
    &:active {
        box-shadow: $box-shadow-inset;
    }
  }

  button {
    display: inline-flex;
    justify-content: center;
    border: 0;
    border-radius: .5em;
    background-color: $neomorph-background;
    outline: 0;
    padding: .5em 1em;
    cursor: pointer;
    transition: box-shadow .2s, z-index .2s;

    &.btn-neo {
      box-shadow: $box-shadow;
      transition: box-shadow .2s, z-index .2s;
    }

    &.info {
      background-image: linear-gradient(to left, #5599ff, #6da6ff, #82b3ff, #97c0ff, #accdff);
    }

    &.success {
      background-image: linear-gradient(to left, #55ff64, #6cff78, #80ff8a, #92ff9b, #a3ffab);
    }

    &.warning {
      background-image: linear-gradient(to left, #f0ff55, #f2ff6b, #f4ff7f, #f5ff92, #f7ffa4);
    }

    &.danger {
      color: #fff;
      background-image: linear-gradient(to left, #ff5555, #ff6463, #ff7271, #ff7f7f, #ff8c8c);
    }

    &.btn-icon {
      border-radius: 100%;
      width: 50px;
      height: 50px;
    }

    &:hover {
      box-shadow: $box-shadow-big;
      z-index: 2;
    }

    &:active {
      box-shadow: $box-shadow-small;
      z-index: 2;
    }
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  .container {
    box-sizing: border-box;
    margin: 0 2em;
    padding: 7em 2em;
  }

  .neo {
    box-shadow: $box-shadow;
    background-color: $neomorph-background;
  }

  a.neo:active, button.neo:active {
    box-shadow: $box-shadow-inset
  }

</style>

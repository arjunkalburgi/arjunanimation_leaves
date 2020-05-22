<template>
  <div id="app">
    <section></section>
		<section class="arjunanimation_leaves"></section>
		<section></section>
  </div>
</template>

<script>
import {animate} from 'arjunanimation_leaves';

export default {
  name: 'App',
  data() {
    return {
      animationData: {
      className: 'arjunanimation_leaves', 
      numOfSprites: 30,
      pathsOfSprites: [
        'assets/elements/element01.svg',
        'assets/elements/element02.svg',
        'assets/elements/element03.svg',
        'assets/elements/element04.svg',
        'assets/elements/element05.svg',
        'assets/elements/element06.svg',
        'assets/elements/element07.svg',
        'assets/elements/element08.svg',
      ]
    }
    }
  },
  mounted() {
    animate(this.animationData);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

section {
  width: 100%;
  height: 30vh;
}
</style>

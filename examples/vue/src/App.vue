<template>
  <div id="app">
    <section></section>
		<section class="arjunanimation_leaves"></section>
		<section></section>
  </div>
</template>

<script>
// import {animate} from '@arjunanimations/leaves';
import {animate} from '../../../index.js';

export default {
  name: 'App',
  data() {
    return {
      animationData: {
        className: 'arjunanimation_leaves', 
        numOfSprites: 30,
        pathsOfSprites: [
          require('./assets/elements/element01.svg'),
          require('./assets/elements/element02.svg'),
          require('./assets/elements/element03.svg'),
          require('./assets/elements/element04.svg'),
          require('./assets/elements/element05.svg'),
          require('./assets/elements/element06.svg'),
          require('./assets/elements/element07.svg'),
          require('./assets/elements/element08.svg'),
        ],
        // noSway: true,
				// noRotation: true,
        // noSpin: true,
        // height: 105, 
        // width: 105,
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

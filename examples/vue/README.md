```javascript 
<script>
import {animate} from '@arjunanimation/leaves';

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
        // optional 
        noSway: true,
        noSpin: true,
        noRotation: true,
      }
    }
  },
  mounted() {
    animate(this.animationData);
  }
}
</script>
```

![Leaves animation](../leavesgif.gif)


## Test it locally
```bash
$ git clone https://github.com/arjunkalburgi/arjunanimation_leaves.git
$ cd arjunanimation_leaves/examples/vue
$ npm i
$ npm run serve
```
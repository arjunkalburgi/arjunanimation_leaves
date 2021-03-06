# ArjunAnimation: Leaves

`@arjunanimation/leaves` is an easy-to-use, light-weight JS animation library that adds floating, leaf-like animations to your website.

![Leaves animation](./examples/leavesgif.gif)

```js
arjunanimation_leaves.animate({
    // identify the class name of the element you want the animaiton to appear within
    //      the leaves will not show outside this container
    // -- string
    className: 'arjunanimation_leaves', 

    // identify the number of sprites you would like to appear within the container
    // -- int
    numOfSprites: 30,

    // define the sprites using an array of paths
    // -- array of strings
    pathsOfSprites: [
        'element01.svg',
        'element02.svg',
        'element03.svg',
        'element04.svg',
        'element05.svg',
        'element06.svg',
        'element07.svg',
        'element08.svg',
    ],

    // turn off movement
    // -- boolean or null (optional)
    noSway: true,

    // turn off spinning
    // -- boolean or null (optional)
    noSpin: true,

    // turn off rotation
    // -- boolean or null (optional)
    noRotation: true,

    // set sprite height in pixels
    // -- int or null (optional - default: 35px)
    height: 35,

    // set sprite width in pixels
    // -- int or null (optional - default: 35px)
    width: 35,
});
```

## Installation 

### Static websites 

See [static example](./examples/static) for the working example.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
<script src="https://unpkg.com/@arjunanimations/leaves"></script>
<script>
    arjunanimation_leaves.animate({
        // see above example for details
        className: '...', 
        numOfSprites: ...,
        pathsOfSprites: [...]
        // optional 
        noSway: true,
        noSpin: true,
        noRotation: true,
        height: ...,
        width: ...,
    });
</script>
```

### Module System

See [vue example](./examples/vue) for the working example.

```bash
$ npm install @arjunanimation/leaves --save
```

```javascript 
// put these in your component

import {animate} from '@arjunanimation/leaves';

const animationData = {
    // see above example for details
    className: '...', 
    numOfSprites: ...,
    pathsOfSprites: [...]
    // optional 
    noSway: true,
    noSpin: true,
    noRotation: true,
    height: ...,
    width: ...,
}

animate(this.animationData);
```

## Note from the Author

Hey yall! Thanks for checking out this library! I believe that animations are key to making websites that are unique and enjoyable. Hopefully this helps do that! 

I'm also hoping to make a suite of animation libraries, starting with this one - the animation which I use on my own website.

Enjoy the lib! :) 
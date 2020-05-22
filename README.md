# ArjunAnimation: Leaves

`arjunanimation_leaves` is an easy-to-use, light-weight JS animation library that adds floating, leaf-like animations to your website.

```js
arjunanimation_leaves.animate({
    // identify the class name of the element you want the animaiton to appear within
    //      the leaves will not show outside this container
    className: 'arjunanimation_leaves', 

    // identify the number of sprites you would like to appear within the container
    numOfSprites: 30,

    // define the sprites using an array of paths
    pathsOfSprites: [
        'element01.svg',
        'element02.svg',
        'element03.svg',
        'element04.svg',
        'element05.svg',
        'element06.svg',
        'element07.svg',
        'element08.svg',
    ]
});
```

## Installation 

### Static websites 

See [static example](./examples/static) for the working example.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
<script src="https://unpkg.com/arjunanimation_leaves@0.0.3/index.js"></script>
<script>
    arjunanimation_leaves.animate({
        // see above example for details
        className: '...', 
        numOfSprites: ...,
        pathsOfSprites: [...]
    });
</script>
```

### Using AMD (npm, yarn, etc)

See [vue example](./examples/vue) for the working example.

```bash
$ npm install arjunanimation_leaves --save
```

```javascript 
// put these in your component

import {animate} from 'arjunanimation_leaves';

const animationData = {
    // see above example for details
    className: '...', 
    numOfSprites: ...,
    pathsOfSprites: [...]
}

animate(this.animationData);
```

## Note from the Author

Hey yall! Thanks for checking out this library! I believe that animations are key to making websites that are unique and enjoyable. Hopefully this helps do that! 

I'm also hoping to make a suite of animation libraries, starting with this one - the animation which I use on my own website.

Enjoy the lib! :) 
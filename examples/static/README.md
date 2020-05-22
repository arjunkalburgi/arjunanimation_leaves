```html 
<body>
    <section></section>
    <section class="arjunanimation_leaves"></section>
    <section></section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
    <script src="https://unpkg.com/arjunanimation_leaves@0.0.3/index.js"></script>
    <script>
        arjunanimation_leaves.animate({
            className: 'arjunanimation_leaves', 
            numOfSprites: 30,
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
    </script>
</body>
```
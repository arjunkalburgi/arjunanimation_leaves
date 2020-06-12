```html 
<body>
    <section></section>
    <section class="arjunanimation_leaves"></section>
    <section></section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>
    <script src="https://unpkg.com/@arjunanimations/leaves"></script>
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
            ],
            // optional 
            noSway: true,
            noSpin: true,
            noRotation: true,
            width: 35, 
            height: 35
        });
    </script>
</body>
```
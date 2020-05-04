
// Leaves animation (https://codepen.io/askalburgi/pen/WWjmRM)
var icons = $('.bgicon'), total = $('.bgicon').length;
var container = $(".bgicons"), w = container.innerWidth(), h = container.innerHeight();
var tweenNum = 50;

for (var i = 0; i < total; i++) {
    var icon = icons[i]
    TweenLite.set(icon, { x: R(0, w), y: R(0, h), z: R(-200, 200) }); // place icon 
    iconRotate(icon);
    iconSway(icon);
}

function R(min, max) { return min + (Math.floor(10 * Math.random() * (max - min)) / 10) };
function S() { return Math.random() < 0.5 ? -1 : 1 };
function iconRotate(icon) {
    // make icon rotate 
    TweenMax.to(icon, R(2, 5), {
        rotationX: 180 * S(),
        rotationY: 180 * S(),
        repeat: 1,
        yoyo: true,
        ease: Sine.easeInOut,
        onComplete() {
            iconRotate(icon);
        }
    });
}
function iconSway(icon) {
    // make icon sway 
    TweenMax.to(icon, R(2, 8), {
        x: '+=' + R(-100, 100),
        y: '+=' + R(-100, 100),
        rotationZ: R(0, 180),
        repeat: 0,
        yoyo: false,
        ease: Sine.easeInOut,
        onComplete() {
            iconSway(icon);
        }
    });
}

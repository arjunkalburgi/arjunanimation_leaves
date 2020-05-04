const containers = document.getElementsByClassName('animation_leaves');
addStyle();
for (let item of containers) {
    item.className += " BackgroundAnimation";
    createAnimations(item);
}

function createAnimation(container) {
  const num_of_sprites = parseInt(container.getAttribute('data-number'));
  var w = container.innerWidth(), h = container.innerHeight();

  for (var i = 0; i < num_of_sprites; i++) {
	// make icon element
	var icon = document.createElement('div');
	icon.className = "BackgroundAnimation_icon";

	// apply animation
	iconPlace(icon);
	iconRotate(icon);
	iconSway(icon);

	// append icon 
	container.append(icon);
  }
}

function addStyle() {
  var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  head.appendChild(style);
  style.type = 'text/css';

  const css = `
	.BackgroundAnimation {
	    position: absolute;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    z-index: -1;
	    overflow: hidden;
	    pointer-events: none;
	}

	.BackgroundAnimation_icon {
	    position: absolute;
            pointer-events: none;
            z-index: -1;
            width: 35px;
            height: 35px;
            background-size: contain;
            background-repeat: no-repeat;
            opacity: 0.5;
	}
  `;

  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

/*
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
*/

function R(min, max) { return min + (Math.floor(10 * Math.random() * (max - min)) / 10) };
function S() { return Math.random() < 0.5 ? -1 : 1 };
function iconPlace(icon) {
    // place icon 
    TweenLite.set(icon, { x: R(0, w), y: R(0, h), z: R(-200, 200) });
}
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

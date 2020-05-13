// https://github.com/umdjs/umd/blob/master/templates/commonjsStrictGlobal.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) { // AMD. Register as an anonymous module. (npm)
    define(['exports', 'gsap'], function (exports, gsap) {
      factory((root.arjunanimation_leaves = exports), gsap);
    });
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') { // CommonJS (NodeJS)
    factory(exports, require('gsap'));
  } else { // Browser globals (static)
    factory((root.arjunanimation_leaves = {}), root.gsap);
  }
}(typeof self !== 'undefined' ? self : this, function (exports, gsap) {
  
  function createAnimations(container, num_of_sprites) {
    var w = container.offsetWidth, h = container.offsetHeight;
    
    for (var i = 0; i < num_of_sprites; i++) {
      // make icon element
      var icon = document.createElement('div');
      icon.className = "arjunanimation_leaves_icon";
      
      
      // apply animation
      iconPlace(icon, w, h);
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
    .arjunanimation_leaves {
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      overflow: hidden;
      pointer-events: none;
    }
    
    .arjunanimation_leaves_icon {
      position: absolute;
      pointer-events: none;
      z-index: -1;
      width: 35px;
      height: 35px;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0.5;
      
      background-image: url(element01.svg)
    }
    `;
    
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  function R(min, max) { return min + (Math.floor(10 * Math.random() * (max - min)) / 10) };
  function S() { return Math.random() < 0.5 ? -1 : 1 };
  function iconPlace(icon, w, h) {
    gsap.set(icon, { x: R(0, w), y: R(0, h), z: R(-200, 200) });
  }
  function iconRotate(icon) {
    gsap.to(icon, R(2, 5), {
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
    gsap.to(icon, R(2, 8), {
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
  
  
  exports.animate = function (arjunanimation_data) {

    if (isNaN(arjunanimation_data.num_of_sprites)) { console.log("arjunanimation_leaves - Please set 'data-number' attribute to container.") }
    const containers = document.getElementsByClassName(arjunanimation_data.className ? arjunanimation_data.className : 'arjunanimation_leaves');
    addStyle();
    for (let item of containers) {
      createAnimations(item, arjunanimation_data.num_of_sprites);
    }

  };
}));

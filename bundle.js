(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const hero = document.querySelector(".hero");
const name = hero.querySelector(".hero__name");
const walk = 30;

// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load("particles-js", "assets/particles.json", function() {
//     console.log("callback - particles-js config loaded");
// });

function shadow(e) {
    const { offsetHeight: height, offsetWidth: width } = hero;
    let { offsetX: x, offsetY: y } = e;

    console.log(e.target);

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    name.style.textShadow = `${xWalk}px ${yWalk}px 20px rgba(142,117,117, 0.7),
                            ${yWalk}px ${xWalk *
        -1}px 11px rgba(17,194,210,0.7)`;
}

hero.addEventListener("mousemove", shadow);

// particlesJS();

},{}]},{},[1]);

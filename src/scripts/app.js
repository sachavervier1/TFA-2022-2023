'use strict'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.to("body", {
    backgroundColor: "#FEEED5",
    duration: 1,
    color: "black",

    scrollTrigger: {
        trigger: ".deux",
        start: "150px bottom",
        toggleActions: "restart pause resume reverse "
    },
});


// var layers = document.querySelectorAll('.fleche');

// function parallax() {

//     var scrollTop = window.pageYOffset;

//     layers.forEach(function (layer) {
//         var speed = layer.getAttribute('data-speed');
//         var yPos = scrollTop * speed / 20;
//         layer.style.transform = 'TranslateY(' + yPos + 'px)';
//     });


// }

// window.addEventListener('scroll', parallax);


// gsap.to(".fleche", {

//     x,
//     y: -5,
//     rotateY: 180,
//     duration: 0.06,


//     scrollTrigger: {
//         trigger: ".un",
//         start: "bottom 47%",
//         end: "bottom 46%",
//         toggleActions: "play play reverse reverse",
//     },

// });
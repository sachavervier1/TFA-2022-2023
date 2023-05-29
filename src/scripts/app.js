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


gsap.to(".fleche--1", {
    opacity: 0,
    position: "absolute",

    scrollTrigger: {
        trigger: ".un",
        start: "bottom 46%",
        toggleActions: "restart pause resume reverse ",
        markers: true,

    },

});




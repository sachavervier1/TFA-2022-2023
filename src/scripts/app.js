'use strict'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const buttondown1 = document.querySelector(".button1");
const buttondown2 = document.querySelector(".button2");
const buttondown3 = document.querySelector(".button3");
const buttondown4 = document.querySelector(".button4");
const buttondown5 = document.querySelector(".button5");
const hideparagraph1 = document.querySelector(".paragraphe--cache1");
const hideparagraph2 = document.querySelector(".paragraphe--cache2");
const hideparagraph3 = document.querySelector(".paragraphe--cache3");
const hideparagraph4 = document.querySelector(".paragraphe--cache4");
const hideparagraph5 = document.querySelector(".paragraphe--cache5");

buttondown1.addEventListener("click", function () {
    hideparagraph1.classList.toggle("montre");
}
);

buttondown2.addEventListener("click", function () {
    hideparagraph2.classList.toggle("montre");
}
);

buttondown3.addEventListener("click", function () {
    hideparagraph3.classList.toggle("montre");
    hideparagraph4.classList.remove("montre");
    hideparagraph5.classList.remove("montre");
}
);

buttondown4.addEventListener("click", function () {
    hideparagraph4.classList.toggle("montre");
    hideparagraph3.classList.remove("montre");
    hideparagraph5.classList.remove("montre");
}
);

buttondown5.addEventListener("click", function () {
    hideparagraph5.classList.toggle("montre");
    hideparagraph4.classList.remove("montre");
    hideparagraph3.classList.remove("montre");
}
);


const menuburger = document.querySelector(".topnav__burger");
const menu = document.querySelector(".topnav");
const menuburgeroff = document.querySelector(".topnav__liste");
menuburger.addEventListener("click", function () {
    menu.classList.toggle("topnav--open");
});

menuburgeroff.addEventListener("click", function () {
    menu.classList.remove("topnav--open")
});


var layers = document.querySelectorAll('.parallax__el');

function parallax() {

    var scrollTop = window.pageYOffset;

    layers.forEach(function (layer) {
        var speed = layer.getAttribute('data-speed');
        var yPos = scrollTop * speed / 20;
        layer.style.transform = 'translate3d(' + yPos + 'px, 0px, 0px)';
    });


}

window.addEventListener('scroll', parallax);

var layers2 = document.querySelectorAll('.parallax__el2');

function parallax2() {

    var scrollTop2 = window.pageYOffset;

    layers2.forEach(function (layer) {
        var speed2 = layer.getAttribute('data-speed');
        var yPos2 = scrollTop2 * speed2 / 20;
        layer.style.transform = 'translate3d(0px, ' + yPos2 + 'px, 0px)';
    });


}

window.addEventListener('scroll', parallax2);



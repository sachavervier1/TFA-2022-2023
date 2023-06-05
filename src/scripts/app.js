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
}
);

buttondown4.addEventListener("click", function () {
    hideparagraph4.classList.toggle("montre");
}
);

buttondown5.addEventListener("click", function () {
    hideparagraph5.classList.toggle("montre");
}
);




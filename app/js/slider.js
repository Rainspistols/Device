"use strict";

var radio1Btn = document.querySelector(".radio1");
var radio2Btn = document.querySelector(".radio2");
var radio3Btn = document.querySelector(".radio3");
var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");

slider1.classList.add("slider-show-js");

radio1Btn.addEventListener("click", function (evt) {
  slider1.classList.add("slider-show-js");
  if (slider2.classList.contains("slider-show-js")) {
    slider2.classList.remove("slider-show-js");
  }
  if (slider3.classList.contains("slider-show-js")) {
    slider3.classList.remove("slider-show-js");
  }
})

radio2Btn.addEventListener("click", function (evt) {
  slider2.classList.add("slider-show-js");
  if (slider1.classList.contains("slider-show-js")) {
    slider1.classList.remove("slider-show-js");
  }
  if (slider3.classList.contains("slider-show-js")) {
    slider3.classList.remove("slider-show-js");
  }
})

radio3Btn.addEventListener("click", function (evt) {
  slider3.classList.add("slider-show-js");
  if (slider1.classList.contains("slider-show-js")) {
    slider1.classList.remove("slider-show-js");
  }
  if (slider2.classList.contains("slider-show-js")) {
    slider2.classList.remove("slider-show-js");
  }
})

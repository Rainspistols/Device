"use strict";

var bigMap = document.querySelector(".big-map-js");
var smallMap = document.querySelector(".small-map-js");
var closeBtn = bigMap.querySelector(".modal-close");


smallMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("modal-show-js");
})

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (bigMap.classList.contains("modal-show-js")) {
    bigMap.classList.remove("modal-show-js");
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (bigMap.classList.contains("modal-show-js")) {
      bigMap.classList.remove("modal-show-js");
    }
  }
});

"use strict";

var deliveryBtn = document.querySelector(".del-war-cred_button1");
var warrancyBtn = document.querySelector(".del-war-cred_button2");
var creditBtn = document.querySelector(".del-war-cred_button3");
var deliverySlide = document.querySelector(".D-right");
var warrancySlide = document.querySelector(".W-right");
var creditSlide = document.querySelector(".C-right");


deliveryBtn.classList.add("sliderDWC-btn-active-js");
deliveryBtn.classList.add("sliderDel-btn-active-js");

deliverySlide.classList.add("sliderDWC-show-js");





deliveryBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (warrancyBtn.classList.contains("sliderDWC-btn-active-js")) {
    warrancyBtn.classList.remove("sliderDWC-btn-active-js")
  }
  if (warrancyBtn.classList.contains("sliderWar-btn-active-js")) {
    warrancyBtn.classList.remove("sliderWar-btn-active-js")
  }
  if (creditBtn.classList.contains("sliderDWC-btn-active-js")) {
    creditBtn.classList.remove("sliderDWC-btn-active-js")
  }
  if (creditBtn.classList.contains("sliderCred-btn-active-js")) {
    creditBtn.classList.remove("sliderCred-btn-active-js")
  }
  deliveryBtn.classList.add("sliderDWC-btn-active-js");
  deliveryBtn.classList.add("sliderDel-btn-active-js");


  if (warrancySlide.classList.contains("sliderDWC-show-js")) {
    warrancySlide.classList.remove("sliderDWC-show-js")
  }
  if (creditSlide.classList.contains("sliderDWC-show-js")) {
    creditSlide.classList.remove("sliderDWC-show-js")
  }
  deliverySlide.classList.add("sliderDWC-show-js");
})



warrancyBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (deliveryBtn.classList.contains("sliderDWC-btn-active-js")) {
    deliveryBtn.classList.remove("sliderDWC-btn-active-js")
  }
  if (deliveryBtn.classList.contains("sliderDel-btn-active-js")) {
    deliveryBtn.classList.remove("sliderDel-btn-active-js")
  }
  if (creditBtn.classList.contains("sliderDWC-btn-active-js")) {
    creditBtn.classList.remove("sliderDWC-btn-active-js")
  }
  if (creditBtn.classList.contains("sliderCred-btn-active-js")) {
    creditBtn.classList.remove("sliderCred-btn-active-js")
  }
  warrancyBtn.classList.add("sliderDWC-btn-active-js");
  warrancyBtn.classList.add("sliderWar-btn-active-js");


  if (deliverySlide.classList.contains("sliderDWC-show-js")) {
    deliverySlide.classList.remove("sliderDWC-show-js")
  }
  if (creditSlide.classList.contains("sliderDWC-show-js")) {
    creditSlide.classList.remove("sliderDWC-show-js")
  }
  warrancySlide.classList.add("sliderDWC-show-js");
})



creditBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (warrancyBtn.classList.contains("sliderDWC-btn-active-js")) {
    warrancyBtn.classList.remove("sliderDWC-btn-active-js")
  }
  if (warrancyBtn.classList.contains("sliderWar-btn-active-js")) {
    warrancyBtn.classList.remove("sliderWar-btn-active-js")
  }
  if (deliveryBtn.classList.contains("sliderDWC-btn-active-js")) {
    deliveryBtn.classList.remove("sliderDWC-btn-active-js")
  }
  if (deliveryBtn.classList.contains("sliderDel-btn-active-js")) {
    deliveryBtn.classList.remove("sliderDel-btn-active-js")
  }
  creditBtn.classList.add("sliderDWC-btn-active-js");
  creditBtn.classList.add("sliderCred-btn-active-js");


  if (warrancySlide.classList.contains("sliderDWC-show-js")) {
    warrancySlide.classList.remove("sliderDWC-show-js")
  }
  if (deliverySlide.classList.contains("sliderDWC-show-js")) {
    deliverySlide.classList.remove("sliderDWC-show-js")
  }
  creditSlide.classList.add("sliderDWC-show-js");
})

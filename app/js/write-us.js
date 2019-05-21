"use strict";

var writeUsBtn = document.querySelector(".write-us-btn");
var writeUsPopup = document.querySelector(".write-us-popup");
var closeBtn = document.querySelector(".modal-close");
var loginInput = writeUsPopup.querySelector("[name=name]");
var mailInput = writeUsPopup.querySelector("[name=mail]");
var messageInput = writeUsPopup.querySelector("[name=message]");
var loginSave = localStorage.getItem("loginInput");
var mailSave = localStorage.getItem("mailInput");


writeUsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show-js");
  if (loginSave || mailSave) {
    loginInput.value = loginSave;
    mailInput.focus();
    mailInput.value = mailSave;
    messageInput.focus();
  } else {
    loginInput.focus();
  }
});

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (writeUsPopup.classList.contains("modal-show-js")) {
    writeUsPopup.classList.remove("modal-show-js");
  }
  if (writeUsPopup.classList.contains("modal-error-js")) {
    writeUsPopup.classList.remove("modal-error-js");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsPopup.classList.contains("modal-show-js")) {
      writeUsPopup.classList.remove("modal-show-js");
    }
    if (writeUsPopup.classList.contains("modal-error-js")) {
      writeUsPopup.classList.remove("modal-error-js");
    }
  }
});

writeUsPopup.addEventListener("submit", function (evt) {
  if (!mailInput.value || !loginInput.value || !messageInput.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error-js");
    void writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error-js");
  } else {
    localStorage.setItem("loginInput", loginInput.value);
    localStorage.setItem("mailInput", mailInput.value);
  }
});

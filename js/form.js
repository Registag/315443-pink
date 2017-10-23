var form = document.querySelector("form");

var successClose = document.querySelector(".modal__button--success");
var successPopup = document.querySelector(".modal--success");
var errorClose = document.querySelector(".modal__button--error");
var errorPopup = document.querySelector(".modal--error");

var lastName = form.querySelector("[name=last-name]");
var firstName = form.querySelector("[name=first-name]");
var email = form.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  if (!lastName.value || !firstName.value || !email.value) {
    evt.preventDefault();
    errorPopup.classList.add("modal--error-show");
  } else
  successPopup.classList.add("modal--success-show");
});

successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  successPopup.classList.remove("modal--success-show");

errorClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  errorPopup.classList.remove("modal--error-show");
});

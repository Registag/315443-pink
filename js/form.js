var link = document.querySelector(".form__button");
// var popup = document.querySelector(".modal");

var successClose = document.querySelector(".modal__button--success");
var successPopup = document.querySelector(".modal--success");

var errorClose = document.querySelector(".modal__button--error");
var errorPopup = document.querySelector(".modal--error");
var form = document.querySelector("form");
var lastName = popup.querySelector("[name=last-name]");
var firstName = popup.querySelector("[name=first-name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
  if (!lastName.value || !firstName.value || !email.value) {
    evt.preventDefault();
    errorPopup.classList.add("modal--error-show");
  } else
  evt.preventDefault();
  successPopup.classList.add("modal--success-show");
});

successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  successPopup.classList.remove("modal--success-show");
});
//
// link.addEventListener("click", function (evt) {
//   if (!lastName.value || !firstName.value || !email.value) {
//     evt.preventDefault();
//     errorPopup.classList.add("modal--error-show");
//   }
// });

errorClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  errorPopup.classList.remove("modal--error-show");
});

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (popup.classList.contains("modal-show")) {
//       successPopup.classList.remove("modal--success-show");
//       errorPopup.classList.remove("modal--error-show");
//     }
//   }
// });

var link = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");
var header = document.querySelector(".page-header");
var menuopen = document.querySelector(".main-nav__list-show");
var logo = document.querySelector(".page-header__logo");

link.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.add("main-nav__list-show");
  header.classList.add("page-header-open");
  link.classList.add("main-nav__toggle-cross");
});

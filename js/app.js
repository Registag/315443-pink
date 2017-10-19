var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var header = document.querySelector(".page-header");
var headerWrap = document.querySelector(".page-header__wrap");

navMain.classList.remove('main-nav--nojs');
header.classList.remove('page-header--nojs');
headerWrap.classList.remove('page-header__wrap--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    header.classList.add('page-header--opened');
    headerWrap.classList.add('page-header__wrap--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    header.classList.remove('page-header--opened');
    headerWrap.classList.remove('page-header__wrap--opened');
  }
});

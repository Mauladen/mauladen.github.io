let menuBlock = document.querySelector('.menu');
let menuContainer = document.querySelector('.menu-container');
let menuOpenButton = document.querySelector('.navigation__button--menu');
let menuCloseButton = document.querySelector('.header__button--close');

menuOpenButton.addEventListener('click', () => {
	menuBlock.classList.toggle('menu--animation-open');
	menuContainer.classList.toggle('menu-container--open');
});

menuCloseButton.addEventListener('click', () => {
	menuBlock.classList.toggle('menu--animation-open');
	menuContainer.classList.toggle('menu-container--open');
});
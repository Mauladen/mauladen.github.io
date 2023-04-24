let menuBlock = document.querySelector('.menu');
let menuContainer = document.querySelector('.modal-container');
let menuOpenButton = document.querySelector('.navigation__button--menu');
let menuCloseButton = document.querySelector('.menu-header__button--close');

menuOpenButton.addEventListener('click', () => {
	menuBlock.classList.add('menu--animation-open');
	menuContainer.classList.add('modal-container--open');
});

menuCloseButton.addEventListener('click', () => {
	menuBlock.classList.remove('menu--animation-open');
	menuContainer.classList.remove('modal-container--open');
});

menuContainer.addEventListener('click', () => {
	menuBlock.classList.remove('menu--animation-open');
	menuContainer.classList.remove('modal-container--open');
});


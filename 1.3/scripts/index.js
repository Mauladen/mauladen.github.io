let dropdownBlock = document.querySelector('.brands-list--hidden');
let dropdownBtn = document.querySelector('.brands__button');

dropdownBtn.addEventListener('click', () => {
  let btnText = 'Скрыть';
  if (dropdownBlock.classList.contains('hidden')) {
    dropdownBlock.classList.toggle('hidden');
    dropdownBtn.textContent = btnText;
    dropdownBtn.setAttribute(
      'style',
      'background-image: url(/images/up.svg)'
    );
  } else {
    dropdownBlock.classList.toggle('hidden');
    dropdownBtn.textContent = 'Показать все';
    dropdownBtn.removeAttribute('style');
  }
});

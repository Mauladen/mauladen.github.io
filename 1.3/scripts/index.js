let dropdownBlock = document.querySelectorAll('.brands-list__item--hidden');
let dropdownBtn = document.querySelector('.brands__button');
let windowInnerWidth = document.documentElement.clientWidth;

if (windowInnerWidth < 1016) {
  dropdownBlock[0].classList.toggle('hidden');

  dropdownBtn.addEventListener('click', () => {
    let btnText = 'Скрыть';
    for (let i = 1; i < 3; i++) {
      if (dropdownBlock[i].classList.contains('hidden')) {
        dropdownBlock[i].classList.toggle('hidden');
        dropdownBtn.textContent = btnText;
        dropdownBtn.setAttribute(
          'style',
          'background-image: url(/images/up.svg)'
        );
      } else {
        dropdownBlock[i].classList.toggle('hidden');
        dropdownBtn.textContent = 'Показать все';
        dropdownBtn.removeAttribute('style');
      }
    }
  });
} else {
  dropdownBtn.addEventListener('click', () => {
    let btnText = 'Скрыть';
    for (let i = 0; i < 3; i++) {
      if (dropdownBlock[i].classList.contains('hidden')) {
        dropdownBlock[i].classList.toggle('hidden');
        dropdownBtn.textContent = btnText;
        dropdownBtn.setAttribute(
          'style',
          'background-image: url(/images/up.svg)'
        );
      } else {
        dropdownBlock[i].classList.toggle('hidden');
        dropdownBtn.textContent = 'Показать все';
        dropdownBtn.removeAttribute('style');
      }
    }
  });
}

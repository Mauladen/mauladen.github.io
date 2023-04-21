let dropdownBlock = document.querySelectorAll('.brands-list__item--hidden');
let dropdownBtn = document.querySelector('.brands__button');
let windowInnerWidth = document.documentElement.clientWidth;
let init = false; // Инициализация Swiper

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

function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".brands__cards", {
                slidesPerView: "auto",
                spaceBetween: 16,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

swiperCard();
window.addEventListener("resize", swiperCard);
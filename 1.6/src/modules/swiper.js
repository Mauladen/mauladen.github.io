let init = false; // Инициализация Swiper

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
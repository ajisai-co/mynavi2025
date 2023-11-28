
// swiper jsをつかったスライダーのサンプル
var swiper_thumb = new Swiper(".js-thumbSlide", {
	loop: false,
	spaceBetween: 32,
	slidesPerView: 4,
	speed: 1000,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		769: {
			spaceBetween: 32,
			slidesPerView: 4,
		},
	},
});
var swiper_main = new Swiper(".js-mainSlide", {
	effect: 'fade',
	fadeEffect: {
	  crossFade: true,
	},
	loop: false,
	speed: 1000,
	spaceBetween: 10,
	slidesPerView: 1,
	centeredSlides: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		769: {
			spaceBetween: 20,
			slidesPerView: 1,
			scrollbar: {
			dragSize: '267',
			},
		},
	},
});

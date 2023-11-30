

document.addEventListener('DOMContentLoaded', function () {
	gsap.utils.toArray('.js-parallax').forEach(wrap => {
		const y = wrap.getAttribute('data-y') || -150;
		gsap.to(wrap, {
			y: y,
			scrollTrigger: {
				trigger: wrap,
				start: 'top bottom',
				end: 'bottom center+=100px',
				scrub: 0.8,
			}
		})
	});
	var swiper_thumb = new Swiper(".js-thumbSlide", {
		loop: false,
		spaceBetween: 24,
		slidesPerView: 1,
		speed: 1000,
		breakpoints: {
			769: {
				centeredSlides: false,
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
		thumbs: {
			swiper: swiper_thumb,
		},
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
	swiper_thumb.on('slideChange', function() {
		swiper_main.slideTo(swiper_thumb.activeIndex);
	});
	swiper_main.on('slideChange', function() {
		swiper_thumb.slideTo(swiper_main.activeIndex);
		$('.js-thumbSlide .swiper-slide').removeClass('swiper-slide-active');
		$(swiper_thumb.slides[swiper_main.activeIndex]).addClass('swiper-slide-active');
	});
})
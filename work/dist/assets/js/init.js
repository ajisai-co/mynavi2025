

document.addEventListener('DOMContentLoaded', function () {
	gsap.utils.toArray('.js-fadein').forEach(target => {
		gsap.fromTo(target, {
			opacity: 0,
			ease: "power1.inOut",
			}, {
				opacity: 1,
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: "top bottom",
					end: "center center"
				},
			}
		);
	});
	const follower = document.getElementById('js-follow');
	gsap.to(follower, {
		scrollTrigger: {
			trigger: ".js-follow",
			start: "top 30%",
			end: "bottom bottom",
			endTrigger: "#parent",
			pin: true,
			scrub: true,
			markers: true
		},
	});
	var swiper_thumb = new Swiper(".js-thumbSlide", {
		loop: false,
		spaceBetween: 24,
		slidesPerView: 1,
		speed: 1000,
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
		thumbs: {
			swiper: swiper_thumb,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		on: {
			slideChangeTransitionEnd: function () {
			var delayedElement = document.querySelector('.js-mainSlide .swiper-slide-active');
			gsap.to(delayedElement, { opacity: 1, duration: 1, delay: 0.5 });
			},
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
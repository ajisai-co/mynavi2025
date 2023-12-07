

document.addEventListener('DOMContentLoaded', function () {
	gsap.utils.toArray('.js-popIn').forEach(target => {
		gsap.fromTo(target, .3,{
			opacity: 0,
			translate: -10,
			scale: .8,
			ease: "bounce.out",
			}, {
				opacity: 1,
				translate: 0,
				scale: 1,
				scrollTrigger: {
					trigger: target,
					// scrub: 0,
					start: "top bottom-=50",
					// end: "center center"
				},
			}
		);
	});
	let isMobile = window.matchMedia("(max-width: 768px)");
	if(isMobile.matches) {
		gsap.to(".js-slide-controls-follow", {
			scrollTrigger: {
				trigger: ".js-slide-controls-follow",
				start: "top 24%",
				end: "bottom top",
				endTrigger: ".lastspurt2023-content",
				scrub: true,
				// markers: true,
				toggleClass: {
					targets: ".js-slide-controls-follow",
					className: "-fixed",
				},
			},
			});
	}else {
		gsap.to(".js-slide-controls-follow", {
		scrollTrigger: {
			trigger: ".js-slide-controls-follow",
			start: "top 23%",
			end: "bottom top",
			endTrigger: ".lastspurt2023-content",
			scrub: true,
			// markers: true,
			toggleClass: {
				targets: ".js-slide-controls-follow",
				className: "-fixed",
			},
		},
		});
	}
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
		speed: 500,
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
				// var delayedElement = document.querySelector('.js-mainSlide .swiper-slide-active');
				// gsap.to(delayedElement, { opacity: 1, duration: .7, delay: 0.5 });
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
document.addEventListener("DOMContentLoaded",function(){gsap.utils.toArray(".js-fadein").forEach(e=>{gsap.fromTo(e,{opacity:0,ease:"power1.inOut"},{opacity:1,scrollTrigger:{trigger:e,scrub:1,start:"top bottom",end:"center center"}})});window.matchMedia("(max-width: 768px)").matches?gsap.to(".js-slide-controls-follow",{scrollTrigger:{trigger:".js-slide-controls-follow",start:"top 24%",end:"bottom top",endTrigger:".content",scrub:!0,toggleClass:{targets:".js-slide-controls-follow",className:"-fixed"}}}):gsap.to(".js-slide-controls-follow",{scrollTrigger:{trigger:".js-slide-controls-follow",start:"top 23%",end:"bottom top",endTrigger:".content",scrub:!0,toggleClass:{targets:".js-slide-controls-follow",className:"-fixed"}}});var e=new Swiper(".js-thumbSlide",{loop:!1,spaceBetween:24,slidesPerView:1,speed:1e3,breakpoints:{769:{spaceBetween:32,slidesPerView:4}}}),s=new Swiper(".js-mainSlide",{effect:"fade",fadeEffect:{crossFade:!0},loop:!1,speed:1e3,spaceBetween:10,slidesPerView:1,centeredSlides:!0,thumbs:{swiper:e},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChangeTransitionEnd:function(){var e=document.querySelector(".js-mainSlide .swiper-slide-active");gsap.to(e,{opacity:1,duration:.7,delay:.5})}},breakpoints:{769:{spaceBetween:20,slidesPerView:1,scrollbar:{dragSize:"267"}}}});e.on("slideChange",function(){s.slideTo(e.activeIndex)}),s.on("slideChange",function(){e.slideTo(s.activeIndex),$(".js-thumbSlide .swiper-slide").removeClass("swiper-slide-active"),$(e.slides[s.activeIndex]).addClass("swiper-slide-active")})});
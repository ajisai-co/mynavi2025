document.addEventListener("DOMContentLoaded",function(){gsap.utils.toArray(".js-popIn").forEach(e=>{gsap.fromTo(e,.3,{opacity:0,translate:-10,scale:.8,ease:"bounce.out"},{opacity:1,translate:0,scale:1,scrollTrigger:{trigger:e,start:"top bottom-=50"}})});window.matchMedia("(max-width: 768px)").matches?gsap.to(".js-slide-controls-follow",{scrollTrigger:{trigger:".js-slide-controls-follow",start:"top 24%",end:"bottom top",endTrigger:".lastspurt2023-content",scrub:!0,toggleClass:{targets:".js-slide-controls-follow",className:"-fixed"}}}):gsap.to(".js-slide-controls-follow",{scrollTrigger:{trigger:".js-slide-controls-follow",start:"top 23%",end:"bottom top",endTrigger:".lastspurt2023-content",scrub:!0,toggleClass:{targets:".js-slide-controls-follow",className:"-fixed"}}});var e=new Swiper(".js-thumbSlide",{loop:!1,initialSlide: 2,spaceBetween:24,slidesPerView:1,speed:1e3,breakpoints:{769:{spaceBetween:32,slidesPerView:4}}}),s=new Swiper(".js-mainSlide",{autoHeight: true,centeredSlides: true,initialSlide: 2,effect:"fade",fadeEffect:{crossFade:!0},loop:!1,speed:500,spaceBetween:10,slidesPerView:1,centeredSlides:!0,thumbs:{swiper:e},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChangeTransitionEnd:function(){}},breakpoints:{769:{spaceBetween:20,slidesPerView:1,scrollbar:{dragSize:"267"}}}});e.on("slideChange",function(){s.slideTo(e.activeIndex)}),s.on("slideChange",function(){e.slideTo(s.activeIndex),$(".js-thumbSlide .swiper-slide").removeClass("swiper-slide-active"),$(e.slides[s.activeIndex]).addClass("swiper-slide-active")})});
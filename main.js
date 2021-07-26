
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    speed: 800,
    fadeEffect: {
        crossFade: true,//true
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    //if delete pagination slider_bot_circles will be disable
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button-pre",
    },
});





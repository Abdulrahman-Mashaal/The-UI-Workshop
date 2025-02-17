
const futurefaceNewsSlider = new Swiper('.news', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    navigation: {
        nextEl: ".news__swiper-button-next",
        prevEl: ".news__swiper-button-prev",
    },
    loop: true,
    breakpoints:{
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 32,
        },
        992: {
            slidesPerView: 3.5,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1.2,
        },
        430: {
            slidesPerView: 1.2,
        }

    },
    pagination: {
        el: ".news__swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500
    },

});
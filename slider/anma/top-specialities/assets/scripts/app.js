import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const anmaTopSpecialtiesSlider = new Swiper('.anma-top-specialties', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".anma-top-specialties__swiper-button-next",
        prevEl: ".anma-top-specialties__swiper-button-prev",
      },
    // loop: true,
    breakpoints:{
        470: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        1200: {
            slidesPerView: 4,
        },

    },
    pagination: {
        el: ".anma-top-specialties__swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000
    },

});
const anmaServicesSlider = new Swiper('.services', {
    slidesPerView: 1,
    spaceBetween: 32,
    navigation: {
        nextEl: ".services__swiper-button-next",
        prevEl: ".services__swiper-button-prev",
      },
    // loop: true,
    breakpoints:{
        1200: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        },
        430: {
            slidesPerView: 1,
        }

    },
    pagination: {
        el: ".services__swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000
    },

});
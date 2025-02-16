
const anmaTopSpecialtiesSlider = new Swiper('.specialties', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".specialties__swiper-button-next",
        prevEl: ".specialties__swiper-button-prev",
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
        el: ".specialties__swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 2000
    // },

});
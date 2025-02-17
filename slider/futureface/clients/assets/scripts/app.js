
// FIXME: speed is not working like I expected
const futurefaceOurClientsSlider = new Swiper('.clients', {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 32
        }
    }
});
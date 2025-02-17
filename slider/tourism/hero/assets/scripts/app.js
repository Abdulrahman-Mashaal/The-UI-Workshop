const tourismHeroSlider = new Swiper('.hero', {
    slidesPerView: 1,
    spaceBetween: 0,
    // navigation: {
    //     nextEl: ".hero__swiper-button-next",
    //     prevEl: ".hero__swiper-button-prev",
    //   },
    loop: true,
    breakpoints:{
        // 1200: {
        //     slidesPerView: 4,
        // },
        // 1024: {
        //     slidesPerView: 3,
        // },
        // 992: {
        //     slidesPerView: 2,
        // },
        // 768: {
        //     slidesPerView: 2,
        // },
        // 576: {
        //     slidesPerView: 2,
        // },
        // 430: {
        //     slidesPerView: 1,
        // }

    },
    pagination: {
        el: ".hero__swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
          },
    },
    autoplay: {
        delay: 2000
    },

});
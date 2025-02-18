var slidesCount = 0;
var slidesElements = [];
var isSliding = false;
var isAnimationStarted = false;
var timeOut;

const futurefaceOurServicesSlider = new Swiper('.services', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 250,
    breakpoints: {
      1280: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
    },
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    // },
    navigation: {
      nextEl: '.services__swiper-button-next',
      prevEl: '.services__swiper-button-prev',
    },
    pagination: {
      el: ".services__swiper-pagination",
      clickable: true,
    },
    on: {
      init: function () {
        slidesCount = this.slides.length;
        slidesElements = this.slides;
        
        // Set first slide as active by default
        if (slidesElements.length > 0) {
          slidesElements[0].classList.add('active');
        }

        slidesElements.forEach(function (el) {
          el.addEventListener('mouseenter', function () {
            if (isSliding) return;
            
            // Remove active class from all slides
            slidesElements.forEach(slide => slide.classList.remove('active'));
            
            // Add active class to current slide
            el.classList.add('active');
            // futurefaceOurServicesSlider.autoplay.stop();
          });

          el.addEventListener('mouseleave', function () {
            if (isSliding) return;
            
            // Remove active from current slide
            // el.classList.remove('active');
            
            // Restore active state to first slide
            if (slidesElements.length > 0) {
              // slidesElements[0].classList.add('active');
            }
            
            // futurefaceOurServicesSlider.autoplay.start();
          });
        });
      },
      beforeTransitionStart: function () {
        isSliding = true;
        isAnimationStarted = true;
      },
      transitionEnd: function () {
        isSliding = false;
        isAnimationStarted = false;
      }
    }
});


// Initialize Swiper for tabs
const roboxUsageTabSlider = new Swiper(".usage-tabs", {
    slidesPerView: 7,
    spaceBetween: 5,
    preventClicks: true,
    preventClicksPropagation: false,
    observer: true,
    observeParents: true
  });
  
  // Click event for tab items
  const snbSwiperItems = document.querySelectorAll(".usage-tabs .swiper-wrapper .swiper-slide a");
  snbSwiperItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      snbSwiperItems.forEach(el => el.parentElement.classList.remove("on"));
      const target = item.parentElement;
      target.classList.add("on");
      muCenter(target);
    });
  });
  
  const muCenter = (target) => {
    const snbwrap = document.querySelector(".usage-tabs .swiper-wrapper");
    const box = document.querySelector(".usage-tabs");
    const boxHalf = box.clientWidth / 2;
    const targetPos = target.offsetLeft + target.clientWidth / 2;
    const pos = targetPos - boxHalf;
  
    // Ensure pos is within valid bounds
    const minPos = 0;
    const maxPos = snbwrap.scrollWidth - box.clientWidth;
  
    snbwrap.style.transition = "transform 0.25s";
    snbwrap.style.transform = `translate3d(${Math.min(Math.max(pos, minPos), maxPos) * -1}px, 0, 0)`;
  };
  
  // Initialize Swiper for content
  const roboxUsageSlider = new Swiper(".usage-content", {
    slidesPerView: 1,
    spaceBetween: 32,
    allowTouchMove: true,
    parallax: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
    thumbs: {
      swiper: roboxUsageTabSlider
    }, 
    on: {
      slideChange: function () {
        const target = this.activeIndex;
        snbSwiperItems.forEach(el => el.parentElement.classList.remove("on"));
        snbSwiperItems[target].parentElement.classList.add("on");
        muCenter(snbSwiperItems[target].parentElement);
      }
    }
  });
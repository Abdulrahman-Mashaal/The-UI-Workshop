const varietyMenu = [
  {
    titleAr: 'إدارة الاستراتيجية',
    titleEn: 'Strategy Management ',
  },
  {
    titleAr: 'إدارة المشروعات',
    titleEn: 'Project Management '
  },
  {
    titleAr: 'إدارة المنتجات',
    titleEn: 'Product'
  },
  {
    titleAr: 'إدارة التطوير',
    titleEn: 'Engineering & Development'
  },
  {
    titleAr: 'إدارة التخطيط',
    titleEn: 'Planning '
  },
  {
    titleAr: 'إدارة الاستشارات ',
    titleEn: 'Consulting '
  },
  {
    titleAr: 'الإدارة المالية',
    titleEn: 'Finance'
  }

]

const varietyContentSlider = new Swiper('.usage', {
  slidesPerView: 5,
  loop: true,
  speed: 1500,
  parallax: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.usage__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return ' <li class="whitespace-nowrap ' + className + '"><span class=" variety-title--en">' + varietyMenu[index]?.titleEn + '</span> </li>'
    }
  }
})
const jurySwiper = new window.Swiper('[data-swiper="jury"]', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '[data-swiper="btn-next"]',
    prevEl: '[data-swiper="btn-prev"]',
  },
  init: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      initialSlide: 2,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

export {jurySwiper};

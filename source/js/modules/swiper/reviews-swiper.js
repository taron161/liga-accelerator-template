const reviewsSwiper = new window.Swiper('[data-swiper="reviews"]', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '[data-swiper="review-btn-next"]',
    prevEl: '[data-swiper="review-btn-prev"]',
  },
  init: false,
  slidesPerView: 1,
});

export {reviewsSwiper};

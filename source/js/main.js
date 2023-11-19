import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {playVideo} from './modules/video-play/video-play';
import {onClickSubscriptionButton} from './modules/subscription/subscription';
import {jurySwiper} from './modules/swiper/jury-swiper';
import {reviewsSwiper} from './modules/swiper/reviews-swiper';
import {initAccordions} from './modules/accordion/init-accordion';
import {toggleTabs} from './modules/accordion/accordion-tabs-toggle';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // Video

  playVideo();

  // Subscriptions buttons toggle

  onClickSubscriptionButton();

  // FAQ

  toggleTabs();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();

    // FAQ
    // ---------------------------------

    initAccordions();

    // Jury Swiper
    // ---------------------------------

    jurySwiper.init();

    // Reviews Swiper
    // ---------------------------------

    reviewsSwiper.init();
  });
});

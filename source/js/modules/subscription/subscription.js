const PRICE = {
  month: [5000, 1700, 2700],
  sixMonths: [30000, 10200, 16200],
  year: [60000, 20400, 32400],
};

const subscriptionBtnsWrapper = document.querySelector('[data-subscription="buttons"]');

const priceElements = document.querySelectorAll('[data-subscription="price"]');

const setPrice = (duration) => {
  if (priceElements.length > 0) {
    priceElements.forEach((element) => {
      const index = element.dataset.index;
      element.textContent = PRICE[duration][index];
    });
  }
};

const onClickSubscriptionButton = () => {
  if (subscriptionBtnsWrapper) {
    subscriptionBtnsWrapper.addEventListener('click', (evt) => {
      if (evt.target.closest('button')) {
        evt.preventDefault();
        const key = evt.target.dataset.duration;
        setPrice(key);
        subscriptionBtnsWrapper.querySelector('.is-active').classList.remove('is-active');
        evt.target.classList.add('is-active');
      }
    });
  }
};


export {onClickSubscriptionButton};

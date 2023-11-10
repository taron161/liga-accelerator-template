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

export {subscriptionBtnsWrapper, setPrice};

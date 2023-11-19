import {accordions} from './init-accordion';

const toggleTabs = () => {
  if (document.querySelector('[data-faq="container"]')) {
    const controlBtns = document.querySelectorAll('[data-accordion="tab-btn"]');

    const container = document.querySelector('[data-faq="container"]');

    controlBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tabName = btn.dataset.content;
        const activeTab = container.querySelector('[data-accordion="parent"].is-active');
        const activeBtn = container.querySelector('[data-accordion="tab-btn"].is-active');
        const selectedTab = container.querySelector(`[data-accordion="parent"][data-content="${tabName}"]`);

        accordions.closeAllAccordion(activeTab);
        activeTab.classList.remove('is-active');
        selectedTab.classList.add('is-active');

        activeBtn.classList.remove('is-active');
        btn.classList.add('is-active');
      });
    });
  }
};

export {toggleTabs};

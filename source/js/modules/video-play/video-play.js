const VIDEO = {
  url: 'https://www.youtube.com/embed/9TZXsZItgdw',
  title: 'Бесплатные интерактивные онлайн-курсы',
};

const container = document.querySelector('[data-gym="video"]');
const preview = document.querySelector('[data-video="preview"]');
const playBtn = document.querySelector('[data-video="btn"]');

const showPlayBnt = () => {
  container.classList.add('is-enabled');
};

const createIframe = (parent, {url, title}) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', url + '?autoplay=1');
  iframe.setAttribute('title', title);
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('allowfullscreen', true);
  iframe.setAttribute('allow', 'accelerometer; autoplay');
  parent.append(iframe);
};

const playVideo = () => {
  preview.remove();
  playBtn.remove();
  createIframe(container, VIDEO);
};

export {playVideo, showPlayBnt, playBtn};

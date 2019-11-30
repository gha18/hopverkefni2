export default class Header {
  constructor() {
    this.container = document.querySelector('.header');
    this.url = './lectures.json';
  }

  makeHeader(title, cat, img) {
    const backgrImg = document.createElement('div');
    backgrImg.classList.add('header__img', 'grid__row');
    backgrImg.style.backgroundSize = '100%, 100%';

    if (img) {
      backgrImg.style.background = `url(${img}) no-repeat`;
    } else {
      backgrImg.style.backgroundColor = '#999';
    }

    const protector = document.createElement('div');
    protector.classList.add('protect');

    const header = document.createElement('div');
    header.classList.add('header__content');

    const category = document.createElement('p');
    category.innerHTML = cat.toUpperCase();
    category.classList.add('header__category');

    const headTitle = document.createElement('h1');
    headTitle.innerHTML = title;
    headTitle.classList.add('header__title');

    header.appendChild(category);
    header.appendChild(headTitle);

    backgrImg.appendChild(protector);
    protector.appendChild(header);

    this.container.appendChild(backgrImg);
  }
}

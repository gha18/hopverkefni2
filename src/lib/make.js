//import { createElement } from './helpers';

export function makeBackgrImg(img) {
    const backgrImg = document.createElement("div");
    backgrImg.classList.add('header__img', 'grid__row');

    backgrImg.style.background = `url(${img}) no-repeat`;
    backgrImg.style.backgroundSize = '100%, 100%';

    return backgrImg;
}

export function makeProtector() {
    const protector = document.createElement("div");
    protector.classList.add('protect');

    return protector;
}

export function makeHeaderText(title, cat) {
    var heading = document.createElement('div');
    heading.classList.add('header__content');

    var category = document.createElement('p');
    category.innerHTML = cat;
    category.classList.add('header__category');

    var headTitle = document.createElement('h1');
    headTitle.innerHTML = title;
    headTitle.classList.add('header__title');

    heading.appendChild(category);
    heading.appendChild(headTitle);

    return heading;
}
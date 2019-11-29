import * as make from './make';

export default class Header {
  constructor() {
    this.container = document.querySelector('.header');
    this.url = './lectures.json';
  }

  makeHeader(title, cat, img) {
    const backgrImg = make.makeBackgrImg(img);
    const protector = make.makeProtector();
    const header = make.makeHeaderText(title, cat);

    backgrImg.appendChild(protector);
    protector.appendChild(header);

    this.container.appendChild(backgrImg);
  }
}
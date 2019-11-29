(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  var List =
  /*#__PURE__*/
  function () {
    function List() {
      _classCallCheck(this, List);

      this.container = document.querySelector('.list');
    }

    _createClass(List, [{
      key: "load",
      value: function load() {
        empty(this.container);
      }
    }]);

    return List;
  }();

  //import { createElement } from './helpers';
  function makeBackgrImg(img) {
    var backgrImg = document.createElement("div");
    backgrImg.classList.add('header__img', 'grid__row');
    backgrImg.style.background = "url(".concat(img, ") no-repeat");
    backgrImg.style.backgroundSize = '100%, 100%';
    return backgrImg;
  }
  function makeProtector() {
    var protector = document.createElement("div");
    protector.classList.add('protect');
    return protector;
  }
  function makeHeaderText(title, cat) {
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

  var Header =
  /*#__PURE__*/
  function () {
    function Header() {
      _classCallCheck(this, Header);

      this.container = document.querySelector('.header');
      this.url = './lectures.json';
    }

    _createClass(Header, [{
      key: "makeHeader",
      value: function makeHeader(title, cat, img) {
        var backgrImg = makeBackgrImg(img);
        var protector = makeProtector();
        var header = makeHeaderText(title, cat);
        backgrImg.appendChild(protector);
        protector.appendChild(header);
        this.container.appendChild(backgrImg);
      }
    }]);

    return Header;
  }();

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.querySelector('body');
    var isLecturePage = page.classList.contains('lecture-page');

    if (isLecturePage) ; else {
      var header = new Header();
      header.makeHeader('Fyrirlestrar', 'VEFFORRITUN', './img/header.jpg');
      var list = new List();
      list.load();
    }
  });

}());
//# sourceMappingURL=bundle.js.map

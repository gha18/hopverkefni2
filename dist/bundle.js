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

      this.container = document.querySelector('.lectures');
    }

    _createClass(List, [{
      key: "onClickLecture",
      value: function onClickLecture(e) {
        window.location.href = e.currentTarget.children[0].textContent;
      }
    }, {
      key: "createListItem",
      value: function createListItem(lecture) {
        var url = document.createElement('a');
        url.classList.add('lectures__link');
        url.classList.add('grid__col');
        url.href = "../../fyrirlestur.html?slug=".concat(lecture.slug);

        if (lecture.thumbnail) {
          var thumbnail = document.createElement('img');
          thumbnail.src = "".concat(lecture.thumbnail);
          thumbnail.classList.add('lectures__thumbnail');
          url.appendChild(thumbnail);
        } else {
          var _thumbnail = document.createElement('div');

          _thumbnail.classList.add('lectures__thumbnail--none');

          url.appendChild(_thumbnail);
        }

        var div1 = document.createElement('div');
        div1.classList.add('lectures__bottom');
        var div = document.createElement('div');
        div.classList.add('lectures__text');
        div1.appendChild(div);
        var category = document.createElement('p');
        category.innerHTML = "".concat(lecture.category).toUpperCase();
        category.classList.add('lectures__category');
        div.appendChild(category);
        var title = document.createElement('h2');
        title.innerHTML = "".concat(lecture.title);
        title.classList.add('lectures__title');
        div.appendChild(title);
        url.appendChild(div1);
        return url;
      }
    }, {
      key: "init",
      value: function init(data, filters) {
        var _this = this;

        if (data === null) return;
        if (this.container !== null) empty(this.container);
        var div = document.createElement('div');
        this.container.appendChild(div);
        div.classList.add('grid__row');
        data.lectures.forEach(function (lecture) {
          if (filters.htmlFilter && filters.cssFilter && filters.jsFilter || !filters.htmlFilter && !filters.cssFilter && !filters.jsFilter) {
            div.appendChild(_this.createListItem(lecture));
          } else {
            if (filters.htmlFilter && lecture.category === 'html') div.appendChild(_this.createListItem(lecture));
            if (filters.cssFilter && lecture.category === 'css') div.appendChild(_this.createListItem(lecture));
            if (filters.jsFilter && lecture.category === 'javascript') div.appendChild(_this.createListItem(lecture));
          }
        });
      }
    }, {
      key: "load",
      value: function load(filters) {
        var _this2 = this;

        fetch('../../lectures.json').then(function (responce) {
          return responce.json();
        }).then(function (json) {
          return _this2.init(json, filters);
        });
      }
    }]);

    return List;
  }();

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
        var backgrImg = document.createElement('div');
        backgrImg.classList.add('header__img', 'grid__row');
        backgrImg.style.backgroundSize = '100%, 100%';

        if (img) {
          backgrImg.style.background = "url(".concat(img, ") no-repeat");
          backgrImg.style.backgroundSize = 'cover';
        } else {
          backgrImg.style.backgroundColor = '#999';
        }

        var protector = document.createElement('div');
        protector.classList.add('protect');
        var header = document.createElement('div');
        header.classList.add('header__content');
        var category = document.createElement('p');
        category.innerHTML = cat.toUpperCase();
        category.classList.add('header__category');
        var headTitle = document.createElement('h1');
        headTitle.innerHTML = title;
        headTitle.classList.add('header__title');
        header.appendChild(category);
        header.appendChild(headTitle);
        backgrImg.appendChild(protector);
        protector.appendChild(header);
        this.container.appendChild(backgrImg);
      }
    }]);

    return Header;
  }();

  var Lecture =
  /*#__PURE__*/
  function () {
    function Lecture() {
      _classCallCheck(this, Lecture);

      this.header = new Header();
      this.container = document.querySelector('.lecture');
      this.url = '../lectures.json';
    }

    _createClass(Lecture, [{
      key: "addVideo",
      value: function addVideo(link) {
        var lecture = this.container;
        var video = document.createElement('iframe');
        video.setAttribute('src', link);
        video.setAttribute('frameborder', 0);
        video.setAttribute('allowfullscreen', 0);
        video.classList.add('lecture__video');
        lecture.appendChild(video);
      }
    }, {
      key: "addText",
      value: function addText(content) {
        var text = content.replace(/</g, '&lt');
        var lecture = this.container;
        var cont = document.createElement('div');
        cont.classList.add('lecture__paragraph__container');
        var paragraphs = text.split('\n');

        for (var i = 0; i < paragraphs.length; i += 1) {
          var p = document.createElement('p');
          p.innerHTML = paragraphs[i];
          p.classList.add('lecture__paragraph');
          cont.appendChild(p);
        }

        lecture.appendChild(cont);
      }
    }, {
      key: "addQuote",
      value: function addQuote(content) {
        var lecture = this.container;
        var quoteDiv = document.createElement('div');
        quoteDiv.classList.add('lecture__quote');
        var quote = document.createElement('p');
        quote.innerHTML = content.data;
        quote.classList.add('lecture__quote__text');
        quoteDiv.appendChild(quote);

        if (content.attribute) {
          var att = document.createElement('p');
          att.innerHTML = content.attribute;
          att.classList.add('lecture__quote__attribute');
          quoteDiv.appendChild(att);
        }

        lecture.appendChild(quoteDiv);
      }
    }, {
      key: "addImage",
      value: function addImage(content) {
        var lecture = this.container;
        var imgCont = document.createElement('div');
        imgCont.classList.add('lecture__image__container');
        var img = document.createElement('img');
        img.setAttribute('src', content.data);
        img.classList.add('lecture__image');
        var protector = document.createElement('div');
        protector.classList.add('protect');
        img.appendChild(protector);
        imgCont.appendChild(img);

        if (content.caption) {
          var cap = document.createElement('p');
          cap.innerHTML = content.caption;
          cap.classList.add('lecture__image__caption');
          imgCont.appendChild(cap);
        }

        lecture.appendChild(imgCont);
      }
    }, {
      key: "addHeading",
      value: function addHeading(content) {
        var lecture = this.container;
        var heading = document.createElement('h1');
        heading.innerHTML = content;
        heading.classList.add('lecture__heading');
        lecture.appendChild(heading);
      }
    }, {
      key: "addList",
      value: function addList(content) {
        var lecture = this.container;
        var list = document.createElement('ul');
        list.classList.add('lecture__list');

        for (var i = 0; i < content.length; i += 1) {
          var item = document.createElement('li');
          var text = content[i].replace(/</g, '&lt');
          item.innerHTML = text;
          item.classList.add('lecture__list__item');
          list.appendChild(item);
        }

        lecture.appendChild(list);
      }
    }, {
      key: "addCode",
      value: function addCode(code) {
        var lecture = this.container;
        var xmp = document.createElement('xmp');
        xmp.innerHTML = code;
        xmp.classList.add('lecture__code');
        lecture.appendChild(xmp);
      }
    }, {
      key: "makeContent",
      value: function makeContent(content) {
        for (var i = 0; i < content.length; i += 1) {
          if (content[i].type === 'youtube') {
            this.addVideo(content[i].data);
          } else if (content[i].type === 'text') {
            this.addText(content[i].data);
          } else if (content[i].type === 'quote') {
            this.addQuote(content[i]);
          } else if (content[i].type === 'image') {
            this.addImage(content[i]);
          } else if (content[i].type === 'heading') {
            this.addHeading(content[i].data);
          } else if (content[i].type === 'list') {
            this.addList(content[i].data);
          } else if (content[i].type === 'code') {
            this.addCode(content[i].data);
          }
        }
      }
    }, {
      key: "loadLecture",
      value: function loadLecture(thisSlug) {
        var _this = this;

        return fetch(this.url).then(function (res) {
          if (!res.ok) {
            throw new Error('Gat ekki sótt fyrirlestra');
          }

          return res.json();
        }).then(function (data) {
          var found = data.lectures.find(function (lecture) {
            return lecture.slug === thisSlug;
          });

          if (!found) {
            throw new Error('Fyrirlestur fannst ekki');
          }

          _this.header.makeHeader(found.title, found.category, found.image);

          return found;
        });
      }
    }, {
      key: "load",
      value: function load() {
        var _this2 = this;

        if (this.container !== null) empty(this.container);
        var slug = new URLSearchParams(window.location.search).get('slug');
        this.loadLecture(slug).then(function (data) {
          _this2.makeContent(data.content);
        });
      }
    }]);

    return Lecture;
  }();

  var htmlButton;
  var cssButton;
  var jsButton;
  var filterHtml = false;
  var filterCss = false;
  var filterJS = false;
  var list = new List();
  function currentFilters() {
    return {
      htmlFilter: filterHtml,
      cssFilter: filterCss,
      jsFilter: filterJS
    };
  }

  function FilterHtml() {
    filterHtml = !filterHtml;
    list.load(currentFilters());
    var el = document.querySelector('.button--html');
    if (el) el.classList.toggle('selected');
  }

  function FilterCss() {
    filterCss = !filterCss;
    list.load(currentFilters());
    var el = document.querySelector('.button--css');
    if (el) el.classList.toggle('selected');
  }

  function FilterJS() {
    filterJS = !filterJS;
    list.load(currentFilters());
    var el = document.querySelector('.button--js');
    if (el) el.classList.toggle('selected');
  }

  function filter() {
    htmlButton = document.querySelector('.button--html');
    cssButton = document.querySelector('.button--css');
    jsButton = document.querySelector('.button--js');
    htmlButton.addEventListener('click', FilterHtml);
    cssButton.addEventListener('click', FilterCss);
    jsButton.addEventListener('click', FilterJS);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.querySelector('body');
    var isLecturePage = page.classList.contains('lecture-page');

    if (isLecturePage) {
      var lecture = new Lecture();
      lecture.load();
    } else {
      var header = new Header();
      header.makeHeader('Fyrirlestrar', 'VEFFORRITUN', './img/header.jpg');
      filter();
      var list = new List();
      list.load(currentFilters());
    }
  });

}());
//# sourceMappingURL=bundle.js.map

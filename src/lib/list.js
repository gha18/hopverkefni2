import empty from './helpers';
import { loadSavedLectures } from './storage';

export default class List {
  constructor() {
    this.container = document.querySelector('.lectures');
  }

  onClickLecture(e) {
    window.location.href = e.currentTarget.children[0].textContent;
  }

  createListItem(lecture) {
    const url = document.createElement('a');
    url.classList.add('lectures__link');
    url.classList.add('grid__col');
    url.href = `../../fyrirlestur.html?slug=${lecture.slug}`;

    if (lecture.thumbnail) {
      const thumbnail = document.createElement('img');
      thumbnail.src = `${lecture.thumbnail}`;
      thumbnail.classList.add('lectures__thumbnail');
      url.appendChild(thumbnail);
    } else {
      const thumbnail = document.createElement('div');
      thumbnail.classList.add('lectures__thumbnail--none');
      url.appendChild(thumbnail);
    }

    const div1 = document.createElement('div');
    div1.classList.add('lectures__bottom');

    const div = document.createElement('div');
    div.classList.add('lectures__text');

    div1.appendChild(div);

    const category = document.createElement('p');
    category.innerHTML = `${lecture.category}`.toUpperCase();
    category.classList.add('lectures__category');
    div.appendChild(category);

    const title = document.createElement('h2');
    title.innerHTML = `${lecture.title}`;
    title.classList.add('lectures__title');
    div.appendChild(title);

    url.appendChild(div1);

    const fin = loadSavedLectures();
    if (fin.find(l => l === `${lecture.slug}`)) {
      const checkCont = document.createElement('div');
      checkCont.classList.add('lecture__check__container');
      const check = document.createElement('h1');
      check.classList.add('lecture__check');
      check.innerHTML = '✓';
      checkCont.appendChild(check);
      div1.appendChild(checkCont);
    }

    return url;
  }

  init(data, filters) {
    if (data === null) return;
    if (this.container !== null) empty(this.container);
    const div = document.createElement('div');
    this.container.appendChild(div);
    div.classList.add('grid__row');

    data.lectures.forEach((lecture) => {
      if ((filters.htmlFilter && filters.cssFilter && filters.jsFilter)
        || (!filters.htmlFilter && !filters.cssFilter && !filters.jsFilter)) {
        div.appendChild(this.createListItem(lecture));
      } else {
        if (filters.htmlFilter && lecture.category === 'html') div.appendChild(this.createListItem(lecture));
        if (filters.cssFilter && lecture.category === 'css') div.appendChild(this.createListItem(lecture));
        if (filters.jsFilter && lecture.category === 'javascript') div.appendChild(this.createListItem(lecture));
      }
    });
  }

  load(filters) {
    fetch('../../lectures.json')
      .then(responce => responce.json())
      .then(json => this.init(json, filters));
  }
}

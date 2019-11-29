import List from './list';

let htmlButton;
let cssButton;
let jsButton;

let filterHtml = false;
let filterCss = false;
let filterJS = false;

const list = new List();

function FilterHtml() {
    filterHtml = !filterHtml;
    list.load(currentFilters());
    const el = document.querySelector('.htmlButton');
    if (el) el.classList.toggle('selected');
}

function FilterCss() {
    filterCss = !filterCss;
    list.load(currentFilters());
    const el = document.querySelector('.cssButton');
    if (el) el.classList.toggle('selected');
}

function FilterJS() {
    filterJS = !filterJS;
    list.load(currentFilters());
    const el = document.querySelector('.jsButton');
    if (el) el.classList.toggle('selected');
}

export function currentFilters() {
    return {
      htmlFilter: filterHtml,
      cssFilter: filterCss,
      jsFilter: filterJS,
    };
}

export default function filter() {
    htmlButton = document.querySelector('.button--html');
    cssButton = document.querySelector('.button--css');
    jsButton = document.querySelector('.button--js');
  
    htmlButton.addEventListener('click', filterHtml);
    cssButton.addEventListener('click', filterCss);
    jsButton.addEventListener('click', filterJS);
  }
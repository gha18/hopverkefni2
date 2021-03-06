import List from './list';

let htmlButton;
let cssButton;
let jsButton;

let filterHtml = false;
let filterCss = false;
let filterJS = false;

const list = new List();

export function currentFilters() {
  return {
    htmlFilter: filterHtml,
    cssFilter: filterCss,
    jsFilter: filterJS,
  };
}

function FilterHtml() {
  filterHtml = !filterHtml;
  list.load(currentFilters());
  const el = document.querySelector('.button--html');
  if (el) el.classList.toggle('selected');
}

function FilterCss() {
  filterCss = !filterCss;
  list.load(currentFilters());
  const el = document.querySelector('.button--css');
  if (el) el.classList.toggle('selected');
}

function FilterJS() {
  filterJS = !filterJS;
  list.load(currentFilters());
  const el = document.querySelector('.button--js');
  if (el) el.classList.toggle('selected');
}

export default function filter() {
  htmlButton = document.querySelector('.button--html');
  cssButton = document.querySelector('.button--css');
  jsButton = document.querySelector('.button--js');

  htmlButton.addEventListener('click', FilterHtml);
  cssButton.addEventListener('click', FilterCss);
  jsButton.addEventListener('click', FilterJS);
}

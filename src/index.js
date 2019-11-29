import List from './lib/list';
import Header from './lib/header';
//import Lecture from './lib/lecture';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    //const lecture = new Lecture();
    //lecture.load();
  } else {
    const header = new Header();
    header.makeHeader('Fyrirlestrar', 'VEFFORRITUN', './img/header.jpg');
    const list = new List();
    list.load();
  }
});

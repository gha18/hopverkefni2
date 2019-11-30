import Header from './header';
import empty from './helpers';

export default class Lecture {
  constructor() {
    this.header = new Header();
    this.container = document.querySelector('.lecture');
    this.url = '../lectures.json';
  }

  addVideo(link) {
    const lecture = this.container;
    const video = document.createElement('iframe');
    video.setAttribute('src', link);
    video.setAttribute('frameborder', 0);
    video.setAttribute('allowfullscreen', 0);
    video.classList.add('lecture__video');
    lecture.appendChild(video);
  }

  addText(text) {
    const lecture = this.container;
    const cont = document.createElement('div');
    cont.classList.add('lecture__paragraph__container')
    const paragraphs = text.split('\n');
    for (let i = 0; i < paragraphs.length; i += 1) {
      const p = document.createElement('p');
      p.innerHTML = paragraphs[i];
      p.classList.add('lecture__paragraph');
      cont.appendChild(p);
    }
    lecture.appendChild(cont);
  }

  addQuote(content) {
    const lecture = this.container;
    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('lecture__quote');
    const quote = document.createElement('p');
    quote.innerHTML = content.data;
    quote.classList.add('lecture__quote__text');
    quoteDiv.appendChild(quote);
    if (content.attribute) {
      const att = document.createElement('p');
      att.innerHTML = content.attribute;
      att.classList.add('lecture__quote__attribute');
      quoteDiv.appendChild(att);
    }
    lecture.appendChild(quoteDiv);
  }

  addImage(content) {
    const lecture = this.container;
    const imgCont = document.createElement('div');
    imgCont.classList.add('lecture__image__container');
    const img = document.createElement('img');
    img.setAttribute('src', content.data);
    img.classList.add('lecture__image');
    const protector = document.createElement('div');
    protector.classList.add('protect');
    img.appendChild(protector);
    imgCont.appendChild(img);
    if(content.caption) {
      const cap = document.createElement('p');
      cap.innerHTML = content.caption;
      cap.classList.add('lecture__image__caption')
      imgCont.appendChild(cap);
    } 
    lecture.appendChild(imgCont);
  }

  addHeading(content) {
    const lecture = this.container;
    const heading = document.createElement('h1');
    heading.innerHTML = content;
    heading.classList.add('lecture__heading');
    lecture.appendChild(heading);
  }

  addList(content) {
    const lecture = this.container;
    const list = document.createElement('ul');
    list.classList.add('lecture__list');
    for (let i = 0; i < content.length; i += 1) {
      const item = document.createElement('li');
      item.innerHTML = content[i];
      item.classList.add('lecture__list__item');
      list.appendChild(item);
    }
    lecture.appendChild(list);
  }

  addCode(code) {
    debugger;
    const lecture = this.container;
    const xmp = document.createElement('xmp');
    xmp.innerHTML = code;
    xmp.classList.add('lecture__code');
    lecture.appendChild(xmp);
  }

  makeContent(content) {
    for (let i = 0; i < content.length; i += 1) {
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

  makeLecture(data) {
    const lecture = this.containter;
    //empty(lecture);
    this.makeContent(data.content);
  }

  loadLecture(thisSlug) {
    return fetch(this.url).then((res) => {
        if (!res.ok) {
          throw new Error('Gat ekki sótt fyrirlestra');
        }
        return res.json();
      }).then((data) => {
        const found = data.lectures.find(lecture => lecture.slug === thisSlug);
        if (!found) {
          throw new Error('Fyrirlestur fannst ekki');
        }
        this.header.makeHeader(found.title, found.category, found.image);
        return found;
      });
  }

  load() {
    const slug = new URLSearchParams(window.location.search).get('slug');
    this.loadLecture(slug).then((data) => {
      this.makeLecture(data);
    });
  }
}

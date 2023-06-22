/*
  Project: Blog
  Author: Kader Adetoudji
 */

/* eslint-disable */
import greet from './modules/greeting';
import sticky from './modules/stick';

greet('ok');

// eslint-disable-next-line func-names
window.onscroll = function () {
  sticky();
};

// eslint-disable-next-line no-undef
const app = document.getElementById('root');
const content = document.createElement('div');
content.setAttribute('class', 'o-content');

app.appendChild(content);

var request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/posts?limit=8', true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  const posts = data.posts;
  if (request.status >= 200 && request.status < 400) {
    posts.map((post) => {
      const cardImg = document.createElement('div');
      cardImg.setAttribute('class', 'c-card-img');

      const img = document.createElement('img');
      img.setAttribute('class', 'c-card-img');
      img.src = `https://picsum.photos/id/7${post.id}/500/500`;

      const container = document.createElement('div');
      container.setAttribute('class', 'c-card');

      const card = document.createElement('div');
      card.setAttribute('class', 'c-card-text');

      const h4 = document.createElement('h4');
      h4.setAttribute('class', 'o-title-card');
      h4.textContent = post.title;

      const p = document.createElement('p');
      p.setAttribute('class', 'o-description-card');
      post.body = post.body.substring(0, 300);
      p.textContent = `${post.body}...`;

      content.appendChild(container);
      content.appendChild(cardImg);
      cardImg.appendChild(img);

      container.appendChild(cardImg);
      container.appendChild(card);
      card.appendChild(h4);
      card.appendChild(p);

      content.addEventListener('click', () => {
        location.href = '/post';
      });
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();

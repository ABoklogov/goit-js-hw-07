const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');

const newGallery = images.map(element => {
  return `<li><img class="item" src="${element.url}" alt="${element.alt}" width=250></li>`
});

galleryEl.insertAdjacentHTML('beforeend', newGallery.join(' '));

const image = document.querySelectorAll('.item');
const body = document.querySelector('body');

galleryEl.style.display = 'flex';
galleryEl.style.justifyContent = 'space-evenly';
galleryEl.style.alignItems = 'center';
galleryEl.style.listStyle = 'none';
body.style.backgroundColor = 'teal';
image.forEach(el => el.border = '5px solid #212121');



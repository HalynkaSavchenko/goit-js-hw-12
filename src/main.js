
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// лайтбокс
const lightBox = new SimpleLightbox('.gallery a',
  {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'top',
    showCounter: false,
  });

// Слухач на кнопку
form.addEventListener('submit', onSearch);

// Функція обробки відповіді від сервера, 2 then
function onSearch(event) {
    event.preventDefault();
    gallery.innerHTML = '';
  const query = event.target.elements.search.value.trim();
  if (query.length === 0) {
    return iziToast.error({
      message: 'Please, enter search value',
       fontSize: 'large',
       close: false,
       position: 'topRight',
       messageColor: 'white',
       timeout: 2000,
       backgroundColor: 'red'
    })
    }
  getImages(query)
    .then(data => {
      const markup = createMarkup(data.hits);
      gallery.insertAdjacentHTML('beforeend', markup);
      form.reset();
      lightBox.refresh();
    })
    .catch((error) => {
    return iziToast.error({
      message: 'Oops... something went wrong',
       fontSize: 'large',
       close: false,
       position: 'topRight',
       messageColor: 'white',
       timeout: 2000,
       backgroundColor: 'red'
    })
    })
    
    
        .finally(()=>loader.classList.add('is-hidden'))
    }








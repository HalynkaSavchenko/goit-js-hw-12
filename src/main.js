
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { gallery } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.load-more');
const item = document.querySelector('gallery-item')

let query;
let page = 1;
let limit = 15;


// лайтбокс
const lightBox = new SimpleLightbox('.gallery a',
  {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'top',
    showCounter: false,
  });

  // scroll
function smoothScroll() {
  const itemSize = item.getBoundingClientRect();
    window.scrollBy({
      top: itemSize.height * 2,
      behavior: 'smooth'
    })
  }

  // кінець колекції
function onLastPage(el) {
  const totalPages = Math.ceil(el.totalHits/limit);
  if(page > totalPages){
    btnLoadMore.classList.add('is-hidden');
    iziToast.info({
     message: "We're sorry, but you've reached the end of search results",
     fontSize: 'large',
     close: false,
     position: 'topRight',
     messageColor: 'white',
     timeout: 5000,
     backgroundColor: '#9a75f7'
    })
  }
}
  

// Слухач на форму
form.addEventListener('submit', onSearch);

// Функція обробки відповіді від сервера
async function onSearch(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  query = event.target.elements.search.value.trim();
  if (query.length === 0) {
    btnLoadMore.classList.add('is-hidden')
    return iziToast.error({
      message: 'Please, enter search value',
       fontSize: 'large',
       close: false,
       position: 'topRight',
       messageColor: 'white',
       timeout: 5000,
       backgroundColor: '#9a75f7'
    })
  }
  try{
    const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            fontSize: 'large',
            close: false,
            position: 'topRight',
            messageColor: 'white',
            timeout: 2000,
            backgroundColor: '#9a75f7'
        })
      }
      loader.classList.add('is-hidden');
      createMarkup(data.hits);
      lightBox.refresh();
      btnLoadMore.classList.remove('is-hidden');
      onLastPage(data)

  }  
  catch(error) {
    return iziToast.error({
      message: `'Oops... something went wrong' : ${error}`,
       fontSize: 'large',
       close: false,
       position: 'topRight',
       messageColor: 'white',
       timeout: 5000,
       backgroundColor: '#9a75f7'
    })
    }
}

// сlухач на btnLoadMore
btnLoadMore.addEventListener('click', onLoadMore);

async function onLoadMore() {
  btnLoadMore.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
  page ++;
  const data = await getImages(query, page);
  loader.classList.add('is-hidden');
  createMarkup(data.hits);
  // smoothScroll();
  lightBox.refresh();
  btnLoadMore.classList.remove('is-hidden');
  onLastPage(data)
}

// smoothScroll(); закоментований, бо коли його розкоментовую, то завантажується тільки 2 колекції і все. Не можу знайти, як вирішити проблему. Допоможіть, будь ласка
 








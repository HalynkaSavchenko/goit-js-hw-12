import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';




// ЗАПИТ,  1й then
export function getImages(query) {
    const loader = document.querySelector('.loader');
    loader.classList.remove('is-hidden');
    const KEY = '42503060-b2c3bebb5268fd59c195d07ac';
    const BASE_URL = 'https://pixabay.com/api/';
    const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    });
    return fetch(`${BASE_URL}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
            throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            if (data.hits.length === 0) {
                return iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    fontSize: 'large',
                    close: false,
                    position: 'topRight',
                    messageColor: 'white',
                    timeout: 2000,
                    backgroundColor: 'red'
            })
            }
            return data
    })
}

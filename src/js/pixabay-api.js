import axios from "axios";


// ЗАПИТ axios
export async function getImages(query, page) {
    const loader = document.querySelector('.loader');
    loader.classList.remove('is-hidden');
    const KEY = '42503060-b2c3bebb5268fd59c195d07ac';
    const BASE_URL = 'https://pixabay.com/api/';
    const searchParams = new URLSearchParams({
    key: KEY,
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page
    });
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
        return response.data
}


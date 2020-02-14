const API_TOKEN = 'e3d6d0c8a8237b066b3812710243828d';

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
    
  }
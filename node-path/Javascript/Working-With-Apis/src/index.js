const img = document.querySelector('img');
const searchBtn = document.querySelector('button');
const key = atob('QlF2djBUT2ZTeWJSWG1ndjJObmk5bkc0a0lQU3BnTnU=');

const fetchJSON = async (url) => {
  const res = await fetch(url, { mode: 'cors' });
  return res.json();
};

const getGIF = async () => {
  const res = await fetchJSON(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=goat`);
  const imgUrl = res.data.images.original.url;
  img.src = imgUrl;
};

getGIF();
const handleSearchClick = async function (evt) {
  evt.preventDefault();
  const searchTerm = this.parentElement.querySelector('input').value;
  if (searchTerm.length < 1) return alert('come on bro');

  const res = await fetchJSON(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}`);
  const imgUrl = res.data.images.original.url;
  img.src = imgUrl;
};

searchBtn.addEventListener('click', handleSearchClick);

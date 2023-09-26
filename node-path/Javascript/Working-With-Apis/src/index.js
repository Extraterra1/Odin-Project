const img = document.querySelector('img');
const searchBtn = document.querySelector('button');
const key = atob('QlF2djBUT2ZTeWJSWG1ndjJObmk5bkc0a0lQU3BnTnU=');

fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=goat`, { mode: 'cors' })
  .then((res) => res.json())
  .then((res) => {
    const imgUrl = res.data.images.original.url;
    img.src = imgUrl;
  });

searchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  const searchTerm = this.parentElement.querySelector('input').value;
  if (searchTerm.length < 1) return alert('come on bro');

  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${searchTerm}`, { mode: 'cors' })
    .then((res) => res.json())
    .then((res) => {
      const imgUrl = res.data.images.original.url;
      img.src = imgUrl;
    });
});

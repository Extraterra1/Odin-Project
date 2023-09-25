const getImgNumber = () => {
  const img = document.querySelector('.image img.visible');
  const imgNumber = img.src
    .split('/')
    .at(-1)
    .replace(/[^0-9]+/g, '');

  return { imgNumber: parseInt(imgNumber), img };
};

const handleDotClick = function (evt) {
  const parent = [...this.parentNode.children];
  const newImgNumber = parent.findIndex((e) => e === this) + 1;

  const { img } = getImgNumber();
  img.classList.toggle('visible');

  const newImage = document.querySelector(`img[src='./img/img${newImgNumber}.jpg']`);
  newImage.classList.toggle('visible');

  setActiveDot(newImgNumber);
  clearTimeout(timeout);
  timeout = setTimeout(nextImage, 5000);
};

const setActiveDot = (buttonNumber) => {
  const currentButton = document.querySelector(`ion-icon[name='ellipse']`);
  currentButton.name = 'ellipse-outline';

  const newButton = document.querySelector(`.dots-container ion-icon:nth-child(${buttonNumber})`);
  newButton.name = 'ellipse';
};

const nextImage = () => {
  let { imgNumber, img } = getImgNumber();
  if (imgNumber > 3) imgNumber = 0;
  img.classList.toggle('visible');
  const newImage = document.querySelector(`img[src='./img/img${imgNumber + 1}.jpg']`);
  newImage.classList.toggle('visible');
  setActiveDot(++imgNumber);
  timeout = setTimeout(nextImage, 5000);
};

const changeImage = function (evt) {
  const next = this.name.includes('forward');
  let { imgNumber, img } = getImgNumber();

  if (next) {
    if (++imgNumber > 4) imgNumber = 1;
    img.classList.toggle('visible');
    const newImage = document.querySelector(`img[src='./img/img${imgNumber}.jpg']`);
    newImage.classList.toggle('visible');
  }
  if (!next) {
    if (--imgNumber < 1) imgNumber = 4;
    img.classList.toggle('visible');
    const newImage = document.querySelector(`img[src='./img/img${imgNumber}.jpg']`);
    newImage.classList.toggle('visible');
  }
  setActiveDot(imgNumber);
  clearTimeout(timeout);
  timeout = setTimeout(nextImage, 5000);
};

const forwardButton = document.querySelector('ion-icon:nth-child(2)');
const backButton = document.querySelector('ion-icon:first-child');

[forwardButton, backButton].forEach((e) => {
  e.addEventListener('click', changeImage);
});

const imgDots = document.querySelectorAll('.dots-container ion-icon');
imgDots.forEach((e) => e.addEventListener('click', handleDotClick));

let timeout = setTimeout(nextImage, 5000);

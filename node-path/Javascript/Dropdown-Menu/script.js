const toggleVisible = function (ev) {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('visible');
};

const button = document.querySelector('.btn-new');
button.addEventListener('mouseenter', toggleVisible);
button.addEventListener('mouseleave', toggleVisible);

const form = document.querySelector('form');

const checkEmail = () => {
  const email = document.querySelector('#email');

  if (email.value.length < 23) return showError(email, 'Too Short, needs to be 23 chars long');

  email.setCustomValidity('');
  const previousError = email.parentNode.querySelector('span');
  if (previousError) previousError.remove();
};

const showError = (el, error) => {
  el.setCustomValidity(error);
  const errMsg = document.createElement('span');
  errMsg.textContent = error;
  const previousError = el.parentNode.querySelector('span');
  if (previousError) previousError.remove();
  el.parentNode.insertBefore(errMsg, el.nextSibling);
};

form.addEventListener('submit', (evt) => {
  checkEmail();
  evt.preventDefault();
});

const form = document.querySelector('form');

const checkEmail = () => {
  const email = document.querySelector('#email');

  if (email.value.length < 23) return showError(email, 'Too Short, needs to be 23 chars long');

  email.setCustomValidity('');
  const previousError = email.parentNode.querySelector('span');
  if (previousError) previousError.remove();
};

const checkZip = () => {
  const zip = document.querySelector('#zip');
  if (zip.value.length !== 4) return showError(zip, 'Zip Code must be 4 digits long');

  zip.setCustomValidity('');
  const previousError = zip.parentNode.querySelector('span');
  if (previousError) previousError.remove();
};

const checkPass = () => {
  const pass = document.querySelector('#pass');
  const confirmPass = document.querySelector('#confirmPass');

  if (pass.value !== confirmPass.value) {
    showError(pass, 'Passwords must match');
    return showError(confirmPass, 'Passwords must match');
  }

  [pass, confirmPass].forEach((e) => {
    e.setCustomValidity('');
    const previousError = e.parentNode.querySelector('span');
    if (previousError) previousError.remove();
  });
};

const showError = (el, error) => {
  el.setCustomValidity(error);
  const errMsg = document.createElement('span');
  errMsg.textContent = error;
  const previousError = el.parentNode.querySelector('span');
  if (previousError) previousError.remove();
  el.parentNode.insertBefore(errMsg, el.nextSibling);
};

const validate = function (evt) {
  if (this.name === 'email') return checkEmail();
  if (this.name === 'zip') return checkZip();
  if (this.name.includes('ass')) return checkPass();
};

document.querySelectorAll('input').forEach((e) => e.addEventListener('blur', validate));

form.addEventListener('submit', (evt) => {
  checkEmail();
  evt.preventDefault();
});

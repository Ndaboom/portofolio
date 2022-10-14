/** Mobile & Desktop form validation */
const mobileForm = document.querySelector('#mobile_form');
const mEmail = document.getElementById('mEmail');
const validationM = document.getElementById('memail_validation');

const desktopForm = document.querySelector('#desktop_form');
const dEmail = document.getElementById('dEmail');
const validationD = document.getElementById('demail_validation');

const EMAIL_INVALID = 'Please enter a correct email address format';

function validateForm() {
  if (mEmail.value === mEmail.value.toLowerCase()) {
    mobileForm.submit();
    mobileForm.reset();
  } else {
    validationM.inner = EMAIL_INVALID;
  }
}

function desktopValidateForm() {
  if (dEmail.value === dEmail.value.toLowerCase()) {
    desktopForm.submit();
    desktopForm.reset();
  } else {
    validationD.inner = EMAIL_INVALID;
  }
}

mobileForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

desktopForm.addEventListener('submit', (e) => {
  e.preventDefault();
  desktopValidateForm();
});
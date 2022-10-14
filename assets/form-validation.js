/** Mobile & Desktop form validation */
const mobile_form = document.querySelector('#mobile_form');
const mEmail = document.getElementById('mEmail');
const validationM = document.getElementById('memail_validation');

const desktop_form = document.querySelector('#desktop_form');
const dEmail = document.getElementById('dEmail');
const validationD = document.getElementById('demail_validation');

const EMAIL_INVALID = "Please enter a correct email address format";

function validateForm(){
    if (mEmail.value === mEmail.value.toLowerCase()) {
    mobile_form.submit();
    mobile_form.reset();
    } else {
    validationM.innerHTML = EMAIL_INVALID;
    }
}

function desktopValidateForm(){
    if (dEmail.value === dEmail.value.toLowerCase()) {
    desktop_form.submit();
    desktop_form.reset();
    } else {
    validationD.innerHTML = EMAIL_INVALID;
    }
}

mobile_form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

desktop_form.addEventListener('submit', (e) => {
    e.preventDefault();
    desktopValidateForm();
});
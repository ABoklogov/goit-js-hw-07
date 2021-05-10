const inputEl = document.querySelector('#validation-input');
inputEl.style.outline = 'none';

inputEl.addEventListener('blur', validation);

function validation(event) {
    if (event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

const inputEl = document.querySelector('#validation-input');
inputEl.style.outline = 'none';

inputEl.addEventListener('blur', validation);

function validation(event) {
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
};

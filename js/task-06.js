const inputEl = document.querySelector('#validation-input');
inputEl.style.outline = 'none';

inputEl.addEventListener('input', validation);

function validation(event) {
    if (event.currentTarget.value.length > 0) {
        inputEl.classList.add('invalid');
    };
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    };
};

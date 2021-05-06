const nameInInputEl = document.querySelector('#name-input');
const nameInSpanEl = document.querySelector('#name-output');

nameInInputEl.addEventListener('input', nameInSpan);

function nameInSpan(event) {
    nameInSpanEl.textContent = event.currentTarget.value;
};
const countainerEl = document.querySelector('#countainer');
const decrementEl = countainerEl.querySelector('[data-action="decrement"]');
const incrementEl = countainerEl.querySelector('[data-action="increment"]');
const totalEl = countainerEl.querySelector('#value');

let counterValue = 0;

decrementEl.addEventListener('click', decrement);
incrementEl.addEventListener('click', increment);

function increment() {
    counterValue += 1;
    totalEl.textContent = counterValue;
};

function decrement() {
    counterValue -= 1;
    totalEl.textContent = counterValue;
};

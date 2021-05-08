const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-action="render"');
const btnClearEl = document.querySelector('[data-action="destroy"');
const boxEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);

function createBoxes(amount) {
    amount = inputEl.value;
   
    boxEl.style.display = 'flex';
    boxEl.style.flexWrap = 'wrap';
    let sizeBox = 20;

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement("div");
        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        sizeBox += 10;

        boxEl.appendChild(box);
        box.style.width = `${sizeBox}px`;
        box.style.height = `${sizeBox}px`;
        box.style.margin = '10px';
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };

    btnClearEl.addEventListener('click', destroyBoxes);

    const boxes = boxEl.querySelectorAll('div');

    function destroyBoxes() {
        boxes.forEach(element => element.remove())
    };
};


     
       
    
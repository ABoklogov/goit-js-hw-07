const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-action="render"');
const btnClearEl = document.querySelector('[data-action="destroy"');
const boxEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
let sizeBox = 20;

function createBoxes(amount) {
    amount = inputEl.value;

    boxEl.style.display = 'flex';
    boxEl.style.flexWrap = 'wrap';
    
    Array.from(Array(Number(amount)).keys())
        .forEach(el => {
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
            box.setAttribute('data-sizeBox', `${sizeBox}`);
        }
        );

    if (boxEl.children.length !== 0) {
        sizeBox = Number(boxEl.lastElementChild.getAttribute('data-sizeBox'));
    } 

    btnClearEl.addEventListener('click', destroyBoxes);

    const boxes = boxEl.querySelectorAll('div');
    
    function destroyBoxes() {
        boxes.forEach(element => element.remove())
        sizeBox = 20;
    };
};





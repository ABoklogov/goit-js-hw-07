const categoriesEl = document.querySelectorAll('.item')

console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(element =>
    console.log(`Категория: ${element.childNodes[1].textContent}
Количество элементов: ${element.lastElementChild.children.length}`)
);


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');
const newIngredients = document.createElement('ul');

ingredients.forEach(element =>
   newIngredients.appendChild(document.createElement('li')).textContent = element
);

ingredientsEl.replaceWith(newIngredients);
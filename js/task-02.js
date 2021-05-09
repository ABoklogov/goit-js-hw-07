const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const newIngredients = ingredients.map(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  return ingredient;
})

ingredientsEl.append(...newIngredients);
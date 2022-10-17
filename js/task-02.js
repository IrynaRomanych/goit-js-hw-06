const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const list = document.querySelector('#ingredients');

const newItems = [];

for (let i = 0; i < ingredients.length; i += 1) {
    const ingredient = ingredients[i];
    const ingredientsTag = document.createElement('li');
    ingredientsTag.classList.add('item');
    ingredientsTag.textContent = ingredient;
    newItems.push(ingredientsTag);
}
list.append(...newItems);

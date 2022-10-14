const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const ingredientsTag = document.createElement("li");

ingredientsTag.classList.add("items");

const newItems = ingredients
  .map((ingredient) => `<li class="items">${ingredient}</li>`)
  .join("");
list.innerHTML = newItems;

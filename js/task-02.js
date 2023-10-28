const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

const createListItem = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
list.innerHTML = createListItem;

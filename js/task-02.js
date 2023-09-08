const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

const createListItem = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  list.appendChild(listItem);
});

//Приклад з відеоматеріалу
// const colorPickerContainerEl = document.querySelector(".js-color-picker");

// // const elements = colorPickerOptions.map((option) => {
// //   const buttonEl = document.createElement("button");
// //   buttonEl.type = "button";
// //   buttonEl.classList.add("color-picker__options");
// //   buttonEl.textContent = option.label;
// //   buttonEl.style.backgroundColor = option.color;

// //   return buttonEl;
// // });

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

const createListItem = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");
list.innerHTML = createListItem;

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

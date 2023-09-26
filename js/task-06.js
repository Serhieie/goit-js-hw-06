// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
const passInput = document.querySelector("#validation-input");
const passLength = Math.round(passInput.getAttribute("data-length"));
const validation = () => {
  if (passInput.value.length === passLength) {
    passInput.setAttribute("class", "valid");
  }
  if (passInput.value.length !== passLength) {
    passInput.setAttribute("class", "invalid");
  }
  if (passInput.value === "") {
    return passInput.removeAttribute("class");
  }
};

passInput.addEventListener("blur", validation);

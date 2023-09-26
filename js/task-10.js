// Завдання 10 (виконувати не обов'язково)

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  objectInMultiply: document.querySelector("#boxes"),
};

refs.objectInMultiply.style.display = "flex";
refs.objectInMultiply.style.flexWrap = "wrap";
refs.objectInMultiply.style.gap = "5px";

let boxSize = 30;
const step = 10;
const boxes = [];

refs.input.addEventListener("input", () => {
  const value = parseInt(refs.input.value, 10);
  if (isNaN(value) || value < 1) {
    refs.input.value = 1;
  } else if (value > 100) {
    refs.input.value = 100;
  }
});

const createObjects = () => {
  for (let i = 1; i <= refs.input.value; i += 1) {
    const box = document.createElement("div");
    box.style.marginTop = `20px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    boxes.push(box);
    boxSize += step;
  }
  refs.objectInMultiply.append(...boxes);
};

const destroyer = () => {
  refs.objectInMultiply.innerHTML = "";
  window.location.reload();
};

refs.btnCreate.addEventListener("click", createObjects);
refs.btnDestroy.addEventListener("click", destroyer);

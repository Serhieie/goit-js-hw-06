function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

const changeColor = () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanColor.textContent = `${document.body.style.backgroundColor}`;
};

changeColorBtn.addEventListener("click", changeColor);

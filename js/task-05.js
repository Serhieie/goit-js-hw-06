const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const spanAnonymousContent = () => {
  span.textContent = input.value;
  if (input.value === "") {
    return (span.textContent = "Anonymous");
  }
};

input.addEventListener("input", spanAnonymousContent);

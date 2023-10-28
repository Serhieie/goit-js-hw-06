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

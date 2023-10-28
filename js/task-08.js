const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = event.target.elements;

  const formDataObj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  !formDataObj[email.name] || !formDataObj[password.name]
    ? alert("Please fill in the email field. All fields should be filled.")
    : console.log(formDataObj);

  form.reset();
  return formDataObj;
});

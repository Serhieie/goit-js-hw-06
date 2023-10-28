const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formDataObj = {
    email: event.target.elements.email.value,
    password: event.target.elements.email.value,
  };

  if (!formDataObj.email) {
    return alert("Please fill in the email field. All fields should be filled.");
  }
  if (!formDataObj.password) {
    return alert("Please fill in the password field. All fields should be filled.");
  }
  console.log(formDataObj);
  form.reset();
  return formDataObj;
});

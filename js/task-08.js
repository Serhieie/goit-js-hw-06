// Завдання 8
// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//  Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// const form = document.querySelector(".login-form");
// const formEmail = form.querySelector('[name="email"]');
// const formPassword = form.querySelector('[name="password"]');

// const showAlert = () => {
//   if (!formEmail.value) {
//     return alert("Please fill in the email field. All fields should be filled.");
//   }
//   if (!formPassword.value) {
//     return alert("Please fill in the password field. All fields should be filled.");
//   }
// };

// const savedObj = () => {
//   const user = {
//     userEmail: formEmail.value,
//     userPassword: formPassword.value,
//   };
//   console.log(user);
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   showAlert()
//   savedObj();
//   form.reset()
// });

//Через Елементс
//Цей Варіант не відправляє форму після аллерту//Цей Варіант не відправляє форму після аллерту//Цей Варіант не відправляє форму після аллерту
//Цей Варіант не відправляє форму після аллерту//Цей Варіант не відправляє форму після аллерту//Цей Варіант не відправляє форму після аллерту
//Цей Варіант не відправляє форму після аллерту//Цей Варіант не відправляє форму після аллерту//Цей Варіант не відправляє форму після аллерту

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formDataObj = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };

  if (!formDataObj.email) {
    return alert("Please fill in the email field. All fields should be filled.");
  }
  if (!formDataObj.password) {
    return alert("Please fill in the password field. All fields should be filled.");
  }

  const formData = new FormData(event.currentTarget);

  console.log(formDataObj);
  form.reset();
  return formData;
});

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((li) => {
  const categoriesTitle = li.querySelector("h2");
  console.log(`Category: ${categoriesTitle.textContent}`);
  const categoriesList = li.querySelector("ul");
  const categoriesListEl = categoriesList.querySelectorAll("li");
  console.log(`Elements: ${categoriesListEl.length}`);
});

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulLi = document.getElementById("ingredients");
const foodIngrediants = ingredients.map((element) => {
  let newLi = document.createElement("li");
  newLi.innerHTML = element;
  return newLi;
});
ulLi.append(...foodIngrediants);
console.log(foodIngrediants);

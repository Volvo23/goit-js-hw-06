const changeColor = document.querySelector(".change-color");
const bodyType = document.querySelector("body");
const spanType = document.querySelector(".color");
changeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyType.style.background = color;
  spanType.textContent = color;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

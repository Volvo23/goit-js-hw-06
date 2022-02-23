let count;
const boxRefs = {
  div: document.getElementById("boxes"),
  input: document.querySelector('[type="number"]'),
  renderButton: document.querySelector('button[data-action="render"]'),
  destroyButton: document.querySelector('button[data-action="destroy"]'),
};
boxRefs.input.addEventListener("change", (event) => {
  count = event.target.value;
  return count;
});
boxRefs.renderButton.addEventListener("click", (event) => {
  createBox(count);
});
boxRefs.destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
function createBox(amount = 6) {
  let size = 30;
  let colorBox = document.createElement("div");
  colorBox.style.width = size + "px";
  colorBox.style.height = size + "px";
  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    let colorBox = document.createElement("div");
    colorBox.style.width = size + "px";
    colorBox.style.height = size + "px";
    let color = createRgb();
    colorBox.style.backgroundColor = color;
    boxRefs.div.append(colorBox);
  }
}

function createRgb() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}
function destroyBoxes() {
  boxRefs.div.innerHTML = "";
  boxRefs.input.value = "";
}

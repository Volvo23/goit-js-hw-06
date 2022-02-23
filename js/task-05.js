let inputName = document.getElementById("name-input");
//console.log(inputName);
let outputName = document.getElementById("name-output");
//console.log(outputName);

inputName.addEventListener("input", (event) => {
  //event.target.value === '' ? (outputName.textContent = 'Инкогнито') : (outputName.textContent = event.target.value)
  outputName.textContent = event.target.value;
  if (event.target.value === "") {
    outputName.textContent = "Инкогнито";
  }
});

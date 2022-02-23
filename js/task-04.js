let counterValue = 0;
let value = document.getElementById("value");

console.log(value);

let btnIncrement = document.querySelector('[data-action="increment"]');

let btnDecrement = document.querySelector('[data-action="decrement"]');

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

btnIncrement.addEventListener("click", increment);

btnDecrement.addEventListener("click", decrement);

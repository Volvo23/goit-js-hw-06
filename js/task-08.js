const formNode = document.querySelector(".login-form");
formNode.addEventListener("submit", submitFn);
function submitFn(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}

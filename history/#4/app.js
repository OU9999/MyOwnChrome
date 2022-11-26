const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  const userName = loginInput.value;

  event.preventDefault();
  console.log(userName);
}
function handleLink(event) {
  event.preventDefault();
  console.log(event);
}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);

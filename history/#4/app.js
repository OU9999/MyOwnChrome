const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function btnClick() {
  const userName = loginInput.value;
  console.log(userName);
  if (userName === "") {
    alert("write your name");
  } else if (userName.length > 15) {
    alert("your name is too long");
  }
}
loginButton.addEventListener("click", btnClick);

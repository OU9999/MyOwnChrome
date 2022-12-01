//html
const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector(".greeting");
const ask = document.querySelector(".name-ask");
const toDoFormm = document.querySelector(".todo-form");
const toDoListt = document.querySelector(".todo-list");

//string
const CLASSNAME_HIDDEN = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.toggle(CLASSNAME_HIDDEN);
  localStorage.setItem(KEY_USERNAME, userName);
  paintGreetings();
}

function paintGreetings() {
  const userName = localStorage.getItem(KEY_USERNAME);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.toggle(CLASSNAME_HIDDEN);
  ask.classList.toggle(CLASSNAME_HIDDEN);
  toDoFormm.classList.toggle(CLASSNAME_HIDDEN);
  toDoListt.classList.toggle(CLASSNAME_HIDDEN);
}

const savedUserName = localStorage.getItem(KEY_USERNAME);

if (savedUserName === null) {
  loginForm.classList.toggle(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}

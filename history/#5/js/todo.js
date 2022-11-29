const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");

const toDos = [];

const KEY_TODOS = "todos";

function saveToDos() {
  localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function toDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);
const savedToDos = localStorage.getItem(KEY_TODOS);

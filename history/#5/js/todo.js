const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];

const KEY_TODOS = "todos";

function saveToDos() {
  localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}

function sayHello(item) {
  console.log("This is turn of", item);
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveToDos();
}
function paintToDo(object) {
  const li = document.createElement("li");
  li.id = object.id;
  const span = document.createElement("span");
  span.innerText = object.text;
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
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);
const savedToDos = localStorage.getItem(KEY_TODOS);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const title = document.querySelector(".title");
/**안녕 */
function clickEvent() {
<<<<<<< HEAD
  title.classList.toggle("title__active");
=======
  title.innerText = "You Clicked!";
}

<<<<<<< Updated upstream
function mouseEnterEvent() {
  title.style.color = "red";
}
function mouseLeaveEvent() {
  title.style.color = "blue";
=======
if (isNaN(age) || age < 0) {
  console.log("it's not num");
} else if (age < 18) {
  console.log("you're too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink!");
} else if (age >= 51 && age <= 80) {
  console.log("stop it!");
} else if (age === 100) {
  console.log("wow");
} else if (age > 80) {
  console.log("oldman");
>>>>>>> Stashed changes
>>>>>>> 43d0faed4f353d6aa1d9564bd3c80b986744a62a
}

title.addEventListener("click", clickEvent);

const title = document.querySelector(".hello .title");
/**안녕 */
function clickEvent() {
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
}

title.addEventListener("click", clickEvent);
title.addEventListener("mouseenter", mouseEnterEvent);
title.addEventListener("mouseleave", mouseLeaveEvent);

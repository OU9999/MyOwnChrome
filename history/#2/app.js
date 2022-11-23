const title = document.querySelector(".hello .title");
/**안녕 */
function clickEvent() {
  title.innerText = "You Clicked!";
}

function mouseEnterEvent() {
  title.style.color = "red";
}
function mouseLeaveEvent() {
  title.style.color = "blue";
}

title.addEventListener("click", clickEvent);
title.addEventListener("mouseenter", mouseEnterEvent);
title.addEventListener("mouseleave", mouseLeaveEvent);

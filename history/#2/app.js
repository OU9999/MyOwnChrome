const title = document.querySelector(".title");
/**안녕 */
function clickEvent() {
  title.classList.toggle("title__active");
}

title.addEventListener("click", clickEvent);

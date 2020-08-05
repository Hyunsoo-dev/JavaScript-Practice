const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("#title");
const superEventHandler = {
  mouseover: title.addEventListener("mouseover", function () {
    title.style.color = "#1abc9c";
    title.innerHTML = "The mouse is here!";
  }),
  mouseout: title.addEventListener("mouseout", function () {
    title.style.color = "#3498db";
    title.innerHTML = "The mouse is gone!";
  }),
  resize: window.addEventListener("resize", function () {
    title.innerHTML = "The just resized";
  }),
  contextmenu: window.addEventListener("contextmenu", function () {
    title.innerHTML = "That was a right click ";
  }),
};

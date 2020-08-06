const title = document.querySelector("body");

const CLICKED_CLASS1 = "clicked1";
const CLICKED_CLASS2 = "clicked2";
const CLICKED_CLASS3 = "clicked3";

function handleClick() {
  const width = window.innerWidth;
  if (width > 600) {
    title.classList.add(CLICKED_CLASS1);
    title.classList.remove(CLICKED_CLASS2);
    title.classList.remove(CLICKED_CLASS3);
  } else if (600 >= width && width > 400) {
    title.classList.add(CLICKED_CLASS2);
    title.classList.remove(CLICKED_CLASS1);
    title.classList.remove(CLICKED_CLASS3);
  } else {
    title.classList.add(CLICKED_CLASS3);
    title.classList.remove(CLICKED_CLASS2);
    title.classList.remove(CLICKED_CLASS1);
  }

  //title.classList.toggle(CLICKED_CLASS);
}

function init() {
  window.addEventListener("resize", handleClick);
}
init();

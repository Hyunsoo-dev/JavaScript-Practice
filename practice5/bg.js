const body = document.querySelector("body");

function paintImage() {
  const image = new Image();
  image.src = `../practice2/img/4.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function init() {
  paintImage();
}
init();

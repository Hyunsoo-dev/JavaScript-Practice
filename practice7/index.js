let display = document.querySelector(".display");

function add(char) {
  display.value = display.value + char;
}

function calculator() {
  let result = eval(display.value);
  display.value = result;
}
function reset() {
  display.value = "";
}

const input = document.querySelector("input");
const print_value = document.querySelector(".print_value");
const h4 = document.createElement("h4");
const btn = document.querySelector(".playBtn");
const inputValue = document.querySelector(".inputValue");
const result = document.querySelector(".result");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
let setNum = 0;
function setRandomNum(e) {
  setNum = parseInt(e.target.value);
  //console.log(setNum);

  h4.innerHTML = `Generate a number between 0 and ${setNum}`;

  print_value.append(h4);
  //getRandomNum(setNum);
}

//컴퓨터가 랜덤값 가져오기
let RandomNum = 0;
function getRandomNum(setNum) {
  RandomNum = Math.floor(Math.random() * (setNum + 1));
  //console.log(RandomNum);
  return RandomNum;
}

//클라어트가 값 입력하고 play 버튼 눌렀을 때
function calculator() {
  RandomNum = getRandomNum(setNum);
  const clientValue = parseInt(inputValue.value);
  //console.log(RandomNum);
  if (clientValue === RandomNum) {
    result2.innerText = `You choose : ${clientValue}, the machine choose : ${RandomNum}`;
    result3.innerText = "you Won!";
  } else {
    result2.innerText = `You choose : ${clientValue}, the machine choose : ${RandomNum}`;
    result3.innerText = "you Lost!";
  }
}

function defaultGetNumber() {
  h4.innerText = "Generate a number between 0 and ?";
  print_value.append(h4);
}

function init() {
  defaultGetNumber();
  input.addEventListener("mousemove", setRandomNum);
  btn.addEventListener("click", calculator);
}
init();

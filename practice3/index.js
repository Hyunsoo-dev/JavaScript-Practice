const print = document.querySelector(".print");

const seconds = 1;
const minutes = seconds * 60;
const hours = minutes * 60;
const dates = hours * 24;

function calculator() {
  const christmas = new Date(2020, 11, 24, 00, 00, 00).getTime();
  const currentTime = new Date().getTime();

  const period = (christmas - currentTime) / 1000; //s 로 변환

  const periodDate = Math.floor(period / dates); //일 수
  const periodHour = Math.floor((period % dates) / hours); //시간
  const periodMinute = Math.floor(((period % dates) % hours) / minutes);
  const periodSecond = Math.floor(((period % dates) % hours) % minutes);

  print.innerText = `${
    periodDate < 100 && periodDate > 10
      ? `0${periodDate}`
      : periodDate < 10
      ? `00${periodDate}`
      : periodDate
  }일 ${periodHour < 10 ? `0${periodHour}` : periodHour}시 ${
    periodMinute < 10 ? `0${periodMinute}` : periodMinute
  }분 ${periodSecond < 10 ? `0${periodSecond}` : periodSecond}초`;
}

function init() {
  setInterval(calculator, 1000);
}
init();

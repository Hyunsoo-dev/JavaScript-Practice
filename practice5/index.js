const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  pending = document.querySelector(".pending"),
  finished = document.querySelector(".finished");

const PENDING_LS = "Pending";
const FINISHED_LS = "Finished";

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pending.removeChild(li);
  const cleanPending = pendingList.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  pendingList = cleanPending;
  savePendingList();
}
function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finished.removeChild(li);
  const cleanFinished = finishedList.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  finishedList = cleanFinished;
  saveFinishedList();
}
//
//
//
// Pending 목록에 추가하는 메서드
let pendingList = [];
let result = [];
function savePendingList() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingList));
}

function addPendingList(text) {
  const li = document.createElement("li");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");
  const newId = pendingList.length + 1;
  btn1.innerHTML = "삭제";
  btn2.innerHTML = "완료";
  li.id = newId;
  li.append(btn1, btn2, text);
  pending.appendChild(li);
  const pendingObj = {
    text: text,
    id: newId,
  };
  pendingList.push(pendingObj);
  savePendingList();
  btn1.addEventListener("click", deletePending);
  btn2.addEventListener("click", editFinishedList);
  btn2.addEventListener("click", deletePending);
}

let finishedList = [];

function editFinishedList(event) {
  const pendingBtn = event.target;
  const pendingIi = pendingBtn.parentNode;
  const finishedId = pendingIi.id;

  ////////////////////////////////
  const a = localStorage.getItem(PENDING_LS);
  const b = JSON.parse(a);
  const moveToDo = b.filter(function (todo) {
    return todo.id === parseInt(finishedId);
  });

  moveToDo.forEach(function (toDo) {
    finishedList.push(toDo);
  });
  saveFinishedList();
  console.log(moveToDo);

  console.log(finishedList);
  moveToDo.forEach(function (todo) {
    addFinishedList(todo);
  });

  ////////////////////////////////////////
}

function addFinishedList(moveToDo) {
  let text = moveToDo.text;
  let newId = moveToDo.id;

  const li = document.createElement("li");
  const btn1 = document.createElement("button");
  const btn2 = document.createElement("button");

  console.log(finishedList);
  btn1.innerHTML = "삭제";
  btn2.innerHTML = "보류";
  li.id = newId;
  //   moveToDo2.forEach(function (toDo) {
  //     li.append(btn1, btn2, text);
  //   });
  btn1.addEventListener("click", deleteFinished);
  btn2.addEventListener("click", editPendingList);
  btn2.addEventListener("click", deleteFinished);

  li.append(btn1, btn2, text);
  finished.appendChild(li);
}

function saveFinishedList() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedList));
}

function editPendingList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const pendingId = li.id;
  const a = localStorage.getItem(FINISHED_LS);
  const b = JSON.parse(a);
  console.log(b);
  const moveToDo = b.filter(function (todo) {
    return todo.id === parseInt(pendingId);
  });
  console.log(moveToDo);
  moveToDo.forEach(function (todo) {
    addPendingList(todo.text);
  });
}
//
//
// List 작성 후 enter 키 눌렀을 때
//
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  addPendingList(currentValue);
  input.value = "";
}

function getFinishedList() {
  const loadedValue = localStorage.getItem(FINISHED_LS);
  const parseValue = JSON.parse(loadedValue);
  if (parseValue !== null) {
    parseValue.forEach(function (todo) {
      addFinishedList(todo);
    });
  }
}
//새로고침 했을 때 LS 에 저장된 값을 가져온다.
function getPendingList() {
  const loadedValue = localStorage.getItem(PENDING_LS);
  const parsedValue = JSON.parse(loadedValue);
  if (parsedValue !== null) {
    parsedValue.forEach(function (todo) {
      addPendingList(todo.text);
    });
  }
}
function init() {
  getPendingList();
  getFinishedList();
  form.addEventListener("submit", handleSubmit);
}

init();

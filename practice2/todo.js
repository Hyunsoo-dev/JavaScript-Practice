const toDoForm = document.querySelector(".js_toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js_toDoForm");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  li.append(delBtn, text);
  li.id = newId;
  toDoList.append(li);
  const toDosObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDosObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(function (todo) {
      paintToDo(todo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();

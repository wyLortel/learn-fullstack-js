const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoUl   = document.getElementById("todo-list");


//할일 담는 배열
let todos = [];

//로컬스토리지에 저장
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


//로컬 스토리지에서 가져오가
function fetchTodos() {
  todos = JSON.parse(localStorage.getItem("todos") || "[]");
}


//add 버튼 누르면 실행할 함수
function addTodo() {
  if (todoInput.value.trim() === "") {
    alert("할 일을 입력해주세요");
    return;
  }
  const todo = {
    id: Date.now(),           
    text: todoInput.value,
    completed: false,
  };
  todos.push(todo);
  saveTodos();
  todoInput.value = "";
  renderTodos();
}


todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});


//x누르면 실행할 함수
function removeTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
  renderTodos();
}


function toggleCompleted(id) {
  const todo = todos.find(t => t.id === id);
  todo.completed = !todo.completed;
  saveTodos();
  renderTodos();
}


function renderTodoItem(todo) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => toggleCompleted(todo.id));

  const span = document.createElement("span");
  span.innerText = todo.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";
  deleteBtn.addEventListener("click", () => removeTodo(todo.id));
  
  span.className = "todo-text";
  deleteBtn.className = "deletBtn"


  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  todoUl.appendChild(li);
}


function renderTodos() {
  todoUl.innerHTML = "";
  todos.forEach(renderTodoItem);
}


fetchTodos();
renderTodos();

//타이머
const appendSeconds = document.getElementById("seconds");
const appendTens = document.getElementById("tens")
const timerPlay = document.getElementById("start")
const timerStop = document.getElementById("stop")
const timerReset = document.getElementById("reset")


let second = 0;
let tens = 0;
let interval;



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

document.addEventListener('DOMContentLoaded', () => {
  const secondsEl = document.getElementById('seconds');
  const play  = document.getElementById('play');
  const stop  = document.getElementById('stop');
  const reset = document.getElementById('reset');


  let seconds = 0;
  let timerId = null;

  const pad2 = n => String(n).padStart(2, '0');
  const tick = () => {
    seconds++;
    secondsEl.textContent = pad2(seconds);
  };

  const start = (e) => {
    if (timerId) return;           
    timerId = setInterval(tick, 1000);  
  };
  const pause = (e) => {

    if (!timerId) return;
    clearInterval(timerId);
    timerId = null;
  };
  const resetAll = (e) => {

    pause();
    seconds = 0;
    secondsEl.textContent = '00';
  };

  play.addEventListener('click', start);
  stop.addEventListener('click', pause);
  reset.addEventListener('click', resetAll);
});


//날짜

const now = new Date();

const monthAbbr = now.toLocaleString("en-US", { month: "short" });

const today = {
  date: now.getDate(),
  month: monthAbbr,
  day: now.toLocaleString()
};


const monthEl = document.querySelector(".date-circle h3");
monthEl.textContent = today.month;


const dateEl = document.querySelector(".date-circle p");
dateEl.textContent = today.date;




const toDoForm = document.querySelector("#todo-form");
const toDoInput =  toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event){
    const li = event.target.closest("li");
    if(li) {
        li.remove();
        toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
         // 3) 로컬스토리지 반영
        saveToDos();
    }
}



function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button")
    button.innerText = "x"
    button.addEventListener("click" , deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}


function handleToDosubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push( newTodoObj);
    paintToDo( newTodoObj);
    saveToDos(); 
}



toDoForm.addEventListener("submit" , handleToDosubmit)


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



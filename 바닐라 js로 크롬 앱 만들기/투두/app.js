const list = document.getElementById("list");
const creatBtn = document.getElementById("create-btn");



let todos = [];

creatBtn.addEventListener("click" , creatNewTodo);



function creatNewTodo() {
    const item = {
        id : new Date().getTime(),
        text : "",
        complete : false,
    }

    //배열 처음에 새 요소 추가 
    todos.unshift(item);

    //요소 생성
    const {itemEl , inputEl , editBtnEl , removeBtnEl} = createTodoElement(item);

    list.prepend(itemEl)

    inputEl.removeAttribute('disabled')
    inputEl.focus();
    saveToLocalStorage();
}


function createTodoElement(item){
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    const checkboxEl = document.createElement("input");
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;

    if(item.complete){
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'input';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled','');

    const actionEl = document.createElement("div");
    actionEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerText = 'edit';


    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons' , 'remove-btn');
    removeBtnEl.innerText = 'remove';


    inputEl.addEventListener('input' , ()=>{
        item.text = inputEl.value;
    })


    removeBtnEl.addEventListener('click', ()=>{
        todos = todos.filter(t => t.id !== item.id)
        itemEl.remove();
    })

    checkboxEl.addEventListener('change', ()=>{
        item.complete = checkboxEl.checked;

        if(item.complete){
            itemEl.classList.add("complete");
        } else{
            itemEl.classList.remove('complete');
        }
        saveToLocalStorage()
    })

    inputEl.addEventListener('blur' , ()=>{
        inputEl.setAttribute('disabled','')
    })

    editBtnEl.addEventListener('click',()=>{
        inputEl.removeAttribute('disabled','')
        inputEl.focus();
    })

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionEl)

    return{itemEl , inputEl , editBtnEl , removeBtnEl};

}


function saveToLocalStorage(){
    const data = JSON.stringify(todos);
    localStorage.setItem("my_todos", data);
}

function loadFromLocalStorage(){
    const data = localStorage.getItem(my_todos)  ;

    if(data){
        todos = JSON.parse(data);
    }
}





function displayToDos(){
    loadFromLocalStorage();

        for(let i = 0; i < todos.length; i++){
            const item = todos[i];
            const{itemEl} = createTodoElement(item);

            list.append(itemEl);
        }
}

displayToDos();
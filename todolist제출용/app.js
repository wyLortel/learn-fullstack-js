

  const addBtn = document.querySelector("#add_btn");
  const listBoxes = document.querySelector("#todo-lists");
  const localkey = "my_todos"

  let todos = [];


  addBtn.addEventListener("click", () => {
    const item = {
      id: Date.now(),
      text: "",
    };


    const { inputEl } = paint(item);
    todos.push(item);

    inputEl.removeAttribute('disabled')

    inputEl.focus();

    inputEl.addEventListener('blur' , ()=> {
    inputEl.setAttribute('disabled','')

    setLocalStorage();
})
    
  });


  function paint(item) {
    const list = document.createElement("div");
    list.classList.add("todo-lists__todobox");

    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    list.append(checkboxEl);

    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.classList.add("todobox-input");
    inputEl.value = item.text;
    inputEl.setAttribute('disabled','')
    list.append(inputEl);

    const btnBox = document.createElement("div");
    btnBox.classList.add("action");

    const editBtn = document.createElement("button");
    editBtn.innerText = "수정";
   

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "삭제";


    btnBox.append(editBtn, removeBtn);
    list.append(btnBox);

    listBoxes.append(list);

    editBtn.addEventListener("click" , ()=>{
      inputEl.removeAttribute('disabled','')
      inputEl.focus();
      setLocalStorage();
    })

    removeBtn.addEventListener("click" , ()=>{
      todos = todos.filter(t => t.id !== item.id)
      list.remove();
      setLocalStorage();
    })

    inputEl.addEventListener("input" , ()=>{
      item.text = inputEl.value;
    })

    return {inputEl , list , removeBtn , editBtn};

  }




  function setLocalStorage(){
    const data = JSON.stringify(todos);
    localStorage.setItem(localkey, data); 
  }


  function getLocalStorage(){
    const data = localStorage.getItem(localkey);
    if(data){
      todos = JSON.parse(data);
    }

    for(let i = 0; i < todos.length; i++){
      const item = todos[i];
      const{list} = paint(item);
      listBoxes.append(list);
    }
  }

  getLocalStorage();



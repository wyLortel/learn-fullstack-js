const addBtn = document.querySelector("#add_btn")
const listBoxes = document.querySelector("#todo-lists")



toDos = []

addBtn.addEventListener("click", () => {
  const item = {
    id: new Date().getTime(),
    text: "",
  };

  const list = document.createElement("div");
  list.classList.add("todo-lists__todobox");

 
  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  list.append(checkboxEl);

 
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.classList.add("todobox-input");
  inputEl.value = item.text;
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
});

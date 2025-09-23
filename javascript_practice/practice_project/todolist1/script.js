const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn"); // creatBtn → createBtn로 통일

// ✅ id는 문자열/숫자여야 함
let todos = [];

createBtn.addEventListener("click", createNewTodo);

function createNewTodo() {
  // 1) 새로운 아이템 객체 생성
  const item = {
    id: Date.now(), // 고유값
    text: "",
    complete: false,
  };

  // 2) 배열 앞에 추가
  todos.unshift(item);

  // 3) DOM 요소 생성 (여기서 요소들을 받아야 함!)
  const { itemEl, inputEl, editBtnEl, removeBtn, checkboxEl } = createTodoElement(item);

  // 4) 리스트 최상단에 삽입
  list.prepend(itemEl);

  // 5) 방금 만든 항목을 즉시 편집 가능하게
  inputEl.removeAttribute("disabled");
  inputEl.focus();

  // 6) 이벤트 연결 (실무 감각 추가)
  // 체크박스: 완료 토글
  checkboxEl.addEventListener("change", () => {
    item.complete = checkboxEl.checked;
    itemEl.classList.toggle("complete", item.complete);
  });

  // 편집 버튼: disable 토글
  editBtnEl.addEventListener("click", () => {
    const isDisabled = inputEl.hasAttribute("disabled");
    if (isDisabled) {
      inputEl.removeAttribute("disabled");
      inputEl.focus();
    } else {
      inputEl.setAttribute("disabled", "");
      item.text = inputEl.value; // 상태 반영
    }
  });

  // 삭제 버튼
  removeBtn.addEventListener("click", () => {
    // 상태에서 제거
    todos = todos.filter(t => t.id !== item.id);
    // DOM에서 제거
    itemEl.remove();
  });
}

function createTodoElement(item) {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");
  if (item.complete) itemEl.classList.add("complete");

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.checked = item.complete;

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = item.text;
  inputEl.setAttribute("disabled", "");

  const actionsEl = document.createElement("div");
  actionsEl.classList.add("actions"); // action → actions(관례)

  const editBtnEl = document.createElement("button");
  editBtnEl.classList.add("material-icons");
  editBtnEl.innerText = "edit";

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("material-icons", "remove-btn");
  removeBtn.innerText = "remove_circle"; // remove_circles → remove_circle

  actionsEl.append(editBtnEl, removeBtn);

  itemEl.append(checkboxEl, inputEl, actionsEl);

  // ✅ 여기서 반환한 걸 createNewTodo에서 구조 분해해야 함!
  return { itemEl, inputEl, editBtnEl, removeBtn, checkboxEl };
}

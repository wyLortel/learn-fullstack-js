const list = document.querySelector("#list");
const creatBtn = document.querySelector("#create-btn");


//할일을 담아둘 그릇 추가 삭제 모두 이 배열에 
let todos = [];


//button.onclick 이것도 가능은 하나 이건 함수 하나만 저장 가능  
creatBtn.addEventListener("click",createNewTodo)

//객체를 만들어 넣어줘야함 
function createNewTodo(){
 //새로운 아이템 객체 생성 객체로 만들고 배열에 담으면 삭제 추가가 편함
    const item = {
        id : new Date().getTime(), //각각 투두 항목을 구분하기 위한 고유 번호  이함수는 현재 시간 을 찍은것
        text: "", //투두 내용을 담을 자리
        complete:false, //일을 끝냇는지 체크 용 
    }
    
    //배열 맨 앞에 요소 추가
    todos.unshift(item);

    //요소 생성
    const {itemEl , inputEl , editBtnEl , removeBtnEl} = createTodoElemet(item);
    
    // prepend() = 부모 요소의 첫 번째 자식으로 새 요소를 추가.
    // append()는 맨 마지막에 붙이는데, prepend()는 맨 앞에 붙임
    list.prepend(itemEl)


    //버튼 누르면 입력창에 걸어놨던 비활성화(disabled) 상태를 해제.
    // 이제 사용자가 글자를 수정할 수 있음.
    inputEl.removeAttribute("disabled");

    //커서를 바로 해당 입력창 안에 깜빡이게하고 사용자가 즉시 타이핑 가능하도록 함.
    inputEl.focus();
}



function createTodoElemet(item){
    //디브 요소 생성
    const itemEl =  document.createElement("div");
    //생성한 div 클래스는 item
    itemEl.classList.add("item")

    //div안에 넣을 인풋요소 생성
    const checkboxEl = document.createElement("input");
    //checkbox의 속성을 checkbox로 설정
    checkboxEl.type = "checkbox";

    //체크 되잇는건지 확인하기 위한 if문
    if(item.complete) {
        //이미 체크 되잇으면 컴플릿 클래스 추가 
        itemEl.classList.add("complete");
    }

    //할일을 적을 인풋 추가 
    const inputEl = document.createElement("input");
    inputEl.type = "text";
    //사용자가 입력하는 공간은 innerText가 아닌 value  item객체에서 작성한 텍스트가 밸류가 되는것
    inputEl.value = item.text;

    //setAttribute(name, value) → HTML 속성을 추가/수정하는 메서드 
    //disabled는 입력창이 회색으로 비활성화 돼서 수정 불가 됨
    //이건 불리언 속성이라 값이 중요하지않고 속성이 잇냐 없냐가 중요 그래서 대부분 값은 비어씀 
    inputEl.setAttribute("disabled","");

    //버튼을 담을 div
    const actionsEl = document.createElement("div");
    actionsEl.classList.add("actions")

    //수정 버튼 태그 생성후 meterial-icons클래스 붙이고 안에 텍스트를 edit
    const editBtnEl = document.createElement("button");
    editBtnEl.classList.add("meterial-icons");
    editBtnEl.innerText = "edit"


    //수정태그랑 똑같이 삭제 버튼 태그 생성후 클래스 붙이고 안에 텍스트 넣음
    const removeBtnEl = document.createElement("button");
    removeBtnEl.classList.add("meterial-icons" , "remove-btn");
    removeBtnEl.innerText = "remove_circles"

    // actionsEl이라는 부모 dom에 자식요소를 추가 맨 마지막 자식으로 들어가는듯
    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);


    // itemEl이라는 부모 dom에 자식요소를 추가 맨 마지막 자식으로 들어가는듯
    itemEl.append(checkboxEl);
    itemEl.append(inputEl);

    //액션 디브 를 아이템디브에 넣어줌
    itemEl.append(actionsEl);

    //반환을 안하면 함수안에서 만든 dom요소는 이 함수 스코프에서만 쓸수잇어서 결국 위에 함수에서도 사용하기 위해
    //반환할게 여러개니 {}사용
    return{itemEl , inputEl ,editBtnEl ,removeBtnEl }

}




//할 일 목록을 담는 배열
let tasks = [];



const addTask = ()=> {
    const taskInput = document.querySelector("#taskInput");
    const text = taskInput.value.trim(); // 사용자가 입력한 텍스트 가져옴


    //만약 텍스트가 값이 존재하면 배열 끝에 데이터 추가  completed는 완료 여부
    if (text) {
        tasks.push({text : text , completed : false});
        updateTaskList();
    }
};



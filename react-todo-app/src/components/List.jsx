import { useState } from "react";

export default function List({ title, completed, id, toData, setTodoData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
    background: "red",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  // 삭제 함수 타겟 아이디로 삭제할것 구분
  const handleClick = (targetId) => {
    //만약 삭제아이디랑 같지 않으면 그것빼고 배열을 새로 만듬  filter는 배열에서 조건이 true인 요소만 남겨 새로운 배열을  만듬 
    let newTodoData = toData.filter((data) => data.id !== targetId);
    //데이터 갱신 아 맞다 이거 왜 새 배열에 담냐면 그래야 스테이트가 값의 변화를 알기위해 이러면 주소값이 바뀌니까 
    setTodoData(newTodoData);
    //값을 변경햇으니 로컬데이터도 변경 
    localStorage.setItem('toDoData',JSON.stringify(newTodoData))
  };

  // 완료 상태도 나중에 다시 새로고침해도 그 값을 저장하기 위해 
  const handleCompleteChange = (targetId) => {
    //체크박스를 눌럿을때 체크박스를 쪽만 펄스 트루로 변경해줌 
    let newTodoData = toData.map((data) =>
      data.id === targetId ? { ...data, completed: !data.completed } : data
    );
    setTodoData(newTodoData);
    localStorage.setItem('toDoData' , JSON.stringify(newTodoData));
  };

  // 편집 중 input 값 변경
  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  // 편집 완료 (저장)
  const handleSubmit = (e) => {
    e.preventDefault();

    //데이터를 저장하기 위해 데이터를 담아줌  수정이니 같으면 editedTitle쪽만 변경줌 
    const newTodoData = toData.map((data) =>
      data.id === id ? { ...data, title: editedTitle } : data
    );

    setTodoData(newTodoData);
    localStorage.setItem('toDoData' , JSON.stringify(newTodoData))
    //수정모드 종료
    setIsEditing(false);
  };

  if (isEditing) {
    //수정모드를 키면 이것을 나오게 즉 이걸로 리스트쪽을 새로 렌더링 
    return (
      <form style={getStyle(completed)} onSubmit={handleSubmit}>
        <input
          value={editedTitle}
          autoFocus
          onChange={handleEditChange}
        />
        <button
          type="button"
          style={btnStyle}
          onClick={() => setIsEditing(false)}
        >
          취소
        </button>
        <button type="submit" style={btnStyle}>
          Save
        </button>
      </form>
    );
  }

  return (
    <div style={getStyle(completed)}>
      <input
        type="checkbox"
        onChange={() => handleCompleteChange(id)}
        checked={completed}
      />
      {title}
      <button style={btnStyle} onClick={() => handleClick(id)}>
        x
      </button>
      <button style={btnStyle} onClick={() => setIsEditing(true)}>
        edit
      </button>
    </div>
  );
}

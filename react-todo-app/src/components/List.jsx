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

  // 삭제 함수
  const handleClick = (targetId) => {
    let newTodoData = toData.filter((data) => data.id !== targetId);
    setTodoData(newTodoData);
    localStorage.setItem('toDoData',JSON.stringify(newTodoData))
  };

  // 완료 상태 토글
  const handleCompleteChange = (targetId) => {
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

    const newTodoData = toData.map((data) =>
      data.id === id ? { ...data, title: editedTitle } : data
    );

    setTodoData(newTodoData);
    localStorage.setItem('toDoData' , JSON.stringify(newTodoData))
    setIsEditing(false);
  };

  if (isEditing) {
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

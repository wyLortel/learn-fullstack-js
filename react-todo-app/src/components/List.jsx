export default function List({ title, completed, id, toData, setTodoData }) {
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
    console.log("삭제:", targetId);
    let newTodoData = toData.filter((data) => data.id !== targetId);
    setTodoData(newTodoData);
  };

  // 완료 상태 토글
  const handleCompleteChange = (targetId) => {
    let newTodoData = toData.map((data) =>
      data.id === targetId ? { ...data, completed: !data.completed } : data
    );
    setTodoData(newTodoData);
  };

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
    </div>
  );
}

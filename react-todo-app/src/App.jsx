import React, { useState } from "react";
import './App.css';
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {



  // state 정의
  const [toData, setTodoData] = useState([
    { id: 1, title: "공부하기", completed: false },
    { id: 2, title: "운동하기", completed: false },
    { id: 3, title: "코딩하기", completed: false },
  ]);

  const [value, setValue] = useState("");

 

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") return; // 빈 값 방지

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData([...toData, newTodo]);
    setValue("");
  };



  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>

        <Lists
        //부모가 자식에게 데이터 넘겨줄때
          toData={toData}
          setTodoData = {setTodoData}
        />

        <Form
          handleSubmit = {handleSubmit}
          value={value}
          setValue={setValue}
        />
   
      </div>
    </div>
  );
}

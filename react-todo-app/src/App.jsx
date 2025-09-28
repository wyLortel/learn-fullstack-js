import React, { useState } from "react";
import './App.css';
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {

  const initialTodoData = localStorage.getItem("toDoData") ? JSON.parse(localStorage.getItem("toDoData")) : [];
  // state 정의
  const [toData, setTodoData] = useState(initialTodoData);

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
    localStorage.setItem('toDoData' , JSON.stringify([...toData, newTodo]))
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

import React, { useState } from "react";
import './App.css';
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {

  //앱을 처음 켯을때 toDoData 키에서 데이터를 불러롬 만약잇으면 배열형태로 만들어 initialTodoData에 담겨지고 아니면 여기에 빈 배열이 담겨짐 
  const initialTodoData = localStorage.getItem("toDoData") ? JSON.parse(localStorage.getItem("toDoData")) : [];
  
  // state 정의
  //toData가 값의 변수 setTodoData는 값을 변경시키는 함수  initialTodoData는 useState를 사용함으로서 변경 되면 이전값과 비교하여 그 변경을 감지하고 자동으로 헨더링됨
  const [toData, setTodoData] = useState(initialTodoData);

  const [value, setValue] = useState("");

 

  // 폼 제출 처리 버튼을 눌럿을때 작용할 함수인듯 
  //handleSubmit이라는 변수를 만들고 거기에 화살표 함수를 할당한것 자바스크립트에선 함수도 일급객체라 변수에 넣을수잇다 
  const handleSubmit = (e) => {
    //이벤트 객체는 이벤트 타입에 따라 발생하는 이벤트의 각종 정보가 들어잇는 객체집합이라고 생각 즉 이벤트의 정보를 담은 객체 
    //이벤트 객체를 받음 폼은 제출이 될때 즉 submuit일대 제출하면 새로고침이 일어나는데 그걸 막기 위해 preventDefault() 사용 이건 이벤트의 기본 동작을 막음 
    e.preventDefault();

    //민약 밸류가 빈칸이면 바로 함수 종료 
    if (value.trim() === "") return; // 빈 값 방지

    //데이터의 값을 배열에 넣을 todo 세팅
    let newTodo = {
      id: Date.now(), // id는 고유의 값을 가져야한다 그래서 데이터함수 사용
      title: value, //할일 목록은 인풋 밸류에 잇던값으로 
      completed: false, // 나중의 체크박스의 값을 레파지토리에 저장해 적용하기 위해 
    };

    //데이터에 새로운 데이터를 뒤에 추가 첫번째는 전개연산자로 원래잇던값 + 나중값 같은 느낌 
    setTodoData([...toData, newTodo]);
    //로컬 스티리지에 데이터를 갱신 
    localStorage.setItem('toDoData' , JSON.stringify([...toData, newTodo]))
    //밸류를 빈값으로 변경 
    setValue("");
  };

  //여기서 return은 이컴포넌트가 화면에 어던 모양으로 보일지를 리턴  (리액트 내부에서 React.createElement라는 함수 호출로 바뀌어 있음.)
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

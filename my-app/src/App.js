import { useState } from "react";




function App() {
  
  const [toDo,setToDo] = useState("");
  const[toDos , setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => { 
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo , ...currentArray ]); //... 배열을 풀어서 나열하는 문법 신기쓰
    setToDo("") //제출후 초기화?
  }
  
  console.log(toDos);

  return(
   <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} 
        value={toDo} 
        type="text" 
        placeholder="Wtie your to do..">
        </input>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item) => ( 
          <li>{item}</li>
          ))}
      </ul>
   </div>
  );
}

export default App;

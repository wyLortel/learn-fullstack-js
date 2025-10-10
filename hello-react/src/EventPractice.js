import React,{useState}from 'react'

export default function EventPractice() {
    

    const [form , setForm] = useState({
        username: "",
        massage :""
    })
    

    const [message , setMessage] = useState("");

    const handelChange = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value);
    }

    const handleClick = (e) => {
        alert(message);
        setMessage("");
    }




  return (
    <div>
       <h1>이벤트 연습</h1>
       <input
        type='text'
        name='message'
        placeholder='아무거나 입력해 보세요'
        value={message}
        onChange={handelChange}
       >
       </input>
       <button onClick={handleClick}>확인</button>
    </div>
  )
}

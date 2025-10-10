import { useState , useEffect } from 'react';

function Counter() {
  const [number , setNumber] = useState(0);

  const handleClick = ()=> {
    setNumber(prev => prev+1);
    setNumber(prev => prev+1);
  }

  useEffect(()=>{
    console.log("방금 셋넘벌이 실행되어 상태가 바뀜")
    console.log("현재 값" , number)
  },[number]);


  return(
    <div>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </div>
  )

}


export default Counter;

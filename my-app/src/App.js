import { useState , useEffect } from "react";

function App() {
  const [counter , setValue] = useState(0);
  const [keyword , setKeyword ] = useState("")
  const Onclick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the api");
  }, [] );


  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  },[keyword]);

    
  return (
    <div>
      <input onChange={onChange} type="text" value={keyword} placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={Onclick}>click me</button>
      </div>
  );
}

export default App;

import { useState , useEffect } from "react";

function App() {
  const [counter , setValue] = useState(0);
  const Onclick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the api");
  }, [] );
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Onclick}>click me</button>
      </div>
  );
}

export default App;

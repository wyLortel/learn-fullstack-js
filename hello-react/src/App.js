import logo from './logo.svg';
import './App.css';

function App() {
  const name = "리액트";
  return (
    <div
      className='react'
      style={{
        backgroundColor : "black" ,
        color: "aqua",
        fontSize : "48px",
        fontWeight: "bold" ,
        padding: 16,  
      }}
    
    >
      {name}
    </div>
  );
}

export default App;

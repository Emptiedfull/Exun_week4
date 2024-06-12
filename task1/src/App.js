import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [backgroundColor,setBackgroundColor] = useState("biege");
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    return () => {
      document.body.style.backgroundColor = "biege";
    };
  }, [backgroundColor]);


  return (
    <div className="App">
      <h1>Change Background Color</h1>
      <div className='options'>
        <button value="red" onClick={() => setBackgroundColor("red")}>Red</button>
        <button value="green" onClick={() => setBackgroundColor("green")}>Green</button>
      </div>
    </div>
  );
}

export default App;

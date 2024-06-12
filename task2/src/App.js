
import './App.css';
import Task from './task';
import { useState } from 'react';



function App() {
  const [tasks,setTasks] = useState([]);



  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className='Tasks_box'>
        <div className='add_task'>
          <input type="text" placeholder="Add Task" />
          <button onClick={() =>{
            const val = document.querySelector("input").value
            if(val){
              setTasks([...tasks,document.querySelector("input").value])
              document.querySelector("input").value = ""
            }
            
            }}>Add Task</button>
        </div>
        <ul style={{display:"flex" , flexDirection:"column"}}>
          {tasks.map((task,index) => {
            return <Task key={index} Value={task} />
          })}
        </ul>
      </div>
      
     
    </div>
  );
}

export default App;

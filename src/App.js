import {useState, useEffect} from 'react'
//styles
import './App.css';

//components
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import RenderTask from './components/RenderTask';



function App() {
  const [tasks, setTasks]= useState(JSON.parse(localStorage.getItem("tasks")) || [])
  const [updateTask, setUpdateTask]= useState({})

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])


return (
    <div className="app">
      <div className='wrapper'>
      <Navbar/>
     <AddTask 
     tasks={tasks} 
     setTasks={setTasks} 
     updateTask={updateTask} 
     setUpdateTask={setUpdateTask}
     />
     <RenderTask
       tasks={tasks}
        setTasks={setTasks}
         updateTask={updateTask}
          setUpdateTask={setUpdateTask}
          />
      </div>
    
      
    </div>
  );
}
  


export default App;

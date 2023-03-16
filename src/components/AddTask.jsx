import React from 'react'
import './AddTask.css'

export default function AddTask({tasks, setTasks,updateTask,setUpdateTask}) {


  const handleSubmit= (e)=>{
    e.preventDefault()
// update the task
    if(updateTask.id){
      const date = new Date()
      const updated = tasks.map((todo)=>(
        todo.id === updateTask.id ? 
        {id: updateTask.id, name: updateTask.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: todo
        
      ))
      setTasks(updated)
      setUpdateTask({});

    }else{

      //submit task
      const date = new Date();
      const task ={
        id:  date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasks([...tasks, task])
      setUpdateTask({})
    }
   
    
   }
 
  return (
   <section className='add-task'>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name='task' 
      placeholder='Add Task' 
      autoComplete='off'
      value={updateTask.name || ""}
      onChange={(e)=>setUpdateTask({...updateTask, name: e.target.value})}
      />
      <button>{updateTask.id ? "Update": "Add"}</button>
    </form>
   </section>
  )
}

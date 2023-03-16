import React from 'react'
import './RenderTask.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function RenderTask({tasks, setTasks,updateTask,setUpdateTask}) {

  const handleReset = ()=>{
    setTasks([])
  }
  const handleDelete = (id)=>{
    const filTask = tasks.filter((task)=> task.id !==id)
    setTasks(filTask)
  }

  const handleEdit = (id)=>{
    const selectTask = tasks.find((todo)=> todo.id === id)
    setUpdateTask(selectTask)
   
  }
  return (
  <section className='render-task'>
    <div className="head">
      <div>
        <span className='title'>Tasks</span>
        <span className='count'>{tasks.length}</span>
      </div>
      <button className='clear-all' onClick={handleReset}>Remove All</button>
    </div>

    <ul>
      {tasks.map((task)=>(
        <li key={task.id}>
        <p>
          <span className='name'>{task.name}</span>
          <span className='time'> {task.time}</span>
        </p>
        <EditIcon className="edit-icon" onClick={()=>handleEdit(task.id)}/>
        <DeleteIcon className="delete-icon" onClick={()=>handleDelete(task.id)}/>
      </li>
      ))}
      
    </ul>
  </section>
  )
}

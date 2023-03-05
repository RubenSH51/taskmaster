import React, { useState } from 'react'
import "./AddTask.css"

export const AddTask = ({tasks,setTasks}) => {

    const [newTask, setNewTask] = useState("");
    const [taskProgress, setTaskProgress] = useState(false)

    function handleChange(e)
    {
      setNewTask(e.target.value)
    } 

    function handleReset()
    {
      setNewTask('')
      setTaskProgress(false)
    }

    function handleSubmit(e)
    {
      e.preventDefault();
      if (newTask.length<2)
      {

        console.log('No se puede enviar tarea vacía o tan corta');
        return -1
      }
      
      const task = {
        id: Math.floor(Math.random()*10000),
        name: newTask,
        completed: Boolean(taskProgress)
      }
      console.log(task)
      //if (task.id<1000){task.id = '0'+task.id}else{task.id = task.id.toString()}
      task.id = String(task.id).padStart(4, '0'); // Punto para chatGPT
      console.log(task)
      //setTasks([...tasks,task])
      

      setTasks((tasks) => [...tasks, task]);

      handleReset()
      
    }


  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}> 
            {/* <label htmlFor='task'>Task name:</label> */}
            <input id="task" name="task" autoComplete='off'  placeholder='new task' onChange={handleChange} value={newTask}/>
            
            <div>
              <select onChange={(event) => setTaskProgress(event.target.value) } value={taskProgress}>
                <option value={false}>Pending ⌛</option>
                <option value={true}>Completed ✅</option>
              </select>
              <button className="addtaskBTN">Add task ✔</button>
              <button className="reset" type="button" onClick={handleReset}>Reset 🚫</button>
            </div>
        </form>
    </section>
  )
}

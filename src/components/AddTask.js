import React, { useState } from 'react'
import "./AddTask.css"

export const AddTask = ({tasks,setTasks}) => {

    const [newTask, setNewTask] = useState("");
    const [taskProgress, setTaskProgress] = useState(false)

    function handleChange(e)
    {
      //console.log(e.target.value)
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
      const task = {
        id: Math.floor(Math.random()*10000),
        name: newTask,
        completed: Boolean(taskProgress)
      }
      console.log(task)
      setTasks([...tasks,task])
      handleReset()
    }


    function nuevaTarea()
    {
        const valorInput = document.querySelector('.addtask form input').value;
        
    }

  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}> 
            {/* <label htmlFor='task'>Task name:</label> */}
            <input id="task" name="task" autoComplete='off'  placeholder='new task' onChange={handleChange} value={newTask}/>
            
            <select onChange={(event) => setTaskProgress(event.target.value) } value={taskProgress}>
              <option value={false}>Pending</option>
              <option value={true}>Completed</option>
            </select>
            <button>Add task</button>
            <button className="reset" type="button" onClick={handleReset}>Reset</button>
        </form>
    </section>
  )
}

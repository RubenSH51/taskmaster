import React, { useState } from 'react'
import "./AddTask.css"

export const AddTask = ({tasks,setTasks}) => {

    const [newTask, setNewTask] = useState("");
    const [taskProgress, setTaskProgress] = useState('💤')
    const [fecha,setFecha] = useState('')
    const [time,setTime] = useState('')
    // const [isCompleted, setIsCompleted] = useState(false)

    function handleChange(e)
    {
      setNewTask(e.target.value)
      setFecha(() => taskDate())
      setTime(() => taskTime())

    } 

    function handleReset()
    {
      setNewTask('')
      setTaskProgress('💤')
      
    }

    function clearTasks()
    {
      setTasks([])
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
        status: taskProgress,
        date: fecha,
        time: time,
        completed: Boolean(newTask.completed)
      }
      console.log(task)
      //if (task.id<1000){task.id = '0'+task.id}else{task.id = task.id.toString()}
      task.id = String(task.id).padStart(4, '0'); // Punto para chatGPT
      console.log(task)
      //setTasks([...tasks,task])
      

      setTasks((tasks) => [...tasks, task]);

      handleReset()
      
    }

    
    function taskDate()
    {
      let fecha = new Date();
  
      let fechaActual = fecha.getDate().toString().padStart(2,0) + "/" + 
      Number(fecha.getMonth()+1).toString().padStart(2,0)+"/"+fecha.getFullYear()
  
  
      return fechaActual
    }

    function taskTime()
    {
      let fecha = new Date();
      let horaActual = fecha.getHours().toString().padStart(2,0)+":"+
      fecha.getMinutes().toString().padStart(2,0)+":"+fecha.getSeconds().toString().padStart(2,0)
  
      return horaActual
    }


  return (
    <section className="addtask">
        <form onSubmit={handleSubmit}> 
            {/* <label htmlFor='task'>Task name:</label> */}
            <input id="task" name="task" autoComplete='off'  placeholder='new task' onChange={handleChange} value={newTask}/>
            
            <div>
              <select onChange={(event) => setTaskProgress(event.target.value) } value={taskProgress}>
                <option value={'💤'}>Minor 💤</option>
                <option value={'⏰'}>Vital ⏰</option>
                <option value={'🔥'}>Critical 🔥</option>
              </select>
              <button className="addtaskBTN">Add task ✔</button>
              {/* <button className="reset" type="button" onClick={clearTasks}>Clear <span role="img" aria-label="">🧹</span></button> */}
            </div>
        </form>
    </section>
  )
}

import React, { useState } from 'react'
import "./ModalEdit.css"

export const ModalEdit = ({task,isEditing, setIsEditing,tasks,setTasks}) => {

    const [newValue, setNewValue] = useState(task.name)



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

    function updateTask(id)
    {
        
        const newTaskValue   = document.querySelector('#modalEditWindow input').value;
        const newSelectValue = document.querySelector('#modalEditWindow select').value

        if (newTaskValue.length < 2)
        {
            console.log('Too short')
            document.querySelector('#modalEditWindow input').placeholder='Insert a new name or cancel'
            return 
        }

        task.name   = newTaskValue;
        task.status = newSelectValue;
        task.date   = taskDate();
        task.time   = taskTime(); 

        
        setIsEditing(!isEditing);
        const updatedTasks = tasks.filter(task => task.id !== id)
        console.log(updatedTasks)

        let newarray = [...updatedTasks];
        newarray.push({id:id,name:task.name, status: task.status, date: task.date, time: task.time})

        setTasks(newarray)
    }

    const changingValue = (e) => 
    {
      setNewValue(e.target.value)
    }

  return (
    <div id="modalEditBG">
        <div id="modalEditWindow">
            <h2>Task ID: {task.id}</h2>
            <input id="taskToEdit" name="taskToEdit" autoComplete='off' onChange={changingValue} value={newValue}/>
            <select>
                <option value={'💤'}>Minor 💤</option>
                <option value={'⏰'}>Vital ⏰</option>
                <option value={'🔥'}>Critical 🔥</option>
            </select>
            <div className='modalEdit-botonera'>
                <button onClick={() => setIsEditing(!isEditing)}>Cancel <span role="img" aria-label="">⛔</span> </button>
                <button onClick={() => updateTask(task.id)}>Apply <span role="img" aria-label="">✅</span> </button>
            </div>
        </div>
    </div>
  )
}

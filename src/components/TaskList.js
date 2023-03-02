import React from 'react'
import { useState } from "react"; 
import { Card } from "./Card"
import { BoxCard } from './BoxCard';
import { BoxContainer } from './BoxContainer';
import "./tasklist.css"

export const TaskList = ({tasks,setTasks}) => {


  const [show, setShow] = useState(true);

  function deleteTask(id)
  {
    setTasks(tasks.filter(task => id !== task.id))
  }


  return (
    <main>
        <button className="toggleBTN" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        <ul>
          {show && tasks.map((task) => (
            <Card key={ task.id} task={task} deleteTask={deleteTask}/>
          ))}
        </ul>
        <BoxContainer /> 
    </main>
  )
}

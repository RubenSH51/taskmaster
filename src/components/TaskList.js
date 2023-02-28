import React from 'react'
import { useState } from "react"; 
import { Card } from "./Card"
import { BoxCard } from './BoxCard';

export const TaskList = () => {


  const [show, setShow] = useState(true);


  const [tasks, setTasks] = useState([
    {id: 1432,
    name: "Watch class",
    completed: false},
    {id: 2453,
    name: "Become a pro",
    completed: true},
    {id: 3975,
    name: "Make courses",
    completed: false}


  ])

  function deleteTask(id)
  {
    // console.log(id)

    setTasks(tasks.filter(task => id !== task.id))

  }


  return (
    <>
        <button onClick={() => setShow(!show)}>show</button>
        <ul>
          {show && tasks.map((task) => (
            <Card key={ task.name} task={task} deleteTask={deleteTask}/>
          ))}
        </ul>
        <BoxCard result="success">
          <p className="title">Título de prueba</p>
          <p className="description">Descripción de prueba. Como es una descripción</p> 
        </BoxCard> 

        <BoxCard result="warning">
          <p className="title">Título de prueba</p>
          <p className="description">Descripción de prueba. Como es una descripción</p> 
        </BoxCard> 

        <BoxCard result="danger">
          <p className="title">Título de prueba</p>
          <p className="description">Descripción de prueba. Como es una descripción</p> 
        </BoxCard> 
    
    </>
  )
}

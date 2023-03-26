import React from 'react'
import { useState } from "react"; 
import { Card } from "./Card"
//import { BoxCard } from './BoxCard';
//import { BoxContainer } from './BoxContainer';
import "./tasklist.css"

export const TaskList = ({tasks,setTasks, onTaskStatusChange,modalActivado, setModalActivado}) => {

  //const [show, setShow] = useState(true); // setShow nunca se usa, lo que hace que el crear un estado parezca inutil.
  const show = true // Esto lo hago para no borrar el estado ya que quizás lo uso más adelante
  const [tasksFilterOption, setTasksFilterOption] = useState('All');

  function deleteTask(id)
  {
    setTasks(tasks.filter(task => id !== task.id))
  }


  return (
    <main>
        <div className="tasksFilterButtonContainer">
          <div className='tasksFilterButtonContainer-upper'>
            {/* <button className="tasksFilterButton tasksFilterButton-all" onClick={() => setTasksFilterOption('All')}>All</button>
            <button className="tasksFilterButton tasksFilterButton-pending" onClick={() => setTasksFilterOption("Pending")}>Pending</button>
            <button className="tasksFilterButton tasksFilterButton-completed" onClick={() => setTasksFilterOption("Completed")}>Completed</button>
           */}
            <button className={`tasksFilterButton tasksFilterButton-all ${tasksFilterOption==='All'? "filter-selected" : ""}`} onClick={() => setTasksFilterOption('All')}>All ({tasks.length})</button>
            <button className={`tasksFilterButton tasksFilterButton-pending ${tasksFilterOption==='Pending'? "filter-selected" : ""}`} onClick={() => setTasksFilterOption("Pending")}>Pending ({(tasks.filter(task => task.completed === false)).length})</button>
            <button className={`tasksFilterButton tasksFilterButton-completed ${tasksFilterOption==='Completed'? "filter-selected" : ""}`} onClick={() => setTasksFilterOption("Completed")}>Completed ({(tasks.filter(task => task.completed === true)).length})</button>
          
          
          </div>
          <div className='tasksFilterButtonContainer-lower'>
            {/* <button className="toggleBTN" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
            {/* <button className="toggleBTN" onClick={() => setTasks([])}>Clear <span role="img" aria-label="">🧹</span></button> */}
            <button className="toggleBTN" onClick={() => setModalActivado(!modalActivado)}>Clear <span role="img" aria-label="">🧹</span></button>

          </div>
        </div>
        <ul>{show && <span className='taskDisplayingTitle'>Displaying <i>{tasksFilterOption}</i> tasks</span>}
          {/* { show && tasks.map((task) => (
            <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))}  */}
           {
              tasksFilterOption==="Completed" && show && tasks.filter(task => task.completed === true).map((task) => (
              <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))}
          {
              tasksFilterOption==="Pending" && show && tasks.filter(task => task.completed === false).map((task) => (
              <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))}
          {
              tasksFilterOption==="All" && show && tasks.map((task) => (
              <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))} 




        </ul>
        {/* <BoxContainer />  */}
    </main>
  )
}

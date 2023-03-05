import React from 'react'
import { useState } from "react"; 
import { Card } from "./Card"
import { BoxCard } from './BoxCard';
import { BoxContainer } from './BoxContainer';
import "./tasklist.css"

export const TaskList = ({tasks,setTasks, onTaskStatusChange}) => {

  const [show, setShow] = useState(true);
  const [tasksFilterOption, setTasksFilterOption] = useState('All');
  const [isSelected, setIsSelected] = useState(false);

  function deleteTask(id)
  {
    setTasks(tasks.filter(task => id !== task.id))
  }


  
  return (
    <main>
        <div className="tasksFilterButtonContainer">
          <button className="tasksFilterButton tasksFilterButton-all" onClick={() => setTasksFilterOption('All')}>All</button>
          <button className="tasksFilterButton tasksFilterButton-pending" onClick={() => setTasksFilterOption("Pending")}>Pending</button>
          <button className="tasksFilterButton tasksFilterButton-completed" onClick={() => setTasksFilterOption("Completed")}>Completed</button>
          <button className="toggleBTN" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
        <ul>
          {/* {show && tasks.map((task) => (
            <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))} */}
          {
              tasksFilterOption=="Completed" && show && tasks.filter(task => task.completed == true).map((task) => (
              <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))}
          {
              tasksFilterOption=="Pending" && show && tasks.filter(task => task.completed == false).map((task) => (
              <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))}
          {
              tasksFilterOption=="All" && show && tasks.map((task) => (
              <Card key={ task.id} task={task} deleteTask={deleteTask} onTaskStatusChange={onTaskStatusChange}/>
          ))}




        </ul>
        {/* <BoxContainer />  */}
    </main>
  )
}

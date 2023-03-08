import React from "react";
import { useState } from "react";
import styles from "./Card.module.css"

export const Card = (props) => {

  //const [tasks, setTasks] = useState(props.tasks)
  const [task, setTask] = useState(props.task)
  

  function taskStatusChange(id)
  {
    const updatedTask = { ...task, completed: !task.completed };
    setTask(updatedTask);
    console.log(task)
    props.onTaskStatusChange(updatedTask);
    
  }


  return (
    
    <>
        <li className={task.completed ? "completed" : "incomplete "}>
            <div className="li-upper">
              <div>
                <span role="img" aria-label="" className="cardTodoIcon" onClick={() => taskStatusChange(task.id)}>📝 </span>
                <span role="img" aria-label="" className={styles.ganzo}>{task.id} - {props.task.name}</span>
              </div>
              <button className={styles.boton} onClick={() => props.deleteTask(task.id)}>Delete</button>
            </div>
            <div className="li-lower">
              <p className="taskDateTitle">{props.task.date} <span role="img" aria-label="" >➡️</span>  </p>
              <p className="taskTimeTitle">{props.task.time}</p>
            </div>

        </li>
    </>
  )
}

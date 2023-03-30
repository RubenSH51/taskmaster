import React from "react";
import { useState } from "react";
import styles from "./Card.module.css"
import { ModalEdit } from "./ModalEdit";

export const Card = (props) => {

  //const [tasks, setTasks] = useState(props.tasks)
  const [task, setTask] = useState(props.task)
  const [isEditing, setIsEditing] = useState(false);
  

  function taskStatusChange(id)
  {
    const updatedTask = { ...task, completed: !task.completed };
    setTask(updatedTask);
    console.log(task)
    props.onTaskStatusChange(updatedTask);
    
  }

  function editMode(id)
  {
    setIsEditing(true);
    const selectedTask = props.tasks.find(todo => todo.id === id)
    console.log(selectedTask)



  }


  return (
    
    <>
        <li className={task.completed ? "completed" : "incomplete "}>
            <div className="li-upper">
              <div className={task.completed ? "completedAndTachado" : ""}>

                
                <span role="img" aria-label="" className="cardTodoIcon" onClick={() => taskStatusChange(task.id)}>{task.status} </span>
                <span role="img" aria-label="" className={styles.ganzo}>{task.id} - {props.task.name}</span>
              </div>
              {
              task.completed ? 
              <div className='cardButtonsContainer'>
                <button className={styles.boton} id='undoBTN' onClick={() => taskStatusChange(task.id)}>Undo!</button>
                {/* <button className={`${styles.doneBTN} ${styles.boton}`} onClick={() => props.deleteTask(task.id)}>Done!</button>  */}

              </div>
              :
              <div className='cardButtonsContainer'>
                <button className={styles.boton} onClick={() => editMode(task.id)}>Edit</button>
                <button className={styles.boton} onClick={() => taskStatusChange(task.id)}>Complete</button>
                <button className={styles.boton} onClick={() => props.deleteTask(task.id)}>Discard</button>
              </div>
              }


              {/* <button className={styles.boton} onClick={() => props.deleteTask(task.id)}>Delete</button> */}
            </div>
            <div className="li-lower">

              <p className={`taskDateTitle ${task.completed ? "completedAndTachado" : ""}`}>{props.task.date} <span role="img" aria-label="" >💠 </span>  </p>
              <p className={`taskTimeTitle ${task.completed ? "completedAndTachado" : ""}`}>{props.task.time}</p>

              {/* <p className="taskDateTitle">{props.task.date} <span role="img" aria-label="" >💠 </span>  </p>
              <p className="taskTimeTitle">{props.task.time}</p> */}
            </div>

        </li>
        {isEditing && 
          <ModalEdit 
            task={task}
            isEditing={isEditing} 
            setIsEditing={setIsEditing}
            tasks={props.tasks}
            setTasks={props.setTasks}
          />
        }
    </>
  )
}

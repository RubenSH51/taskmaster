
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
            <div>
              <span className="cardTodoIcon" onClick={() => taskStatusChange(task.id)}>📝 </span>
              <span className={styles.ganzo}>{task.id} - {props.task.name}</span>
            </div>
            <button className={styles.boton} onClick={() => props.deleteTask(task.id)}>Delete</button>

        </li>
    </>
  )
}

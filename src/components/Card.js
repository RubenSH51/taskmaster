
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

  const [fecha,setFecha] = useState('')
  function taskDate()
  {
    let fecha = new Date();

    let fechaActual = fecha.getDate().toString().padStart(2,0) + "/" + 
    Number(fecha.getMonth()+1).toString().padStart(2,0)+"/"+fecha.getFullYear()

    let horaActual = fecha.getHours().toString().padStart(2,0)+":"+
    fecha.getMinutes().toString().padStart(2,0)+":"+fecha.getSeconds().toString().padStart(2,0)

    
  }




  return (
    
    <>
        <li className={task.completed ? "completed" : "incomplete "}>
            <div className="li-upper">
              <div>
                <span className="cardTodoIcon" onClick={() => taskStatusChange(task.id)}>📝 </span>
                <span className={styles.ganzo}>{task.id} - {props.task.name}</span>
              </div>
              <button className={styles.boton} onClick={() => props.deleteTask(task.id)}>Delete</button>
            </div>
            <div className="li-lower">
              <p className="taskDateTitle">{props.task.date} ➡️  </p>
              <p className="taskTimeTitle">{props.task.time}</p>
            </div>

        </li>
    </>
  )
}

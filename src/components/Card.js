import styles from "./Card.module.css"

export const Card = (props) => {
  return (
    
    <>
        <li className={props.task.completed ? "completed" : "incomplete "}>
            <span className={styles.ganzo}>{props.task.id} - {props.task.name}</span>
            <button className={styles.boton} onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        </li>
    </>
  )
}

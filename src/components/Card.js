
export const Card = (props) => {
  return (
    
    <>
        <li className={props.task.completed ? "completed" : "incomplete "}>
            <span>{props.task.id} - {props.task.name}</span>
            <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        </li>
    </>
  )
}

 // rafc is the shortcut // Apparently we don't need the first line 
import "./app.css"
import { useState } from "react"; 


export const App = () => {

  const [tasks, setTasks] = useState([
    {id: 1432,
    name: "Watch class",
    completed: false},
    {id: 2453,
    name: "Become a pro",
    completed: false},
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

      <div className="App">
        <h1>Tasks list</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.name}>
              <span>{task.id} - {task.name}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  )
}

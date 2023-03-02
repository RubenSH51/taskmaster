 // rafc is the shortcut // Apparently we don't need the first line 
import "./app.css"
import { useState } from "react"; 
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";



export const App = () => {
  const [tasks, setTasks] = useState([])
  // const [tasks, setTasks] = useState([
  //   {id: 1432,
  //   name: "Watch class",
  //   completed: false},
  //   {id: 2453,
  //   name: "Become a pro",
  //   completed: true},
  //   {id: 3975,
  //   name: "Make courses",
  //   completed: false}
  // ])



  return (

      <div className="App">
        <Header />
        <AddTask  tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
        <Footer />
      </div>
  )
}

 // rafc is the shortcut // Apparently we don't need the first line 
import "./app.css"
import { useState,useEffect } from "react"; 
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";



export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const datosAlmacenados = localStorage.getItem("tareas");
    return datosAlmacenados ? JSON.parse(datosAlmacenados) : [];
  });
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tasks));
  }, [tasks]);
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

  //localStorage.setItem("tasks",JSON.stringify(tasks))



  return (

      <div className="App">
        <Header />
        <AddTask  tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks}/>
        <Footer />
      </div>
  )
}

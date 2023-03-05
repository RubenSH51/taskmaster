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
 

  function handleTaskStatusChange(updatedTask) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

 

  return (

      <div className="App">
        <Header />
        <AddTask  tasks={tasks} setTasks={setTasks}/>
        <TaskList tasks={tasks} setTasks={setTasks} onTaskStatusChange={handleTaskStatusChange}/>
        <Footer />
      </div>
  )
}

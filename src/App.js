 // rafc is the shortcut // Apparently we don't need the first line 
import "./app.css"
import { useState,useEffect } from "react"; 
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";
import { AddTask } from "./components/AddTask";
import { Modal } from "./components/Modal";
//import { BoxContainer } from "./components/BoxContainer";
import React from "react";


// Testing
export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const datosAlmacenados = localStorage.getItem("tareas");
    return datosAlmacenados ? JSON.parse(datosAlmacenados) : [];
  });
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tasks));
  }, [tasks]);

  const [modoOscuro, setModoOscuro] = useState(false);
  useEffect(() => {
    const modoOscuroGuardado = localStorage.getItem("modoOscuro");
    if (modoOscuroGuardado) {
      setModoOscuro(JSON.parse(modoOscuroGuardado));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
    const body = document.getElementsByTagName("body")[0];
    if (modoOscuro) {
      body.classList.remove("modo-claro");
      body.classList.add("modo-oscuro");
    } else {
      body.classList.remove("modo-oscuro");
      body.classList.add("modo-claro");
    }
  }, [modoOscuro]);
  function handleModoOscuroChange() {
    setModoOscuro(!modoOscuro);
  }



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

  const [modalActivado, setModalActivado] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);


  const version = 'v4.0.1'
  window.onload = () => {

    console.log(version)
  }



  return (

      // <div className="App" >
      <div className={`App ${modoOscuro ? 'modo-oscuro' : 'modo-claro'}`}>
        <Header modoOscuro={modoOscuro} onModoOscuroChange={handleModoOscuroChange} version={version}/>
        <AddTask  
          tasks={tasks} 
          setTasks={setTasks}
          // isEditing={isEditing} 
          // setIsEditing={setIsEditing}
        />
        <TaskList 
          tasks={tasks} 
          setTasks={setTasks} 
          onTaskStatusChange={handleTaskStatusChange}
          modalActivado={modalActivado}
          setModalActivado={setModalActivado}
          // isEditing={isEditing} 
          // setIsEditing={setIsEditing}
        />
        <Footer />
        {modalActivado && <Modal 
                            modalActivado={modalActivado} 
                            setModalActivado={setModalActivado}
                            tasks={tasks}
                            setTasks={setTasks}
                          />}
      </div>
  )
}

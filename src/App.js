 // rafc is the shortcut // Apparently we don't need the first line 
import "./app.css"
import { useState } from "react"; 
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";



export const App = () => {


  return (

    


      <div className="App">
        {/* <h1>Tasks list</h1> */}
        <Header />
        <TaskList />
      </div>
  )
}

 // rafc is the shortcut // Apparently we don't need the first line 
import "./app.css"
import { useState } from "react"; 
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";



export const App = () => {

  return (

      <div className="App">
        <Header />
        <TaskList />
        <Footer />
      </div>
  )
}

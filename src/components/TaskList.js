import React from 'react'
import { useState } from "react"; 
import { Card } from "./Card"
//import { BoxCard } from './BoxCard';
//import { BoxContainer } from './BoxContainer';
import "./tasklist.css"

export const TaskList = ({tasks,setTasks, onTaskStatusChange,modalActivado, setModalActivado/*, isEditing, setIsEditing*/}) => {

  const [show, setShow] = useState(true); // setShow nunca se usa, lo que hace que el crear un estado parezca inutil.
  //const show = true // Esto lo hago para no borrar el estado ya que quizás lo uso más adelante
  const [tasksFilterOption, setTasksFilterOption] = useState('All');
  const [tasksFilterByPriorityOption, setTasksFilterByPriorityOption] = useState('🔥');
  const [isEditing, setIsEditing] = useState(false);

  const [taskFilter, setTaskFilter] = useState('Pending')

  function deleteTask(id)
  {
    setTasks(tasks.filter(task => id !== task.id))
  }


  return (
    <main>
        <div className="tasksFilterButtonContainer">
          <div className='tasksFilterButtonContainer-upper'>

            <button className={`tasksFilterButton tasksFilterButton-all ${tasksFilterByPriorityOption==='🔥' ? "filter-selected" : ""}`} onClick={() => setTasksFilterByPriorityOption('🔥')}>Daily ({(tasks.filter(task => task.status === '🔥')).length})</button>
            <button className={`tasksFilterButton tasksFilterButton-pending ${tasksFilterByPriorityOption==='⏰' ? "filter-selected" : ""}`} onClick={() => setTasksFilterByPriorityOption('⏰')}>Weekly ({(tasks.filter(task => task.status === '⏰')).length})</button>
            <button className={`tasksFilterButton tasksFilterButton-completed ${tasksFilterByPriorityOption==='💤' ? "filter-selected" : ""}`} onClick={() => setTasksFilterByPriorityOption('💤')}>Monthly ({(tasks.filter(task => task.status === '💤')).length})</button>
            <button className={`tasksFilterButton tasksFilterButton-all ${tasksFilterByPriorityOption==='All'? "filter-selected" : ""}`} onClick={() => setTasksFilterByPriorityOption('All')}>All ({tasks.length})</button>
            <select onChange={(event) => setTaskFilter(event.target.value) } value={taskFilter}>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="All">All</option>
            </select>

          
          </div>
          <div className='tasksFilterButtonContainer-lower'>
            <button className="toggleBTN" onClick={() => setModalActivado(!modalActivado)}>Clear <span role="img" aria-label="">🧹</span></button>

          </div>
        </div>
        
        <ul>{show && <span className='taskDisplayingTitle'>Displaying <i>{tasksFilterOption}</i> tasks</span>}

           {/* { // SI LA TAREA ESTA COMPLETA
              tasksFilterOption==="Completed" && show && tasks.filter(task => task.completed === true).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}
          { // SI LA TAREA ESTA PENDIENTE
              tasksFilterOption==="Pending" && show && tasks.filter(task => task.completed === false).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}
          { // TODAS
              tasksFilterOption==="All" && show && tasks.map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}  */}





          { // Todas pending
              tasksFilterByPriorityOption==='All'  && taskFilter === "Pending" && show && tasks.filter(task => task.completed === false).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}
          
          
          
          
          
          { // Todas completed
              tasksFilterByPriorityOption==='All'  && taskFilter === "Completed" && show && tasks.filter(task => task.completed === true).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}

          { // Todas all
              tasksFilterByPriorityOption==='All'  && taskFilter === "All" && show && tasks.map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}




            { // Daily pending
              tasksFilterByPriorityOption==='🔥'  && taskFilter === "Pending" && show && tasks.filter(task => task.status === '🔥' ).filter(task => task.completed === false).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}
          
          
          
          
          
          { // Daily completed
              tasksFilterByPriorityOption==='🔥'  && taskFilter === "Completed" && show && tasks.filter(task => task.status === '🔥' ).filter(task => task.completed === true).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}

          { // Daily all
              tasksFilterByPriorityOption==='🔥'  && taskFilter === "All" && show && tasks.filter(task => task.status === '🔥' ).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}

          { // Weekly pending
              tasksFilterByPriorityOption==='⏰'  && taskFilter === "Pending" && show && tasks.filter(task => task.status === '⏰' ).filter(task => task.completed === false).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}
          
          
          
          
          
          { // Weekly completed
              tasksFilterByPriorityOption==='⏰'  && taskFilter === "Completed" && show && tasks.filter(task => task.status === '⏰' ).filter(task => task.completed === true).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}

          { // Weekly all
              tasksFilterByPriorityOption==='⏰'  && taskFilter === "All" && show && tasks.filter(task => task.status === '⏰' ).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}

          { // Monthly pending
              tasksFilterByPriorityOption==='💤'  && taskFilter === "Pending" && show && tasks.filter(task => task.status === '💤' ).filter(task => task.completed === false).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}
          
          
          
          
          
          { // Monthly completed
              tasksFilterByPriorityOption==='💤'  && taskFilter === "Completed" && show && tasks.filter(task => task.status === '💤' ).filter(task => task.completed === true).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}

          { // Monthly all
              tasksFilterByPriorityOption==='💤'  && taskFilter === "All" && show && tasks.filter(task => task.status === '💤' ).map((task) => (
              <Card key={ task.id} 
              // isEditing={isEditing} 
              // setIsEditing={setIsEditing}
              tasks={tasks}
              setTasks={setTasks}
              task={task} 
              deleteTask={deleteTask} 
              onTaskStatusChange={onTaskStatusChange}
              show={show} 
              setShow={setShow}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
          ))}

        </ul>
        {/* <BoxContainer />  */}
    </main>
  )
}

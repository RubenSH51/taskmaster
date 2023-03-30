import React from 'react'
import "./ModalDiscard.css"


export const ModalDiscard = ({id,task,tasks,setTasks,isDiscarding,setIsDiscarding,deleteTask}) => {

  const deleteTaskMessages = [
    "Are you sure you want to part ways with this task?",
    "Say your goodbyes, you're about to delete this task.",
    "Don't say I didn't warn you, are you sure?",
    "Ready to commit task-icide?",
    "Can I assist with any last rites for this task?",
    "Is this task not up to your standards?",
    "Deleting tasks is like breaking up with them. Are you sure?",
    "Would you rather fight a hundred task-sized ducks or delete this task?",
    "I'll take that as a yes to delete this task, but I won't like it.",
    "It's not you, it's the task. Are you sure you want to delete it?",
  ];

  return (
    <div id="modalDiscardBG">
        <div id="modalDiscardWindow">
            <h2>{deleteTaskMessages[Math.floor(Math.random()*deleteTaskMessages.length)]}</h2>

            <div className='modalDiscard-botonera'>
                <button onClick={() => setIsDiscarding(!isDiscarding)}>Cancel <span role="img" aria-label="">⛔</span> </button>
                <button onClick={() => deleteTask(task.id)}>Delete <span role="img" aria-label="">✅</span> </button>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import "./ModalDiscard.css"


export const ModalDiscard = ({id,task,tasks,setTasks,isDiscarding,setIsDiscarding,deleteTask}) => {
  return (
    <div id="modalDiscardBG">
        <div id="modalDiscardWindow">
            <h2>Are you sure, baby?</h2>

            <div className='modalDiscard-botonera'>
                <button onClick={() => setIsDiscarding(!isDiscarding)}>Cancel <span role="img" aria-label="">⛔</span> </button>
                <button onClick={() => deleteTask(task.id)}>Apply <span role="img" aria-label="">✅</span> </button>
            </div>
        </div>
    </div>
  )
}

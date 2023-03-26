import React from 'react'
import "./Modal.css"

export const Modal = ({modalActivado, setModalActivado,tasks, setTasks}) => {

    function borrarLista()
    {
        setTasks([]);
        setModalActivado(!modalActivado);
    }



  return (
    <div id="modalBG">
        <div id="modalWindow">
            <h2>Are you sure you want to delete your entire task list? This action cannot be undone.</h2>
            <div className='modal-botonera'>
                <button onClick={() => setModalActivado(!modalActivado)}>No <span role="img" aria-label="">⛔</span> </button>
                <button onClick={() => borrarLista()}>Yes <span role="img" aria-label="">✅</span> </button>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import "./boxcard.css"
import { useState } from 'react';

export const BoxCard = ({result, children}) => {

    const [show, setShow] = useState(true);

  return (
    <>
        
        {show && <div className={`box ${result}`}>
            {children}
            <button className="boxcard-button" onClick={() => setShow(!show)}>Hide</button>
        </div>}
        
    </>
  )
}

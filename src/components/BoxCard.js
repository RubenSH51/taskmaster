import React from 'react'
import "./boxcard.css"

export const BoxCard = ({result, children}) => {
  return (
    <div className={`box ${result}`}>
        {children}
    </div>
  )
}

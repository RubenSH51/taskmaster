import React from 'react'
import { BoxCard } from "./BoxCard"
import "./boxcontainer.css"

export const BoxContainer = () => {
  return (
    <div className='box-container'>  
        <BoxCard result="success">
          <p className="title">Título de prueba</p>
          <p className="description">Descripción de prueba. Como es una descripción</p> 
        </BoxCard> 

        <BoxCard result="warning">
          <p className="title">Título de prueba</p>
          <p className="description">Descripción de prueba. Como es una descripción</p> 
        </BoxCard> 

        <BoxCard result="danger">
          <p className="title">Título de prueba</p>
          <p className="description">Descripción de prueba. Como es una descripción</p> 
        </BoxCard>
    </div>
  )
}

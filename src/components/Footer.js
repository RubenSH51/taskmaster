import React from 'react'
import './footer.css'
import { sherlockQuotes } from "../quotes"
import { useEffect, useState } from 'react'

export const Footer = () => {

  const valueRandom = Math.floor(Math.random()*sherlockQuotes.length)
  const [sherlockQuote, setSherlockQuote] = useState(sherlockQuotes[valueRandom]);
  const autor = "Sherlock Holmes"
  // const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    setInterval(() => {

      const nuevoIndice = Math.floor(Math.random()*sherlockQuotes.length)
      setSherlockQuote(sherlockQuotes[nuevoIndice]);
      // setAutorActual(sherlockQuotes[nuevoIndice].author)
    }, 30000);


  }, []);


  return (
    <footer className="footer">
        <p>"{sherlockQuote}"</p>
        <p><i>{autor}</i></p>
        <small>2023 - © All rights reserved</small>
    </footer>
  )
}

import { useState,useEffect } from "react"
import Logo from "../assets/logo.png"
//import Moon from "../assets/moon.png"
import Moon2 from "../assets/moon2.png"
//import Sun from "../assets/sun.png"
import Sun2 from "../assets/sun2.png"
import "./header.css"
import React from "react";

import { quotes } from "../quotes"

export const Header = ({version}) => {

  const valueRandom = Math.floor(Math.random()*quotes.length)
  const [fraseActual, setFraseActual] = useState(quotes[valueRandom].quote);
  const [autorActual, setAutorActual] = useState(quotes[valueRandom].author);
  // const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
      setInterval(() => {

      const nuevoIndice = Math.floor(Math.random()*quotes.length)
      setFraseActual(quotes[nuevoIndice].quote);
      setAutorActual(quotes[nuevoIndice].author)
    }, 10000);


  }, []);


  const [modoOscuro, setModoOscuro] = useState(() => {
    const modoGuardado = localStorage.getItem("modoOscuro");
    return modoGuardado ? JSON.parse(modoGuardado) : false;
  });
  useEffect(() => {
    localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
    const body = document.getElementsByTagName("body")[0];
    if (modoOscuro) {
      body.classList.add("modo-oscuro");
      body.classList.remove("modo-claro");
    } else {
      body.classList.add("modo-claro");
      body.classList.remove("modo-oscuro");
    }
  }, [modoOscuro]);

  function cambiarModo() {
    setModoOscuro(!modoOscuro);
  }


  return (
    <header>
        <div className="top">
          <div className="left">
            {/* <img src={Logo}/> */}
            {modoOscuro ? <img src={Logo} alt="logo" className="darkModeLogo"/> : <img src={Logo} alt="logo" />}
            <h2>TaskMaster <span className="version">{version}</span></h2>
            {/* <h2>Home</h2> */}
          </div>
          <div className="right">
          {modoOscuro ? <img src={Sun2} alt="mode" className="lightDarkMode" onClick={cambiarModo}/> : <img src={Moon2}  alt="mode" className="lightDarkMode" onClick={cambiarModo}/>}

          </div>
        </div>

        <div className="bottom">
          <p className="randomQuote">"{fraseActual}" - <i>{autorActual}</i></p>
        </div>
        {/* <h1>TaskMaster <span>{version}</span></h1> */}
    </header>
    
  )
}

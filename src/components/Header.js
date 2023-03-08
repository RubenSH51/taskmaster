import { useState,useEffect } from "react"
import Logo from "../assets/logo.png"
//import Moon from "../assets/moon.png"
import Moon2 from "../assets/moon2.png"
//import Sun from "../assets/sun.png"
import Sun2 from "../assets/sun2.png"
import "./header.css"
import React from "react";

export const Header = () => {

  //const lightDarkMode = document.querySelector('.lightDarkMode');


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

  function cambiarModo2() {
    setModoOscuro(!modoOscuro);
  }

  // function cambiarModo() {
  //   let body = document.getElementsByTagName("body")[0];
  //   if (body.classList.contains("modo-claro")) {
  //     body.classList.remove("modo-claro");
  //     body.classList.add("modo-oscuro");
  //     setModoOscuro(true);


  //   } else {
  //     body.classList.remove("modo-oscuro");
  //     body.classList.add("modo-claro");
  //     setModoOscuro(false);
      
  //   }
  // }

  return (
    <header>
        <div className="top">
          {/* <img src={Logo}/> */}
          {modoOscuro ? <img src={Logo} alt="logo" className="darkModeLogo"/> : <img src={Logo} alt="logo" />}
          {modoOscuro ? <img src={Sun2} alt="mode" className="lightDarkMode" onClick={cambiarModo2}/> : <img src={Moon2}  alt="mode" className="lightDarkMode" onClick={cambiarModo2}/>}

          <h2>Home</h2>
        </div>
        <h1>TaskMaster</h1>
    </header>
    
  )
}

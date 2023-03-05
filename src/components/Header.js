import { useState } from "react"
import Logo from "../assets/logo.png"
import Moon from "../assets/moon.png"
import Moon2 from "../assets/moon2.png"
import Sun from "../assets/sun.png"
import Sun2 from "../assets/sun2.png"
import "./header.css"

export const Header = () => {

  const lightDarkMode = document.querySelector('.lightDarkMode');
  //const [modeIcon, setModeIcon] = useState(Moon);
  const [modoOscuro, setModoOscuro] = useState(false);

  function cambiarModo() {
    let body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("modo-claro")) {
      body.classList.remove("modo-claro");
      body.classList.add("modo-oscuro");
      setModoOscuro(true);
      //lightDarkMode.src=Sun
     // setModeIcon(Sun)

    } else {
      body.classList.remove("modo-oscuro");
      body.classList.add("modo-claro");
      setModoOscuro(false);
      //lightDarkMode.src=Moon
      //setModeIcon(Moon)

    }
  }
  return (
    <header>
        <div className="top">
          {/* <img src={Logo}/> */}
          {modoOscuro ? <img src={Logo} className="darkModeLogo"/> : <img src={Logo}/>}
          {modoOscuro ? <img src={Sun2} className="lightDarkMode" onClick={cambiarModo}/> : <img src={Moon2} className="lightDarkMode" onClick={cambiarModo}/>}

          <h2>Home</h2>
        </div>
        <h1>TaskMaster</h1>
    </header>
    
  )
}

 // rafc is the shortcut // Apparently we don't need the first line 
import "./app.css"
import { useState } from "react"; 


export const App = () => {

  //let count = 0;

  const [count, setCount] = useState(0)

  function handleAdd()
  {
    //count++;  
    if (count < 100000)
    {
      setCount(count + 1)
    }
    else
    {
      return 
    }
    
  }

  function handleSub()
  {
    if (count > -5000)
    {
      setCount(count - 1)
    }
    else
    {
      return 
    }
  }

  function reset()
  {
    setCount(0)
  }


  function esEntero(num)
  {
    return (num % 1===0)
  }

  function formatoNumero(numero)
  {
    if (esEntero(numero*1.8+32))
    {
      return (numero*1.8+32)
    }
    else
    {
      return (numero*1.8+32).toFixed(2)
    }
  }


  return (

      <div className="App">
          <div className="box">
            <p>{count} °C</p>
            <div className="botonera">

              <div className="upperDiv">
                <button onClick={handleSub} className="sub">- 😢</button>
                <button onClick={handleAdd} className="add">+ 😊</button>
              </div>
              <div className="lowererDiv">
                <button className="reset" onClick={reset}>Reset 😮</button>
              </div>
              
            </div>
            <p>{formatoNumero(count)} °F</p>
          </div>
      </div>
  )
}

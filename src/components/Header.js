import Logo from "../assets/logo.png"
import "./header.css"

export const Header = () => {
  return (
    <header>
        <div className="top">
          <img src={Logo}/>
          <h2>Home</h2>
        </div>
        <h1>TaskList</h1>
    </header>
    
  )
}

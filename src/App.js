//import React from 'react' // rafc is the shortcut // Apparently we don't need the first line 
import { Header } from "./components/Header"                                                    // if you're using react over v16 version
import { Footer } from "./components/Footer"  

export const App = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Rubén</h1>
      </div>
      <Footer />
    </>
  )
}

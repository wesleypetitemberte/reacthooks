import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HookUseContext from "./components/HookUseContext"

//pages
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <HookUseContext>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about" >Sobre</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  )
}

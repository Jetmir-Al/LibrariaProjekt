//import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar.jsx'
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom' 

function App() {
  //const [count, setCount] = useState(1)

    return (
      <Router>
            <Navbar />
            <Routes>
                {/*Define your routes here*/}
            </Routes>
          <h1>Hellow wrold</h1>
      </Router>
  )
}

export default App

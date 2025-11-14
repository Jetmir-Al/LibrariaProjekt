import React from 'react'
import Navbar from './Components/Navbar.jsx'
import './App.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
function App() {

    return (
      <Router>
            <Navbar />
            
            <Routes>
                {/*Define your routes here*/}
            </Routes>
      </Router>
  )
}

export default App

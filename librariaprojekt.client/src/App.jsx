import React from 'react';
import Navbar from './Components/Navbar.jsx';
import './App.css';
import Body from './Body/Body.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Routes } from 'react-router-dom'
function App() {

    return (
      <Router>
            <Navbar />
            <Body />
            <Routes>
                
            </Routes>
            <Footer />
      </Router>
  )
}

export default App

import React from 'react';
import Navbar from './Components/Navbar.jsx';
import './App.css';
import Body from './Body/Body.jsx';
import BookPage from './Book/BookPage.jsx';
import BookDetails from './Book/BookDetails.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

    return (
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <Body />
                }/>
                <Route path="/bookpage" element={
                    <BookPage />
                } />
                <Route path="/bookdetails" element={
                    <BookDetails/>
                } />

            </Routes>
            <Footer />
      </Router>
  )
}

export default App

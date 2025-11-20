import React from 'react';
import Navbar from './Components/Navbar.jsx';
import './App.css';
import Body from './Body/Body.jsx';
import BookPage from './Book/BookPage.jsx';
import BookDetails from './Book/BookDetails.jsx';
import Footer from './Components/Footer.jsx';
import { ToggleLightDarkContext } from './Context/toggleContext.jsx';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

    const [lightDark, setLightDark] = useState(false);
    return (
        <ToggleLightDarkContext.Provider value={{ lightDark, setLightDark }}>
            <Router>
                <div className={lightDark ? "body dark-theme" : "body"}>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <Body />
                    } />
                    <Route path="/bookpage" element={
                        <BookPage />
                    } />
                    <Route path="/bookdetails" element={
                        <BookDetails />
                    } />

                </Routes>
                <Footer />
                </div>
            </Router>
        </ToggleLightDarkContext.Provider>
    );
}

export default App

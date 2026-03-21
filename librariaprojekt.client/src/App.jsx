import React from 'react';
import Navbar from './Components/layout/Navbar.jsx';
import './App.css';
import Body from './pages/Body.jsx';
import BookPage from './pages/BookPage.jsx';
import BookDetails from './Components/book/BookDetails.jsx';
import UserPage from './pages/UserPage.jsx';
import Footer from './utils/Footer.jsx';

import { AuthProvider } from './context/AuthProvider.jsx';
import { useLightDarkHook } from './hooks/useLightDarkHook.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './Route/ProtectedRoutes.jsx';
function App() {
    const { mode } = useLightDarkHook();
    return (
            <AuthProvider>
                <Router>
                    <div className={mode ? "body dark-theme" : "body"}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <Body />
                        } />
                        <Route path="/bookpage" element={
                            <BookPage />
                        } />
                        <Route path="/bookdetails/:id" element={
                            <BookDetails />
                        } />

                        <Route element={<ProtectedRoutes />}>
                            <Route path="/user-profile" element={
                                <UserPage />
                            } />
                        </Route>
                         

                    </Routes>
                    <Footer />
                </div>
            </Router>
            </AuthProvider>
    );
}

export default App

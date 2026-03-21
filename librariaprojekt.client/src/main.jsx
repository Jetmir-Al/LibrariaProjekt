import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToggleLightDarkProvider } from './context/toggleProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToggleLightDarkProvider>
            <App />
        </ToggleLightDarkProvider>
  </StrictMode>,
)

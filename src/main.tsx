import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import { LocalStorageProvider } from './context/LocalStorageContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalStorageProvider>
    <BrowserRouter>
    <Navbar/>

    <App />
    </BrowserRouter>
    </LocalStorageProvider>
  
  </React.StrictMode>,
)

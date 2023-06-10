import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage/LoginPage.jsx'
import { MovieDetailsPage } from './Pages/MovieDetailsPage/MovieDetailsPage'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/details" element={<MovieDetailsPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

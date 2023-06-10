import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage/LoginPage.jsx'
import { SignupPage } from './Pages/SignupPage/SignupPage.jsx'
import { ReservarPage } from './Pages/ReservarPage/ReservarPage.jsx'
import { MovieDetailsPage } from './Pages/MovieDetailsPage/MovieDetailsPage'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/reservar" element={<ReservarPage/>}/>
      <Route path="/details" element={<MovieDetailsPage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

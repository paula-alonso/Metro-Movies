import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage/LoginPage.jsx'
import { SignupPage } from './Pages/SignupPage/SignupPage.jsx'
import { ReservarPage } from './Pages/ReservarPage/ReservarPage.jsx'
import { MovieDetailsPage } from './Pages/MovieDetailsPage/MovieDetailsPage'
import { ProfilePage } from './Pages/ProfilePage/ProfilePage'
import { AdminPage } from './Pages/AdminPage/AdminPage'
import { HomePage } from './Pages/HomePage/HomePage'
import { Layout } from './components/Layout/Layout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}> 
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/reservar/:movieId" element={<ReservarPage/>}/>
        <Route path="/details/:movieId" element={<MovieDetailsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/' element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

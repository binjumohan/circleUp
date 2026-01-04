import React from 'react'
import Events from './pages/Events'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'
import Calender from './pages/Calender'
import signUp from './pages/signUp'

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/login' element={<Login />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/signup' element={<signUp/>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './Component/LogIn'
import Home from './Component/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/Home' element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App


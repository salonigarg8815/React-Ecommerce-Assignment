import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './Component/LogIn'
import Home from './Component/Home'
import About from './components/About'
import ProductData from './components/ProductData'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Home/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


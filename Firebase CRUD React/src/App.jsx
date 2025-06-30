import React from 'react'
import Home from './Home'
import Navbar from './Componenets/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <><BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

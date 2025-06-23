import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CarCollaction from './Components/CarCollaction'
import Navbar from './Components/Navbar'
import DashBoard from './Components/DashBoard'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CarCollaction />} />
          <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

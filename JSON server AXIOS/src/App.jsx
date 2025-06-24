import {Route, Routes } from 'react-router-dom'
import CarCollaction from './Components/CarCollaction'
import Navbar from './Components/Navbar'
import DashBoard from './Components/DashBoard'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CarCollaction />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </>
  )
}

export default App
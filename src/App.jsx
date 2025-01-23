import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Department from './Department'
import Doctors from './Doctors'
import './App.css'
import Navbar from './Navbar'
import Contact from './Contact'
import Appointments from './Appointment';



function App() {
  

  return (
    <>
      <Router>  
        <Navbar />      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/department' element={<Department />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </Router>

    </>
  )
}

export default App












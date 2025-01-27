import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Department from './Department'
import Doctors from './Doctors'
import './App.css'
import Navbar from './Navbar'
import Appointments from './Appointment';
import Footer from './Footer'
import ContactUs from './ContactUs'


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
          <Route path='/contact' element={<ContactUs />} /> 
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App












import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Department from './Department'
import Doctors from './Doctors'
import DoctorDetail from './DoctorDetail'
import './App.css'
import Navbar from './Navbar'
import ContactUs from './ContactUs'
import Appointments from './Appointments';
import Footer from './Footer'


function App() { 

  return (
    <>

      <Router>  
        <Navbar />      
        <Routes>
          <Route index element={<Home />} />
          <Route path='/department' element={<Department />} />
          <Route path='/appointments' element={<Appointments />} />

          <Route path='/doctors'>            
            <Route index element={<Doctors />}/>
            <Route path="/doctors/:id" element={<DoctorDetail />}/> 
          </Route>

          <Route path='/contact' element={<ContactUs />} /> 
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App












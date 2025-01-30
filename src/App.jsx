import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Department from './Department'
import Doctors from './Doctors'
import DoctorDetail from './DoctorDetail'
import './App.css'
import Navbar from './Navbar'
import Contact from './Contact'
import Appointments from './Appointments';


function App() { 

  return (
    <>
      <Router>  
        <Navbar />      
        <Routes>
          <Route index element={<Home />} />
          <Route path='/department' element={<Department />} />
          <Route path='/appointments' element={<Appointments />} />

          <Route path='/doctors' element={<Doctors />}>            
            <Route index element={<Doctors />}/>
            <Route path=":id" element={<DoctorDetail />}/>
          </Route>

          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </Router>

    </>
  )
}

export default App












// import Dashboard from '@mui/icons-material/Dashboard';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import DeletePopup from './Components/DeletePopup';
import Employee from './Components/Employee';
import Jobs from './Components/Jobs';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Users from './Components/Users';
import Temp from './Components/Temp';
import Dash from './Components/Dash';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      {  <Dash />}
      <Routes>

        {/* <Route path='/Dashboard' element= /> */}
        <Route  path='Employee' element={  <Employee/>} />
        <Route  path='Contact' element={<Contact/>} />
        
          
  
      </Routes>
  
  {/* <Navbar /> */}
  {/* <Users/> */}
  {/* <Temp/> */}

  {/* <Dashboard /> */}
  {/* <DeletePopup /> */}
  {/* <Jobs />
  <Employee />
  <Contact /> */}
  {/* <Employee/> */}
  
  <Footer />
    </div>
  );
}

export default App;

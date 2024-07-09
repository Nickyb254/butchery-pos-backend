import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/sidebar.jsx';
import { 
  CustomerRegistration,
  EmployeeRegistration,
  Footer,
  Hero,
  SaleRegistration,
  StockRegistration,
  UserRegistration
} from './section';

import {BrowserRouter, Routes, Route } from 'react-router-dom';

import AllEmployees from './context/AllEmployees.jsx';


const fetchEmployeeData = async () => {
  const {employeeData} = await axios.post('http://localhost:3000/employees');
  //console.log(formData);
}

const fetchAllEmployees = async () => {
  const {allEmployeesData} = await axios.get('http://localhost:3000/employees');  
}

const fetchUsers = async () => {
  const {userData} = await axios.post('http://localhost:3000/login');  
}

function App() {
  

  return (
    <main>        
        <BrowserRouter>
          <div>
          <Navbar />
          <Sidebar />  
            <Routes>          
            <Route path='/' element= {<Hero />} />
            <Route path='/customers' element= {<CustomerRegistration />} />
            <Route path='/employees' element= {<EmployeeRegistration />} />
            <Route path='/employees/find' element= {<AllEmployees />} />
            <Route path='/sale' element= {<SaleRegistration />} />
            <Route path='/stock' element= {<StockRegistration />} />
            <Route path='/user' element= {<UserRegistration />} />
            <Route path='/login' element= {<UserRegistration />} />
          </Routes>
          <Footer />
          </div>
        </BrowserRouter>    
    </main>    
  )
}


export default App

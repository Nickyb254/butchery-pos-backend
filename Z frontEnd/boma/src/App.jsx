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


const fetchData = async () => {
  const {formData} = await axios.post('http://localhost:${PORT}');
  console.log(formData);
}

function App() {
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
    <BrowserRouter>
      <div><Routes>
      
      
        <Route path='/customers' element= {<CustomerRegistration />} />
        <Route path='/employees' element= {<EmployeeRegistration />} />
        <Route path='/sale' element= {<SaleRegistration />} />
        <Route path='/stock' element= {<StockRegistration />} />
        <Route path='/user' element= {<UserRegistration />} />
        
      </Routes>
      </div>
    </BrowserRouter>
    <Footer />
    </main>
    // <main >
    //   <Navbar />
    //   <Sidebar />
    //   <Hero />
    //   <CustomerRegistration />
    //   <EmployeeRegistration />
    //   <SaleRegistration />
    //   <StockRegistration />
    //   <UserRegistration />
    //   <Footer />
    // </main>
  )
}


export default App

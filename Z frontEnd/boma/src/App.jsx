import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



import Navbar from './components/Navbar.jsx';
import Sidebar from './components/sidebar.jsx';
import { CustomerRegistration, EmployeeRegistration, Footer, Hero, SaleRegistration, StockRegistration, UserRegistration} from './section';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/Employees/EmployeesList.jsx';





function App() {
  

  return (
    <Container >        
        <BrowserRouter>
          <Box>
          <Navbar />
          <Sidebar /> 
          <EmployeeList />
            <Routes>          
            <Route path='/' element= {<Hero />} />
            <Route path='/customers' element= {<CustomerRegistration />} />
            <Route path='/employees' element= {<EmployeeRegistration />} />
           
            <Route path='/sale' element= {<SaleRegistration />} />
            <Route path='/stock' element= {<StockRegistration />} />
            <Route path='/user' element= {<UserRegistration />} />
            <Route path='/login' element= {<UserRegistration />} />
          </Routes>
          <Footer />
          </Box>
        </BrowserRouter>    
    </Container>    
  )
}


export default App

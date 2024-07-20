import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



import Navbar from './components/Navbar.jsx';
import Sidebar from './components/sidebar.jsx';
import { CustomerRegistration, EmployeeRegistration, Footer, Hero, SaleRegistration, StockRegistration, UserRegistration} from './section';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import EmployeeList from './components/Employees/EmployeesList.jsx';
// import EmployeeTable from './components/table/employeeTable.jsx';
import EmployeeList from './features/employee/employeeList.jsx';


// import { fetchEmployees } from '../api/index.jsx';
// import EmployeeFetcher from './redux/serverRequests/employees/getEmployees.jsx';
// import EmployeeTable from './components/table/employeeTable.jsx';


function App() {
 


  return (
    <Container >        
        <BrowserRouter>
          <Box>
          <Navbar />
          <Sidebar /> 
          {/* <EmployeeList /> */}
          {/* <EmployeeTable /> */}
          {/* <EmployeeFetcher /> */}
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

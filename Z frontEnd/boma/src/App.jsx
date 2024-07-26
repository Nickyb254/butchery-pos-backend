import * as React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import MyNavbar from './components/Navbar.jsx';
import { CustomerRegistration, EmployeeRegistration, Footer, Hero, SaleRegistration, StockRegistration, AdminLogin, EmployeeLogin} from './section';
import EmployeeList from './components/Employees/EmployeesList.jsx';
// import ProductDisplay from './components/Stock/ProductDisplay.jsx';

function App() {
 


  return (
      <>
        <BrowserRouter>         
          <MyNavbar />         
          {/* <ProductDisplay /> */}
            <Routes>          
            <Route path='/' element= {<Hero />} />
            <Route path='/employees' element= {<EmployeeRegistration />} />
            <Route path='/employees/viewall' element= {<EmployeeList />} />
            <Route path='/sale' element= {<SaleRegistration />} />
            <Route path='/stock' element= {<StockRegistration />} />
            <Route path='/employeelogin' element= {<EmployeeLogin />} />
            
            <Route path='/adminlogin' element= {<AdminLogin />} />
            <Route path='/customers' element= {<CustomerRegistration />} />
          </Routes>
          <Footer />
         
        </BrowserRouter>    
        </>
  )
}


export default App

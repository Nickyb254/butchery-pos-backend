import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout.jsx';
import AdminLayout from './section/AdminLayout.jsx';
import Welcome from './Features/Auth/Welcome.jsx';
import { CustomerRegistration, EmployeeRegistration, Public, SaleRegistration, StockRegistration, EmployeeLogin} from './section';
import AdminLogin from './Features/Auth/AdminLogin.jsx';
import EmployeeList from './Features/Employees/EmployeesList.jsx';
// import ProductDisplay from './components/Stock/ProductDisplay.jsx';

function App() {
 


  return (
        <Routes>          
            <Route path='/' element= {<Layout />}>
              <Route index element= {<Public />} />
              <Route path='/adminlogin' element= {<AdminLogin />} />

              <Route path='admin' element={AdminLayout}>  

                <Route index element={<Welcome/>} />   

                <Route path='employees'>
                  <Route index element= {<EmployeeList />} />
                  <Route path='register' element= {<EmployeeRegistration />} />
                </Route>

                <Route path='customers'>
                  <Route index element= {<CustomerRegistration />} />
                </Route>

                <Route path='sales'>
                  <Route index element= {<SaleRegistration />} />
                </Route>

                <Route path='stock'>
                  <Route index element= {<StockRegistration />} />
                </Route>

              </Route> {/* End of Admin Access*/}
              
                <Route path='employeelogin' element= {<EmployeeLogin />} />

            </Route>
        </Routes>
     
  )
}


export default App

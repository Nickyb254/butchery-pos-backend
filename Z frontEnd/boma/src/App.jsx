import React, {useState, useEffect} from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import AdminLayout from './section/AdminLayout.jsx';
import Welcome from './Features/Auth/Welcome.jsx';
import { CustomerRegistration, CustomerSelfRegistration, CheckOut, CustomersLogin, EmployeeRegistration, Public, SaleRegistration, StockRegistration, EmployeeLogin, EmployeeProfile} from './section';
import AdminLogin from './Features/Auth/AdminLogin.jsx';
import EmployeeList from './Features/Employees/EmployeesList.jsx';
import CustomerList from './Features/Customers/CustomersList.jsx';
import StockList from './Features/Stock/StockList.jsx';
import SalesList from './Features/Sales/SalesList.jsx';
import AddImages from './Features/Images/AddImages.jsx';
import ProductDisplay from './components/Products/ProductDisplay.jsx';
import ProductDetails from './components/Products/ProductDetails.jsx';
import ProtectedRoute from './section/ProtectedRoute.jsx';

function App() {

  const [currentEmployee, setCurrentEmployee] = useState([])

  function getEmployee (employee){
    if(employee){
      setCurrentEmployee(employee.data.employee)
    } 
    return   
  //  else {console.log('no employee')}
  }

  useEffect(()=>{
    getEmployee()
  },[])
  
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  

  return (
        <Routes>          
          {/* unprotected */}
          <Route path='/' element= {<Layout />}>
            <Route index element= {<Public />} />  
            <Route path='/:productId' element= {<ProductDetails />} />  
            <Route path='/beef' element= {<AddImages />} />  
            <Route path='/goat' element= {<ProductDisplay />} />
            <Route path='login' element= {<AdminLogin/>} />  
            <Route path='employees' element= {<EmployeeLogin onClick={getEmployee} />} />
    
          {/* Protected routes */}
              <Route element={<ProtectedRoute/>} >                
                <Route element={<AdminLayout/>} > 
                <Route path='login/welcome' element={<Welcome/>} />    
                <Route path='login/welcome/employees' element={<EmployeeList/>} />   
                <Route path='login/welcome/customers' element={<CustomerList/>} />   
                <Route path='login/welcome/stock' element={<StockList/>} />   
                <Route path='login/welcome/sales' element={<SalesList/>} />             
                </Route>
              </Route>

                <Route path='employees'>
                  <Route path='register' element= {<EmployeeRegistration />} />
                  
                    <Route path='profile' element= {<EmployeeProfile currentEmployee={currentEmployee} />} />
                    <Route path='profile/stock' element={<StockList/>} />  
                    <Route path='profile/register-customer' element= {<CustomerRegistration />} />
                    <Route path='profile/customers' element={<CustomerList/>} />
                    <Route path='profile/sales' element= {<SaleRegistration />} />
                </Route>

                <Route path='customers'>
                  <Route index element= {<CustomersLogin />} />
                  <Route path='register' element= {<CustomerSelfRegistration />} />
                </Route>

                <Route path='stock'>
                  <Route index element= {<StockRegistration />} />
                </Route>              
              
                <Route path='checkout'>
                <Route index element= {<CheckOut />} />
                </Route>
          </Route>
        </Routes>
     
  )
}


export default App

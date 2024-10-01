import { Routes, Route} from 'react-router-dom';
import Layout from './Layout.jsx';
import  AdminLogin from './Features/Admin/AdminLogin.jsx';
import {Public, SaleRegistration, EmployeeProfile} from './section';
import {EmployeeList, EmployeeRegistration, EmployeeLogin,} from './Features/Employees';
import { CustomerSelfRegistration, CustomersLogin, CustomersList, CheckOut} from './Features/Customers/index.js';
import StockList from './Features/Stock/StockList.jsx';
import SalesList from './Features/Sales/SalesList.jsx';
import AddImages from './Features/Images/AddImages.jsx';
import ProductDisplay from './components/Products/ProductDisplay.jsx';
import ProductDetails from './components/Products/ProductDetails.jsx';
import ProtectedRoute from './section/ProtectedRoute.jsx';
import Prefetch from './Features/Prefetch.jsx'
import {Dashboard, AdminLayout, Home} from './components/Admin';
import {EmployeeLayout, EmployeeHome} from './components/Employee/index.js';
import {CustomerLayout, CustomerDashboard, CustomerProfile} from './components/Customer/index.js';
import {OrdersList, OrderForCustomer} from './Features/Orders/Order.js';

function App() {

  return (
    <Routes>          
      {/* unprotected */}
      <Route element={<Prefetch/>} >
      <Route path='/' element= {<Layout />}>
        <Route index element= {<Public />} />  
        <Route path='/:productId' element= {<ProductDetails />} />  
        <Route path='/beef' element= {<AddImages />} />  
        <Route path='/goat' element= {<ProductDisplay />} />
        <Route path='login' element= {<AdminLogin/>} />  
        <Route path='employees' element= {<EmployeeLogin />} />
        <Route path='customers' element= {<CustomersLogin />} />
        </Route>

        {/* Protected routes */}
          <Route element={<ProtectedRoute/>} >                
            <Route element={<AdminLayout/>} > 
              <Route path='/admin/dashboard' element={<Dashboard/>} >
              
                <Route index element={<Home/>} />   
                <Route path='employees' element={<EmployeeList/>} />   
                <Route path='customers' element={<CustomersList/>} />   
                <Route path='stock' element={<StockList/>} />   
                <Route path='sales' element={<SalesList/>} />             
                <Route path='orders' element={<OrdersList/>} />             
              </Route>
            </Route>
          </Route>

            <Route path='employees'>
              {/* <Route index element= {<EmployeeLogin />} /> */}
              <Route path='register' element= {<EmployeeRegistration />} />
              
                <Route path='profile' element={<EmployeeLayout/>} >
                  <Route index element={<EmployeeHome/>} />
                  <Route path='edit'  element= {<EmployeeProfile />} />
                  <Route path='stock' element={<StockList/>} />  
                  {/* <Route path='register-customer' element= {<CustomerRegistration />} /> */}
                  <Route path='customers' element={<CustomersList/>} />
                  <Route path='sales' element= {<SaleRegistration />} />
                  <Route path='orders' element={<OrdersList/>} />  
                </Route>
            </Route>

            <Route path='customers'>
              {/* <Route index element= {<CustomersLogin />} /> */}
              <Route path='register' element= {<CustomerSelfRegistration />} />

              <Route path='profile' element={<CustomerLayout/>} >
                <Route index element= {<CustomerDashboard />} />
                <Route path='checkout' element= {<CheckOut />} />
                <Route path='shop' element={<ProductDisplay/>} /> 
                <Route path='orders' element={<OrderForCustomer/>} />  
                <Route path='settings' element={<CustomerProfile/>} />  
              </Route>
            </Route>
      
      </Route>
    </Routes>
     
  )
}


export default App
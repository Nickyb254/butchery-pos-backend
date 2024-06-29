import React from 'react';

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



function App() {
  

  return (
    <main className='relative'>
      <Navbar />
      <Sidebar />
      
    </main>
  )
}

export default App

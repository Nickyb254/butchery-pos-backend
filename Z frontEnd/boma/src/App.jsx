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
      <Hero />
      <CustomerRegistration />
      <EmployeeRegistration />
      <SaleRegistration />
      <StockRegistration />
      <UserRegistration />
      <Footer />
    </main>
  )
}

export default App

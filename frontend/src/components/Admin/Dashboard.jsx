import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import AdminFooter from './AdminFooter'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='grid-container'>
        <Header/>
        <Sidebar/>
        <Outlet/>
        <AdminFooter/> 
    </div>
  )
}

export default Dashboard
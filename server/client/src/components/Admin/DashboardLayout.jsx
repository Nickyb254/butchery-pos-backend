import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import AdminFooter from './AdminFooter'

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
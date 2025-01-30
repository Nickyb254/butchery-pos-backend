import React from 'react'
import CustomerHeader from './CustomerHeader'
import { Outlet } from 'react-router-dom'
import CustomerSidebar from './CustomerSidebar'

const CustomerLayout = () => {
  return (
    <>
        <CustomerHeader/>
        <div className='grid-container'>
        <CustomerSidebar/>
        <Outlet/>
        </div>
    </>
  )
}

export default CustomerLayout
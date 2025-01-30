import React from 'react'
import EmployeeSidebar from './EmployeeSidebar'
import EmployeeHeader from './EmployeeHeader'
import { Outlet } from 'react-router-dom'

const EmployeeLayout = () => {
  return (
    <>
      <EmployeeHeader/>
        <div className='grid-container'>
          <EmployeeSidebar/>
          <Outlet/>
        </div>
    </>
  )
}

export default EmployeeLayout
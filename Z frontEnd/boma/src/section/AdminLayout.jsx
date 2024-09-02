import React from 'react'
import AdminFooter from './AdminFooter'
import { Outlet, Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'

import Container from 'react-bootstrap/esm/Container'

const AdminLayout = () => {
  return (
    <>
    {/* <AdminHeader/> */}
       
            <Outlet/>
     
            <AdminFooter/>  
        
    </>
  )
}

export default AdminLayout
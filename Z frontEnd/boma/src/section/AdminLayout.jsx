import React from 'react'

import { Outlet, Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'
import Container from 'react-bootstrap/esm/Container'

const AdminLayout = () => {
  return (
    <>
    <AdminHeader/>
       <Container>
            <Outlet/>
        </Container>
    <AdminFooter/>
    </>
  )
}

export default AdminLayout
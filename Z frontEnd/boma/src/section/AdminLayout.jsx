import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

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
import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AdminHeader = () => {
    
    const content = (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Boma Butchery</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Admin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    )

  return content
}

export default AdminHeader
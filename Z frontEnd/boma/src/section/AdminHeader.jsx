import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

import axiosInstance from '../api/axios';
const LOGOUT_URL = "/user/logOUT";

const AdminHeader = () => {
    
  
  const handleLogOut = async (e) => {
    e.preventDefault();
    try{
      const response = await axiosInstance.get(LOGOUT_URL)
      setAuth(null)
      window.localStorage.setItem("loggedIn", false)
    }catch (error) {
      console.log(error)
    }
  }

    const content = (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Boma Butchery</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Admin</a>
            <Button onClick={ handleLogOut}>Log Out</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    )

  return content
}

export default AdminHeader
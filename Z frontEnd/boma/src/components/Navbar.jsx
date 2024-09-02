// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { iconCart } from './assets/all_products';
import { Link } from 'react-router-dom';
import CartTab from './Cart/CartTab';

function MyNavbar() {
  const cart = useSelector(store => store.cart.cartItems);
 
  let totalQuantity = cart.length

  const Navstyle ={
    fontweight: '900'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={Navstyle} bg="primary" data-bs-theme="dark" sticky="top">
      <Container>  

        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className='bg-primary' href="/">BOMA BUTCHERY</Nav.Link>
          </Nav.Item>      
        
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">          
            <Nav.Link href="beef">Beef Products</Nav.Link>
            <Nav.Link href="goat">Goat Products</Nav.Link>
            <Nav.Link href="#link3">Chicken Products</Nav.Link>
            <Nav.Link href="#link4">Seafoods</Nav.Link>
            <Nav.Link href="#link5">Delivery Services</Nav.Link>

            <NavDropdown title="Portals" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/employees"> Employees </NavDropdown.Item>
              <NavDropdown.Item href="/customers">Customers</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="/stock"> Stock </NavDropdown.Item>
              <NavDropdown.Item href="/sales"> Sales </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Nav>
            <div className="w-40 h-40 bg-light rounded-circle d-flex justify-content-center align-items-center position-relative">
              <CartTab />
            </div>            
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
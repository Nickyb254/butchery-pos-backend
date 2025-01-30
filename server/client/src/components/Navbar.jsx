// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react' 
import { useSelector, useDispatch } from 'react-redux' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { iconCart } from './assets/all_products';
import { Link } from 'react-router-dom';
import CartTab from '../Features/Cart/CartTab';

function HomeNavbar() {
  const cart = useSelector(store => store.cart.cartItems);
 
  let totalQuantity = cart.length

  const text_Clr = {
    fontColor:'#ffffff',
    fontWeight: 'bold',
    fontSize: '1.8em'
  }

  const Navstyle ={
   
    display:'flex', 
    fontColor:'white',
    justifyContent:'space-between'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={Navstyle} bg="primary" data-bs-theme="dark" sticky="top">
       
     <Container>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link className='bg-primary' href="/"><span  style={text_Clr}>BOMA BUTCHERY</span></Nav.Link>
          </Nav.Item>      
        </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{paddingLeft: '2em'}} >
          <Nav className="me-auto flex justify-between">          
            <Nav.Link href="/shop"><span  style={text_Clr}>Shop Now</span></Nav.Link>                     
          </Nav>
          <Nav style={{marginRight:'1em'}}>
          <NavDropdown title="Portals" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/employees"> Employees </NavDropdown.Item>
              <NavDropdown.Item href="/customers">Customers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
            <div className="w-40 h-40 bg-light rounded-circle d-flex justify-content-center align-items-center position-relative">
              {totalQuantity > 0 ? <CartTab /> : null}
            </div>            
       
       </Container>
    </Navbar>
  );
}

export default HomeNavbar;
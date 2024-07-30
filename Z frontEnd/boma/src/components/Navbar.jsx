// import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
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
            <Nav.Link href="#link1">Beef Products</Nav.Link>
            <Nav.Link href="#link2">Goat Products</Nav.Link>
            <Nav.Link href="#link3">Chicken Products</Nav.Link>
            <Nav.Link href="#link4">Seafoods</Nav.Link>
            <Nav.Link href="#link5">Delivery Services</Nav.Link>

            <NavDropdown title="Portals" id="basic-nav-dropdown">
              <NavDropdown.Item href="/adminlogin">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/employeelogin"> Employees </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Customers</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> Stock </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Sales </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
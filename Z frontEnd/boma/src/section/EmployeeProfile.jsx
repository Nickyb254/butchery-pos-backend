import React from 'react';
import { Card, Col, Row, Button, Badge, Container } from 'react-bootstrap';
import { staff_icon } from '../components/assets/all_products';
import { Link } from 'react-router-dom'


const EmployeeProfile = ( props ) => {
  // console.log(props)
  return (
    <Container className='container ' style={{minHeight:'50vh'}}>
   
    <Row className="justify-content-center m-5" >

      <Col className='pt-3' >
          <Link to={''}> <Button className='border-white w-100' >Dashboard</Button></Link>
          <Link to={'stock'}> <Button className='border-white w-100'>Edit Stock</Button></Link>
          <Link to={'register-customer'}> <Button className='border-white w-100'>Add Customers</Button></Link>
          <Link to={''}> <Button className='border-white w-100'>Daily Stock</Button></Link>
          <Link to={'sales'}> <Button className='border-white w-100'>Sales</Button></Link>
          <Link to={''}> <Button className='border-white w-100'>Place Order</Button></Link>
          <Link to={''}> <Button className='border-white w-100'>View Trends</Button></Link>
      </Col>

      <Col md={7} lg={10}>
        <Card className="text-center mb-4 shadow-sm container">
          <div className='d-flex mt-3 justify-content-between bg-primary p-2 text-white '>
            <h6 className='mx-5'>Employee Dashboard</h6>
            <div className='d-inline mx-5'>
              <h6 className='d-inline mx-4' >Welcome: {props.currentEmployee.employee_name}!</h6>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
              </svg>
            </div>
          </div>
            <Row className='d-flex'>
              <Col>
                <Row className='d-flex flex-column'>
                  <Col>
                    <div className='h-25 p-2 mt-3'>
                      <Card.Img
                          variant="top"
                          src={staff_icon}
                          alt="Profile Picture"
                          className="rounded-circle mx-4 "
                          style={{ width: '10vh', height: '10vh'}}
                        />                      
                    </div>
                  </Col>
                  <Col >
                    <div className='mt-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                      </svg>
                    </div>
                    <div className='d-inline-block mb-3'>
                      <Badge>Branch</Badge>
                      <p className='trying'>Town Shop</p>
                    </div>
                  </Col>
                  <Col>
                      <Card.Subtitle className="mb-2 text-muted">
                        Role: {props.currentEmployee.designation}
                      </Card.Subtitle>
                        <Card.Text>
                          {props.currentEmployee.email}
                        </Card.Text>
                      <Badge bg="primary" className="me-2">Sales</Badge>
                      <Badge bg="secondary">{props.currentEmployee.phone_number}</Badge>
                  </Col>
                </Row>                
              </Col>
              <Col className='col-8' >
                
                <Row className='d-inline-block justify-content-lg-start'>
                  <Col className='h-50 p-0.2'>
                  <div className='p-1 mt-3 m-2 border border-primary rounded'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                  </svg>
                  
                  <p>BIO</p> 
                  <p>I am a seasoned sales professional with over 10 years of experience in driving revenue growth and building strong client relationships. Known for his strategic mindset and exceptional communication skills, John excels at identifying customer needs and delivering tailored solutions, ensuring high levels of satisfaction and loyalty.</p>
                  </div>
                  </Col>
                 
                  <Col className='mt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-hearts" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                    </svg>
                    <p className='m-0' >Kins: Brother</p>
                    <p>0798321422</p>
                    </Col>
                </Row>
              </Col>
            </Row>
          <Card.Body>
              {/* <br/><Link to="stock"> View Stock </Link> <br/>
              <Link to="register-customer"> Register Customer </Link>
              <br/><Link to="customers">All customers</Link>  */}
            <div className="mt-3">
              <Button variant="outline-primary" className="me-2">EDIT</Button>
              <Button variant="outline-secondary">SAVE</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
};

export default EmployeeProfile;

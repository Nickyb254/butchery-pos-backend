import React from 'react';
import { Card, Col, Row, Button, Badge } from 'react-bootstrap';
import { staff_icon } from '../components/assets/all_products';
import { Link } from 'react-router-dom'


const EmployeeProfile = ( props ) => {
  // console.log(props)
  return (
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="text-center mb-4 shadow-sm">
          <Card.Img
            variant="top"
            src={staff_icon}
            alt="Profile Picture"
            className="rounded-circle mx-auto mt-3"
            style={{ width: '50px', height: '50px' }}
          />
          <Card.Body>
            {/* <Card.Title>{currentEmployee.employee_name}</Card.Title> */}
            <h1>Welcome {props.currentEmployee.employee_name}!</h1>
            <Card.Subtitle className="mb-2 text-muted">Role: {props.currentEmployee.designation}</Card.Subtitle>
            <Card.Text>
              {props.currentEmployee.email}
            </Card.Text>
            <Badge bg="primary" className="me-2">Sales</Badge>
            <Badge bg="secondary">{props.currentEmployee.phone_number}</Badge>

              <br/><Link to="stock"> View Stock </Link> <br/>
              <Link to="register-customer"> Register Customer </Link>
              <br/><Link to="customers">All customers</Link> 
            <div className="mt-3">
              <Button variant="outline-primary" className="me-2">NEXT</Button>
              <Button variant="outline-secondary">Connect</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EmployeeProfile;

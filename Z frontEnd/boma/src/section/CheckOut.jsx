import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Card, FormLabel, NavLink } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function CheckOut() {
    
  return (
    <Container className="p-5">
      <Row>
        <Col xs={12} md={8}>
          <h3>Check Out</h3>
          <Card className="container p-3">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Register/Log in</Button>
            <Button variant="secondary">Confirm Cart Items</Button>
            <Button variant="secondary">Make Payment</Button>
          </ButtonGroup>
          
          <NavLink>Express Check Out Here</NavLink><br/>

          <h6>Log in</h6>
          <FormLabel>Enter Your Names</FormLabel>
          <Form.Control type="text" placeholder="eg. John Rigijii" /><br/>
          <FormLabel>Enter Your Email</FormLabel>
          <Form.Control type="text" placeholder="eg. johnrigijii@gmail.com" /><br/>
          <Button>Log in</Button><br/>
          <NavLink href='customers/register' >Register here</NavLink> 
        </Card>
        </Col>

        <Col xs={6} md={4}>
        <h3>Cart Summary</h3>
        <Card className="container p-3">        
        <p>Items in the cart</p>
        <p>Total value:  </p>
        <small>Boma Butchery offers delivery services within the vicinity</small>
        <small>Delivery services attract additional charges<br/> ***affordable****reliable***convinient</small>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckOut;






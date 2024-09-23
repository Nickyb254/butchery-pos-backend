import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import {Row, Col, Nav, Button, ButtonGroup} from 'react-bootstrap';
import { Card, Form, FormLabel, NavLink } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCheckOutMutation } from './CustomerApiSlice';
import { selectCustomer } from './CustomerSlice';
import { selectCart } from '../Cart/cartSlice';
import CartItem from '../Cart/CartItem';

function CheckOut() {
  const carts = useSelector(selectCart);
  const cartState = useSelector((state) => state.cart)
  
  const customer = useSelector(selectCustomer )
  
  const [checkOut, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useCheckOutMutation()

    const handleCheckOut = (e) => {
      e.preventDefault()
      checkOut({carts, userId: customer?.id})
        .then((res)=>{
            if(res?.data?.url){
              window.location.href = res.data.url
            }
            console.log(res)
        })
        .catch((error)=> console.log(error))
    }
  return (
    <Container className="p-5">
      <Nav className='d-flex align-content-between'>
      <h5>Welcome {customer?.name}!</h5>
      <h5>Inquiries: 0701305276</h5>
      <h5>Log Out</h5>
      </Nav>
      <Row>
        <Col xs={12} md={8}>
         
          <Card className="container p-3">
            <ButtonGroup aria-label="Basic example">
              {/* <Button variant="secondary">Make Payment</Button> */}
            <Button variant="secondary">Cart Items</Button>
            </ButtonGroup>
              <div>
              {carts?.map((item, key) => 
                  <CartItem key={key} item={item}/>
                  )}
              </div>
            {/* <Form.Control type="text" placeholder="eg. johnrigijii@gmail.com" /><br/> */}
        </Card>
        </Col>

        <Col xs={6} md={4}>
          <h6>Cart Summary</h6>
          <Card className="container p-3">  
          <strong>Total value: {cartState?.totalCartValue} </strong>
          <small>Boma Butchery offers delivery services within the vicinity</small>
          <small>Delivery may attract additional charges<br/> ***affordable****reliable***convinient</small>
          <Button onClick={handleCheckOut} >Check Out</Button>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckOut;


// const navigate = useNavigate()
  //  const goToCheckout = ()=>{
  //   navigate('checkout')
  //  }
  



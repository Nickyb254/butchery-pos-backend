import React, {useState, useEffect} from 'react' 
import {  useDispatch, useSelector } from 'react-redux' 
import { changeQuantity, addTotalCost, cartTotalValue } from './cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import { useContext } from 'react';
// import DataContext from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const CartItem = ({item}) => {
   const dispatch = useDispatch()

   const navigate = useNavigate()
   let productId = item?._id
   const goToProductDetails = (productId)=>{
    navigate(`/${productId}`)
   }

   const cartItem = useSelector((state)=> state.cart.cartItems)
    let quantity =cartItem[0].quantity
    const price = item?.price
    
    const cost = price * quantity
    dispatch(cartTotalValue({price, quantity}))
    return (
        <Container className="bg-dark text-white p-2 border-bottom border-secondary rounded">
            <Row className="align-items-center">
                <Col xs="auto">
                    <img src={`http://localhost:5173/src/images/${item?.stock_image}`} alt="" className="w-25" onClick={()=>goToProductDetails(productId)} />                    
                </Col>
                <Col><h4>{item?.product_name}</h4></Col>
                <Col><p>Price ${item?.price}</p></Col>
                <Col><p>Cost: ${cost}</p></Col>
                <Col xs="auto" className="d-flex align-items-center">
                    <Button variant="light" className="rounded-circle" style={{ width: '2rem', height: '2rem' }} >-</Button>
                    <span className="mx-2">{quantity}</span>
                    <Button variant="light" className="rounded-circle" style={{ width: '2rem', height: '2rem' }} >+</Button>
                </Col>
            </Row>
        </Container>

    );
};

export default CartItem;

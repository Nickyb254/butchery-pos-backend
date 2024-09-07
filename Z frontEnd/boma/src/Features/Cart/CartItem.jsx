import React from 'react' 
import {  useSelector, useDispatch } from 'react-redux' 
import { decreaseCart, addToCart, removeFromCart } from './cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import { useContext } from 'react';
// import DataContext from '../../context/DataProvider';

const CartItem = ({item}) => {


   const cartItem = useSelector((state)=> state.cart.cartItems)
    let quantity =cartItem[0].quantity
    const price = item?.price
    
    const cost = price * quantity
    
    const dispatch = useDispatch()
    const handleReduceQuantity = () =>{dispatch(decreaseCart(item))}
    const handleAddQuantity = () =>{dispatch(addToCart(item))}
    const handleRemoveItem = () => {dispatch(removeFromCart(item))}
    
    return (
        <Container className="bg-dark text-white p-2 border-bottom border-secondary rounded">
            <Row className="align-items-center">
                <Col xs="auto">
                    <img src={`http://localhost:5173/src/images/${item?.stock_image}`} alt="" className="w-25" />
                </Col>
                <Col><h4>{item?.product_name}</h4></Col>
                <Col><p>Price ${item?.price}</p></Col>
                <Col><p>Cost: ${cost}</p></Col>
                <Col xs="auto" className="d-flex align-items-center">
                    <Button variant="light" className="rounded-circle" style={{ width: '2rem', height: '2rem' }} onClick={handleReduceQuantity} >-</Button>
                    <span className="mx-2">{quantity}</span>
                    <Button variant="light" className="rounded-circle" style={{ width: '2rem', height: '2rem' }} onClick={handleAddQuantity}>+</Button>
                </Col>
                <Col><Button variant='danger' onClick={handleRemoveItem}>Remove </Button> </Col> 
            </Row>
        </Container>

    );
};

export default CartItem;

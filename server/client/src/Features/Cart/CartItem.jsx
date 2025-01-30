import React from 'react' 
import { useDispatch } from 'react-redux' 
import { decreaseCart, addToCart, removeFromCart } from './cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    
    const handleReduceQuantity = (e) =>{
        e.preventDefault()
        dispatch(decreaseCart(item))}

    const handleAddQuantity = (e) =>{
        e.preventDefault()        
        dispatch(addToCart(item))}

    const handleRemoveItem = (e) => {
        e.preventDefault()        
        dispatch(removeFromCart(item))}

    let quantity =item?.quantity
    
    return (
        <Container className="bg-dark text-white p-2 border-bottom border-secondary rounded">
            <Row className="d-flex align-items-center">
                
                <img src={`http://localhost:5173/src/images/${item?.stock_image}`} alt="" className="w-25" />
                
                <Col>
                    <strong>{item?.product_name}</strong>
                    <p>${item?.price}</p>
                </Col>
                <Col className="d-flex align-items-center">
                    <Button variant="light" className="rounded-circle"  onClick={handleReduceQuantity} >~</Button>
                    <strong className="mx-2">{quantity}</strong>
                    <Button variant="light" className="rounded-circle"  onClick={handleAddQuantity}>+</Button>                    
                <Col>
                    <div className='btn btn-danger cursor-pointer' onClick={handleRemoveItem}>
                        <strong>Del</strong>
                    </div>
                </Col>
                </Col>
            </Row>
        </Container>

    );
};

export default CartItem;

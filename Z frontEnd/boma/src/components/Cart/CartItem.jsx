import React, {useState, useEffect} from 'react' 
import {  useDispatch, useSelector } from 'react-redux' 
import { changeQuantity, addTotalCost } from './cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import { useContext } from 'react';
// import DataContext from '../../context/DataProvider';

const CartItem = (props) => {
    const {_id, quantity} = props.data;
    const [detail, setDetail] = useState([]);
    const [cost, setCost] = useState()
   
    const stock = useSelector((state) => state.stock.stock)
    // const {stock} = useContext(DataContext)
    const dispatch = useDispatch()
    
    // managing stock in context
    
    useEffect(() => {
        const findDetail= stock.filter(item => item._id === _id)[0]; 
        setDetail(findDetail);
    }, [_id])
    console.log(quantity);
   
    const handleMinusQuantity = () => {
        dispatch(changeQuantity({
            _id: _id,
            quantity: quantity - 1
        }));
    }
    const handlePlusQuantity = () => {
        dispatch(changeQuantity({
            _id: _id,
            quantity: quantity + 1
        }));
    }

    const handleCost = ()=>{
        let expense = Number(detail?.price) * quantity
        setCost(expense)
        dispatch(addTotalCost({
            _id: _id,
            cost: cost
        }))
    }

    useEffect(()=>{
        handleCost()
    },[])
    

    return (
        <Container className="bg-dark text-white p-2 border-bottom border-secondary rounded">
            <Row className="align-items-center">
                <Col xs="auto">
                    <img src={`http://localhost:5173/src/images/${detail?.stock_image}`} alt="" className="w-25" />
                </Col>
                <Col>
                    <h3>{detail?.product_name}</h3>
                    <p>${detail?.price * quantity}</p>
                    <p>cost is ${cost}</p>
                </Col>
                <Col xs="auto" className="d-flex align-items-center">
                    <Button variant="light" className="rounded-circle" style={{ width: '2rem', height: '2rem' }} onClick={handleMinusQuantity}>-</Button>
                    <span className="mx-2">{quantity}</span>
                    <Button variant="light" className="rounded-circle" style={{ width: '2rem', height: '2rem' }} onClick={handlePlusQuantity}>+</Button>
                </Col>
            </Row>
        </Container>

    );
};

export default CartItem;

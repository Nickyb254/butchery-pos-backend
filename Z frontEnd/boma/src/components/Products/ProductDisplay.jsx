import  React, { useEffect, useState }  from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../components/Cart/cartSlice';

function ProductDisplay() {
    const stock = useSelector(state => state.stock.stock);
        
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: 1,
            quantity: 1
        }))};
        
    
    

  const renderCard = (card, index) => {
    
        return(
        <Col md={4} lg={3} className="mb-4" key={card._id}>
        <Card style={{ width: '18rem', margin: '1.25rem' }} >
            <Card.Img variant="top" src={`http://localhost:5173/src/images/${card.stock_image}`} style={{ width: '17em', margin: '0.25em', height:'13em' }} />
                <Card.Body>
                    <Card.Title>{card.product_name}</Card.Title>
                    <h3>Price: {card.price}</h3>
                    <Card.Text>         
                    <small><Button onClick={handleAddToCart}> Add to Cart</Button> </small> <br/>
                    <Badge > View </Badge>
                    </Card.Text>
                </Card.Body>
        </Card>
        </Col>
    )
  }

  return (
      <Container>
      {stock === null ? "" :
        <Row>
            {stock.map(renderCard)}
        </Row>}
    </Container>
  );
}

export default ProductDisplay;
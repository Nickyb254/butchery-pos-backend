import  React, { useEffect, useState }  from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../components/Cart/cartSlice';
import { useNavigate } from 'react-router-dom';

function ProductDisplay() {
    const stock = useSelector(state => state.stock.stock);
        
    const dispatch = useDispatch()

    
   const navigate = useNavigate()
   
   const goToProductDetails = (productId)=>{
    navigate(`/${productId}`)
   }
    
    

  const renderCard = (product, index) => {
    let productId = product?._id
    
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
      
        return(
        <Col md={4} lg={3} className="mb-4" key={product._id}>
        <Card style={{ width: '18rem', margin: '1.25rem' }} >
            <Card.Img variant="top" src={`http://localhost:5173/src/images/${product.stock_image}`} style={{ width: '17em', margin: '0.25em', height:'13em' }} onClick={()=>goToProductDetails(productId)} />
                <Card.Body>
                    <Card.Title>{product.product_name}</Card.Title>
                    <h3>Price: {product.price}</h3>
                    <Card.Text>         
                    <small><Button onClick={() => handleAddToCart(product)}> Add to Cart</Button> </small> <br/>
                    <Badge onClick={()=>goToProductDetails(productId)}> View </Badge>
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
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom' 
import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';


const ProductDetails = () => {
const stock = useSelector((state)=>state.stock.stock) 

const findItembyId = (id)  => {
  return stock?.find(stock => stock._id === productId)
}
const {productId} = useParams()
const item = findItembyId(productId)




// console.log(product)
  return (
    <div>
    <Container>
        <Row>
        <h1>CHECK OUT</h1>
          
        <Card style={{ width: '40%', height: '100%' }} >              
            <Card.Img variant="top" src={`http://localhost:5173/src/images/${item?.stock_image}`}  style={{ height: '23em', objectFit: 'cover' }} />
          
                <Card.Body>
                    <Card.Title>{item.product_name}</Card.Title>
                    <h3>Price: {item.price}</h3>
                    <Card.Text>         
                    <p>All product details here</p>
                    </Card.Text>
                </Card.Body>
        </Card>
        </Row>
    </Container>
</div>
  )
}

export default ProductDetails
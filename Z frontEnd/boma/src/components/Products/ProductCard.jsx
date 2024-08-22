import  React, { useEffect, useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/store';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function ProductCard({product}) {
  // console.log(product)

  const carts = useSelector(store => store.cart.items);
    console.log(carts)
    const [stock, setStock] = useState([])
    const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch     
    
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart({
           _id: product._id,
            quantity: 1
        }))};
    
        let productId =`${product._id}`

  return (
    
    <Col md={4} lg={3} className="mb-4" key={product._id}>
            <Card style={{ width: '100%', height: '100%' }} >              
              <Link to={productId} style={{ textDecoration: 'none' }} >
                <Card.Img variant="top" src={`http://localhost:5173/src/images/${product.stock_image}`}  style={{ height: '13em', objectFit: 'cover' }} />
                </Link>
                    <Card.Body>
                        <Card.Title>{product.product_name}</Card.Title>
                        <h3>Price: {product.price}</h3>
                        <Card.Text>         
                        <small><Button onClick={handleAddToCart}> Add to Cart</Button> </small> <br/>
                        <Badge > View </Badge>
                        </Card.Text>
                    </Card.Body>
            </Card>          
          </Col>
           
       
  );
}

export default ProductCard;
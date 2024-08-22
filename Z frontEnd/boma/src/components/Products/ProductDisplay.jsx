import  React, { useEffect, useState }  from 'react';
import axiosInstance from '../../api/axios';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function ProductDisplay() {
    const carts = useSelector(store => store.cart.items);
    console.log(carts)
    const [stock, setStock] = useState([])
    const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch     
    
    const dispatch = useDispatch()


        
    //fetch All Stock
    useEffect(() => {
        if(fetchData){
             axiosInstance.get('/stock')
        .then(response => {
            setStock(response.data.doc)
            setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
        })      
        .catch((error) => {
            console.log(error);
        })
        }
    },[fetchData])

    

  const renderCard = (card, index) => {
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: 1,
            quantity: 1
        }))};
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
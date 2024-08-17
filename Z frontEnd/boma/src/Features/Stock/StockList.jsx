import  React, { useEffect, useState }  from 'react';
import axiosInstance from '../../api/axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RegisterStock from './RegisterStock';
import { Container, Row, Col } from 'react-bootstrap';

function StockList() {
    
    const [stock, setStock] = useState([])
    const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch 
    // const [id, setId] = useState(stock._id)
    // const [product, setProduct] = useState(stock.product_name)
    // const [price, setPrice] = useState(stock.price)
    // const [massBought, setMassBought] = useState(stock.mass_bought)
    // const [image, setImage] = useState(stock.stock_image)
    
    //fetch All Stock
    useEffect(() => {
        if(fetchData){
             axiosInstance.get('/stock')
        .then(response => {
            // console.log(response.data.doc)
            setStock(response.data.doc)
            setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
        })      
        .catch((error) => {
            console.log(error);
        })
        }
    },[fetchData])
    

// console.log(stock)
    

//delete Employee
  const onDelete = async (stockId) =>{   
     try{
      await axiosInstance.delete(`/stock/${stockId}`)
      .then(() => setFetchData(true))
     } catch (error){
      console.log(error)
     }
  }
  
  const renderCard = (card, index) => {
    return(
        <Col md={4} lg={3} className="mb-4">
        <Card style={{ width: '18rem', margin: '1.25rem' }} key={card._id} >
            <Card.Img variant="top" src={card.stock_image} />
                <Card.Body>
                    <Card.Title>{card.product_name}</Card.Title>
                    <h3>Price: {card.price}</h3>
                    <Card.Text>         
                    <small> Total Mass bought: {card.mass_bought} </small> <br/>
                    <small> Mass Available: {card.mass_available} </small>
                    </Card.Text>        
                    <Button variant="danger" onClick={() => {onDelete}} >Delete</Button>
                </Card.Body>
        </Card>
        </Col>
    )
  }

  return (
    <Container>
        <Row>
            {stock.map(renderCard)}
            <RegisterStock />
        </Row>
    </Container>
  );
}

export default StockList;
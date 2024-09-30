import { useGetStockQuery } from './stockApiSlice';
import  React, { useEffect, useState }  from 'react';
import axiosInstance from '../../api/axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RegisterStock from './RegisterStock';
import { Container, Row, Col } from 'react-bootstrap';
import EditStock from './EditStock';

function StockList() {
    
    // const [stock, setStock] = useState([])
    const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch     
    
    const createStock = async(formdata) =>{
        // console.log(formdata)
        try{
             await axiosInstance.post('/stock', formdata, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }},
        )
        .then(result => setFetchData(true))
        }
        catch(error) {console.log(error)}
    }
    
    //fetch All Stock
    const {data, error, isLoading} = useGetStockQuery()
    let stock
    if(data)  {
        const {ids, entities} = data        

        stock = ids.map(id=>entities[id])
    } 
    
    
//update Stock
const onUpdate = async (stockId) =>{   
    try{
     await axiosInstance.patch(`/stock/${stockId}`)
     .then(() => {setFetchData(true)})
    } catch (error){
     console.log(error)
    }
 }
    

//delete Stock
  const onDelete = async (stockId) =>{   
     try{
      await axiosInstance.delete(`/stock/${stockId}`)
      .then(() => {setFetchData(true)})
     } catch (error){
      console.log(error)
     }
  }
  
  const renderCard = (card, index) => {
    return(
        <Col md={4} lg={3} className="mb-4" key={card._id}>
        <Card style={{ width: '18rem', margin: '1.25rem' }} >
            <Card.Img variant="top" src={`http://localhost:5173/src/images/${card.stock_image}`} style={{ width: '17em', margin: '0.25em', height:'13em' }} />
                <Card.Body>
                    <Card.Title>{card.product_name}</Card.Title>
                    <h3>Price: {card.price}</h3>
                    <Card.Text>         
                    <small> Total Mass bought: {card.mass_bought} </small> <br/>
                    <small> Mass Available: {card.mass_available} </small>
                    </Card.Text>        
                    <Button variant="danger" onClick={() => onDelete(card._id)} >Delete</Button>
                </Card.Body>
                    <EditStock  onUpdate={onUpdate} card={card} />
        </Card>
        </Col>
    )
  }

  return (
      <Container className='main-container'>
      {stock === null ? "" :
        <Row>
            {stock?.map(renderCard)}
            <RegisterStock createStock={createStock} />
        </Row>}
    </Container>
  );
}

export default StockList;
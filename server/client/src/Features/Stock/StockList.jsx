import { useGetStockQuery,useUpdateStockMutation, useDeleteStockMutation } from './stockApiSlice';
import  React, { useEffect, useState }  from 'react';
import axiosInstance from '../../api/axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RegisterStock from './RegisterStock';
import { Container, Row, Col } from 'react-bootstrap';
import EditStock from './EditStock';

function StockList() {
        
    //fetch All Stock using custom hook
    const {data, error, isLoading, refetch} = useGetStockQuery()

    //delete item using custom hook
    const [deleteStock, {
          isSuccess: isDelSuccess,
          isError: isDelError,
          error: delerror
        }] = useDeleteStockMutation()
    
    const [updateStock, {
        isFetching,
        isFulfilled,
        isError,
        error: updateError
        }] = useUpdateStockMutation()

    let stock = []
    if(data)  {
        const {ids, entities} = data        

        stock = ids.map(id=>entities[id])
    } 
        
    
    const createStock = async(formdata) =>{
        try{
            const result = await axiosInstance.post('/stock', formdata, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }},
        )
        .then(result => refetch())
        }
        catch(error) {console.log(error)}
    }
    

    
//update Stock
const onUpdate = async (stockId, formData) =>{ 
    console.log('sent id', stockId)
    try{
     await updateStock(formData)
     .then(() => {refetch()})
    } catch (error){
     console.log(error)
    }
 }
    

//delete Stock
  const onDelete = async (stockId) =>{  
     try{
      await deleteStock(stockId)
      .then(() => {refetch()})
     } catch (error){
      console.log(error)
     }
  }
  
  const renderCard = (card, index) => {
    return(
        <Col md={4} lg={3} className="mb-4" key={card._id}>
        <Card style={{ width: '18rem', margin: '1.25rem' }} >
            <Card.Img variant="top" src={`/images/${card.stock_image}`} style={{ width: '17em', margin: '0.25em', height:'13em' }} />
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
        {stock.length === 0 ? (
            <div>No stock available</div>
        ) :
        <Row>
            {stock?.map(renderCard)}
            <RegisterStock createStock={createStock} />
        </Row>}
    </Container>
  );
}

export default StockList;
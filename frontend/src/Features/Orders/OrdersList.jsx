import { useGetOrdersQuery } from './OrdersApiSlice';
import  React, { useEffect, useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Table, ListGroup } from 'react-bootstrap';

function OrdersList() { 
    
    //fetch All Stock
    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
      } = useGetOrdersQuery(undefined, {
        // pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
      })
    console.log(data)
    let orders
    if(data)  {
        const {ids, entities} = data        

        orders = ids?.map(id=>entities[id])
    } 
    

 //delete Stock
//   const onDelete = async (stockId) =>{   
//      try{
//       await axiosInstance.delete(`/stock/${stockId}`)
//       .then(() => {setFetchData(true)})
//      } catch (error){
//       console.log(error)
//      }
//   }  
  
  return (
    <Container className='main-container'>
    <div className="container mt-3">      
      <ListGroup>
        <ListGroup.Item><h1>List of Boma Butchery Orders</h1> </ListGroup.Item>
      </ListGroup>
    
    <Table striped bordered hover>
      <thead className="table-success">
        <tr>
          <th>#</th>
          <th className='text-primary' >Payment Intent</th>
          <th className='text-primary' >Payment status</th>
          <th className='text-primary'>Delivery status</th>
          <th className='text-primary'>Total</th>
          {/* <th className='text-primary' colSpan={2}>Modify Entry</th> */}
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, index) => {    
          return(
          <tr key={order._id}>
            <td>{index + 1}</td> 
            <td>{order.paymentIntent}</td>
            <td>{order.payment_status}</td>
            <td>{order.delivery_status}</td>
            <td>{order.total}</td>          
            {/* <td><Button variant='danger' onClick={() => {deleteOrder(order._id)}}> Delete </Button></td> */}
             
          </tr>  
        )})}        
      </tbody>
    </Table>
    </div>
  </Container>
  );
}

export default OrdersList;
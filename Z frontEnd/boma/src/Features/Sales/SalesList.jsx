import  React, { useEffect, useState }  from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axios';
import RegisterSales from './RegisterSales';
import EditSale from './EditSale';


export default function SalesList() {
  const [sales, setSales] = useState([])
  const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch
      
  
    //fetch All Sales
  useEffect(() => { 
  if (fetchData) {
    axiosInstance.get('/sales')
    .then(response => {
        // console.log(response)
        setSales(response.data.saleProducts)
        setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
    })      
    .catch((error) => {
        console.log(error);
    })
  }}, [fetchData])

  
//delete Sale
  const onDelete = async (salesId) =>{   
     try{
      await axiosInstance.delete(`/sales/${salesId}`)
      .then(() => setFetchData(true))
     } catch (error){
      console.log(error)
     }
  }

  return (
  
    <div className="container mt-3">
      
      <ListGroup>
        <ListGroup.Item><h1>Sales</h1> </ListGroup.Item>
      </ListGroup>

    
    <Table striped bordered hover>
      <thead className="table-success">
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Mass sold</th>
          <th>Transaction by</th>
          <th>Date</th>
          <th colSpan={2}>Modify Entry</th>
        </tr>
      </thead>
      <tbody>
      {sales.map((sale, index) => (
          <tr key={sale._id}>
            <td>{index + 1}</td> 
            <td>{sale.product}</td>                        
            <td>{sale.price}</td>                        
            <td>{sale.mass}</td>                        
            <td>{sale.servedBy}</td>                        
            <td>{sale.date}</td>                        
            <td><Button variant='danger' onClick={() => {onDelete(sale._id)}}> Delete </Button></td>
            <td><EditSale sale={sale} /> </td>
          </tr>          
        ))}        
        
      </tbody>
    </Table>
    <RegisterSales />
      </div>
    
  );
}

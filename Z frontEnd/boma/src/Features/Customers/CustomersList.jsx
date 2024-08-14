import  React, { useEffect, useState }  from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axios';
import RegisterCustomer from './RegisterCustomer';
import EditCustomer from './EditCustomer';



export default function CustomersList() {
  const [customers, setCustomers] = useState([])
  const [fetchData, setFetchData] = useState(true); // State to trigger data re-fetch
      
  
    //fetch All customers
 useEffect(() => { 
  if (fetchData) {
    axiosInstance.get('/customers')
    .then(response => {
        setCustomers(response.data.customers)
        // console.log(response.data.customers)
        setFetchData(false); // Reset fetchData to avoid continuous re-fetch       
    })      
    .catch((error) => {
        console.log(error);
    })
  }}, [fetchData])

  


  return (
  
    <div className="container mt-3">
      
      <ListGroup>
        <ListGroup.Item><h1>List of Boma Butchery Customers</h1> </ListGroup.Item>
      </ListGroup>

    
    <Table striped bordered hover>
      <thead className="table-success">
        <tr>
          <th>#</th>
          <th>Customer Names</th>          
          <th>Phone Number</th>          
        </tr>
      </thead>
      <tbody>
      {customers.map((customer, index) => (
          <tr key={index}>
            <td>{index + 1}</td> 
            <td>{customer.customer_name}</td>
            <td>{customer.customer_phone}</td>                    
            <td><EditCustomer customers={customers} id={customer._id} customer_name={customer.customer_name} customer_phone={customer.customer_phone} /> </td>
          </tr>          
        ))}        
        <RegisterCustomer />
      </tbody>
    </Table>
      </div>
    
  );
}

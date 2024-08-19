import  React, { useEffect, useState }  from 'react';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import axiosInstance from '../../api/axios';
import RegisterCustomer from './RegisterCustomer';
import EditCustomer from './EditCustomer';



export default function CustomersList() {
  const [customers, setCustomers] = useState([])  
  
  const postCustomer = async(data) => {
    try{
    await axiosInstance.post('/customers', data)
    .then((result) => {      
      fetchCustomers()
      //  console.log(result)
    })
    }catch(error) {console.log(error)}
  }

  const fetchCustomers =async ()=>{
    try{
   await axiosInstance.get('/customers')
    .then(response => {
        setCustomers(response.data.customers)
        // console.log(response.data.customers)     
    })      
    }catch(error) {
        console.log(error);
    }
  }

    //fetch All customers
 useEffect(() => {   
  fetchCustomers()
  }, [])

  
    const UpdateCustomer = async (customer) => {  
      try{
        await axiosInstance.patch(`/customers/${customer.customer_id}`, customer)
        .then((result) => {
            fetchCustomers()
            handleClose()
            console.log(result)
          })
        }catch(error) {console.log(error)}
      }



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
          <tr key={customer.customer_id}>
            <td>{index + 1}</td> 
            <td>{customer.customer_name}</td>
            <td>{customer.customer_phone}</td>                    
            <td><EditCustomer customer={customer} UpdateCustomer={UpdateCustomer} fetchCustomers={fetchCustomers} /> </td>
          </tr>          
        ))}        
      </tbody>
    </Table>
        <RegisterCustomer postCustomer={postCustomer} />
      </div>
    
  );
}

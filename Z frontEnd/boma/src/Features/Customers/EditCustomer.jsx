import { useState, useEffect } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';
import axiosInstance from '../../api/axios';

function EditCustomer({UpdateCustomer, customer, fetchCustomers}) {
  const [show, setShow] = useState(false);  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [customer_name, setCustomer_name] = useState(customer.customer_name)
  const [customer_phone, setCustomer_phone] = useState(customer.customer_phone)

  const onNameChange = e => setCustomer_name(e.target.value)
  const onPhoneNumberChange = e => setCustomer_phone(e.target.value)

  const data = {customer_name, customer_phone}

  const handleSubmit = (e) =>{
    e.preventDefault();
    UpdateCustomer(data)
  }
  
 

  //delete customer
  const onDelete = async (customersId) =>{   
    try{
     await axiosInstance.delete(`/customers/${customer.customer_id}`)
     .then(() => fetchCustomers())
    } catch (error){
     console.log(error)
    }
 }

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Customer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form style={{paddingTop: '2em'}} >

            <Form.Group className="mb-3" controlId="customer_name">
              <Form.Label>* Enter Full Names:</Form.Label>
              <Form.Control type="string" onChange={onNameChange} value={customer_name}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="customer_phone">
              <Form.Label>* Phone Number:</Form.Label>
              <Form.Control type="string" onChange={onPhoneNumberChange}  value={customer_phone} />
            </Form.Group>           

          </Form>
          

        </Modal.Body>
        <Modal.Footer>          
          <Button variant='danger' onClick={() => onDelete(customer._id)}> Delete </Button>
          <Button variant="primary" onClick={handleSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCustomer;
import { useState } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';
import axiosInstance from '../../api/axios';

function RegisterCustomer({postCustomer}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [customer_name, setCustomer_name] = useState()
  const [customer_phone, setCustomer_phone] = useState()
  

  const onNameChange = e => setCustomer_name(e.target.value)
  const onPhoneNumberChange = e => setCustomer_phone(e.target.value)
  
  const data = {customer_name, customer_phone}

  const handleRegister = (e) => {
    e.preventDefault();
    postCustomer(data)
    handleClose()
  }

  return (
    <>
      <Button variant='success' style={{paddingLeft: '4em', paddingRight: '5em', marginTop: '3em'}} onClick={handleShow}>
        Add +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form style={{paddingTop: '2em'}} >

                <Form.Group className="mb-3" controlId="customer_name">
                <Form.Label>* Enter Names:</Form.Label>
                <Form.Control type="string" onChange={onNameChange}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone_number">
                <Form.Label>* Phone Number:</Form.Label>
                <Form.Control type="string" onChange={onPhoneNumberChange}   />
                </Form.Group>

            </Form>
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRegister} >Register</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterCustomer;
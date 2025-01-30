//COMPONENT used in the customerList to add new customer
import { useState } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';
import { useAddNewCustomerMutation } from './CustomerApiSlice';

function RegisterCustomer() {
  const [addNewCustomer, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useAddNewCustomerMutation()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [customer_name, setCustomer_name] = useState();
  const [email, setEmail] = useState();
  const [customer_phone, setCustomer_phone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const data = {customer_name, email, customer_phone, password, confirmPassword}

  const handleRegister = async(e) => {
    e.preventDefault();
    // postCustomer(data)
    await addNewCustomer(data)
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

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Names</Form.Label>
            <Form.Control type="string" onChange = {(e) => setCustomer_name(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange = {(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="string" name='phone' onChange = {(e) => setCustomer_phone(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="string" name='password' onChange = {(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="string" name='confirmPassword' onChange = {(e) => setConfirmPassword(e.target.value)}/>
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
// ADMIN ADDS EMPLOYEES DIRECTLY IN THE EMPLOYEE LIST
import { useState } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';
import axiosInstance from '../../api/axios';
import { useAddNewEmployeeMutation } from './EmployeeApiSlice';

function RegisterEmployee() {
  const [addNewEmployee, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useAddNewEmployeeMutation()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [employee_name, setEmployee_name] = useState()
  const [designation, setDesignation] = useState()
  const [phone_number, setPhone_number] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  

  const onNameChange = e => setEmployee_name(e.target.value)
  const onDesignationChange = e => setDesignation(e.target.value)
  const onPhoneNumberChange = e => setPhone_number(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const data = {employee_name, designation, phone_number, email, password}

  const handleRegister = async(e) => {
    e.preventDefault();
    // postEmployee(data)
    await addNewEmployee(data)
    setShow(false)
  }

  return (
    <>
      <Button variant='success' style={{paddingLeft: '4em', paddingRight: '5em', marginTop: '3em'}} onClick={handleShow}>
        Add +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form style={{paddingTop: '2em'}} >

                <Form.Group className="mb-3" controlId="employee_name">
                <Form.Label>* Enter Full Names:</Form.Label>
                <Form.Control type="string" onChange={onNameChange}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="designation">
                <Form.Label>* Enter your designation / role:</Form.Label>
                <Form.Control type="string" onChange={onDesignationChange}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone_number">
                <Form.Label>* Phone Number:</Form.Label>
                <Form.Control type="string" onChange={onPhoneNumberChange}   />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                <Form.Label>Enter Your Email address:</Form.Label>
                <Form.Control autoComplete='true' type="email"  onChange={onEmailChange}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                <Form.Label>* Password:</Form.Label>
                <Form.Control type="string" onChange={onPasswordChange}  />
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

export default RegisterEmployee;
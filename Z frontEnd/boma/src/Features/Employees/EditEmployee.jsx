import { useState } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';

function EditEmployee(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [employee_name, setEmployee_name] = useState(props.employee_name)
  const [designation, setDesignation] = useState(props.designation)
  const [phone_number, setPhone_number] = useState(props.phone_number)
  const [email, setEmail] = useState(props.email)
  const [password, setPassword] = useState(props.password)
  

  const onNameChange = e => setEmployee_name(e.target.value)
  const onDesignationChange = e => setDesignation(e.target.value)
  const onPhoneNumberChange = e => setPhone_number(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form style={{paddingTop: '2em'}} >

            <Form.Group className="mb-3" controlId="employee_name">
              <Form.Label>* Enter Full Names:</Form.Label>
              <Form.Control type="string" onChange={onNameChange} value={employee_name}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>* Enter your designation / role:</Form.Label>
              <Form.Control type="string" onChange={onDesignationChange} value={designation} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>* Phone Number:</Form.Label>
              <Form.Control type="string" onChange={onPhoneNumberChange}  value={phone_number} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Enter Your Email address:</Form.Label>
              <Form.Control autoComplete='true' type="email"  onChange={onEmailChange} value={email} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>* Password:</Form.Label>
              <Form.Control type="string" onChange={onPasswordChange} value={password} />
            </Form.Group>            

          </Form>
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
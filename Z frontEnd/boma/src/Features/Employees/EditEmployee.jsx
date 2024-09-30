import { useState } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';
import { useUpdateEmployeeMutation, useDisableEmployeeMutation  } from './EmployeeApiSlice';

function EditEmployee({employee}) {
  const [updateEmployee, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useUpdateEmployeeMutation()

  const [disableEmployee, {
    isSuccess: isDelSuccess,
    isError: isDelError,
    error: delerror
  }] = useDisableEmployeeMutation()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [employee_name, setEmployee_name] = useState(employee.employee_name)
  const [designation, setDesignation] = useState(employee.designation)
  const [bio, setBio] = useState(employee.bio)
  const [phone_number, setPhone_number] = useState(employee.phone_number)
  const [email, setEmail] = useState(employee.email)

  const onNameChange = e => setEmployee_name(e.target.value)
  const onDesignationChange = e => setDesignation(e.target.value)
  const onBioChange = e => setBio(e.target.value)
  const onPhoneNumberChange = e => setPhone_number(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)

  const data = {id:employee._id, employee_name, designation, bio, phone_number, email}

  const handleEditEmployee = async(e) => {
    e.preventDefault()
    await updateEmployee(data)
    handleClose()
  }

  const handleDisableEmployee = async (e) => {
    e.preventDefault()
    await disableEmployee (employee._id)
    handleClose()
  }

 //dynamic button labeling
  let label = {content: ''}
  switch(true){
    case employee.active:
      label.content = 'Disable'
    break

    default:
      label.content = 'Enable'
    break
  }

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form style={{paddingTop: '2em'}} >
            <Form.Group className="mb-3" controlId="employee_name">
              <Form.Label>* Enter Full Names:</Form.Label>
              <Form.Control type="string" onChange={onNameChange} value={employee_name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>* Enter your designation / role:</Form.Label>
              <Form.Control type="string" onChange={onDesignationChange} value={designation} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="designation">
              <Form.Label> Enter your bio:</Form.Label>
              <Form.Control type="string" onChange={onBioChange} value={bio} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone_number">
              <Form.Label>* Phone Number:</Form.Label>
              <Form.Control type="string" onChange={onPhoneNumberChange}  value={phone_number} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Enter Your Email address:</Form.Label>
              <Form.Control autoComplete='true' type="email"  onChange={onEmailChange} value={email} />
            </Form.Group> 
        </Form>         

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDisableEmployee}>
            {label.content}
          </Button>
          <Button variant="primary" onClick={handleEditEmployee} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;


//ORIGINAL  CODE......................................................

  // const [employeeDetails, setEmployeeDetails] = useState({
  //   id:employee._id,
  //   employee_name: employee.employee_name,
  //   designation: employee.designation,
  //   phone_number: employee.phone_number,
  //   email: employee.email,
  //   password: employee.password
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEmployeeDetails(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };


  
   //update employee
  //  const handleEditEmployee = async (e) => {  
  //   e.preventDefault()
  //   try{
  //     await axiosInstance.patch(`/employees/${employee._id}`, data)
  //     .then((result) => {
  //         handleClose()
  //         // console.log(result)
  //       })
  //     }
  //     catch(error) {console.log(error)}
  // }

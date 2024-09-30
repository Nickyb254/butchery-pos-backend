//returns button- used by Admin
import { useState } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';
import { useAddNewSaleMutation } from './SalesApiSlice';

function RegisterSales() {
  const [addNewSale, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useAddNewSaleMutation()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [product, setProduct] = useState()
  const [price, setPrice] = useState()
  const [mass_sold, setMass_sold] = useState()
  const [transaction_by, setTransaction_by] = useState()
  

  const onProductChange = e => setProduct(e.target.value)
  const onPriceChange = e => setPrice(e.target.value)
  const onMassChange = e => setMass_sold(e.target.value)
  const onTransaction_byChange = e => setTransaction_by(e.target.value)

  const data = {product, price, mass_sold, transaction_by}

  const handleRegister = async(e) => {
    e.preventDefault();
    await addNewSale(data)
    handleClose()
  }
  return (
    <>
      <Button variant='success' style={{paddingLeft: '4em', paddingRight: '5em', marginTop: '3em'}} onClick={handleShow}>
        Add +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Record a Sale</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <Form style={{paddingTop: '2em'}} >
            <Form.Group className="mb-3" controlId="product">
            <Form.Label>* Enter Full Names:</Form.Label>
            <Form.Control type="string" onChange={onProductChange}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
            <Form.Label>* Enter your price / role:</Form.Label>
            <Form.Control type="string" onChange={onPriceChange}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mass_sold">
            <Form.Label>* Mass Sold:</Form.Label>
            <Form.Control type="string" onChange={onMassChange}   />
            </Form.Group>

            <Form.Group className="mb-3" controlId="transaction_by">
            <Form.Label>Enter Your Transaction_by address:</Form.Label>
            <Form.Control autoComplete='true' type="transaction_by"  onChange={onTransaction_byChange}  />
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

export default RegisterSales;



//ORIGINAL CODE...............................

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   axiosInstance.post('/sales', data)
  //   .then((result) => {
  //     handleClose()
  //      console.log(result)
  //   })
  //   .catch(error => console.log(error))
  // }

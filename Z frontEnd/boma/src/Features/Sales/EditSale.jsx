import { useState, useEffect } from 'react';
import {Form, Button,  Modal} from 'react-bootstrap';
import axiosInstance from '../../api/axios';

function EditSale(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [product, setProduct] = useState(props.sale.product)
  const [price, setPrice] = useState(props.sale.price)
  const [mass_sold, setMass_sold] = useState(props.sale.mass)
  const [transaction_by, setTransaction_by] = useState(props.sale.servedBy)
  

  const onProductChange = e => setProduct(e.target.value)
  const onPriceChange = e => setPrice(e.target.value)
  const onMassChange = e => setMass_sold(e.target.value)
  const onTransaction_byChange = e => setTransaction_by(e.target.value)

  const data = {product, price, mass_sold, transaction_by}

    
  
  const handleEditSale = async (e) => {  
  e.preventDefault()
  try{
    await axiosInstance.patch(`/sales/${props.sale._id}`, data)
    .then((result) => {
        // setFetchData(true)
        handleClose()
        console.log(result)
      })
    }catch(error) {console.log(error)}
  }

    return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Sale
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Sale Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form style={{paddingTop: '2em'}} >

            <Form.Group className="mb-3" controlId="product">
              <Form.Label>* Product Names:</Form.Label>
              <Form.Control type="string" onChange={onProductChange} value={product}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>* Price:</Form.Label>
              <Form.Control type="string" onChange={onPriceChange} value={price} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mass_sold">
              <Form.Label>* Mass Sold:</Form.Label>
              <Form.Control type="Number" onChange={onMassChange}  value={mass_sold} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="transaction_by">
              <Form.Label>Served By:</Form.Label>
              <Form.Control type="string"  onChange={onTransaction_byChange} value={transaction_by} />
            </Form.Group>
          </Form>
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSale} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditSale;
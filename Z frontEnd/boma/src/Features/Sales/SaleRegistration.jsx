//Returns a form - used by Employee
import React, { useState } from 'react';
import saleIcon from '../../components/assets/sale-icon.png';
import {  Card, Form, Button, Row, Col } from 'react-bootstrap';
import SalesList from './SalesList';
import { useAddNewSaleMutation } from './SalesApiSlice';

//order entry required
const SaleRegistration = () => {
  const [addNewSale, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useAddNewSaleMutation()

  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [mass_sold, setMass_sold] = useState('');
  const [transaction_by, setTransaction_by] = useState('');

  const onProductChange = e => setProduct(e.target.value)
  const onPriceChange = e => setPrice(e.target.value)
  const onMassChange = e => setMass_sold(e.target.value)
  const onTransaction_byChange = e => setTransaction_by(e.target.value)

  const data = {product, price, mass_sold, transaction_by}

  const handleSubmit = async(e) => {
    e.preventDefault();
    await addNewSale(data)
    handleClose()
  }


  return (
  <div className='main-container' style={{ marginTop: '3%' }}>
    <Row  className='d-flex'>
      <Col className='col-sm-4 col-lg-4 '>
        <Card>
        <Card.Img variant="top" style={{ width: '5%', margin: 'auto' }} src={saleIcon} />
          <Card.Body>
            <Card.Title style={{ width: '90%', margin: 'auto' }}> Enter Sales Records: </Card.Title>
              <Form style={{padding: '2%'}} >

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

                    <Button variant="primary" onClick={handleSubmit}> Save Changes</Button>
                </Form>
          </Card.Body>
        </Card>
      </Col>

      <Col className='col-sm-8 col-lg-8 '>            
          <SalesList/>          
      </Col>
    </Row>
  
  </div>
  )
}

export default SaleRegistration





// original code
// const handleSubmit = (e) =>{
//   e.preventDefault();
//   axios.post("http://localhost:3000/sales", {product, price, mass_sold, transaction_by})
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// }
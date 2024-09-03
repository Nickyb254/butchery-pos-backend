import { useState } from 'react';
import {Form, Button,  Modal, Image} from 'react-bootstrap';

function EditStock({onUpdate, card}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  const [product_name, setProduct_name] = useState(card.product_name);
  const [price, setPrice] = useState(card.price);
  const [mass_bought, setMass_bought] = useState(card.mass_bought);
  const [mass_available, setMass_available] = useState(card.mass_available);
  const [supplier_name, setSupplier_name] = useState(card.supplier_name);
  const [transaction_by, setTransaction_by] = useState(card.transaction_by);
  const [stock_image, setStock_image] = useState(card.stock_image);

  const [imageURL, setImageURL] = useState(null);

  const onProductChange = (e) => setProduct_name(e.target.value)
  const onPriceChange = (e) => setPrice(e.target.value)
  const onMassBoughtChange = (e) => setMass_bought(e.target.value)
  const onMassChange = (e) => setMass_available(e.target.value)
  const onSupplierChange = (e) => setSupplier_name(e.target.value)
  const onTransactionByChange = (e) => setTransaction_by(e.target.value)
  const onFileChange = (e) => setStock_image(e.target.files[0])

  // const data = {product_name, price, mass_bought, mass_available, supplier_name, transaction_by, stock_image}

    
  const handleRegister = (e) =>{
    e.preventDefault();
    if (!stock_image) {
     console.log('No image selected!')
    }
     // Create an image URL for preview
    //  const reader = new FileReader();
    //  reader.onloadend = () => {
    //    setImageURL(reader.result);
    //  };
    //  reader.readAsDataURL(stock_image);
   
    const formData = new FormData()
    formData.append('image' , stock_image)
    formData.append('product_name', product_name);
    formData.append('price', price);
    formData.append('mass_bought', mass_bought);
    formData.append('mass_available', mass_available);
    formData.append('supplier_name', supplier_name);
    formData.append('transaction_by', transaction_by);
    createStock(formData)
    setShow(false)
  }

  return (
    <>
      <Button variant='success' style={{paddingLeft: '4em', paddingRight: '5em', marginTop: '3em'}} onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Stock Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form style={{paddingTop: '2em'}} onSubmit={handleRegister} >

                <Form.Group className="mb-3" controlId="product_name">
                <Form.Label>* Enter Product Names:</Form.Label>
                <Form.Control type="string" onChange={onProductChange} value={product_name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                <Form.Label>* Price in Ksh./ role:</Form.Label>
                <Form.Control type="number" onChange={onPriceChange} value={price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mass_bought">
                <Form.Label>* Mass bought:</Form.Label>
                <Form.Control type="number" onChange={onMassBoughtChange}  value={mass_bought} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mass_availablel">
                <Form.Label>Mass available:</Form.Label>
                <Form.Control type="number"  onChange={onMassChange} value={mass_available} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="supplier_name">
                <Form.Label>* Supplier name:</Form.Label>
                <Form.Control type="string" onChange={onSupplierChange} value={supplier_name} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="transaction_by">
                <Form.Label>* Staff name:</Form.Label>
                <Form.Control type="string" onChange={onTransactionByChange} value={transaction_by} />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" accept='image/*' onChange={onFileChange} />
                <Image src={imageURL} />
                </Form.Group>
                <Button variant="primary" type="submit" >Register</Button>
            </Form>
          

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          {/* <Button variant="primary" type="submit" >Register</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditStock;
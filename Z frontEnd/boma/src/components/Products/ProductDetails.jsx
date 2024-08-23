import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom' 
import { Container, Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { addToCart } from '../../store/store';
import { useContext } from 'react';
import DataContext from '../../context/DataProvider';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1);
    
    const {stock} = useContext(DataContext)
    // console.log(productId)
    const dispatch = useDispatch()

    useEffect(()=>{
        const cartProduct = stock.filter(product => product._id === productId )
        if(cartProduct.length > 0){
            setProduct(cartProduct[0])
        }else{
            console.log('No Product to send to cart')
        }
    },[productId])

    //changing cart quantity
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            _id: product._id,
            quantity: quantity
        }));
    }

    //testing the addition of arbitrary quantities to cart
    const carts = useSelector(store => store.cart.items);
    // console.log(carts)

  return (
    <div>
        <Container>
            <Row>
            <h1>PRODUCT DETAILS</h1>
              
            <Card style={{ width: '40%', height: '100%' }} >              
                <Card.Img variant="top" src={`http://localhost:5173/src/images/${product.stock_image}`}  style={{ height: '23em', objectFit: 'cover' }} />
              
                    <Card.Body>
                        <Card.Title>{product.product_name}</Card.Title>
                        <h3>Price: {product.price}</h3>
                        <Card.Text>         
                        <small><Button onClick={handleMinusQuantity}> - </Button> </small> 
                        <Button>{quantity}</Button>
                        <small><Button onClick={handlePlusQuantity}> + </Button> </small> 
                        <Button onClick={handleAddToCart}> Add to Cart </Button>
                        </Card.Text>
                    </Card.Body>
            </Card>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetails
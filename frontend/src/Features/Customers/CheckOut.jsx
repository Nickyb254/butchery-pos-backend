import Container from 'react-bootstrap/Container';
import {Row, Col, Nav, Button, ButtonGroup} from 'react-bootstrap';
import { Card, Form, FormLabel, NavLink } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useCheckOutMutation } from './CustomerApiSlice';
import { selectCustomer } from './CustomerSlice';
import { selectCart } from '../Cart/cartSlice';
import CartItem from '../Cart/CartItem';
import {getTotals, clearCart } from '../Cart/cartSlice';

function CheckOut() {
  const dispatch = useDispatch()
  const carts = useSelector(selectCart);
  const cartState = useSelector((state) => state.cart)
  
  const customer = useSelector(selectCustomer )
  
  const [checkOut, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useCheckOutMutation()  

    const handleCheckOut = (e) => {
      e.preventDefault()
      checkOut({carts, userId: customer?.id})
        .then((res)=>{
            if(res?.data?.url){
              console.log('this is response in button', res)
              window.location.href = res.data.url
              dispatch(clearCart())
            }
            console.log(res)
        })
        .catch((error)=> console.log(error))
    }

    //end outdated totals
    useEffect(()=>{
      dispatch(getTotals())
    }, [carts, dispatch])
  
    const resetCart = ()=>{dispatch(clearCart())} 
    
    //dynamic content
    const content = carts?.length >= 1 

      ? 

        <Row>
          <Col xs={12} md={8}>
            
            <Card className="container p-3">
                <div>
                {carts?.map((item, key) => 
                    <CartItem key={key} item={item}/>
                    )}
                </div>
                <br/>
                <button className='btn btn-danger flex-fill' onClick={resetCart} >RESET CART</button>
          </Card>
          </Col>
  
          <Col xs={6} md={4}>
            <Card className="container p-3">  
              <h6 style={{textDecoration: 'underline'}} >Cart Summary</h6>
              <strong>Total value: {cartState?.totalCartValue} </strong>
              <small>Boma Butchery offers delivery services within the vicinity</small>
              <small>Delivery may attract additional charges<br/> ***affordable****reliable***convinient</small>
              <Button onClick={handleCheckOut} >PAY</Button>
            </Card>
          </Col>
        </Row>

      : <strong>No Items in the Cart</strong>;
      
    return (    
      <main className='main-container'>
        <Container>
          {content}
        </Container>
      </main>
  );
}

export default CheckOut;


// const navigate = useNavigate()
  //  const goToCheckout = ()=>{
  //   navigate('checkout')
  //  }
  



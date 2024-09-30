import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './CartItem';
import { useState , useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { iconCart } from '../../components/assets/all_products';
import { getTotals, clearCart } from './cartSlice';
import { useNavigate } from 'react-router-dom';
import { selectCustomer } from '../Customers/CustomerSlice';

function OffCanvasExample({ name, ...props }) {
  const navigate = useNavigate()
  const carts = useSelector(state => state.cart.cartItems);
  const totalCartValue = useSelector(state => state.cart.totalCartValue)
  const customer = useSelector(selectCustomer )
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const goToCheckout = ()=>{
    if(customer){
      navigate('customers/profile/checkout')
    }else{
      navigate('/customers')
    }
  }

  const dispatch = useDispatch()
  const resetCart = ()=>{dispatch(clearCart())}  

  return (
    <>
      <div className="square bg-primary rounded-pill" style={{width: "4.2em"}} onClick={handleShow}>
        <div  className='d-flex justify-content-center align-items-center position-relative' >
          <img src={iconCart} 
                alt="" style={{ width: '2.0rem' }}                 
                />
            <span className="square bg-primary rounded-circle text-white"><strong>{carts.length}</strong></span>
      </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><strong> SHOPPING CART</strong></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>          
          <div className='p-3 flex-grow-1 overflow-auto'>
              {carts.map((item, key) => 
              <CartItem key={key} item={item}/>)}
          </div>
               <div>
                  <strong>TOTAL: ${totalCartValue}.00</strong>
                </div>          
          <div className='d-flex'>
             <button className='btn btn-danger flex-fill' onClick={resetCart} >RESET</button>
             <button className='btn btn-warning flex-fill' onClick={goToCheckout} >CHECKOUT</button>
          </div>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

function CartTab() {
  //useEffect solved error- cannot update a component while rendering a different component. To locate bad setState() call follow the stack trace...
  const carts = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getTotals())
  }, [carts, dispatch])

  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

// render(<CartTab />);

export default CartTab;
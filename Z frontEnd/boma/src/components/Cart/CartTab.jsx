import { useSelector, useDispatch } from 'react-redux' 
import CartItem from './CartItem';
import { useState , useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { iconCart } from '../assets/all_products';
import { getTotals } from './cartSlice';
import { useNavigate } from 'react-router-dom';

function OffCanvasExample({ name, ...props }) {
  const carts = useSelector(state => state.cart.cartItems);
  const totalValue = useSelector(state => state.cart.totalCartValue)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()
   const goToCheckout = ()=>{
    navigate('checkout')
   }

 
   

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="me-2"> */}
      <div className="square bg-primary rounded-pill" style={{width: "150px"}} onClick={handleShow}>
        <div  className='d-flex justify-content-center align-items-center position-relative' >
          <img src={iconCart} 
                alt="" style={{ width: '2.0rem' }}                 
                />
            <span className="square bg-primary rounded-circle">{carts.length}</span>
      </div>
      </div>
      {/* </Button> */}
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        <div className='p-3 flex-grow-1 overflow-auto'>
              {carts.map((item, key) => 
               <CartItem key={key} item={item}/>
               )}
       </div>
               <div><p>TOTAL: ${totalValue}.00</p></div>
          
          <div className='d-flex'>
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
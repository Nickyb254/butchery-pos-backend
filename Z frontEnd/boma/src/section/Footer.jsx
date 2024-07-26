import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  const styles = {
    marginTop: '15vh'
  }
  return (
    <Card className="text-center" style={styles}>      
      {/* <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        We are committed to supplying you with healthy, tasty and safe animal products.
        </Card.Text>
        <Button variant="primary">Hottest Products</Button>
      </Card.Body> */}
      <Card.Footer className="text-muted"> 
        <p>All rights reserved!</p> 
        <p>Email: nickyb254@gmail.com</p>
        <p>Location: Nairobi CBD opp. Jogoo Hse.</p>
      </Card.Footer>
    </Card>
  );
}

export default Footer;


// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <div>     
//       <div  className='my-footer'>
//       <div className='container'>
//           <p>
//             
//            </p>
//             <p>
//             
//             </p>
          
//           <p>        
//             <span> 2024</span> 
//           </p>
//       </div>
//       </div>       
//     </div>
//   )
// }

// export default Footer
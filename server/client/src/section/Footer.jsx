import Card from 'react-bootstrap/Card';

function Footer() {
  const styles = {
    // marginTop: '15vh',
    backgroundColor: '#1d2634',
    // borderTop: '2px solid #ccc'
  }
  return (
    <Card className="text-center" style={styles}>  
      <Card.Footer className="text-muted"> 
        <p  style={{color:'#ffffff'}}> All rights reserved&nbsp; © &nbsp;2025</p> 
        <p  style={{color:'#ffffff'}}>Email: nickyb254@gmail.com &nbsp;| &nbsp;Location: Nairobi CBD opp. Jogoo Hse.</p>
      </Card.Footer>
    </Card>
  );
}

export default Footer;


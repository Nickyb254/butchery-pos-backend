import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Container } from 'react-bootstrap';

const AdminFooter = () => {
const navigate = useNavigate()
const {pathname} = useLocation()

const onGoHomeClicked = () => navigate('/')
let content = null
    if(pathname !== '/admin/dashboard'){
      return  content = (
            <Button title='Home' onClick={onGoHomeClicked}>
                Boma Butchery
            </Button>
        )
    } else{

     content = (
      <>
        <Container style={{marginTop:'1em', marginBottom:'3em' }} >
        <Card.Header>
          {/* <Button>{goHomeButton}</Button> */}
        </Card.Header>
          <Card.Body>            
            <blockquote className="blockquote mb-0">
              <p>                
                ‘Success requires heart-and-soul effort, and you can put your heart and soul only into something you really desire.’{' '}
              </p>

              <footer className="blockquote-footer">
              <p> Schwartz <cite title="Think Big">‘The Magic of Thinking Big’</cite></p>
              </footer>
            </blockquote>
          </Card.Body>
        </Container>
      </>
      )
    }  
  return content
}

export default AdminFooter
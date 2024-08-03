import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const AdminFooter = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const onGoHomeClicked = () => navigate('/')
    let goHomeButton = null
        if(pathname !== '/adminlogin'){
            goHomeButton = (
                <Button title='Home' onClick={onGoHomeClicked}>
                    Boma Butchery
                </Button>
            )
        }

    const content = (
        <Card>
        <Card.Header></Card.Header>
        <Card.Body>            
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              ‘Success requires heart-and-soul effort, and you can put your heart and soul only into something you really desire.’{' '}
            </p>

            <footer className="blockquote-footer">
              Schwartz <cite title="Think Big">‘The Magic of Thinking Big’</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      )

  return content
}

export default AdminFooter
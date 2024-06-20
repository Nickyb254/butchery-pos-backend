import express from 'express';
const router = express.Router();

router.get('/',(request, response, next)=>{
  response.status(200).json({
    message: 'Get request from stock successful!'
  });
});


router.post('/:stockId', (request, response, next)=>{
  response.status(200).json({
    message: 'Post request from stock successful!'
  });
});


router.patch('/:stockId', (request, response, next)=>{
  response.status(200).json({
    message: 'Patch request from stock successful!'
  });
});


router.delete('/:stockId', (request, response, next)=>{
  response.status(200).json({
    message: 'Delete request from stock successful!'
  })
});

export default router;
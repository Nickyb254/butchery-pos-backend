import express from 'express';
const router =  express.Router();

router.get('/', (request, response, next)=>{
  response.status(200).json({
    message: 'Get request from Sales success!'
  });
});


router.post('/:salesId',(request, response, next)=>{
  response.status(200).json({
    message: 'Post request from Sales successful!'
  })
});


router.patch('/:salesId', (request, response, next)=>{
  response.status(200).json({
    message: 'Patch request from Sales successful!'
  })
});


router.delete('/:salesId', (request, response, next)=>{
  response.status(200).json({
    message: 'Delete request from Sales successful!'
  });
});

export default router;
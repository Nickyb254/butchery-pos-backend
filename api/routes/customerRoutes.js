import express from "express";
const router = express.Router();

router.get('/', (request, response, next) => {
  response.status(200).json({
    message: 'Get Request from a customer!'
  });
});


router.post('/', (request, response, next) => {
  response.status(200).json({
    message: 'Post Reqest from a customer!'
  });
});


router.patch('/:customersId',(request, response, next)=>{
  response.status(200).json({
    message: 'Patch Request from a customer!'
  })
});


router.delete('/:customersId',(reqest, response, next)=>{
  response.status(200).json({
    message: 'Delete Request from a customer'
  })
});


export default router;
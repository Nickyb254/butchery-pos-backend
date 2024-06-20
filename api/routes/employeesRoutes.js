import express from "express";
const router = express.Router();

router.get('/', (request, response, next) => {
  response.status(200).json({
    message: 'Get Reqest from a employees!'
  });
});


router.post('/',(request, response, next)=>{
  response.status(200).json({
    message: 'Post Request from an employee!'
  })
});


router.patch('/:employeesId', (request, response, next)=>{
  response.status(200).json({
    message: 'Patch Reqest from an employee!'
  });
});


router.delete('/:employeesId', (request, response, next)=>{
  response.status(200).json({
    message: 'Delete Request from an employee'
  })
});

export default router;
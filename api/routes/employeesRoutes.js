import express from "express";
const router = express.Router();

router.get('/', (request, response, next) => {
  response.status(200).json({
    message: 'Get Reqest from a employees!'
  });
});


router.post('/',(request, response, next)=>{
  const employee = {
    employee_id: request.body.employee_id,
    employee_name: request.body.employee_name,
    designation: request.body.designation,
    phone_number: request.body.phone_number,
  };

  response.status(200).json({
    message: 'Post Request from an employee!',
    employee: employee,
  });
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
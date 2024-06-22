import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import EmployeeModel from "../models/employees.js";

router.get('/', (request, response, next) => {
  EmployeeModel
  .find()
  .exec()
  .then(result => {
    console.log(result);
    response.status(200).json(result);
  })
  .catch(error => {
    console.log(error);
    response.status(500).json({
      error: error
    });
  });
  
});


router.post('/', (request, response, next) => {
  const employee = new EmployeeModel ({
    employee_Id: mongoose.Types.ObjectId,
    employee_name: request.body.employee_name,
    designation: request.body.designation,
    phone_number: request.body.phone_number
  });

  employee
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log(error));

  response.status(200).json({
    message: 'Post Request from an employee!',
    employee: employee,
  });
});

//GET by ID
// router.get('/:employeeId', async(request, response, next) => {
//   try{
//     const customerId = request.params._Id;
//     const result = await CustomerModel.findOne({ customerId: _Id });

//     if (!result) {
//       console.log(request.params.body);
//       return response.status(404).json({ message: 'Customer not found' });
//     }
//     console.log(request.params.body);
//     response.status(200).json(result);    
//   } catch (error) {
//     console.log(error);
//     response.status(500).json({ message: 'Server error', error });
//   }
// });


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
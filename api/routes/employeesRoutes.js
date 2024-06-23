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


//try block was added to catch validation errors. 
//note {.} is removed in catch
//made async thus used await
router.post('/', async (request, response, next) => {
  try{
  const employee = new EmployeeModel ({
    employee_Id: mongoose.Types.ObjectId,
    employee_name: request.body.employee_name,
    designation: request.body.designation,
    phone_number: request.body.phone_number,
    email: request.body.email,
    password: request.body.password
  });

  await employee
  .save()
  .then(result => {
    console.log(result);
    
  response.status(200).json({
    message: 'New Employee created!',
    employee: employee,
  });
  })}
  //.catch(error => console.log(error));
  catch (error) {
    
    response.status(500).json(error);
  }

});

//GET by ID
router.get('/:employeeId', async(request, response, next) => {
  try{
    const _Id = request.params.employee_Id;
    const result = await EmployeeModel.findOne({ employeeId: _Id });

    if (!result) {
      console.log(request.params.body);
      return response.status(404).json({ message: 'Employee not found' });
    }
    console.log(request.params.body);
    response.status(200).json(result);    
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: 'Server error', error });
  }
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
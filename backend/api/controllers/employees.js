import mongoose from "mongoose";
import EmployeeModel from "../models/employees.js";
import bcrypt from 'bcrypt';

export const getAllEmployees = (request, response, next) => {
  EmployeeModel
  .find()
  .exec()
  .then(result => {
    //console.log(result);
    response.status(200).json({result});
  })
  .catch(error => {
    console.log(error);
    response.status(500).json({
      error: error
    });
  });  
}



//create Employee
export const createEmployee = (request, response, next) => {
  EmployeeModel.find({email: request.body.email})
  .exec()
  .then(user => {
    if( user.length >= 1 ){
      return response.status(409).json({
        message: 'Mail exists'
      });
    }
    else {
      bcrypt.hash(request.body.password, 2, (err, hash) => {
        if(err){
          return response.status(500).json({
            error: err
          });
        } else{
          const employee = new EmployeeModel ({
            // employee_Id: new mongoose.Types.ObjectId,
            employee_name: request.body.employee_name,
            designation: request.body.designation,
            phone_number: request.body.phone_number,
            email: request.body.email,
            password: hash
          });
          employee
          .save()
          .then(result => {
            console.log(result);
            response.status(201).json({
              message: 'New Employee created!',
              employee: employee,
            });
          })
          .catch((error) => {
            console.log(error);
            response.status(500).json({
              error: error
            });
          })
        }
    });
    }
  });  
  }



//GET by ID
export const getOneEmployee = (request, response, next) => {
  const _Id = request.params.employeeId;
  EmployeeModel.findById(_Id)
  .exec()
  .then(result => {
    if (!result) {
      console.log(request.params.body);
      return response.status(404).json({ message: 'Employee not found' });
    }
    else{
      console.log(request.params.body);
      response.status(200).json({result});
    }
  })        
  .catch (error => {
    console.log(error);
    response.status(500).json({ 
    message: 'Server error', error
   });
})
}



export const updateEmployee = async (request, response) => {
  try {
   const updateData = request.body;
   const result = await EmployeeModel.updateOne({ _id: request.params.employeesId }, updateData);    

   if (!result.matchedCount) {
     return response.status(404).json({ message: 'Employee not found' });
   }
   else if (result.matchedCount === 1) {response.status(200).json({ 
     message: 'Employee updated successfully', 
     request: {
       type: 'GET',
       description: 'Get all employee',
       url: '​http://localhost:3000/employees/',
     }
   })}   
 } catch (error) {
   console.log(error);
   response.status(500).json({ message: 'Server error', error });
 }
}


export const employeeLogIn = async (request, response, next) => {
  try {
    const employees = await EmployeeModel.find({ email: request.body.email }).exec();

    if (employees.length < 1) {
      return response.status(401).json({
        message: 'Auth failed!'
      });
    }

    const employee = employees[0];
    const isPasswordMatch = await bcrypt.compare(request.body.password, employee.password);
    if(isPasswordMatch){
      console.log('login successful!')
      return response.status(200).json({
        message: 'Login successful!',
        employee: employee
      });
      } else {
      return response.status(401).json({
        message: 'Auth failed!'
      });
    }  
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        error: error
      });
    }
}
  


export const deleteEmployee = async (request, response, next)=>{
  try{
    const result = await EmployeeModel.deleteOne({_id: request.params.employeesId})
    if (result.deletedCount === 1) {
      return response.status(200).json({ 
        message: 'Employee deleted successfully' 
      });
    }
    else if (!result.deletedCount ){
      response.status(404).json({ 
        message: 'Employee not found' 
      });
    }
  }
  catch(error) {
    console.log(error);
    response.status(500).json({
      error: error
    })
  }  
}
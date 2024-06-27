import mongoose from "mongoose";
import EmployeeModel from "../models/employees.js";

export const getAllEmployees = (request, response, next) => {
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
}

//try block was added to catch validation errors. 
//note {.} is removed in catch
//made async thus used await


export const createEmployee = async (request, response, next) => {
  try{
  const employee = new EmployeeModel ({
    employee_Id: new mongoose.Types.ObjectId,
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



export const updateEmployee = async (req, res) => {
  try {
   const updateData = req.body;
   const result = await EmployeeModel.updateOne({ _id: req.params.employeesId }, updateData);    

   if (!result.matchedCount) {
     return res.status(404).json({ message: 'Employee not found' });
   }
   else if (result.matchedCount === 1) {res.status(200).json({ 
     message: 'Employee updated successfully', 
     request: {
       type: 'GET',
       description: 'Get all employee',
       url: '​http://localhost:3000/employees/',
     }
   })}   
 } catch (error) {
   console.log(error);
   res.status(500).json({ message: 'Server error', error });
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
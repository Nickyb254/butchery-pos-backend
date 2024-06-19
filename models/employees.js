const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
  employee_name: {type: string},
  employee_id: {type: number},
  designation: {type: string, default: operator},
  phone_number: { type: number, max: 10},
})

module.exports = mongoose.model('Employees', EmployeeSchema)
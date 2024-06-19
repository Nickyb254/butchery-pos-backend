const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
  employee_id: {type: number},
  employee_name: {type: string},
  designation: {type: string, default: operator},
  phone_number: { type: string, max: 10},
})

module.exports = mongoose.model('Employees', EmployeeSchema)
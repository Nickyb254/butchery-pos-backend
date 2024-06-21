import mongoose  from 'mongoose';


const EmployeeSchema = new mongoose.Schema({
  employee_id: {type: number},
  employee_name: {type: string},
  designation: {type: string, default: operator},
  phone_number: { type: string, max: 10},
})

const EmployeeModel = mongoose.model('Employees', EmployeeSchema)
export default EmployeeModel
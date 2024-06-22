import mongoose  from 'mongoose';


const EmployeeSchema = new mongoose.Schema({
  employee_id: mongoose.Types.ObjectId,
  employee_name:  String,
  designation: String,
  phone_number:  String,
});

const EmployeeModel = mongoose.model('Employees', EmployeeSchema);
export default EmployeeModel
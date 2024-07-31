import mongoose  from 'mongoose';


const EmployeeSchema = new mongoose.Schema({
  employee_id: mongoose.Types.ObjectId,
  employee_name:  {type: String, trim: true, required: true },
  designation:  {type: String, trim: true},
  phone_number:   {type: String, trim: true, required: true },
  roles: {type: [String], default: ["Employee"]},
  active: {type: Boolean, default: true},
  email: {
    type: String,
    required: [true, "Email is a required field"],
    trim: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!value) {
        throw new Error("Please enter a valid E-mail!");
      }
    },
  },
  password: {
    type: String,
    required: [true, "Password is a required field"],
    validate(value) {
      //this will always throw a validation error
      // if (!value || (value, { min: 6, max: 1000 })) {
      //   throw Error("Length of the password should be between 6-1000");
      // }         

      if (value.toLowerCase().includes("password")) {
        throw Error(
          'The password should not contain the keyword "password"!'
        );
      }
    }
  },
  //timestamps: true,
});

const EmployeeModel = mongoose.model('Employees', EmployeeSchema);
export default EmployeeModel
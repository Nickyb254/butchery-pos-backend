import mongoose  from 'mongoose';
// import { v4 as uuidv4 } from 'uuid';


const EmployeeSchema = new mongoose.Schema({
  // employee_id: mongoose.Types.ObjectId, -objectId not working well in params
  // _id: { type: String, default: uuidv4, required: true },
  employee_name:  {type: String, trim: true, required: true },
  designation:  {type: String, trim: true},
  bio:  {type: String},
  phone_number:   {type: String, trim: true, required: true },
  roles: {type: [String], default: ["Employee"]},
  active: {type: Boolean, default: false},
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
    select: true,
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

// EmployeeSchema.pre(/^find/, function(next){
//   //this keyword points to current query
//   // this.find({active: true}) //give 0 employees if created before active field
//   this.find({active: {$ne: false}})
//   next()
// })

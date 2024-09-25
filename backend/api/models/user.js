import mongoose from "mongoose";
import { v4 as uuidv4, validate } from 'uuid';
import crypto from 'crypto'

// Custom validation function in global scope
// const passwordValidator = function (value) {
//   return this.password === value;
// };

const userSchema = new mongoose.Schema({
  // user_id: { type: mongoose.Types.ObjectId, default: new mongoose.Types.ObjectId()},
    _id: { type: String, default: uuidv4, required: true },
    email: { type: String, 
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
      message: "Please enter a valid email"
      }
   },
    password: { 
      type: String, 
      required: [true, 'Please enter a password'],
      minlength: 8
    },
    refreshToken: {type: String},
    roles: {
      type: String,
      required: true,
      default: 5050
      }, 
    passwordChangedAt: {type: Date}, 
    passwordResetToken: {type: String},
    passwordResetTokenExpires: {type: Date},
  });

  userSchema.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex')//sent raw to client

  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex') //reset password in DB is hashed
  this.passwordResetTokenExpires = Date.now() + 10*60*1000

  return resetToken;
}

const userModel = mongoose.model('User', userSchema);
export default userModel;



//Custom validators are created in global scope and used like this:
    // confirmPassword: {
    //   type: String,
    //   required: [true, 'Please confirm your password'],
    //   validate: { 
    //     validator: passwordValidator,
    //     message: 'Password & confirm password do not match!'
    //   },
    //   select: false
    // },
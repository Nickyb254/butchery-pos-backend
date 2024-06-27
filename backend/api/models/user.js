import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, 
    default: new mongoose.Types.ObjectId()},
    email: { type: String, 
    required: [true, "Email required"],
    unique: true,
    validate: {
      validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
  }
   },
  password: { type: String, required: true}
});

const userModel = mongoose.model('User', userSchema);
export default userModel;
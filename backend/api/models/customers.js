import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const customerSchema = new mongoose.Schema({
  // customer_id: mongoose.Types.ObjectId,
  _id: { type: String, default: uuidv4, required: true },
  customer_name:  {type: String, required: true, unique: true, trim: true },
  customer_phone: {type: String, required: true, minLength: 10, trim: true },
  });

 const CustomerModel = mongoose.model('Customer', customerSchema);
 export default CustomerModel
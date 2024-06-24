import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  customer_id: mongoose.Types.ObjectId,
  customer_name:  {type: String, required: true, unique: true, trim: true },
  customer_phone: {type: String, required: true, minLength: 10, trim: true },
  });

 const CustomerModel = mongoose.model('Customer', customerSchema);
 export default CustomerModel
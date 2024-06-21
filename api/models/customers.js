import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  customer_id: mongoose.Types.ObjectId,
  customer_name:  String,
  customer_phone:  String,
  });

 const CustomerModel = mongoose.model('Customer', customerSchema);
 export default CustomerModel
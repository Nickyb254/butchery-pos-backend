import mongoose from 'mongoose';


const StockSchema = new mongoose.Schema({
  product_id: mongoose.Types.ObjectId,
  product_name: String,
  price:  Number,
  mass_bought:  Number,
  mass_available:  Number,
  supplier_name:  String,
  date: { type: Date, default: Date.now }
});

const stockModel = mongoose.model('Stock', StockSchema);
export default stockModel
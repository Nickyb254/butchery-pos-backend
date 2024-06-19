const mongoose = require('mongoose');
const { ObjectId } = mongoose.SchemaTypes;

const SalesSchema = new mongoose.Schema({
  product_name: { type: String },
  price: { type: Number },
  mass_sold: { type: Number },
  supplier_name: { type: String },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Sales', SalesSchema);
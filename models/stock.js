const mongoose = require('mongoose');
// const { ObjectId } = mongoose.SchemaTypes;

const StockSchema = new mongoose.Schema({
  product_name: { type: String },
  price: { type: Number },
  mass_bought: { type: Number },
  mass_available: { type: Number },
  supplier_name: { type: String },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Stock', StockSchema)
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  customer_id: {type: number},
  customer_name: {type: string},
  customer_phone: {type: string},
})

module.exports = mongoose.model('Customer', CustomerSchema)
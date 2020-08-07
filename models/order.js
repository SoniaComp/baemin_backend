const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId,
    ref: 'users'},
  location: { type: String, require: true },
  location_x: { type: mongoose.Decimal128, require: true },
  location_y: { type: mongoose.Decimal128, require: true },
  store_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'store'
  },
  created_time: { type: Date, default: Date.now },
  deleted_time: { type: Date, default: null }
});

module.exports = mongoose.model('Order', orderSchema);

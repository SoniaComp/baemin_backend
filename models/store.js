const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  location: { type: String, require: true },
  location_x: { type: mongoose.Decimal128, require: true },
  location_y: { type: mongoose.Decimal128, require: true },
  start_time: { type: String },
  end_time: { type: String },
  phone_number: { type: String },
  created_time: { type: Date, default: Date.now },
  deleted_time: { type: Date, default: null }
});

module.exports = mongoose.model('Store', storeSchema);

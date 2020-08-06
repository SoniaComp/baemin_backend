const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone_number: String,
  created_time: { type: Date, default: Date.now },
  deleted_time: { type: Date, default: null }
});

module.exports = mongoose.model('User', userSchema);
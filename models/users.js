const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone_number: { type: String, require: true },
  userType: { type: Number, default: 2 }, // 관리자 = 1, 일반 = 2
  created_time: { type: Date, default: Date.now },
  deleted_time: { type: Date, default: null }
});

module.exports = mongoose.model('User', userSchema);
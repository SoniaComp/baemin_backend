const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  // id int [pk, increment] 자동 생성
  name: { type: String, require: true }, // name char(20)
  image_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'image'
  }, // image image
  description: { type: String, require: true }, // description text
  original_price: { type: Number, require: true }, // original_price int
  discounted_price: { type: Number, default: null },// discounted_price int
  store_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'store'
  }, // store int [ref: > stores.id]
  created_time: { type: Date, default: Date.now }, // created_time datetime // mongoDB 자동
  deleted_time: { type: Date, default: null } // deleted_time datetime
});

module.exports = mongoose.model('Menu', menuSchema);

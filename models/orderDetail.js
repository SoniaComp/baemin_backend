const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order'
  },
  menu_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'store'
  },
});

module.exports = mongoose.model('OrderDetail', orderDetailSchema);

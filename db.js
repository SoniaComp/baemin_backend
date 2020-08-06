const key = require('./key.json');
const mongoose = require('mongoose');

module.exports = () => {
  function connect() {
    console.log(key.mongo.address)
    mongoose.connect(key.mongo.address,
      { useNewUrlParser: true, useUnifiedTopology: true },
      function (err) {
        if (err) {
          console.error('mongodb connection error', err);
        } else {
          console.log('mongodb connected');
        }
      });
  }
  connect();
  // mongoose.connection.on('disconnected', connect);
};
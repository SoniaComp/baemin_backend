var express = require('express');
var router = express.Router();

const User = require('../models/users');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  var user = await User.find({});
  res.json(user)
});

router.post('/', function (req, res, next) {
  var user = new User();
  user.phone_number = req.body.phone_number;
  user.created_time = Date.now();
  user.deleted_time = null

  user.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 'error' });
      return;
    }
    res.json({ result: 'success' });
  });
});

module.exports = router;

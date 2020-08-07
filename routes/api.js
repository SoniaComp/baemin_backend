var express = require('express');
var router = express.Router();

// 모델 불러오기
const Store = require('../models/store')
const Menu = require('../models/menu')
const Image = require('../models/menu')

/* GET home page. */
router.get('/store', async function (req, res, next) {
  var store = await Store.find({});
  res.json(store)
});

router.post('/store', function (req, res, next) {
  var store = new Store();
  store.name = req.body.name;
  store.location = req.body.location;
  store.location_x = req.body.location_x;
  store.location_y = req.body.location_y;
  store.start_time = req.body.start_time;
  store.end_time = req.body.end_time;
  store.phone_number = req.body.phone_number;

  store.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 'error' });
      return;
    }
    res.json({ result: 'success' });
  });
});

router.get('/store/:id', async function (req, res, next) {
  var store = await Store.findById(req.params.id);
  res.json(store)
});

router.get('/menu', async function (req, res, next) {
  var menu = await Menu.find({});
  res.json(menu)
});

router.post('/menu', function (req, res, next) {
  var menu = new Menu();
  menu.name = req.body.name; // name: { type: String, require: true }, // name char(20)
  menu.description = req.body.description; // description: { type: String, require: true }, // description text
  menu.original_price = req.body.original_price; // original_price: { type: Number, require: true }, // original_price int
  if (req.body.discounted_price) {
    menu.deiscounted_price = req.body.discounted_price
  } // discounted_price: { type: Number, default: null },// discounted_price int
  menu.store_id = req.body.store_id// store: {

  menu.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 'error' });
      return;
    }
    res.json({ result: 'success' });
  });
});

router.get('/menu/:id', async function (req, res, next) {
  var menu = await Menu.findById(req.params.id);
  res.json(menu)
});

router.get('/menu/store/:id', async function (req, res, next) {
  var menu = await Menu.find({ store_id: req.params.id });
  res.json(menu)
});

router.post('/order', function (req, res, next) {
  res.render('index', { title: 'Make a Order' });
});

router.post('/order/:id', function (req, res, next) {
  res.render('index', { title: `Order details about Order ${req.params.id}` });
});

router.get('/order/store/:id', function (req, res, next) {
  res.render('index', { title: `check store's order about Store ${req.params.id}` });
});

module.exports = router;

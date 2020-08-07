var express = require('express');
var router = express.Router();

// 모델 불러오기
const Store = require('../models/store')

/* GET home page. */
router.get('/store', function (req, res, next) {
  res.render('index', { title: 'all Stores' });
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

router.get('/store/:id', function (req, res, next) {
  res.render('index', { title: `Store id: ${req.params.id}` });
});

router.get('/menu', function (req, res, next) {
  res.render('index', { title: 'all Menus' });
});

router.post('/menu', function (req, res, next) {
  res.render('index', { title: 'all Menus' });
});

router.get('/menu/:id', function (req, res, next) {
  res.render('index', { title: `Menu id: ${req.params.id}` });
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

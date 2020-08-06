var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/store', function (req, res, next) {
  res.render('index', { title: 'all Stores' });
});

router.get('/store/:id', function (req, res, next) {
  res.render('index', { title: `Store id: ${req.params.id}` });
});

router.get('/menu', function (req, res, next) {
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

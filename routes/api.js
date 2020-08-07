var express = require('express');
var router = express.Router();

// 모델 불러오기
const Store = require('../models/store')
const Menu = require('../models/menu')
const Image = require('../models/image')
const Order = require('../models/order')
const OrderDetail = require('../models/orderDetail')

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
  menu.name = req.body.name;
  menu.description = req.body.description;
  menu.original_price = req.body.original_price;
  if (req.body.discounted_price) {
    menu.deiscounted_price = req.body.discounted_price
  }
  menu.store_id = req.body.store_id
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
  var order = new Order();
  order.user_id = req.body.user_id;
  order.location = req.body.location;
  order.location_x = req.body.location_x;
  order.location_y = req.body.location_y;
  order.store_id = req.body.store_id;

  order.save(async function (err, obj) {
    if (err) {
      console.error(err);
      res.json({ result: 'error' });
      return;
    }
    res.json({ store_id: obj.id });
  });
});

router.post('/order/detail', function (req, res, next) {
  var order_detail = new OrderDetail();
  order_detail.order_id = req.body.order_id;
  order_detail.menu_id = req.body.menu_id;
  order_detail.save(function (err) {
    if (err) {
      console.error(err);
      res.json({ result: 'error' });
      return;
    }
    res.json({ result: 'success' })
  })
})

router.get('/order', async function (req, res, next) {
  var order = await Order.find({});
  res.json(order)
});

router.get('/order/:id', async function (req, res, next) {
  var order = await Order.findById(req.params.id);
  var order_detail = await OrderDetail.find({ order_id: order.id })
  res.json({ order: order, order_detail: order_detail })
});

router.get('/order/store/:id', async function (req, res, next) {
  var order = await Order.find({ store_id: req.params.id });
  res.json(order)
});

module.exports = router;

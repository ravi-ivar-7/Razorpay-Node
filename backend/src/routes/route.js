const express = require('express');
const router = express.Router();

const { extractLimit } = require('../middlewares/rateLimiter')

const {createOrder} = require("../controllers/razorpay/create_order");
const { verifyOrder } = require('../controllers/razorpay/verify_order');
const { serverCheck } = require('../controllers/server_check');

router.get('/ping', serverCheck)

router.post('/create-order',createOrder)
router.post('/verify-order',verifyOrder)


module.exports = router;

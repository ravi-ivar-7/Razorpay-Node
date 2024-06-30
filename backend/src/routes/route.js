const express = require('express');
const router = express.Router();
const { extractLimit } = require('../middlewares/rateLimiter')

const {createOrder} = require("../controllers/razorpay/create_order");
const { verifyOrder } = require('../controllers/razorpay/verify_order');
const { testPayment } = require('../controllers/razorpay/test_payment');

router.get('/test',testPayment)
router.post('/create-order',createOrder)
router.post('/verify-order',verifyOrder)


module.exports = router;

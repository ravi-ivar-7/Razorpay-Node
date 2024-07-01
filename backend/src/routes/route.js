const express = require('express');
const router = express.Router();

const { extractLimit } = require('../middlewares/rateLimiter')

const {createOrder} = require("../controllers/razorpay/create_order");
const { verifyOrder } = require('../controllers/razorpay/verify_order');
const { serverCheck } = require('../controllers/server_check');

router.get('/', async (req,res) =>{res.status(200).json({status : "ok", ip : req.headers['x-forwarded-for'] || req.socket.remoteAddress|| req.ip, userAgent:req.headers['user-agent']})})


router.get('/ping', serverCheck)

router.post('/create-order',createOrder)
router.post('/verify-order',verifyOrder)


module.exports = router;

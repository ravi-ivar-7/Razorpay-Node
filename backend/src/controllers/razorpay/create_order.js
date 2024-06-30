require('dotenv').config({path:'../../../config/env/.env'});
const Razorpay = require("razorpay");
const { v4: uuidv4 } = require('uuid');

// Create an instance of Razorpay
const razorPayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


const createOrder = async (req, res) => {
    try {
        const params = {
            amount:100,// req.params.amount,
            currency: "INR",
            receipt: uuidv4(),
            payment_capture: "1"
        };

        const response = await razorPayInstance.orders.create(params);

        const orderDetails = {
            orderId: response.id,
            receiptId: response.receipt,
            amount: params.amount,
            currency: params.currency,
            orderDate: new Date,
            status: response.status,
        };

        return res.status(200).json({ message: "order created", orderDetails });
    }
    catch (err) {
        console.log("CREATE ORDER ERROR: ", err)
        res.status(500).send("Internal Server Error");
    }
}


module.exports ={
    createOrder
}
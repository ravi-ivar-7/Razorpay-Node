const Razorpay = require('razorpay');
const crypto = require('crypto')



const verifyOrder = async (req, res) => {
    try {
        const orderDetails = req.body.orderDetails
        const razorpay_order_id = req.body.razorpay_order_id
        const razorpay_payment_id = req.body.razorpay_payment_id
        const razorpay_signature = req.body.razorpay_signature

        if (!razorpay_order_id) {
            return res.status(209).json({ message: "Razorpay order id  (razorpay_order_id) missing." })
        }
        if (!razorpay_payment_id) {
            return res.status(209).json({ message: "Razorpay payment id (razorpay_payment_id) missing." })
        }
        if (!razorpay_signature) {
            return res.status(209).json({ message: "Razorpay signature  (razorpay_signature) missing." })
        }

        const data = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(data).digest('hex');

        if (expectedSignature === razorpay_signature) {
            const paymentDetails = {
                paymentId: razorpay_payment_id,
                signature: razorpay_signature,
                orderId: orderDetails.orderId,
                receiptId: orderDetails.receiptId,

                amount: orderDetails.amount,
                receiptId: orderDetails.receiptId,
                currency: orderDetails.currency,
                paymentDate: new Date,
            }

            return res.status(200).json({ message: "payment successed", paymentDetails })
        } else {
            return res.status(209).json({ message: "Payment verification failed. Try again!" })
        }
    }
    catch (err) {
        console.log("ERROR: ", err);
        return res.status(500).json({ error: "Internal server error" })
    }
}


module.exports ={
    verifyOrder
}
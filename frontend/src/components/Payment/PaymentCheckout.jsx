import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const PaymentCheckout = () => {
    const location = useLocation();
    const { orderDetails } = location.state || {};
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const loadScript = async (url) => {
        setLoading(true)
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handleButton = async (e) => {
        e.preventDefault();

        const options = {
            key: orderDetails.key_id,
            order_id: orderDetails.orderId,
            currency: orderDetails.currency,
            name: "Raz-Pay",
            description: "Razor Pay Transaction",
            image: "",
            handler: async function (response) {
                const responseData = {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                };

                try {
                    const paymentDetails = await axiosInstance.post("/verify-order", { responseData, orderDetails });
                    if (paymentDetails.status === 200) {
                        setLoading(false);
                        navigate('/payment-success', { state: { paymentDetails: paymentDetails.data } });
                    }
                    else{
                        setLoading(false);
                        navigate('/payment-failed',{state:{error:"payment verification failed.", orderDetails}});
                    }
                } catch (error) {
                    setLoading(false);
                    navigate('/payment-failed', { state: {error, orderDetails} });
                    console.error("ORDER VERIFICATION ERROR:", error);
                }
            },
            modal: {
                ondismiss: function () {
                    alert("Payment Failed");
                },
            },
            theme: {
                color: "#22527b",
            },
        };

        const loadScriptRes = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!loadScriptRes) {
            setLoading(false);
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        else{
            setLoading(false);
        }

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Checkout</h2>
            {orderDetails ? (
                <div style={{ marginBottom: '20px' }}>
                    <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
                    <p><strong>Amount:</strong> {orderDetails.amount}</p>
                    <p><strong>Receipt ID:</strong> {orderDetails.receiptId}</p>
                    <p><strong>Currency:</strong> {orderDetails.currency}</p>
                    <p><strong>Date:</strong> {orderDetails.orderDate}</p>
                    <p><strong>Status:</strong> {orderDetails.status}</p>
                    <button
                        onClick={handleButton}
                        disabled={loading}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                    >
                        {loading ? 'Processing...' : 'Checkout'}
                    </button>
                </div>
            ) : (
                <p style={{ textAlign: 'center' }}>No order details found.</p>
            )}
        </div>
    );
};

export default PaymentCheckout;



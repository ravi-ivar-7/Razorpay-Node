import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentFailed = () =>{
    const location = useLocation();
    const { error, orderDetails } = location.state || {};
return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Checkout</h2>
        {error ? (
            <div style={{ marginBottom: '20px' }}>
                <p><strong>Error:</strong> {error}</p>
                 <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
                <p><strong>Receipt ID:</strong> {orderDetails.receiptId}</p>
                <p><strong>Amount:</strong> {orderDetails.amount}</p>

                
            </div>
        ) : (
            <p style={{ textAlign: 'center' }}>Can't display error details.</p>
        )}
    </div>
);
}

export default PaymentFailed;
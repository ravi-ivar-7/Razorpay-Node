import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const { paymentDetails } = location.state || {};
  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Info</h2>
      {paymentDetails ? (
        <div style={{ marginBottom: '20px' }}>
          <p><strong>Payment ID:</strong> {paymentDetails.paymentId}</p>
          <p><strong>Order ID:</strong> {paymentDetails.orderId}</p>
          <p><strong>Receipt ID:</strong> {paymentDetails.receiptId}</p>
          <p><strong>Amount:</strong> {paymentDetails.amount}</p>
          <p><strong>Currency:</strong> {paymentDetails.currency}</p>
          <p><strong>Date:</strong> {paymentDetails.orderDate}</p>
          <p><strong>Status:</strong> {paymentDetails.status}</p>
        </div>
      ) : (
        <p style={{ textAlign: 'center' }}>No payment details found.</p>
      )}
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={handleButton}
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
          Go To Home Page
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

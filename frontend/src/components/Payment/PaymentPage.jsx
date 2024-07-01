import React, { useState } from 'react';


const PaymentPage = () => {
  const [loading, setLoading] = useState(false);


  const handleButton = async (e) => {
    e.preventDefault();
    setLoading(true);
    window.location.href = 'https://rzp.io/l/L6fdtMO';
    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Checkout</h2>
      <div style={{ marginBottom: '20px' }}>
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
    </div>
  );
};

export default PaymentPage;

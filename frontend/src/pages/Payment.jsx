import React from 'react';
import Navbar from '../components/Navbar';

const Payment = ({ childComponent: ChildComponent, paymentData }) => {
  return (
    <div>
      <Navbar />
      <ChildComponent paymentData={paymentData} />
    </div>
  );
};

export default Payment;


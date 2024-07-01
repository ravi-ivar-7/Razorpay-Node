import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import useToast from "../../hooks/useToast";

const PaymentInput = () => {
    const [formData, setFormData] = useState({ email: 'testing@razpay.com', amount: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { showErrorToast, showSuccessToast } = useToast();

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/payment/create-order', formData);
            const orderDetails = response.data.orderDetails;
            showSuccessToast(`Order created. Checkout to make payment.`);
            navigate('/payment-checkout', { state: { orderDetails } });
        } catch (error) {
            console.error('ORDER CREATING ERROR:', error);
            showErrorToast(`${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Before processing, remember the credentials below:</h2>
            <p>Card No: 123456787654</p>
            <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        onChange={handleFormChange}
                        disabled={loading}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="amount" style={{ display: 'block', marginBottom: '5px' }}>Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        placeholder="Enter amount"
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        onChange={handleFormChange}
                        disabled={loading}
                    />
                </div>

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default PaymentInput;
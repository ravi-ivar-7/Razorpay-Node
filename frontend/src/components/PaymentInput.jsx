import React, { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import useToast from "../hooks/useToast";

const InputForm = () => {
    const [formData, setFormData] = useState({ email: 'testing@razpay.com', amount: '' });
    const [loading, setLoading] = useState(false);

    const { showToast, showErrorToast } = useToast();

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
            const orderDetails = await axiosInstance.get('/payment/test-payment', formData);

            const message = orderDetails.data.message || 'Form submitted successfully!';
            showToast(message);

            // const paymentStatus = await axiosInstance.post("/payment/verify-order", orderDetails);


        } catch (error) {
            console.error('Error:', error);
            showErrorToast("Razorpay SDK failed to load. Are you online?");
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

export default InputForm;

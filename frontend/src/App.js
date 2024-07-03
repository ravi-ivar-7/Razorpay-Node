import './App.css';
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Payment from './pages/Payment';
import PaymentCheckout from './components/Payment/PaymentCheckout';
import PaymentInput    from './components/Payment/PaymentInput';
import PaymentSuccess  from './components/Payment/PaymentSuccess';
import PaymentFailed   from './components/Payment/PaymentFailed';
import MatomoTracker from './utils/matonoTracker';

const paymentData = {

};


function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
      <MatomoTracker/>
        <div className='pages'>
          <Routes>
            
            <Route path="/" Component={HomePage} />

            <Route path="/payment" element={<Payment childComponent={PaymentInput} paymentData={paymentData} />} />
            <Route path="/payment-checkout" element={<Payment childComponent={PaymentCheckout} paymentData={paymentData} />} />
            <Route path="/payment-success" element={<Payment childComponent={PaymentSuccess} paymentData={paymentData} />} />
            <Route path="/payment-failed" element={<Payment childComponent={PaymentFailed} paymentData={paymentData} />} />

          </Routes>
          <Analytics />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

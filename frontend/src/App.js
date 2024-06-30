import './App.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Payment from './pages/Payment';
import PaymentCheckout from './components/PaymentCheckout';
import PaymentInput from './components/PaymentInput';

const paymentData = {

};


function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path="/" Component={HomePage} />

            <Route path="/payment" element={<Payment childComponent={PaymentInput} paymentData={paymentData} />} />
            <Route path="/payment-checkout" element={<Payment childComponent={PaymentCheckout} paymentData={paymentData} />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

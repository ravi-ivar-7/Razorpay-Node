import './App.css';
import { Toaster } from 'react-hot-toast';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/Home';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path = "/" Component={HomePage} />
            <Route path = "/payment" Component={Payment} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

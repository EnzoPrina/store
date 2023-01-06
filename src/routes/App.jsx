import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/Home.jsx";
import Checkout from "../containers/Checkout.jsx";
import Success from "../containers/Success.jsx";
import Payment from "../containers/Payment.jsx";
import Information from "../containers/Information.jsx";
import NotFound from "../containers/NotFound.jsx";

import '../style/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />      
        <Route  path='/checkout' element={<Checkout />} />
        <Route  path='/checkout/information' element={<Information />} />
        <Route  path='/checkout/payment' element={<Payment />} />
        <Route  path='/checkout/success' element={<Success />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>    
  );
};

export default App;
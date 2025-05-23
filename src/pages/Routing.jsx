import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Auth/Login'
import Order from './Order/Order';
import Cart from './Cart/Cart';
import Landing from './Landing/Landing';
import Payment from './Payment/Payment';
import Result from './Results/Result';


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/category/:categoryName" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default Routing

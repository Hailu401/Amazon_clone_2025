import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Order from './Order/Order';
import Cart from './Cart/Cart';
import Landing from './Landing/Landing';
import Payment from './Payment/Payment';
import Result from './Results/Result';
import ProductDetail from './ProductDetails/ProductDetail'
import Auth from './Auth/Auth';


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing

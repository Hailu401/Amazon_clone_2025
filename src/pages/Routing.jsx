import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Order from './Order/Order';
import Cart from './Cart/Cart';
import Landing from './Landing/Landing';
import Payment from './Payment/Payment';
import Result from './Results/Result';
import ProductDetail from './ProductDetails/ProductDetail'
import Auth from './Auth/Auth';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ToastContainer, toast } from "react-toastify";
import ProtectedRoute from '../Components/ProtectedComponent/ProtectedRoute';


const Routing = () => {
  const stripePromise = loadStripe(
    "pk_test_51QBLKRLvGkkHR0PPK2GMw3mvRU1Ze8HSjIuMtdOWhz0TcTIY7v5KiXZNL4rwoDZ5kG51xJ4Ha6QhqiTvCD8su8Jr00QMDe3uws"
  );
  return (
    <>
      <div>
        {" "}
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/payment"
              element={
                <ProtectedRoute msg={"you must login/signup to pay"} redirect={"/payment"}>
                  <Elements stripe={stripePromise}>
                    <Payment />
                  </Elements>
                </ProtectedRoute>
              }
            />
            <Route path="/category/:categoryName" element={<Result />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default Routing

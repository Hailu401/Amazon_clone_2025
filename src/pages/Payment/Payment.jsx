import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import PdtCard from '../../Components/Product/PdtCard'
import { AxiosInstance } from "../../Api/axios";
import {ClipLoader} from 'react-spinners'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { useNavigate } from "react-router-dom";
import { db } from "../utilities/firebase";
import { Type } from "../utilities/actionTypes";
import { toast } from "react-toastify";


function Payment() {
  const [{user, basket}, dispatch] = useContext(DataContext);
  
  const totalItem = basket?.reduce((amount, item)=>{
    return amount + item.amount
  }, 0)
  const totalPrice = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [process, setProcess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleChng = (e) => {
    // console.log(e);
    e.error.message ? setCardError(e?.error?.message) : setCardError("");
    
  };
  const handlePymt = async(e)=>{
    e.preventDefault();

  //   //1.backend contact----> to the client secret
  try {
    const res = await AxiosInstance({
      method: "post",
      url: `/payment/create?total=${totalPrice * 100}`,
    });
    // console.log(res.data);
    setProcess(true)
    const clientSecret = res.data?.clientSecret;
    // 2.client side(react side confirmation)
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    //3.after the confirmation --->save order on firestore database and clear basket
    await db
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
      
    // set empty basket
    dispatch({
      type: Type.SET_EMPTY_BASKET,
    });
    setProcess(false);
    toast.info("you have placed new order!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
    });
   
    navigate("/orders", {
      state: {
        message: "you have placed new order",
      },
    });
  } catch (error) {
    console.log(error);
    setProcess(false)
  }

  
   }
  return (
    <Layout>
      {/* header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>Moyale</div>
            <div>Moyale, Ethiopia</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket.map((item) => (
              <PdtCard SinglePdtItem={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
            <form onSubmit={handlePymt}
                >
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card Element */}
                <CardElement onChange={handleChng} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span>
                      Total Order | <CurrencyFormat amount={totalPrice} />
                    </span>
                  </div>
                  <button type="submit">
                    {
                      process ? (
                        <div className={classes.loading}>
                          <ClipLoader color="gray" size={12}/>
                          <p>Please wait...</p>
                        </div>
                      ) : ("Pay Now" )
                    }
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;

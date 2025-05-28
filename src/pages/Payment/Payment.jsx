import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import PdtCard from '../../Components/Product/PdtCard'
import { AxiosInstance } from "../../Api/axios";
import {ClipLoader} from 'react-spinners'
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

function Payment() {
  const [{user, basket}] = useContext(DataContext)
  const totalItem = basket?.reduce((amount, item)=>{
    return amount + item.amount
  }, 0)
  const totalPrice = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const [cardError, setCardError] = useState(null);
  const [process, setProcess] = useState();
  // const stripe = useStripe();
  // const elements = useElements();
  // const navigate = useNavigate();
  const handleChng = (e) => {
    // console.log(e);
    e.error.message ? setCardError(e?.error?.message) : setCardError("");
    //  e.error? setCardError(e?.error) : setCardError("");
  };
  // const handlePymt = async(e)=>{
  //   e.preventDefault();

  //   //1.backend contact----> to the client secret

  //   try {
  //     // const response = await AxiosInstance({
  //     //   method: "POST",
  //     //   url: `/payment/create?total=${totalPrice * 100}`,
  //     // });
  //     // console.log(response.data);
  //     // setProcess(true);
  //     // const clientSecret = response.data?.clientSecret;
  //     //2.client side(react side confirmation)
  //     // const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
  //     //   payment_method: {
  //     //     card: elements.getElement(CardElement),
  //     //   },
  //     // })
  //   }
  // }
      // console.log(paymentIntent);
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
            <form 
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

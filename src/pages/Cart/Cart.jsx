import React, { useContext } from 'react'
import classes from './cart.module.css'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import PdtCard from '../../Components/Product/PdtCard'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import { Type } from '../utilities/actionTypes'
import { toast } from 'react-toastify'

const Cart = () => {
 const [{basket}, dispatch] = useContext(DataContext);
//  console.log(basket);

const total = basket.reduce((amount, item) => {
  return item.price * item.amount + amount;
}, 0);

const increment = (item) => {
  dispatch({
    type: Type.ADD_TO_BASKET,
    item,
  });
};

const decrement = (id) => {
  dispatch({
    type: Type.REMOVE_FROM_BASKET,
    id,
  });
  
  
};
  return (
    <Layout>
      <section className={classes.container}>
        {/* left side */}
        <div className={classes.cart_container}>
          <h2>Hello, Welcome</h2>

          <h3>Check your shopping basket here!</h3>

          <hr />
          {basket?.length == 0 ? (
            <div className={classes.cart_empty}>
              <p>
                Opps❗ 🙅‍♀️ <b>Your Cart is Empty</b>
              </p>
              <Link to="/">
                {" "}
                Continue Shopping 🛒
              </Link>
            </div>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_pdt}>
                  <div>
                    <PdtCard
                      key={i}
                      SinglePdtItem={item}
                      flex={true}
                      PdtDesc={false}
                      AddBtn={false}
                    />
                  </div>
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <FaPlus />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <FaMinus />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {/* right side */}
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>🎁 This order contains a big gifts</small>
            </span>
            <Link to="/payment">Proceed to Payment</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart

import React from 'react'
import classes from './Header2.module.css'
import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const Header2 = () => {
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            {/* { logo search} */}
            <div className={classes.logo_container}>
              <a href="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </a>
              {/* delivery */}
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* search */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search product" />
              <BsSearch size={25} />
            </div>

            {/* other section */}
            <div className={classes.order_container}>
              <a href="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/255px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                  alt="flag"
                />
                <select>
                  <option value="">EN</option>
                </select>
              </a>
              {/* three components */}
              <a  href="#">
                <div>
                      <p> Sign in</p>
                      <span>Account & Lists</span>
                  
                </div>
              </a>
              {/* orders */}
              <a  href="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </a>
              {/* cart */}
              <a href="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
              </a>
            </div>
          </div>
        </section>
        {/* <LowerHeader /> */}
      </section>
    </>
  )
}

export default Header2

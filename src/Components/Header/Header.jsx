import React, { useContext } from 'react'
import classes from './Header.module.css'
import { BiCart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import flag from '../../assets/images/usa_flag.png'
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { auth } from '../../pages/utilities/firebase';

const Header = () => {
  const [{basket, user}, dispatch]= useContext(DataContext);
  const total = basket?.reduce((amount, item)=>(amount + item.amount), 0)
  // console.log(total);
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            {/* { logo search} */}
            <div className={classes.logo_container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
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
              <a href="#" className={classes.language}>
                <img src={flag} alt="flag" />
                <select>
                  <option value="">EN</option>
                </select>
              </a>
              {/* three components */}
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p> Sign in</p>
                      <span>Account & Lists</span>
                    </>
                  )}

                </div>
              </Link>
              {/* orders */}
              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>
              {/* cart */}
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{total}</span>
                <p>Cart</p>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;

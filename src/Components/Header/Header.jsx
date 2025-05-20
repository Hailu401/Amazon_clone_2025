import styles from "./Header.module.css";
import logo from "../../assets/images/amazon_logo.png";
import flag from "../../assets/images/usa_flag.png";
import { IoSearch } from "react-icons/io5";
import { BiCartDownload } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";

const Header = () => {
  return (
    <section className={styles.header_section}>
      <div className={styles.header_container}>
        {/* logo */}
        <div className={styles.logo_container}>
          <div>
            <a href="/">
              <img src={logo} alt="amazon logo" />
            </a>
          </div>
          <div>
            <span><GrLocation/></span>
            <p>Delivery to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        {/* search */}
        <div className={styles.search}>
          <div>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <span>
              <IoSearch width="100px" />
            </span>
          </div>
        </div>
        {/* right side link */}
        <div className={styles.right_side_links}>
          {/* language */}
          <div>
            <img src={flag} alt="flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </div>
          {/* sign link */}
        
            <div>
              <a href="">
                <span>Hello, Sign in</span>
                <p>Account & Lists</p>
              </a>
            </div>
            {/* order */}
            <div>
              <a href="">
                <span>Returns</span>
                <p> & Orders</p>
              </a>
            </div>
            {/* cart */}
            <div>
              <a href="">
                <span>
                  <BiCartDownload />
                </span>
                <span>0</span>
                <p> Cart</p>
              </a>
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default Header;

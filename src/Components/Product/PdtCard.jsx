import React, { useContext } from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../pages/utilities/actionTypes";

const PdtCard = ({ SinglePdtItem, flex, PdtDesc, AddBtn }) => {
  // if (!SinglePdtItem) return <h2>Product Not Found!</h2>;

  const { image, title, id, rating, price, description } = SinglePdtItem;
  const [state, dispatch] = useContext(DataContext);
  // console.log(state);
  const Add_To_Cart = () => {
  
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <div >
        <Link to={`/products/${id}`}>
          <img src={image} alt=""  />
        </Link>
      </div>
      <div>
        <h3>{title}</h3>
        {PdtDesc && <div className={classes.product_desc}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.2} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {AddBtn && (
          <button className={classes.button} onClick={Add_To_Cart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default PdtCard;

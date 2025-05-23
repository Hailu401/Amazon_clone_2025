import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
const PdtCard = ({SinglePdtItem}) => {
  if (!SinglePdtItem) return null;
  const { image, title, rating, price } = SinglePdtItem;
  return (
    <div className={`${classes.card_container} `}>
      <div className={classes.img_container}>
        <a href="#">
          <img src={image} alt="" />
        </a>
      </div>
      <div>
        <h4>{title}</h4>

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

        <button className={classes.Cart_button}>add to cart</button>
      </div>
    </div>
  );
};

export default PdtCard;

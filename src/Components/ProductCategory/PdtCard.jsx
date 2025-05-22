import React from 'react'
import classes from "./Category.module.css";
const PdtCard = ({data}) => {
    const {title, image} = data
  return (
    <div className={classes.Category}>
      <a href="">
        <span>
          <h2>{title}</h2>
        </span>
        <img src={image} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default PdtCard

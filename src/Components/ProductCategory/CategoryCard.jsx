import React from 'react'
import classes from "./Category.module.css";
import { Link } from 'react-router-dom';
const CategoryCard = ({data}) => {
    const {title, image, name} = data
  return (
    <div className={classes.Category}>
      <Link to={`/category/${name}`}>
        <span>
          <h2>{title}</h2>
        </span>
        <img src={image} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard; 

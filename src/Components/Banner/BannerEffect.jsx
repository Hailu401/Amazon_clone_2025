import React from 'react'
import classes from './Banner.module.css'
import { Carousel } from "react-responsive-carousel";
import {img} from '../../assets/images/img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const BannerEffect = () => {
  return (
    <div className={classes.banner}>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
      >
        {img?.map((image, i) => {
          return <img src={image} alt="banner" key={i}/>;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default BannerEffect

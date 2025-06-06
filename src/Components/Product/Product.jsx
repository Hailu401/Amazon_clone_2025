import React, { useEffect, useState } from 'react'
import classes from './Product.module.css'
import axios from 'axios';
import PdtCard from './PdtCard';
import { BaseUrl } from '../../Api/EndPoint';
import Loader from '../Loader/Loader';
const Product = () => {
    const [product, setProduct] = useState();
    const [isloading, setisLoading] = useState()

    useEffect(()=>{
            try {
                setisLoading(true)
                axios
                  .get(`${BaseUrl}//products`)
                  .then((response) => setProduct(response.data));
              
                setisLoading(false);
            } catch (error) {
                console.log('server error response>>>', error);
                setisLoading(false);
            }
    },[])


  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        
          <section className={classes.Allproduct_container}>
            {product?.map((pdtItem) => {
              return <PdtCard SinglePdtItem={pdtItem} key={pdtItem.id} AddBtn={true} />;
            })}
          </section>
       
      )}
    </>
  );
}

export default Product

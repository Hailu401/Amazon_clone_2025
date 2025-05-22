import React, { useEffect, useState } from 'react'
import classes from './Product.module.css'
import axios from 'axios';
import PdtCard from './PdtCard';
const Product = () => {
    const [product, setProduct] = useState();

    useEffect(()=>{
        const fetch = async ()=>{
            try {
                const request = await axios.get(
                  "https://fakestoreapi.com/products"
                );
                setProduct(request.data);
            } catch (error) {
                console.log('server error response>>>', error);
            }
        }
         fetch();
    },[])


  return (
    <div className={classes.Allproduct_section}>
      <div className={classes.Allproduct_container}>
        {product?.map((pdtItem) => {
          return <PdtCard SinglePdtItem={pdtItem} key={pdtItem.id} />;
        })}
      </div>
    </div>
  );
}

export default Product

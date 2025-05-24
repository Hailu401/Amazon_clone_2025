import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout';
import axios from 'axios';
import { BaseUrl } from '../../Api/EndPoint';
import { useParams } from 'react-router-dom';
import PdtCard from '../../Components/Product/PdtCard';
import Loader from '../../Components/Loader/Loader';


const ProductDetail = () => {
  const [product, setProductDetail] = useState([]);
  const[isloading, setisLoading] = useState(false);
  const{productId} = useParams();
  useEffect(()=>{
    try {
      setisLoading(true);
      axios.get(`${BaseUrl}/products/${productId}`).then((res)=>{
        setProductDetail(res.data);
        setisLoading(false);
      })
     
    } catch (error) {
      console.log('something went wrong', error);
      setisLoading(false);
    }

   
    
  }, [])
  console.log(product);
  return (
    <div>
      <Layout>
        {isloading ? (
          <Loader />
        ) : (
          <PdtCard SinglePdtItem={product} flex={true} PdtDesc={true} />
        )}
      </Layout>
    </div>
  );
}

export default ProductDetail;

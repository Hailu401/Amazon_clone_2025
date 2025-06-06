import  { useEffect, useState } from "react";
import classes from "./Result.module.css";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../../src/Api/EndPoint";
import PdtCard from "../../Components/Product/PdtCard";
import Loader from "../../Components/Loader/Loader";

const Result = () => {
  const [ProductItem, setProductItem] = useState([]);
  const[isloading, setisLoading] = useState()
  const { categoryName } = useParams();
  useEffect(() => {
  
      try {
        setisLoading(true);
        axios.get(`${BaseUrl}/products/category/${categoryName}`).then((res)=>(setProductItem(res.data)))
          setisLoading(false);
      } catch (error) {
        console.log("there is a fetching error>>>>", error);
        setisLoading(false);
      }
  }, []);
  // console.log(ProductItem);
  return (
    <div>
      <Layout>
          <section className={classes.result_section}>
            <h1 style={{ padding: "30px" }}>Results</h1>
            <h3 style={{ padding: "30px" }}>Category/{categoryName}</h3>
            <hr />
            {isloading ? (
              <Loader />
            ) : (
              <div className={classes.product_container}>
                {ProductItem?.map((product) => (
                  <PdtCard
                    key={product.id}
                    SinglePdtItem={product}
                    AddBtn={true}
                  />
                ))}
              </div>
            )}
          </section>
        
      </Layout>
    </div>
  );
};

export default Result;

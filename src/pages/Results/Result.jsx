import React, { useEffect, useState } from "react";
import classes from "./Result.module.css";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../../src/Api/EndPoint";
import PdtCard from "../../Components/Product/PdtCard";

const Result = () => {
  const [ProductItem, setProductItem] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    // const fetch = async () => {
    //   try {
    //     const item = await axios.get(
    //       `${BaseUrl}/products/category/${categoryName}`
    //     );
    //     setProductItem(item.data);
    //   } catch (error) {
    //     console.log("there is a fetching error>>>>", error);
    //   }
    // };
    // fetch();

    axios.get(`${BaseUrl}/products/category/${categoryName}`).then((res)=>{
        return setProductItem(res.data)
    }).catch((err)=>{
        console.log("there is a fetching error>>>>", err);
    })
  }, []);
  console.log(ProductItem);
  return (
    <div>
      <Layout>
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category/{categoryName}</p>
          <hr />
          <div className={classes.product_container}>
            {ProductItem?.map((product) => (
              <PdtCard key={product.id} SinglePdtItem={product} />
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Result;

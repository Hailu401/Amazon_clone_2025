import classes from "./Category.module.css";
import { pdtcatagoryInfos } from "./CategoryData";
import PdtCard from "./CategoryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../Api/EndPoint";

const PdtCategory = () => {

  return (
    <section className={classes.Catagory_section}>
      <div className={classes.Category_container}>
        {pdtcatagoryInfos.map((info, i) => {
          return <PdtCard data={info} key={i}/>;
        })}
      </div>
    </section>
  );
};

export default PdtCategory;

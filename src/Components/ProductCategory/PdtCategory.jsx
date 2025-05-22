
import classes from "./Category.module.css";
import { pdtcatagoryInfos } from "./CategoryData";
import PdtCard from "./PdtCard";

const PdtCategory = () => {
  return (
    <section className={classes.Catagory_section}>
      <div className={classes.Category_container}>
        {pdtcatagoryInfos.map((info, i) => {
          return <PdtCard data={info} key={i} />;
        })}
      </div>
    </section>
  );
};

export default PdtCategory;

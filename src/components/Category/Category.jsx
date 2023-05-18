import "./Category.css";
import { ELeftside } from "../Category/ELeftside";
import { ETop } from "./ETop";
import { ERightside } from "./ERightside";

const Category = () => {
  return (
    <div className="WholePage">
      <ETop /> 
      <div className="Category">
        <ELeftside />
        <ERightside/>
      </div>
    </div>
  );
};

export default Category;

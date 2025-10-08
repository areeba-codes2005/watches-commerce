import "./Product.css";
import ProductGrid from "./ProductGrid";
import FeaProductGrid from "../FeaProduct/FeaProductGrid";

const ProductPage = ({ type, ...props }) => {
  return (
    <div>
      {type === "best" && <ProductGrid {...props} />}
      {type === "featured" && <FeaProductGrid {...props} />}
    </div>
  );
};

export default ProductPage;

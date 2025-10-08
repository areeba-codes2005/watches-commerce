import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { menuItems } from "../data/navitems";
import Footer from "../Footer/Footer";
import ProductDetails from "./ProductDetails";

function ProductDetailsPage({ product }) {
  return (
    <>
      <Header />
      <Navbar menuItems={menuItems} />

      <ProductDetails product={product} />
      <Footer />
    </>
  );
}
export default ProductDetailsPage;

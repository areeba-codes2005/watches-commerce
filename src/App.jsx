import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import { menuItems } from "./components/data/navitems";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProductPage from "./components/Product/ProductPage";
import { BestProductData, FeaProductData } from "./components/data/ProductData";
import LightGal from "./components/LightGal/LightGal";
import Footer from "./components/Footer/Footer";
import ProductDetailsPage from "./components/ProductDetails/ProductDetailsPage";
import ProDeData from "./components/data/ProDeData";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar menuItems={menuItems} />
              <Carousel />
              <ProductPage
                type="best"
                title="BEST SELLERS"
                showFilters={true}
                data={BestProductData}
                colClasses="col-12 col-md col-lg"
              />
              <Banner />
              <ProductPage
                type="featured"
                title="FEATURED PRODUCTS"
                showFilters={false}
                data={FeaProductData}
              />
              <LightGal />
              <Footer />
            </>
          }
        />
        <Route
          path="/product"
          element={<ProductDetailsPage product={ProDeData} />}
        />
      </Routes>
    </>
  );
}

export default App;

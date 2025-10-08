import React, { useState } from "react";
import ProductCard from "../Product/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import feabanimg from "../../assets/feabanimg.jpg";
import "./FeaProduct.css";

const ProductGrid = ({ title, showFilters = true, data = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("Watches");
  const categories = ["Watches", "Men's", "Ladies", "Smartwatches"];

  const filteredProducts = data.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <div className="container-fluid product-section fea-sec">
        <h1 className="section-title fea-title">{title}</h1>
        <div className="cus-row">
          {showFilters && (
            <div className="filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
          <div
            className="feabancol"
            style={{ backgroundImage: `url(${feabanimg})` }}
          >
            <span>NOVEMBER HOT DEAL</span>
            <h2>CLEARANCE</h2>
            <span>Instock</span>
          </div>
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="product-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  Image={product.Image}
                  CardName={product.CardName}
                  ProductName={product.ProductName}
                  Price={product.Price}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
